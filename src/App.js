import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import { useState } from 'react';

function App() {

  const tasksList = [
    {   
        id: 1,
        text: "Doctor's Appt.",
        day: "Feb 5 @2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "School Meeting",
        day: "Feb 6 @1:30pm",
        reminder: true
    },
    {
        id: 3,
        text: "Shopping",
        day: "Feb 5 @3:30pm",
        reminder: true
    }
  ] // sample data to work with for our app

  /* Using useState */
  const [displayAddTask, setDisplayAddTask] = useState(false) 

  // const [ tasks, setTasks ] = useState(tasksList) // working with sample data
  const [ tasks, setTasks ]= useState(tasksList) // working with json data ("fake" backend)
  

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id));
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map( (task) => task.id === id ? 
      { ...task, reminder: !task.reminder} : task)) 
      //change property if id matches and return task object, else just return the unchanged task object
  } /* The "...task" spread operator is to copy/keep-same all of the task's other properties/attributes,
       since we're only changing one attribute, which is reminder */


  //Add Task
  const addTask = (task) => {
    //generate Id to add Id
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task} //add id attribute to the task
    setTasks([...tasks, newTask]) //add new task to the list of tasks
  }

  return (
    <div className="container">
      <Header onToggleAddTask = { () => setDisplayAddTask(!displayAddTask) }
        displayAddTask={displayAddTask}/>
      
      {displayAddTask ? <AddTask onAdd={addTask}/> : null }
      
      { tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
        : "No Tasks To Show"
      } 
    </div>
  );
}

export default App;
