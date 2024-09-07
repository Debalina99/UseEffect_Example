import React, { useState, useEffect } from 'react';

export default function UseEffectExample() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [datacopy, setDatacopy] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => { setList(data); setDatacopy(data) })
            .catch(error => console.error(error))
    }, [])
    const inputHandler = (e, ind) => {
        let res = [...list];
        res[ind].completed = e.target.checked;
        setList(res);
    }
    const searchEvent = (e) => {
        setSearch(e.target.value);
        if (e.target.value) {
            let res = list.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setList(res);
        } else {
            setList(datacopy);
        }
    }
    return (
        <div>
            <h3>UseEffect Example</h3>
            <input type="text" value={search} onChange={searchEvent}></input>
            {list.map((item, ind) => (
                <div>
                    <input type="checkbox" onChange={(e) => inputHandler(e, ind)} checked={item.completed} /><span key={item.id} >{item.title}</span>
                </div>
            ))}
        </div>
    )
}