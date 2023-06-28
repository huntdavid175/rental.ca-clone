import React from "react";
import ListingCard from "../Cards/ListingCard";

const Listings: React.FC = () => {
  return (
    <>
      {" "}
      <div className="flex space-x-6 text-lg font-semibold">
        <p className="text-defaultColor">Home</p>
        <p className="text-defaultColor">AB</p>
        <p> Calgary</p>
      </div>
      <div>
        <p>Calgary APartments, Condos and Houses for Rent</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p className="font-semibold">195 Rentals found</p>
          <p className="font-semibold">
            Sort<span className="ml-3 font-normal">Default</span>
          </p>
        </div>
        <p>Rental Guide</p>
      </div>
      <div>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </>
  );
};

export default Listings;
