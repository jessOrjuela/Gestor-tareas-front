import React from "react";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { TaskSearch } from "../TaskSearch/TaskSearch";
import { TaskList } from "../TaskList/TaskList";
import { TaskItem } from "../TaskItem/TaskItem";
import { CreateTask } from "../CreateTask/CreateTask";
import { TaskContext} from "../TaskContext/TaskContext";
import { Modal } from "../Modal/modal";
import { FormCreate } from "../FormCreate/FormCreate";

function AppUI() {
    const {
        error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
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
            {!!openModal && (
				<Modal>
					<FormCreate />
				</Modal>
			)}
			<CreateTask setOpenModal={setOpenModal} />
		</React.Fragment>
	);

}
export {AppUI};