import React from "react";
import './CreateTask.css';

function CreateTask(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
      };
      
      return (
        <button
          className="CreateTask"
          onClick={onClickButton}
        >
          +
        </button>
      );
    }
    
export {CreateTask};