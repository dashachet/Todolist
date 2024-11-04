import React, { useState } from 'react';
import './App.css';
import {  Todolist } from './Todolist'

export type FilterTypes = 'All' | 'Completed' | 'Active'

function App() {




    let [tasks, setTasks] = useState ( [
        {id: 1, title: 'HTML&CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'RTK query', isDone: false },
    ] )

    // const[valueForFilter, setValueForFilter] = useState ('All'
    //
    // )


        const removeTask = (taskId: number) => {
            // tasks=tasks.filter((el)=>el.Id!==taskId)
            // setTasks(tasks)
        // console.log('Hello');

            setTasks(tasks.filter((el) => el.id !== taskId))
    }

    // const filteredTasks= (filterValue: FilterTypes) => {
    //     // if (filterValue === 'All' ) return setTasks(tasks)
    //     // if (filterValue === 'Active') return setTasks(tasks.filter((el) =>!el.isDone))
    //     // if (filterValue === 'Completed') return setTasks(tasks.filter((el) =>el.isDone))
    //     // console.log(filterValue)
    //     setValueForFilter(filterValue)
    //
    // }
    //
    //  let Filter = tasks
    // if (valueForFilter === 'All' ) Filter = tasks.filter((el) =>!el.isDone)
    // if (valueForFilter === 'Completed') Filter = tasks.filter((el) =>el.isDone)
    return (
        
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

export default App;
