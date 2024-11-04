import React, {useState} from "react";
import { Button } from "./Button";
import {FilterTypes} from "./App";

type ListPropsType= {
    title: string
    tasks: Task[]  // Array<Task>
    removeTask: (taskId: number) => void
    // filteredTasks: (filterValue: FilterTypes)=> void
}

export type Task = {  // экспорт для проверки типизации
    id: number, 
    title: string, 
    isDone:  boolean
}

export const Todolist = ({title, tasks, removeTask}:ListPropsType) => {


    const tittle = {title}.title // вместо {props.title}

    const[valueForFilter, setValueForFilter] = useState ('All')

    const filteredTasks= (filterValue: FilterTypes) => {setValueForFilter(filterValue)}

    const TaskFilter = () => {

        let Filter = tasks
        if (valueForFilter === 'Active' ) Filter = tasks.filter((el) =>!el.isDone)
        if (valueForFilter === 'Completed') Filter = tasks.filter((el) =>el.isDone)
        return Filter
    }

    const Massive = TaskFilter()




    return (
        <div>
            <h3>{tittle}</h3>
            <div>
                <input />
                <Button title={"+"} />
            </div>
            <ul>
                
                {!tasks.length
                ? <div>EMPTY</div>
                :Massive.map((task) =>{
                return (
                <li key={task.id}>
                    <button onClick={() => removeTask(task.id)}>X</button>
                    <input type="checkbox" checked={task.isDone} /> 
                    <span>{task.title}</span></li>  )
                })
                
            
            }
            </ul>
            <div>
                <button onClick={() => filteredTasks('All')}>All</button>
                <button onClick={() => filteredTasks('Completed')}>Completed</button>
                <button onClick={() => filteredTasks('Active')}>Active</button>
                {/*<Button title={"All"}/>*/}
                {/*<Button title={"Active"}/>*/}
                {/*<Button title={"Completed"}/>*/}

            </div>
        </div>
    )
}