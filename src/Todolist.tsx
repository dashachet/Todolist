import React  from "react";
import { Button } from "./Button";

type ListPropsType= {
    title: string,
    tasks: Task[],  // Array<Task>
    removeTask: (taskId: number) => void,
    filteredTasks: ()=> void;
}

export type Task = {  // экспорт для проверки типизации
    id: number, 
    title: string, 
    isDone:  boolean
}

export const Todolist = ({title, tasks}:ListPropsType) => {
    const tittle = {title}.title // вместо {props.title}
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
                :tasks.map((task) =>{
                return (
                <li key={task.id}>
                    <button onClick={()=> removeTask(taskId)}>X</button>
                    <input type="checkbox" checked={task.isDone} /> 
                    <span>{task.title}</span></li>  )
                })
                
            
            }
            </ul>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            
            </div>
        </div>
    )
}