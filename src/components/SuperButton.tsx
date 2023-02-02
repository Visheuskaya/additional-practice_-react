import React from 'react';

type PropsType = {
    title: string
    callback: () => void
}


export const SuperButton = (props: PropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    )
}