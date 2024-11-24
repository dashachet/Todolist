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

    const taskFilter = () => {

        let Filter = tasks
        if (valueForFilter === 'Active' ) Filter = tasks.filter((el) =>!el.isDone)
        if (valueForFilter === 'Completed') Filter = tasks.filter((el) =>el.isDone)
        return Filter
    }

    const Massive = taskFilter()




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
                    <Button title={'X'} onClick={() => removeTask(task.id)}/>
                    <input type="checkbox" checked={task.isDone} /> 
                    <span>{task.title}</span></li>  )
                })
                
            
            }
            </ul>
            <div>
                <Button title={'All'} onClick={() => filteredTasks('All')}/>
                <Button title={'Completed'} onClick={() => filteredTasks('Completed')}/>
                <Button title={'Active'} onClick={() => filteredTasks('Active')}/>
            </div>
        </div>
    )
}