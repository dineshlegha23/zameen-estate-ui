import React, { useEffect, useState } from "react";
import { usePostContext } from "../context/postContext";

const PropertyImages = () => {
  const { post: singlePostData } = usePostContext();

  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const handleIndex = (direction) => {
    if (direction === "left") {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(singlePostData.images.length - 1);
      } else {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
    if (direction === "right") {
      if (currentImageIndex === singlePostData.images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };
  return (
    <div className="flex sm:flex-col gap-5 w-full">
      <img
        onClick={() => setCurrentImageIndex(0)}
        src={singlePostData.images[0]}
        className="w-[73%] sm:w-full h-[350px] sm:h-[300px] object-cover rounded-lg cursor-pointer"
        alt="image"
      />
      <div className="flex sm:flex-row w-full flex-col gap-5 sm:gap-2">
        {singlePostData.images.slice(1, 4).map((image, index) => (
          <img
            onClick={() => setCurrentImageIndex(index + 1)}
            key={image}
            src={image}
            className="w-full min-h-[103px] max-h-[103px] sm:max-h-[87px] sm:min-h-[87px] sm:w-[30vw] rounded-lg object-cover cursor-pointer"
          />
        ))}
      </div>
      {currentImageIndex !== null && (
        <div className="fixed top-0 flex justify-between items-center left-0 w-[100vw] h-[100vh] px-12 md:px-5 z-[9999] bg-black">
          <div className="flex gap-[2%] justify-center mx-auto items-center py-1">
            <img
              onClick={() => handleIndex("left")}
              src="/arrow.png"
              className="h-fit w-14 md:w-6 cursor-pointer"
              alt="left arrow"
            />
            <img
              src={singlePostData.images[currentImageIndex]}
              className="min-w-[80vw] max-h-[99vh] rounded-lg object-cover"
              alt="property image"
            />
            <img
              onClick={() => handleIndex("right")}
              src="/arrow.png"
              className="h-fit w-14 rotate-180 md:w-6 cursor-pointer"
              alt="right arrow"
            />
          </div>
          <button
            onClick={() => setCurrentImageIndex(null)}
            className="text-white font-semibold absolute top-10 right-10 text-5xl"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyImages;
