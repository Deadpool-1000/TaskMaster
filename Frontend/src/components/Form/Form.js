import React,{useState} from 'react';
import Task from '../TaskList/Task';
import InputForm from './InputForm';
import classes from './Form.module.css'

function Form() {
  const [taskList, setTaskList] = useState([
    {title:"HomeWork", deadline:"2023-03-18T08:30"},
    {title:"Project", deadline:"2023-03-20T10:30"}
  ]);
  function addTask(task){
    setTaskList([...taskList,task]);
  }
  return (
    <div className={classes.main}>
        <h1>Hello Please Enter the tasks</h1>
        <InputForm addTask={addTask}/>
        {taskList.map(task => {
            return <Task title={task.title} deadline={task.deadline}/>
        })}
    </div>
  )
}

export default Form