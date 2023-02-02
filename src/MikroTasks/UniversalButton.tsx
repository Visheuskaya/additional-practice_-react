import React from 'react';

type UniversalButtonType = {
    title: string
    callBack: () => void
}
export const UniversalButton = (props: UniversalButtonType) => {
    const onCLickHundler = () => {
       props.callBack()
    }
    return(
        <button onClick = {onCLickHundler}>{props.title}</button>
    )

}