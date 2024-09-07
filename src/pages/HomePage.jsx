import React from "react";

const HomePage = () => {
  return (
    <secction className="flex items-center h-[calc(100vh-100px)] gap-10">
      <div className="flex flex-col gap-14">
        <h1 className="text-6xl lg:text-5xl leading-tight font-semibold">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p>
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
          <div className="flex border-[1px] overflow-hidden border-black/50 [&_input]:pl-3 [&_input]:w-full gap-1 sm:flex-col sm:border-0 sm:[&_input]:border-2 sm:[&_input]:py-3">
            <input type="text" placeholder="City Location" />
            <input type="number" min={0} max={100000} placeholder="Min Price" />
            <input type="number" min={0} max={100000} placeholder="Max Price" />
            <button className="bg-yellow-400 p-2 sm:p-0 w-[300px] sm:w-full h-16 sm:h-12 grid place-items-center">
              <img
                src="/search.png"
                alt="search icon"
                className="w-full sm:w-16 px-6 sm:px-5"
              />
            </button>
          </div>
        </div>
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
      <div className="bkg-red-50 h-[calc(100vh-100px)] w-full flex items-center relative md:hidden">
        <img src="/bg.png" alt="hero image" className="absolute w-[120%]" />
      </div>
    </secction>
  );
};

export default HomePage;
