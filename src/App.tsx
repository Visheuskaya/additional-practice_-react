import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";


type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [data, setData] = useState<PropsType[]>([])
    const [input, setInput] = useState<string>('')
    console.log(data)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }
    const removeData = () => {
        setData([])
    }
    const addNewData = () => {
        const newData = {userId: 666, id: data.length +1, title: input,completed: false}
        setData([newData,...data])
        setInput('')
    }
    //у useEffect есть 3 режима работы
    return (
        <div className="App">
            <div>
                <SuperInput setInput={setInput} input={input}/>
                <SuperButton title={'Add new title'} callback={addNewData}/>
            </div>
            <div>
                <SuperButton title={'Show me data'} callback={getData}/>
                <SuperButton title={'Remove data'} callback={removeData}/>
            </div>
            <ul>
                {data.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}.</span>
                            <span>{el.title}</span>
                            < input type={'checkbox'} checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
