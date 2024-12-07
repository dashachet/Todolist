import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	changeFilter: (filter: FilterValuesType) => void
	addTask: (title: string) => void
	changeIsDone: (taskId: string, isDone: boolean ) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask, changeIsDone}: PropsType) => {
	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null);
	const [filter, setFilter] = useState('all')

	const addTaskHandler = () => {
		if (taskTitle.trim()){
			addTask(taskTitle.trim())
			setTaskTitle('')
		} else {
			setError('This is not valid!');
		}

	}

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setError(null)
		setTaskTitle(event.currentTarget.value)
	}

	const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			addTaskHandler()
		}
	}

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(filter)
		setFilter(filter)
	}

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input
					className={error ? 'error': ''}
					value={taskTitle}
					onChange={changeTaskTitleHandler}
					onKeyUp={addTaskOnKeyUpHandler}
				/>
				<Button title={'+'} onClick={addTaskHandler}/>
				{ error && <h4 className={'errorMessage'}></h4>}
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {

							const removeTaskHandler = () => {
								removeTask(task.id)
							}
							const onChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
								changeIsDone(task.id, e.currentTarget.checked)

							}

							return <li key={task.id} className={task.isDone ? 'isDone' : ''}>
								<input type="checkbox" checked={task.isDone} onChange={onChangeHandler}/>
								<span>{task.title}</span>
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>
			}
			<div>
				<Button title={'All'} className={filter === 'all' ? 'activeFilter' : ''} onClick={()=> changeFilterTasksHandler('all')}/>
				<Button title={'Active'}  className={filter === 'active' ? 'activeFilter' : ''} onClick={()=> changeFilterTasksHandler('active')}/>
				<Button title={'Completed'} className={filter === 'completed' ? 'activeFilter' : ''} onClick={()=> changeFilterTasksHandler('completed')}/>
			</div>
		</div>
	)
}
