import React from "react";
import toast from "react-hot-toast";
import { TiTick } from 'react-icons/ti';

const Task = ({ taskDetails, setRefetch, refetch }) => {
  const { _id, task, description, done } = taskDetails;
  //   const [task, setTask] = useState({})

  // Done Event
  const doneTask = (id) => {
    fetch(`http://localhost:5000/task/${id}`, {
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
    fetch(`http://localhost:5000/task/${id}`, {
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
                  ? " line-through text-accent font-bold text-xl"
                  : "text-accent font-bold text-xl"
              } `}
            >
              {task.toUpperCase()}
            </h2>
            <p
              className={`${
                done ? "text-gray-500 text-lg" : "text-gray-100 text-lg"
              } `}
            >
              {description}
            </p>
          </div>
          <div>
            {done ? (
              <p className="text-success flex items-center font-semibold text-lg"><TiTick className="text-success mr-1 text-xl"/> <span>Task Completd</span></p>
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
