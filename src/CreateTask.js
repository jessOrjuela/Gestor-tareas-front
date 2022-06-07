import React from "react";
import './CreateTask.css'

function CreateTask(props){
    const onClickButton = (msg) => {
        alert(msg);
      };
      
      return (
        <button
          className="CreateTask"
          onClick={() => onClickButton('Aquí se debería abrir el modal')}
        >
          +
        </button>
      );
    }
    
export {CreateTask};