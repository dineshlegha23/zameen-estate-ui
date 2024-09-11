import React from "react";

const PropertyImages = ({ singlePostData }) => {
  return (
    <div className="flex gap-5 w-full">
      <img
        src={singlePostData.images[0]}
        className="w-[73%] sm:w-[70%] h-[350px] sm:h-[300px] object-cover rounded-lg"
        alt="image"
      />
      <div className="flex w-full flex-col gap-5">
        {singlePostData.images.slice(1).map((image) => (
          <img
            key={image}
            src={image}
            className="w-full min-h-[103px] max-h-[103px] sm:max-h-[87px] sm:min-h-[87px] rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
