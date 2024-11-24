import React, { useState } from 'react';
import './App.css';
import {  Todolist } from './Todolist'

export type FilterTypes = 'All' | 'Completed' | 'Active'

function App() {




    let [tasks, setTasks] = useState ( [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        { id:  v1(), title: 'JS', isDone: true },
        { id:  v1(), title: 'ReactJS', isDone: false },
        { id:  v1(), title: 'Redux', isDone: false },
        { id:  v1(), title: 'Typescript', isDone: false },
        { id:  v1(), title: 'RTK query', isDone: false },
    ] )


        const removeTask = (taskId: number) => {

            setTasks(tasks.filter((el) => el.id !== taskId))
    }

    return (
        
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

export default App;
