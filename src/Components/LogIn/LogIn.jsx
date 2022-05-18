import React, { useEffect } from "react";
import auth from "../Firebase/Firebase";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth)
  const location = useLocation()
  const navigate = useNavigate()
  
  let from = location.state?.from?.pathname || "/";

  useEffect(() =>{
    if(user){
      toast.success('Logged In Successfully')
      navigate(from, {replace: true})
    }
  },[user, from, navigate])

  return (
    <div class="card h-screen flex items-center justify-center bg-base-100 shadow-xl">
      <h1 className="text-center text-5xl text-primary font-bold mb-12">
        Please Log In
      </h1>
      <div class="rounded-lg py-5 shadow-2xl w-96 bg-base-300">
        <div class="card-body">
          <button onClick={() => signInWithGoogle()} className="btn w-full btn-accent">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
