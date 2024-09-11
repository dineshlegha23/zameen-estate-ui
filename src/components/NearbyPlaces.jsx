import React from "react";

const NearbyPlaces = () => {
  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold">Nearby Places</h2>
      <div className="bg-white flex justify-between gap-5 lg:gap-0 xs:flex-wrap xs:gap-2 py-3 rounded-lg [&_img]:w-6 [&_img]:h-6 [&_img]:bg-[#fecd5135] [&_h3]:font-bold [&_h3]:leading-4 [&_p]:text-sm">
        <div className="flex items-center gap-3 lg:gap-1 p-2">
          <img src="/school.png" alt="utility icon" />
          <div>
            <h3>School</h3>
            <p>250m away</p>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-1 p-2">
          <img src="/pet.png" alt="pet icon" />
          <div>
            <h3>Bus Stop</h3>
            <p>100m away</p>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-1 p-2">
          <img src="/fee.png" alt="fee icon" />
          <div>
            <h3>Restaurant</h3>
            <p>200m away</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
