import React from "react";
import PropertyList from "../components/PropertyList";
import Filters from "../components/Filters";
import { listData } from "/public/data";
import Map from "../components/Map";

const ListPage = () => {
  return (
    <div className="flex justify-between">
      <section className="w-full">
        <Filters />
        <div className="flex flex-col gap-10 my-12">
          {listData.map((property) => (
            <PropertyList {...property} />
          ))}
        </div>
      </section>
      <section className="w-full">
        <Map />
      </section>
    </div>
  );
};

export default ListPage;
