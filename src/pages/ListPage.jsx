import React from "react";
import PropertyList from "../components/PropertyList";
import Filters from "../components/Filters";
import { listData } from "/public/data";
import Map from "../components/Map";

const ListPage = () => {
  return (
    <div className="flex justify-between md:flex-col">
      <section className="pr-10  max-w-[790px] overflow-y-scroll max-h-[calc(100vh-100px)] md:mb-10">
        <Filters />
        <div className="flex flex-col gap-10 my-12">
          {listData.map((property) => (
            <PropertyList key={property.id} {...property} />
          ))}
        </div>
      </section>
      <section className="mt-0 rounded-3xl overflow-hidden h-[calc(100vh-100px)] w-[40vw] md:w-[100%] md:h-[90vh] flex justify-end md:mb-10">
        <Map listData={listData} />
      </section>
    </div>
  );
};

export default ListPage;
