import React from "react";
import PropertyImages from "./PropertyImages";
import PropertyDetails from "./PropertyDetails";
import { singlePostData } from "/public/data.js";

const PropertyDescription = () => {
  return (
    <div className="pr-12 lg:pr-4 md:pr-0 h-[calc(100vh-100px)] sm:h-auto overflow-y-scroll">
      <PropertyImages singlePostData={singlePostData} />
      <PropertyDetails singlePostData={singlePostData} />
    </div>
  );
};

export default PropertyDescription;
