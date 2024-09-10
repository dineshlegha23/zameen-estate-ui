import React from "react";
import { Link } from "react-router-dom";

const PropertyList = ({
  id,
  img,
  title,
  address,
  price,
  bedroom,
  bathroom,
}) => {
  return (
    <section className="flex gap-5">
      <Link to={`/properties/${id}`}>
        <img
          src={img}
          className="min-w-72 h-52 object-cover rounded-xl hover:scale-105 transition-all sm:hidden"
          alt={title}
        />
      </Link>
      <div className="flex flex-col justify-between w-full">
        <Link to={`/properties/${id}`}>
          <h2 className="font-semibold text-xl text-black/80 transition-all hover:text-blue-400">
            {title}
          </h2>
        </Link>
        <div className="flex gap-2 items-center text-black/50 sm:my-1">
          <img src="/pin.png" className="w-4 h-4" alt="" />
          <p>{address}</p>
        </div>
        <span className="font-thin text-black/80 bg-[#fecd5170] rounded-md text-2xl px-2 w-fit sm:my-2">
          $ {price}
        </span>
        <div className="flex justify-between xs:flex-col xs:gap-3">
          <div className="flex gap-5">
            <div className="bg-[#f5f5f5] flex items-center justify-center rounded-md gap-2 w-fit px-2 py-[1px]">
              <img src="/bed.png" className="w-4 h-4" alt="bed icon" />
              <p>{bedroom} bedroom</p>
            </div>
            <div className="bg-[#f5f5f5] flex items-center justify-center rounded-md gap-2 w-fit px-2 py-[1px]">
              <img src="/bath.png" className="w-4 h-4" alt="bed icon" />
              <p>{bathroom} bathroom</p>
            </div>
          </div>

          <div className="flex xs:justify-between gap-5 items-center [&_img]:w-7 [&_img]:h-7 [&_img]:border-[1px] [&_img]:border-black/50 [&_img]:p-[5px] [&_img]:rounded-md">
            <img src="/save.png" alt="save icon" />
            <img src="/chat.png" alt="chat icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
