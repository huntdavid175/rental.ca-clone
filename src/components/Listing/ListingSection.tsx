import React from "react";
// import Listings from "./Listings";

interface ListingSectionProps {
  children: React.ReactNode;
}

const ListingSection: React.FC<ListingSectionProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 flex-0 py-6 flex-grow  w-full px-4 md:max-w-[600px] md:min-w-[470px] bg-[#F6F8F9] relative overflow-auto">
      {/* <Listings /> */}
      {children}
    </div>
  );
};

export default ListingSection;
