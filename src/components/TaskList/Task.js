import React from "react";

function Task(props) {
  return (
    <div>
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 rounded  px-4 py-8">
        {props.title} | {props.deadline}
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 float-right"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Task;
