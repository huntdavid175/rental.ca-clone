import React from "react";

interface MapIconProps {
  lat?: number;
  lng?: number;
}

const MapIcon: React.FC<MapIconProps> = ({ lat, lng }) => {
  console.log(lat, lng);
  return <div className="absolute px-4 py-2 bg-green-800">MapIcon</div>;
};

export default MapIcon;
