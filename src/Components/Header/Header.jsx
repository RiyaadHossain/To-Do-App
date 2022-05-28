import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { SiHomebridge } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase";

const Header = () => {
  const logout = () => {
    signOut(auth);
    toast.success("Logged Out Successfully")
  };
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  return (
    <div className=" bg-base-200 py-6 px-20 flex justify-between items-center">
      <div>
        <SiHomebridge
          onClick={() => navigate("/")}
          className="text-5xl text-sky-500"
        />
      </div>
      <div className="flex items-center">
       {user && <img
          className="w-10 mr-3 rounded-full h-10 object-cover"
          src={user?.photoURL}
          alt=""
        />}
        <span className="font-bold text-info">
          {user?.displayName ? (
            <div>
              
              {user.displayName}  <button onClick={logout} className="btn ml-4 font-bold btn-sm btn-warning">Log Out</button>
            </div>
          ) : (
            <span className="font-bold text-info">User</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
