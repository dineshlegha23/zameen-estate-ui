import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex w-max max-w-full items-center gap-4">
          <img
            src={item.img}
            className="w-20 h-20 object-cover rounded-lg"
            alt=""
          />
          <div className="flex flex-col">
            <Link to={`/properties/${item.id}`} className="text-[#0078A8]">
              {item.title}
            </Link>
            <p>{item.bedroom} bedroom</p>
            <span className="font-bold">$ {item.price}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
