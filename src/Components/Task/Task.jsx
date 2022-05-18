import React from "react";

const Task = ({ taskDetails }) => {
  const { task, description } = taskDetails;
  return (
    <div className="mb-5">
      <div className="bg-base-300 py-4 px-6 rounded-md ">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-accent font-bold text-xl">{task.toUpperCase()}</h2>
            <p>{description}</p>
          </div>
          <div>
              <button className="btn btn-success mr-3">Done</button>
              <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
