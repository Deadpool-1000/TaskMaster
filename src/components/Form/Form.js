import React, { useContext, useState } from "react";
import Task from "../TaskList/Task";
import InputForm from "./InputForm";
import ResultContext from "../../store/res-context";
import { useNavigate } from "react-router-dom";
function generateFinalString(taskList) {
  let final = "Task: ";
  taskList.forEach((task) => {
    final = final.concat(task.title);
    final = final.concat(" deadline:");
    final = final.concat(task.deadline);
    final = final.concat(" ,");
  });
  final = final.slice(0, -2);
  final = final.concat(
    ".  Prioritize this work as per the amount of  effort that has to be done and quickest way to do these all also describe your answer"
  );
  return final;
}
function Form() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "HomeWork", deadline: "tomorrow evening" },
    { id: 2, title: "Project", deadline: "today 9" },
  ]);
  const [loading, setLoading] = useState(false);
  const ctx = useContext(ResultContext);
  const navigate = useNavigate();
  function addTask(task) {
    setTaskList([...taskList, { ...task, id: taskList.length + 1 }]);
  }
  function deleteTask(_id) {
    setTaskList((taskList) => {
      return taskList.filter((task) => task.id !== _id);
    });
  }
  async function generateHandler() {
    setLoading(true);
    const final = generateFinalString(taskList);
    try {
      const result = await fetch(process.env.REACT_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: final,
        }),
      });
      console.log(result);
      const data = await result.json();
      ctx.modifyResult(data.res);
      setLoading(false);
      navigate("/result");
    } catch (error) {
      console.log(error);
    }
    // navigate("/result")
  }
  return (
    <div
      className={`container mx-auto pt-32 md:pl-64 md:pr-64  sm:pr-32 sm:pl-32`}
    >
      <InputForm addTask={addTask} />
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-10 ">
        {taskList.map((task, i) => {
          return (
            <Task
              id={task.id}
              key={i}
              title={task.title}
              deadline={task.deadline}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
      <button
        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-10 w-full"
        onClick={() => generateHandler()}
      >
        {loading ? "Loading...." : "Generate"}
      </button>
    </div>
  );
}

export default Form;
