import React from "react";
import UserInformation from "../components/UserInformation";
import PropertyList from "../components/PropertyList";
import { listData } from "/public/data.js";
import Messages from "../components/Messages";

const ProfilePage = () => {
  return (
    <section className="flex">
      <div className="[flex:3] pr-10 h-[calc(100vh-100px)] overflow-y-scroll">
        <div className="flex justify-between">
          <h2 className="text-3xl font-thin">User Information</h2>
          <button className="bg-[#fece51] text-sm px-6 py-3">
            Update Profile
          </button>
        </div>
        <UserInformation />

        <div className="flex justify-between mt-14">
          <h2 className="text-3xl font-thin">My List</h2>
          <button className="bg-[#fece51] text-sm px-6 py-3">
            Create New Post
          </button>
        </div>
        <div className="flex flex-col gap-10 my-12">
          {listData.map((property) => (
            <PropertyList key={property.id} {...property} />
          ))}
        </div>
      </div>
      <div className="bg-red-50 w-full [flex:2] h-[calc(100vh-100px)] overflow-y-scroll pb-5">
        <Messages />
      </div>
    </section>
  );
};

export default ProfilePage;
