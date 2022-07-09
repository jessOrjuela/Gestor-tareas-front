import React from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import './TaskCounter.css'


function TaskCounter(){
const {totalTasks,completedTasks} = React.useContext(TaskContext);
    return(
        <h2 className="TaskCounter" >
            Has completado {completedTasks} de {totalTasks} tareas
        </h2>
    );
}

export {TaskCounter};