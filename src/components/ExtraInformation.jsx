import React from "react";
import General from "./General";
import Sizes from "./Sizes";
import NearbyPlaces from "./NearbyPlaces";
import Location from "./Location";

const ExtraInformation = () => {
  return (
    <section className="flex flex-col gap-5 px-4 h-[calc(100vh-100px)] overflow-y-scroll pb-5">
      <General />
      <Sizes />
      <NearbyPlaces />
      <Location />
      <div className="flex justify-between">
        <div className="flex items-center gap-2 bg-white rounded-xl p-4 border border-[#fece51] cursor-pointer">
          <img src="/chat.png" className="w-4 h-4" alt="message icon" />
          <p>Send a Message</p>
        </div>

        <div className="flex items-center gap-2 bg-white rounded-xl p-4 border border-[#fece51] cursor-pointer">
          <img src="/save.png" className="w-4 h-4" alt="" />
          <p>Save the Place</p>
        </div>
      </div>
    </section>
  );
};

export default ExtraInformation;
