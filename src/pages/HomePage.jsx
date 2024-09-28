import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const cookie = document.cookie;
  console.log(cookie);

  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });
  const navigate = useNavigate();

  const handleType = (type) => {
    setQuery((prev) => ({ ...prev, type }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(
      `properties?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
    );
  };
  return (
    <section className="flex items-center sm:items-start h-[calc(100vh-100px)] gap-10 sm:pt-10 sm:h-full sm:pb-10">
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl lg:text-5xl leading-tight font-semibold">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
          suscipit cum eius, iure est nulla animi consequatur facilis id
          pariatur fugit quos laudantium temporibus dolor ea repellat provident
          impedit!
        </p>
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={() => handleType("buy")}
            className={`px-8 py-3 rounded-tl-md border-[1px] border-b-0 border-black/50 ${
              query.type === "buy" ? "bg-black text-white" : ""
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => handleType("rent")}
            className={`px-8 py-3 rounded-tr-md border-[1px] border-black/50 border-b-0 ${
              query.type === "rent" ? "bg-black text-white" : ""
            }`}
          >
            Rent
          </button>
          <div className="flex border-[1px] overflow-hidden border-black/50 [&_input]:pl-3 [&_input]:w-full gap-1 sm:flex-col sm:border-0 sm:[&_input]:border-2 sm:[&_input]:py-3">
            <input
              onChange={handleChange}
              type="text"
              name="city"
              placeholder="City Location"
            />
            <input
              onChange={handleChange}
              type="number"
              name="minPrice"
              min={0}
              max={100000}
              placeholder="Min Price"
            />
            <input
              onChange={handleChange}
              type="number"
              name="maxPrice"
              min={0}
              max={100000}
              placeholder="Max Price"
            />
            <button
              type="submit"
              // to={`properties?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
              className="bg-yellow-400 p-2 sm:p-0 w-[300px] sm:w-full h-16 sm:h-12 grid place-items-center"
            >
              <img
                src="/search.png"
                alt="search icon"
                className="w-full sm:w-16 px-6 sm:px-5"
              />
            </button>
          </div>
        </form>
        <div className="flex justify-between sm:hidden">
          <div>
            <span className="text-4xl font-semibold">16+</span>
            <p className="text-xl font-thin">Years of Experience</p>
          </div>
          <div>
            <span className="text-4xl font-semibold">200</span>
            <p className="text-xl font-thin">Awards Gained</p>
          </div>
          <div>
            <span className="text-4xl font-semibold">2000+</span>
            <p className="text-xl font-thin">Property Ready</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center relative overflow-hidden md:hidden">
        <img src="/bg.png" alt="hero image" className="absolute w-[100%]" />
      </div>
    </section>
  );
};

export default HomePage;
