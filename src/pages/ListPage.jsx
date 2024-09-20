import React, { Suspense } from "react";
import PropertyList from "../components/PropertyList";
import Filters from "../components/Filters";
import { listData } from "/public/data";
import Map from "../components/Map";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const { response } = useLoaderData();

  return (
    <div className="flex justify-between md:flex-col">
      <section className="pr-10 lg:pr-5 xs:pr-0  max-w-[790px] overflow-y-scroll xs:overflow-hidden max-h-[calc(100vh-100px)] xs:max-h-full md:mb-10">
        <Filters />
        <div className="flex flex-col gap-10 my-12">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={response}
              errorElement={<p>Error loading posts!</p>}
            >
              {(response) =>
                response.data.posts.map((property) => (
                  <PropertyList key={property.id} {...property} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </section>
      <section className="mt-0 rounded-3xl overflow-hidden h-[calc(100vh-100px)] w-[40vw] md:w-[100%] md:h-[90vh] flex justify-end md:mb-10">
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={response} errorElement={<p>Error loading posts!</p>}>
            {(response) => <Map listData={response.data.posts} />}
          </Await>
        </Suspense>
      </section>
    </div>
  );
};

export default ListPage;
