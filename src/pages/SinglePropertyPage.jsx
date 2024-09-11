import React from "react";
import { useParams } from "react-router-dom";
import PropertyDescription from "../components/PropertyDescription";
import ExtraInformation from "../components/ExtraInformation";

const SinglePropertyPage = () => {
  const { id } = useParams();
  return (
    <section className="flex justify-between">
      <div>
        <PropertyDescription />
      </div>
      <div className="w-full bg-red-50 ">
        <ExtraInformation />
      </div>
    </section>
  );
};

export default SinglePropertyPage;
