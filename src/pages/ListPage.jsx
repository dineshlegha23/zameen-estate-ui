import React from "react";
import PropertyList from "../components/PropertyList";
import Filters from "../components/Filters";
import { listData } from "/public/data";
import Map from "../components/Map";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className="flex justify-between md:flex-col">
      <section className="pr-10 lg:pr-5 xs:pr-0  max-w-[790px] overflow-y-scroll xs:overflow-hidden max-h-[calc(100vh-100px)] xs:max-h-full md:mb-10">
        <Filters />
        <div className="flex flex-col gap-10 my-12">
          {posts.posts.map((property) => (
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
