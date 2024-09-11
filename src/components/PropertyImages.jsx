import React from "react";

const PropertyImages = ({ singlePostData }) => {
  return (
    <div className="flex gap-5">
      <img
        src={singlePostData.images[0]}
        className="w-[530px] h-[350px] object-cover rounded-lg"
        alt="image"
      />
      <div className="flex flex-col gap-5">
        {singlePostData.images.slice(1).map((image) => (
          <img
            key={image}
            src={image}
            className="w-[188px] h-[103px] rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
