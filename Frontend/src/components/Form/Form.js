import React, { useState } from "react";
import Task from "../TaskList/Task";
import InputForm from "./InputForm";
// import classes from './Form.module.css'

function Form() {
  const [taskList, setTaskList] = useState([
    { id:1, title: "HomeWork", deadline: "tomorrow evening" },
    { id:2,title: "Project", deadline: "today 9" },
  ]);
  function addTask(task) {
    setTaskList([...taskList, {...task,id:taskList.length+1}]);
  }
  function deleteTask(_id){
    setTaskList((taskList)=>{
      return taskList.filter((task)=>task.id!==_id)
    })
  }
  return (
    <div className={`container mx-auto pt-32 p-64`}>
      <InputForm addTask={addTask}/>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-10 ">
        {taskList.map((task,i) => {
          return <Task id={task.id} key={i} title={task.title} deadline={task.deadline} deleteTask={deleteTask} />;
        })}
      </ul>
    </div>
  );
}

export default Form;
