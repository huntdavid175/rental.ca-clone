import React from "react";
import ButtonWithIcon from "../Form/ButtonWithIcon";

const ListingMiniDetail: React.FC = () => {
  return (
    <div className="px-3 py-4 space-y-3">
      <div className="flex justify-between">
        <p className="text-xl font-bold text-defaultColor">$2216 - $2776</p>
        {/* <MobileAppButton
      title="Contact"
      className="border border-blue-600 rounded-full py-0 text-sm items-center"
    >
      <MailOutlineIcon />{" "}
    </MobileAppButton> */}
        <ButtonWithIcon title="Contact" />
      </div>

      <div className="flex gap-4 items-center">
        <p className="text-lg">Apartment</p>
        <p>2 weeks ago</p>
      </div>
      <div className="flex gap-3 text-xs font-bold text-zinc-700">
        <p>1-2 BED</p>
        <p>1 BATH</p>
        <p>785 - 1040FT</p>
      </div>
      <div className="text-sm text-zinc-500">
        <p>2105 90th Avenue SW-Calgary, AB</p>
      </div>
    </div>
  );
};

export default ListingMiniDetail;
