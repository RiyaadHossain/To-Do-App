import React from "react";

const LogIn = () => {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div class="card h-screen flex items-center justify-center bg-base-100 shadow-xl">
      <h1 className="text-center text-5xl text-primary font-bold mb-12">
        Please Log In
      </h1>
      <div class="rounded-lg py-5 shadow-2xl w-96 bg-base-300">
        <div class="card-body">
          <button className="btn w-full btn-accent">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
