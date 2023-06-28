import React from "react";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import ListingMiniDetail from "./ListingMiniDetail";

interface ListingCardProps {
  listingDetails: ListingDetails;
}

interface ListingDetails {
  priceRange: string;
  featured: boolean;
  address: string;
  images: string[];
  contactEmail: string;
  datePosted: string;
}
const ListingCard: React.FC = () => {
  return (
    <Link to="listingId">
      <div className="w-full shadow-xl mt-4">
        <div className="w-full  bg-black">
          <ImageSlider />
          {/* <img src="https://images.rentals.ca/property-pictures/medium/calgary-ab/333728/apartment-15861870.jpg" /> */}
        </div>
        <ListingMiniDetail />
      </div>
    </Link>
  );
};

export default ListingCard;
