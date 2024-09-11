import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";
import { listData } from "/public/data.js";

const Map = () => {
  return (
    <div className="w-full flex justify-end md:mb-10">
      <MapContainer
        center={[52.4797, -1.90269]}
        zoom={7}
        scrollWheelZoom={false}
        className="h-[calc(100vh-100px)] w-[40vw] md:w-[100vw] md:h-[90vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listData.map((item) => (
          <Pin key={item.id} item={item} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
