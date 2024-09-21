import React, { useState } from "react";
import General from "./General";
import Sizes from "./Sizes";
import NearbyPlaces from "./NearbyPlaces";
import Location from "./Location";
import axios from "axios";
import { usePostContext } from "../context/postContext";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ExtraInformation = ({ loaderPost }) => {
  const { post } = usePostContext();
  const [saved, setSaved] = useState(loaderPost.isSaved);
  const [error, setError] = useState(false);
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;

  const handleSavePost = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    try {
      setError(false);
      const response = await axios.post(
        `${url}/posts/${post.id}`,
        {},
        {
          withCredentials: true,
        }
      );
      setSaved((prev) => !prev);
    } catch (error) {
      console.log(error);

      setSaved((prev) => !prev);
      setError(error.response.data.msg);
    }
  };

  return (
    <section className="w-[460px] lg:w-[430px] flex flex-col gap-5 px-4 h-[calc(100vh-100px)] sm:h-auto overflow-y-scroll pb-5">
      <General />
      <Sizes />
      <NearbyPlaces />
      <Location />
      <div className="flex justify-between">
        <div className="flex items-center xs:text-center gap-2 bg-white rounded-xl p-4 border border-[#fece51] cursor-pointer">
          <img src="/chat.png" className="w-4 h-4" alt="message icon" />
          <p>Send a Message</p>
        </div>

        <button
          onClick={handleSavePost}
          className={`flex items-center xs:text-center gap-2 bg-white rounded-xl p-4 border border-[#fece51] cursor-pointer ${
            saved ? "bg-yellow-400" : ""
          }`}
        >
          <img src="/save.png" className="w-4 h-4" alt="" />
          <p>{saved ? "Saved" : "Save the Place"}</p>
        </button>
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </section>
  );
};

export default ExtraInformation;
