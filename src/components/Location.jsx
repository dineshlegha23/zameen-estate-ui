import React from "react";
import Map from "./Map";
import { singlePostData } from "/public/data.js";

const Location = () => {
  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold md:w-full">Location</h2>
      <div className="w-full h-[30vh] mx-auto rounded-2xl overflow-hidden">
        <Map listData={[singlePostData]} />
      </div>
    </section>
  );
};

export default Location;
