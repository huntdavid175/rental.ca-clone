import React from "react";
import MapSection from "../Map/MapSection";
import ListingSection from "../Listing/ListingSection";
import { Outlet } from "react-router-dom";

interface ApartmentsMainSectionProps {
  view: string;
}

const ApartmentsMainSection: React.FC<ApartmentsMainSectionProps> = ({
  view,
}) => {
  console.log(view);
  return (
    <>
      <div className="hidden w-full h-full md:flex overflow-hidden ">
        <MapSection />
        <ListingSection>
          <Outlet />
        </ListingSection>
      </div>
      {/* <div className="flex h-full md:hidden">
        {view === "map" ? (
          <MapSection />
        ) : view === "listing" ? (
          <ListingSection />
        ) : null}
      </div> */}
    </>
  );
};

export default ApartmentsMainSection;
