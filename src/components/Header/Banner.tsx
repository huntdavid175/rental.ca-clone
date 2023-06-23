import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-custom-background flex flex-col h-[470px] items-center">
      <div className="w-full md:max-w-2xl px-3 flex flex-col items-center text-center mt-20 space-y-6 md:space-y-10">
        <h1 className="text-5xl text-white font-semibold">
          The Most Rentals. Period.
        </h1>
        <p className="text-lg text-gray-200">
          Thousands of apartments, houses, and condos for rent across Canada
        </p>
        <div className="w-full bg-white px-6 py-2 flex justify-center items-center rounded-sm">
          <SearchIcon className="text-[#3CB6D3]" />
          <input
            type="text"
            className="w-full border-none  focus:ring-none text-xs"
            placeholder="Search City, Neighbourhood, Address or Ad#"
          />
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Banner;
