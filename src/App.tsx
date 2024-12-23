import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type TodolistType = {
	id: string
	title: string
	filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

	let todolistID1 = v1()
	let todolistID2 = v1()

	let [todolists, setTodolists] = useState<TodolistType[]>([
		{ id: todolistID1, title: 'What to learn', filter: 'all' },
		{ id: todolistID2, title: 'What to buy', filter: 'all' },
	])

	let [tasks, setTasks] = useState({
		[todolistID1]: [
			{ id: v1(), title: 'HTML&CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'ReactJS', isDone: false },
		],
		[todolistID2]: [
			{ id: v1(), title: 'Rest API', isDone: true },
			{ id: v1(), title: 'GraphQL', isDone: false },
		],
	})

	// const [filter, setFilter] = useState<FilterValuesType>('all')

	const removeTask = (todolistID: string, taskId: string) => {
		setTasks({...tasks,[todolistID]:tasks[todolistID].filter(el=> el.id !== taskId) })
	}
	const removeTaskTitle=(todolistID: string)=> {
	setTodolists(todolists.filter(el=> el.id !== todolistID))
		delete tasks[todolistID]
		setTasks({...tasks})
	}

	const addTask = (todolisId: string,title: string) => {
		const newTask = {
			id: v1(),
			title: title,
			isDone: false
		}
		setTasks({...tasks, [todolisId]: [...tasks[todolisId], newTask]})
		// const newTasks = [newTask, ...tasks]
		// // setTasks(newTasks)
	}

	const changeFilter = (todolistID: string, newfilter: FilterValuesType) => {
		// const currentTodo= todolists.find(el => el.id === todolistID)
		// if (currentTodo) {
		// 	currentTodo.filter =newfilter
		// 	setTodolists([...todolists])
		//
		// }
		setTodolists(todolists.map(el=> el.id === todolistID ? {...el,filter:newfilter} : el))
		// setFilter(filter)
	}

	const changeTaskStatus = (todolistID: string,taskId: string, taskStatus: boolean) => {

		setTasks({...tasks, [todolistID]:  tasks[todolistID].map(el=>el.id == taskId ? {...el, isDone: taskStatus} : el)})
	}


	const arr = [ {
		title: "What to learn-1"
	},
		{
			title: "What to learn-2"
		},
		{
			title: "What to learn-3"
		}
	]

	return (
		<div className="App">
			{todolists.map(el=> {
				let tasksForTodolist = tasks[el.id]
				if (el.filter === 'active') {
					tasksForTodolist = tasks[el.id].filter(task => !task.isDone)
				}

				if (el.filter === 'completed') {
					tasksForTodolist = tasks[el.id].filter(task => task.isDone)
				}
				return	<Todolist
					removeTaskTitle={removeTaskTitle}
					key={el.id}
					todolistID={el.id}
					title={el.title}
					tasks={tasksForTodolist}
					removeTask={removeTask}
					changeFilter={changeFilter}
					addTask={addTask}
					changeTaskStatus={changeTaskStatus}
					filter={el.filter}
				/>
			})}

		</div>
	);
}

export default App;
