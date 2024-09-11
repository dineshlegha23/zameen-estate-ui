import React from "react";

const Sizes = () => {
  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold">Sizes</h2>
      <div className="flex justify-between [&_img]:w-6 xs:flex-wrap xs:gap-3">
        <div className="flex gap-3 bg-white p-2 rounded-lg">
          <img src="/size.png" alt="zoom icon" />
          <p>80 sqft</p>
        </div>
        <div className="flex gap-3 bg-white p-2 rounded-lg">
          <img src="/bed.png" alt="bed icon" />
          <p>2 beds</p>
        </div>
        <div className="flex gap-3 bg-white p-2 rounded-lg">
          <img src="/bath.png" alt="bath icon" />
          <p>1 bathroom</p>
        </div>
      </div>
    </section>
  );
};

export default Sizes;
