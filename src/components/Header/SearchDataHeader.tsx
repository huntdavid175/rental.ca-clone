import React from "react";
import MobileAppButton from "../Form/MobileAppButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const SearchDataHeader: React.FC = () => {
  return (
    <div className="w-full py-2">
      <div className="w-full md:max-w-[1300px]">
        <div className="w-full px-8 flex justify-between md:hidden">
          <MobileAppButton title="List">
            <ListAltIcon />{" "}
          </MobileAppButton>
          <MobileAppButton title="Map">
            <LocationOnIcon />{" "}
          </MobileAppButton>
          <MobileAppButton title="Filters">
            <FilterAltIcon />{" "}
          </MobileAppButton>
        </div>
      </div>
    </div>
  );
};

export default SearchDataHeader;
