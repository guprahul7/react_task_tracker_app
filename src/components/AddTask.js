import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault(); //prevents it from submitting to a (new) page
        
        //Input validation in case of empty/invalid inputs in field
        if (!text) {
            alert("Please add a task") //browser alert to user, like a warning
            return
        }
        if (!day) {
            setDay("no due date")
        }
        
        onAdd({text, day, reminder}) //call the add function to add the task

        // Clear/Reset the fields of the form
        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" 
                    value={text} onChange={ (e) => setText(e.target.value) } />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" 
                    value={day} onChange={ (e) => setDay(e.target.value) } />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                    checked={reminder} 
                    value={reminder} onChange={ (e) => setReminder(e.currentTarget.checked) }/>
            </div>
            <input type="submit" value="Save Task" 
                className="btn btn-block"/>
        </form>
    )
}

export default AddTask;

// <input type="text" placeholder="Add Task" />