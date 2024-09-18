import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UploadWidget from "../components/UploadWidget";
import { useAuthContext } from "../context/authContext";
import axios from "axios";

const UpdateUser = () => {
  const { currentUser, setCurrentUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState([]);

  const url = import.meta.env.VITE_BACKEND_URL;
  console.log(avatar);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { username, email, name } = Object.fromEntries(formData);

    setLoading(true);
    setMessage("");
    setError(false);
    try {
      await axios.patch(
        `${url}/auth/update`,
        { username, name, email, avatar: avatar[0] },
        { withCredentials: true }
      );
      setCurrentUser((prev) => ({
        ...prev,
        username,
        email,
        avatar: avatar[0],
        name,
      }));
      setLoading(false);
      setMessage("Updated successfully!");
    } catch (error) {
      console.log(error);

      setLoading(false);
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="flex justify-between sm:mt-16">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col justify-center items-center gap-5 [&_input]:w-full [&_input]:border [&_input]:border-black/50 [&_input]:rounded-md [&_input]:p-3"
      >
        <h2 className="text-3xl font-semibold">Update Profile</h2>

        <input
          defaultValue={currentUser.username}
          type="text"
          name="username"
          placeholder="Username"
        ></input>
        <input
          defaultValue={currentUser.email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          defaultValue={currentUser.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#008080] w-full p-4 rounded-md text-white text-sm font-semibold disabled:bg-zinc-400"
        >
          Update
        </button>
        {message && <p className="text-green-600">{message}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Link
          to="/profile"
          className="text-zinc-500 text-sm underline underline-offset-2 decoration-1"
        ></Link>
      </form>
      <div className="w-[40%] h-[calc(100vh-100px)] flex flex-col  gap-5 justify-center items-center relative overflow-hidden sm:hidden">
        <img
          src={
            avatar[avatar.length - 1] ||
            currentUser.avatar ||
            "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          }
          alt="hero image"
          className="w-[100%] max-w-[250px] rounded-full"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "dw6c6wlin",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setValue={setAvatar}
        />
      </div>
    </div>
  );
};

export default UpdateUser;
