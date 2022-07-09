import React from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import './TaskSearch.css';

function TaskSearch(){
    const {searchValue,setSearchValue} = React.useContext(TaskContext);

    const onSearchValueChange =(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };
    return(
        <input 
        className="TaskSearch" 
        placeholder="Escribe la tarea que quieres buscar"
        value={searchValue}
        onChange={onSearchValueChange}
        /> 
        
    );
}

export {TaskSearch};