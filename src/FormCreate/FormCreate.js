import React from "react";
import './FormCreate.css';
import { TaskContext } from "../TaskContext/TaskContext";

function FormCreate(){
    const [newTasksValue,setNewTaskValue] = React.useState('');
    const {addTask,setOpenModal} = React.useContext(TaskContext);

    const onSubmit=(event)=>{
        event.preventDefault();
        addTask(newTasksValue);
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTaskValue('')
    };
    const onChange=(event)=>{
        setNewTaskValue(event.target.value);
    };
    const onCancel=()=>{
        setOpenModal(false);
    };
  
      return (
          <form onSubmit={onSubmit}>
              <label>Crea una nueva tarea</label>
              <textarea 
              value={newTasksValue}
              onChange={onChange}
              placeholder="Escribe una tarea"/>

              <div className="FormCreate-buttonContainer">
                  <button 
                  type="button" 
                  className="FormCreate-button FormCreate-button-cancel"
                  onClick = {onCancel}>
                      Cancelar
                  </button>
                  <button type="submit" className="FormCreate-button FormCreate-button-add">
                      Añadir
                  </button>
              </div>
          </form>
      );
    }
    
export {FormCreate};