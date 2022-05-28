import React from "react";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Task = ({ taskDetails, setRefetch, refetch }) => {
  const { _id, task, description, done } = taskDetails;

  // Done Event
  const doneTask = (id) => {
    fetch(`https://tranquil-ravine-17163.herokuapp.com/task/${id}`, {
      method: "PUT",
      body: JSON.stringify({ done: true }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRefetch(!refetch);
        toast.success("Task Completed Successfully");
      });
  };

  console.log(taskDetails);

  // Delete Event
  const deleteTask = (id) => {
    fetch(`https://tranquil-ravine-17163.herokuapp.com/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefetch(!refetch);
        toast.success("Task Deleted Successfully");
      });
  };

  return (
    <div className="mb-5">
      <div className="bg-base-300 py-4 px-6 rounded-md ">
        <div className="flex items-center justify-between">
          <div>
            <h2
              className={`${
                done
                  ? " text-[#213a45] font-bold text-xl"
                  : "text-accent font-bold text-xl"
              } `}
            >
              {task.toUpperCase()}
            </h2>
            <p
              className={`${
                done ? "text-gray-600 text-lg " : "text-gray-100 text-lg"
              } `}
            >
              {description}
            </p>
          </div>
          <div>
            {done ? (
              <p className="text-success flex items-center font-semibold text-lg">
                <div className="flex items-center">
                  <TiTick className="text-success mr-1 text-xl" />
                  <span>Task Completd</span>
                </div>
                <ImCross onClick={() => deleteTask(_id)} className="text-error border-4 border-red-400 p-1 ml-4 text-3xl rounded-full " />
              </p>
            ) : (
              <div>
                <button
                  onClick={() => doneTask(_id)}
                  className="btn btn-success mr-3"
                >
                  Done
                </button>
                <button
                  onClick={() => deleteTask(_id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
