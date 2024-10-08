import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser } = useAuthContext();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <div className="flex gap-10 items-center">
        <div
          className="flex gap-5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="logo" className="w-7" />
          <span className="text-xl font-bold md:hidden sm:block">
            ZameenEstate
          </span>
        </div>
        <ul className="flex gap-10 [&_li]:cursor-pointer sm:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Agents</li>
        </ul>
      </div>
      <div
        className="flex gap-5 items-center pr-5 sm:pr-0
       py-6 w-ful justify-end sm:[&_p]:hidden sm:[&_button]:hidden"
      >
        {currentUser ? (
          <>
            <img
              src={
                currentUser.avatar ||
                "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              }
              alt="user image"
              className="rounded-full w-8"
            />
            <p className="font-semibold capitalize">{currentUser.name}</p>
          </>
        ) : (
          <Link
            to={"/login"}
            className="bg-blue-200 px-6 py-3 rounded-md hover:bg-blue-400"
          >
            Sign In
          </Link>
        )}
        <Link
          to="/profile"
          className="bg-yellow-400 px-6 py-3 font-semibold relative after:absolute after:-top-3 after:-right-3 after:size-7 after:grid after:place-items-center after:rounded-full after:bg-red-600 after:text-white after:content-['3'] sm:hidden"
        >
          Profile
        </Link>
        <div className="hidden sm:block">
          <img
            src="/menu.png"
            alt="menu icon"
            className="w-8 z-30 relative"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <ul
              className={`absolute flex flex-col justify-center items-center gap-10 text-xl bg-black text-white w-60 top-0 h-full z-0 transition-all duration-1000 ${
                isOpen ? "right-0" : "right-80"
              }`}
            >
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Agents</li>
              <li>Sign in</li>
              <li>Sign up</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
