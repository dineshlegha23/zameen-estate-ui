import React from "react";

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
      <img
        src={img}
        className="w-72 h-52 object-cover rounded-xl"
        alt={title}
      />
      <div className="flex flex-col justify-between w-full">
        <h2 className="font-semibold text-xl text-black/80">{title}</h2>
        <div className="flex gap-2 items-center text-black/50">
          <img src="/pin.png" className="w-4 h-4" alt="" />
          <p>{address}</p>
        </div>
        <span className="font-thin text-black/80 bg-[#fecd5170] rounded-md text-2xl px-2 w-fit">
          $ {price}
        </span>
        <div className="flex justify-between">
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

          <div className="flex gap-5 items-center [&_img]:w-7 [&_img]:h-7 [&_img]:border-[1px] [&_img]:border-black/50 [&_img]:p-[5px] [&_img]:rounded-md">
            <img src="/save.png" alt="save icon" />
            <img src="/chat.png" alt="chat icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
