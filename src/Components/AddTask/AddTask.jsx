import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Task from "../Task/Task";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [setTasks, refetch]);

  const postTask = (e) => {
    e.preventDefault();
    const taskInfo = {
      task: e.target.task.value,
      description: e.target.description.value,
      done: false
    };
    fetch("http://localhost:5000/addtask", {
      method: "POST",
      body: JSON.stringify(taskInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Added Successfully")
        setRefetch(!refetch);
        e.target.reset()
      });
  };

  return (
    <div>
      {/* Add Task */}
      <div className="flex justify-center h-[50vh]">
        <div className="mt-24">
          <h1 className="text-center text-5xl mb-10 font-bold text-sky-500">
            Add Your Task
          </h1>
          <div class="card w-96 bg-base-300 shadow-xl">
            <div class="card-body">
              <form onSubmit={postTask} class="card-actions justify-end">
                <input
                  type="text"
                  name="task"
                  placeholder="Task Name"
                  class="input input-bordered input-info w-full max-w-xs"
                />
                <textarea
                  name="description"
                  class="textarea resize-none textarea-info mt-2 w-full max-w-xs"
                  placeholder="Task Details"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-info w-full mt-6 font-bold "
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Display Task */}
      <div className="mt-12 container mx-auto">
        {tasks.map((task) => (
          <Task key={task._id} setRefetch={setRefetch} refetch={refetch} taskDetails={task} />
        ))}
      </div>
    </div>
  );
};

export default AddTask;
