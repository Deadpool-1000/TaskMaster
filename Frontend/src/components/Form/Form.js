import React, { useState } from "react";
import Task from "../TaskList/Task";
import InputForm from "./InputForm";
// import classes from './Form.module.css'

function Form() {
  const [taskList, setTaskList] = useState([
    { title: "HomeWork", deadline: "tomorrow evening" },
    { title: "Project", deadline: "today 9" },
  ]);
  function addTask(task) {
    setTaskList([...taskList, task]);
  }
  return (
    <div className={`container mx-auto pt-32 p-64`}>
      <InputForm addTask={addTask} />
      <ul class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-10 ">
        {taskList.map((task) => {
          return <Task title={task.title} deadline={task.deadline} />;
        })}
      </ul>
    </div>
  );
}

export default Form;
