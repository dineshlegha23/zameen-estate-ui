import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../context/authContext";

const LoginRegister = ({ isLogin }) => {
  const { setCurrentUser } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const url = isLogin
      ? import.meta.env.VITE_BACKEND_URL + "/auth/login"
      : import.meta.env.VITE_BACKEND_URL + "/auth/register";

    try {
      const response = await axios.post(url, data, { withCredentials: true });
      if (response.status == 200 || 201) {
        setCurrentUser(response.data.user);
        navigate("/");
      }
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.msg);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between sm:mt-16">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col justify-center items-center gap-5 [&_input]:w-full [&_input]:border [&_input]:border-black/50 [&_input]:rounded-md [&_input]:p-3"
      >
        <h2 className="text-3xl font-semibold">
          {isLogin ? "Welcome back" : "Create an Account"}
        </h2>
        {!isLogin && (
          <input type="text" name="username" placeholder="Username"></input>
        )}
        <input type="email" name="email" placeholder="Email" />
        {!isLogin && <input type="text" name="name" placeholder="Name" />}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#008080] w-full p-4 rounded-md text-white text-sm font-semibold disabled:bg-zinc-400"
        >
          {isLogin ? "Login" : "Register"}
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Link
          to={isLogin ? "/register" : "/login"}
          className="text-zinc-500 text-sm underline underline-offset-2 decoration-1"
        >
          {isLogin ? "Don't have an account?" : "Do you have an account?"}
        </Link>
      </form>
      <div className="w-[40%] h-[calc(100vh-100px)] flex justify-center items-center relative overflow-hidden sm:hidden">
        <img src="/bg.png" alt="hero image" className="w-[100%]" />
      </div>
    </div>
  );
};

export default LoginRegister;
