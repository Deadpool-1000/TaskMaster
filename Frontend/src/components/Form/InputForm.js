import React, { useState, useRef, useEffect } from "react";

function TaskForm(props) {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const taskInputRef = useRef(null);

  useEffect(() => {
    taskInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({ title: task, deadline });
  };

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="px-4 sm:px-0 mb-9">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Create Your Task List.
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            add your tasks along with the appropriate deadline and conditions.
          </p>
        </div>
        <div className="md:grid md:grid-cols-1 md:gap-6">
          {/* <div className="md:col-span-1"> */}
          {/* <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Create Your Task List.
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div> */}
          {/* </div> */}
          <div className="mt-5 md:col-span-2 md:mt-0 sm:col-span-1">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid md:grid-cols-6 gap-6 sm:grid-cols-1 lg:grid-cols-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="task-detail"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Task Detail
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        ref={taskInputRef}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        for e.g. : Research Paper for ai
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        To be Completed By
                      </label>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        For e.g. : Tomorrow evening , or specific date & time if
                        known
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
