import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-10 items-center">
        <div className="flex gap-5">
          <img src="/logo.png" alt="logo" className="w-7" />
          <span className="text-xl font-bold md:hidden">ZameenEstate</span>
        </div>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Agents</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center pr-5 py-6 w-ful justify-end">
        <img
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user image"
          className="rounded-full w-8"
        />
        <p className="font-semibold">John Doe</p>
        <button className="bg-yellow-400 px-6 py-3 font-semibold relative after:absolute after:-top-3 after:-right-3 after:size-7 after:grid after:place-items-center after:rounded-full after:bg-red-600 after:text-white after:content-['3']">
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
