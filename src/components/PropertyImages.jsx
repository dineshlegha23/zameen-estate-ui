import React from "react";

const PropertyImages = ({ singlePostData }) => {
  return (
    <div className="flex sm:flex-col gap-5 w-full">
      <img
        src={singlePostData.images[0]}
        className="w-[73%] sm:w-full h-[350px] sm:h-[300px] object-cover rounded-lg"
        alt="image"
      />
      <div className="flex sm:flex-row w-full flex-col gap-5 sm:gap-2">
        {singlePostData.images.slice(1).map((image) => (
          <img
            key={image}
            src={image}
            className="w-full min-h-[103px] max-h-[103px] sm:max-h-[87px] sm:min-h-[87px] sm:w-[30vw] rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
