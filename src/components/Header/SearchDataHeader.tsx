import React from "react";
import MobileAppButton from "../Form/MobileAppButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FilterSelector from "../Form/FilterSelector";
import InputWithIcon from "../Form/InputWithIcon";

const SearchDataHeader: React.FC = () => {
  return (
    <div className="w-full py-2 flex justify-center bg-white">
      <div className="w-full md:max-w-[1220px] ">
        {/* For Mobile Screen  */}
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

        <div className="w-full hidden md:flex justify-between items-center">
          <div className="flex space-x-6">
            <div>
              <InputWithIcon
                className="py-0"
                placeholder="Search City, Address or Ad #"
                bgColor="bg-zinc-200"
                full
              />
            </div>
            <div>
              <FilterSelector title="Rent" />
            </div>
            <div>
              <FilterSelector title="Type" />
            </div>
            <div>
              <FilterSelector title="Beds" />
            </div>
            <div>
              <MobileAppButton
                title="All Filters"
                className="border border-blue-800 rounded-full text-blue-800 py-1 text-base"
              />
            </div>
            <div>
              <MobileAppButton
                title="Save Alert"
                className="bg-teal-800 rounded-full py-1"
                textColor="text-white"
              >
                <NotificationsActiveOutlinedIcon />
              </MobileAppButton>
            </div>
          </div>
          <div>
            <MobileAppButton title="Alert">
              {" "}
              <NotificationsActiveOutlinedIcon />
            </MobileAppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDataHeader;
