import React, { useState, useRef, useEffect } from "react";
import classes from "./InputForm.module.css";

function TaskForm(props) {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current.focus();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({title:task,deadline})
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            ref={taskInputRef}
          />
        </label>
        <label>
          Deadline:
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
