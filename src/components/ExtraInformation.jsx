import React from "react";
import General from "./General";
import Sizes from "./Sizes";
import NearbyPlaces from "./NearbyPlaces";
import Location from "./Location";
import axios from "axios";

const ExtraInformation = () => {
  const handleSavePost = async () => {
    const response = await axios.post();
  };

  return (
    <section className="w-[460px] lg:w-[430px] flex flex-col gap-5 px-4 h-[calc(100vh-100px)] sm:h-auto overflow-y-scroll pb-5">
      <General />
      <Sizes />
      <NearbyPlaces />
      <Location />
      <div className="flex justify-between">
        <div className="flex items-center xs:text-center gap-2 bg-white rounded-xl p-4 border border-[#fece51] cursor-pointer">
          <img src="/chat.png" className="w-4 h-4" alt="message icon" />
          <p>Send a Message</p>
        </div>

        <button className="flex items-center xs:text-center gap-2 bg-white rounded-xl p-4 border border-[#fece51] cursor-pointer">
          <img src="/save.png" className="w-4 h-4" alt="" />
          <p>Save the Place</p>
        </button>
      </div>
    </section>
  );
};

export default ExtraInformation;
