import React from "react";
import { Link } from "react-router-dom";

const LoginRegister = ({ isLogin }) => {
  return (
    <div className="flex justify-between sm:mt-16">
      <div className="mx-auto flex flex-col justify-center items-center gap-5 [&_input]:w-full [&_input]:border [&_input]:border-black/50 [&_input]:rounded-md [&_input]:p-3">
        <h2 className="text-3xl font-semibold">
          {isLogin ? "Welcome back" : "Create an Account"}
        </h2>
        <input type="text" name="username" placeholder="Username" />
        {!isLogin && (
          <input type="email" name="email" placeholder="Email"></input>
        )}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button className="bg-[#008080] w-full p-4 rounded-md text-white text-sm font-semibold">
          {isLogin ? "Login" : "Register"}
        </button>
        <Link className="text-zinc-500 text-sm underline underline-offset-2 decoration-1">
          {isLogin ? "Don't have an account?" : "Do you have an account?"}
        </Link>
      </div>
      <div className="w-[40%] h-[calc(100vh-100px)] flex justify-center items-center relative overflow-hidden sm:hidden">
        <img src="/bg.png" alt="hero image" className="w-[100%]" />
      </div>
    </div>
  );
};

export default LoginRegister;
