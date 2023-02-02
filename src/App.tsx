import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {UniversalButton} from "./MikroTasks/UniversalButton";




function App() {
    const Button1Foo =(name: string) => {
        console.log(name)
 }
    const Button2Foo =(name: string) => {
        console.log(name)
    }
    const Button3Foo = () => {
        console.log('Im stupid button')
    }
    return (
        <div className="App">
            <UniversalButton title={'My Youtube chanel 1'} callBack = {() => Button1Foo (' Im Ivan')}/>
            <UniversalButton title={'My Youtube chanel 2'} callBack = {() => Button2Foo('Vasya')}/>
            <UniversalButton title={'Button 3'} callBack = {Button3Foo}/>

        </div>
    );
}

export default App;
