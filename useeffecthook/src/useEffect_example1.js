import React, { useState, useEffect } from 'react';

export default function UseEffectExample1() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("Without Dependency");
    }) //the effect will run on every render
    useEffect(() => {
        console.log("With Empty Dependency");
    }, []) //the effect will run once, when the component mounts or on the initial render
    useEffect(() => {
        console.log("Dependency with values");
    }, [counter]) //the effect will run whenever the value in the array change

    const clickHandler = () => {
        setCounter((prev) => prev + 1)
    }
    return (
        <div>
            <h3>UseEffect Example</h3>
            <h4>{counter}</h4>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}