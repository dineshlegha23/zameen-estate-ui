import React from "react";
import { usePostContext } from "../context/postContext";

const Sizes = () => {
  const { post } = usePostContext();

  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold">Sizes</h2>
      <div className="flex justify-between [&_img]:w-6 xs:flex-wrap xs:gap-3">
        <div className="flex gap-3 bg-white p-2 rounded-lg">
          <img src="/size.png" alt="zoom icon" />
          <p>{post.postDetail.size} sqft</p>
        </div>
        <div className="flex gap-3 bg-white p-2 rounded-lg">
          <img src="/bed.png" alt="bed icon" />
          <p>{post.bedroom} beds</p>
        </div>
        <div className="flex gap-3 bg-white p-2 rounded-lg">
          <img src="/bath.png" alt="bath icon" />
          <p>{post.bathroom} bathroom</p>
        </div>
      </div>
    </section>
  );
};

export default Sizes;
