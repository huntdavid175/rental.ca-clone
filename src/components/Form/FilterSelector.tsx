import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

interface FilterSelectorProps {
  title: string;
}

const FilterSelector: React.FC<FilterSelectorProps> = ({ title }) => {
  return (
    <div className="px-4 py-1 bg-zinc-200 flex items-center space-x-6 rounded-full ">
      <span>{title} </span>
      <span className="text-zinc-500">
        <ArrowDropDownOutlinedIcon />
      </span>
    </div>
  );
};

export default FilterSelector;
