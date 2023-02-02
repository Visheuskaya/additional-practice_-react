import React, {ChangeEvent} from 'react';

type InputType = {
    setInput: (input: string) => void
    input: string
}
export const SuperInput = (props: InputType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setInput(event.currentTarget.value)
    }
    return (
        <input value = {props.input} onChange={onChangeHandler}/>
    )
}