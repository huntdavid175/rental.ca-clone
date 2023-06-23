import React from "react";
import MapSection from "../Map/MapSection";
import ListingSection from "../Listing/ListingSection";

interface ApartmentsMainSectionProps {
  view: string;
}

const ApartmentsMainSection: React.FC<ApartmentsMainSectionProps> = ({
  view,
}) => {
  console.log(view);
  return (
    <>
      <div className="hidden w-full h-full md:flex  ">
        <MapSection />
        <ListingSection />
      </div>
      <div className="flex h-full md:hidden">
        {view === "map" ? (
          <MapSection />
        ) : view === "listing" ? (
          <ListingSection />
        ) : null}
      </div>
    </>
  );
};

export default ApartmentsMainSection;
