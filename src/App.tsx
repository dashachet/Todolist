import React from 'react';
import './App.css';
import { Task, Todolist } from './Todolist';

function App() {
    const header1="What to learn-1";
    const header2="What to learn-2";

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true}, //0
        {id: 2, title: 'JS', isDone: true}, //1
        {id: 3, title: 'ReactJS', isDone: false} //2
    ]

    // const tasks2: Task[] = [
    //     {id: 1, title: 'Hello world!', isDone: true}, //0
    //     {id: 2, title: 'I am happy', isDone: false}, //1
    //     {id: 3, title: 'Yo', isDone: true } //2
    // ]



    return (
        <div className="App">
            <Todolist title={header1} tasks={tasks1}/> 
    
        </div>
    );
}

export default App;
