import React from "react";
import { usePostContext } from "../context/postContext";

const General = () => {
  const {
    post: { postDetail },
  } = usePostContext();

  return (
    <section>
      <h2 className="mb-7 text-xl font-semibold">General</h2>
      <div className="bg-white flex flex-col gap-0 py-3 rounded-lg [&_img]:w-6 [&_img]:h-6 [&_img]:bg-[#fecd5135] [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:leading-4 [&_p]:text-sm">
        <div className="flex items-center gap-3 p-2">
          <img src="/utility.png" alt="utility icon" />
          <div>
            <h3>Utilities</h3>
            <p>
              {postDetail?.utilities === "owner" ? "Owner" : "Renter"} is
              responsible
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img src="/pet.png" alt="pet icon" />
          <div>
            <h3>Pet Policy</h3>
            <p>
              Pets {postDetail?.pet === "allowed" ? "allowed" : "not allowed"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2">
          <img src="/fee.png" alt="fee icon" />
          <div>
            <h3>Property Fees</h3>
            <p>
              {postDetail?.income === "income"
                ? "Must have 3x the rent in total household income"
                : "Must be rich"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;
