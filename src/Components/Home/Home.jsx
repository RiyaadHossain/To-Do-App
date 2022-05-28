import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="hero h-[90vh] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">To Do App</h1>
          <p class="py-6">
          Writing your daily tasks on a list can help you increase productivity and decrease stress. To-do lists enable you to segment your goals into achievable activities and complete large projects by breaking them into smaller assignments.
          </p>
          <Link to='/addtask' class="btn btn-primary">Add Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
