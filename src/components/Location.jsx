import React from "react";
import Map from "./Map";
import { usePostContext } from "../context/postContext";

const Location = () => {
  const { post } = usePostContext();
  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold md:w-full">Location</h2>
      <div className="w-full h-[30vh] mx-auto rounded-2xl overflow-hidden">
        <Map listData={[post]} />
      </div>
    </section>
  );
};

export default Location;
