import React from "react";

const PropertyDetails = ({ singlePostData }) => {
  return (
    <section className="mt-[53px] max-w-[730px] mb-10 ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl">{singlePostData.title}</h2>
          <div className="flex gap-1 items-center">
            <img src="/pin.png" className="w-4" alt="pin icon" />
            <p className="text-black/50 text-sm font-semibold">
              {singlePostData.address}
            </p>
          </div>
          <span className="font-thin text-black/80 bg-[#fecd5170] rounded-md text-2xl px-2 w-fit sm:my-2">
            $ {singlePostData.price}
          </span>
        </div>
        <div className="bg-[#fecd5135] rounded-lg py-4 flex flex-col items-center justify-between w-40">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <p className="font-semibold">John Doe</p>
        </div>
      </div>
      <p className="mt-12">{singlePostData.description}</p>
    </section>
  );
};

export default PropertyDetails;
