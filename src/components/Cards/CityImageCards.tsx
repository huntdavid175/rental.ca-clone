import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CityImageCardsProps {
  title: string;
  imageUrl: string;
}

const CityImageCards: React.FC<CityImageCardsProps> = ({ title, imageUrl }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to="#"
      className=" flex justify-center  items-center w-full  md:w-[calc(33.33%-20px)] mx-2 my-2 relative "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={imageUrl} className="rounded-sm " />
      <div
        className={`absolute inset-0 bg-black flex justify-center items-center duration-300  ${
          isHover ? "opacity-10" : "opacity-25"
        }`}
      ></div>
      <p className=" absolute text-white text-xl font-semibold">{title}</p>
    </Link>
  );
};

export default CityImageCards;
