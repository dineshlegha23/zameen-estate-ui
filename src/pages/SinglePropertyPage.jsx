import React from "react";
import { useParams } from "react-router-dom";
import PropertyDescription from "../components/PropertyDescription";
import ExtraInformation from "../components/ExtraInformation";

const SinglePropertyPage = () => {
  const { id } = useParams();
  return (
    <section className="flex md:flex-col justify-between md:mb-10">
      <div className="">
        <PropertyDescription />
      </div>
      <div className="bg-red-50 w-[525px] md:w-full md:pt-5">
        <ExtraInformation />
      </div>
    </section>
  );
};

export default SinglePropertyPage;
