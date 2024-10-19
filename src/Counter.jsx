import { useState } from "react"

export default function Counter(){

const [counter, setCounter]= useState(0);

const ClickedForCounter=()=>{
    const plus = counter +1;
    setCounter(plus)
}

const ClickedForMinus=()=>{
    const minus = counter-1;
    setCounter(minus);
}
    const ClassDisplay={
        border:'2px solid purple',
        padding:'15px',
        margin:'10px',
        borderRadius:'16px',
        gap:'10px',
    }
    const btn = {
        backgroundColor:'tomato',
        width:'150px',
        height:'50px',
        borderRadius:'16px',
        color:'white',

    }

    return(
        <div style={ClassDisplay}>
            <h3>Counter:{counter} </h3>
            <button style={btn} onClick={ClickedForCounter}>Clicked For Plus</button>
            <button style={btn} onClick={ClickedForMinus}>Clicked For Minus</button>
        </div>
    )
}