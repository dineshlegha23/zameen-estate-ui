import React from "react";
import Map from "./Map";

const Location = () => {
  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold">Location</h2>
      <Map small={true} />
    </section>
  );
};

export default Location;
