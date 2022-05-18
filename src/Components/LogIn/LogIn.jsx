import React from "react";

const LogIn = () => {
  return (
    <div class="card h-screen flex items-center justify-center bg-base-100 shadow-xl">
        <h1 className="text-center text-5xl text-primary font-bold mb-12">Please Log In</h1>
      <div class="rounded-lg py-5 shadow-2xl w-96 bg-base-300">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
          <div class="divider">OR</div>
          <button className="btn w-full btn-accent">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
