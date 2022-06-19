import React from "react"
import List from "./components/List"
import {nameList} from "./listArray"

// console.log(nameList);

export default function App() {
    const names = nameList.map(name => {
        return (<List 
            key={name}
            name={name}
        />)
    })
    return (
        <ul>
            {names}
        </ul>
        
    )
}