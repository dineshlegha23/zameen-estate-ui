import React from "react";
import General from "./General";
import Sizes from "./Sizes";
import NearbyPlaces from "./NearbyPlaces";

const ExtraInformation = () => {
  return (
    <section className="flex flex-col gap-5 px-4">
      <General />
      <Sizes />
      <NearbyPlaces />
    </section>
  );
};

export default ExtraInformation;
