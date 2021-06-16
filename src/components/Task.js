import React from 'react'

//npm i react-icons (for react fonts - basically using icons as react components)
import { FaTimes } from 'react-icons/fa' //FaTimes is our "x" icon, (fa = font-awesome)

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : "" }`} 
            onDoubleClick={ () => onToggle(task.id) }>
            <h3>
                {task.text} 
                <FaTimes style={{ color:"red", cursor:"pointer" }} 
                    onClick={ () => onDelete(task.id) } /> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
 

export default Task;