import React from "react";
import { useAuthContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserInformation = () => {
  const { currentUser, updateUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.post(`${url}/auth/logout`, "", {
        withCredentials: true,
      });
      if (response.status == 200) {
        updateUser(null);

        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="flex flex-col gap-3 mt-14">
      <p className="flex items-center">
        Avatar:
        <img
          className="w-14 pl-5"
          src={
            currentUser?.avatar ||
            "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          }
          alt="user image"
        />
      </p>
      <p>
        Username:
        <span className="font-bold pl-5"> {currentUser?.username}</span>
      </p>
      <p>
        E-mail: <span className="font-bold pl-5">{currentUser?.email}</span>
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 w-fit rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </article>
  );
};

export default UserInformation;
