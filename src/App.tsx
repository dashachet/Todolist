
import React, {MouseEvent} from 'react';
import './App.css';
import { Button } from './Button';
import { Buttonn } from './components/Button';


function App() {


    const Button1Foo = (subscriber: string, age: number) =>
    {
        console.log(subscriber);

    }
    const Button2Foo = () => {
        console.log('Im ivan');
    }
    return (
        <div className="App">
            <Buttonn  name={"My first youtube chanel"} callBack={()=>Button1Foo('Vasya', 21)}/>
            <Buttonn name={"My second youtube chanel"} callBack={Button2Foo}/>
        </div>
    );
}

export default App; 
