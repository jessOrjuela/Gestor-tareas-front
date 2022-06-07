import React from "react";
import { TaskCounter } from "./TaskCounter";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { CreateTask } from "./CreateTask";
import { TaskContext} from "./TaskContext";
import{Modal} from "./Modal/modal";

function AppUI() {
    const {
        error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask,
    } = React.useContext(TaskContext);
    return (
        <React.Fragment>

        <TaskCounter/>
        <TaskSearch/>

                <TaskList>
                {error && <p>Error...</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedTasks.length) && <p>Crea tu primera tarea...</p>}
    
                {searchedTasks.map(task => (
                    <TaskItem 
                        key={task.text} 
                        text={task.text}
                        completed={task.completed}
                        onComplete = {()=> completeTask(task.text)}                                                
                        onDelete= {()=> deleteTask(task.text)}
                    />
                ))}
    
            </TaskList>

<Modal>
    <p>Holaaaaa</p>
</Modal>
        <CreateTask/>
        </React.Fragment>
    );
    

}
export {AppUI};