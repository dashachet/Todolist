import React, { useState } from 'react';
import './App.css';
import { Task, Todolist } from './Todolist';

function App() {
    let [tasks, setTasks]: Array<Task> = useState ( [
        {id: 1, title: 'HTML&CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'RTK query', isDone: false },
    ] )

        const removeTask = (taskId: number) => {
            tasks=tasks.filter((el)=>el.Id!==taskId)
            setTasks
        // console.log('Hello');
    }

    const filteredTasks () => {
        console.log('1111')

    }

    }
    return (
        
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} filteredTasks={filteredTasks}>
        </div>
    );
}

export default App;
