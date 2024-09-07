import React from "react";

const HomePage = () => {
  return (
    <secction className="flex items-center gap-24">
      <div className="flex flex-col gap-10">
        <h1 className="text-7xl leading-tight font-semibold">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
          suscipit cum eius, iure est nulla animi consequatur facilis id
          pariatur fugit quos laudantium temporibus dolor ea repellat provident
          impedit!
        </p>
        <div>
          <button className="px-8 py-3 rounded-tl-md border-[1px] border-b-0 border-black/50 bg-black text-white">
            Buy
          </button>
          <button className="px-8 py-3 rounded-tr-md border-[1px] border-black/50 border-b-0">
            Rent
          </button>
          <div className="flex border-[1px] overflow-hidden border-black/50 [&_input]:pl-3 [&_input]:w-full gap-1">
            <input type="text" placeholder="City Location" />
            <input type="number" max={100000} placeholder="Min Price" />
            <input type="number" max={100000} placeholder="Max Price" />
            <button className="bg-yellow-400 p-2 w-[300px] h-16 grid place-items-center">
              <img
                src="/search.png"
                alt="search icon"
                className="w-full px-6"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
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
      <div className="bg-red-50 h-[calc(100vh-100px)] w-[1080px] relative">
        <img
          src="/bg.png"
          alt="hero image"
          className="absolute top-0 right-0"
        />
      </div>
    </secction>
  );
};

export default HomePage;
