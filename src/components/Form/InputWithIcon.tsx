import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface InputWithIconProps {
  placeholder: string;
  full?: boolean;
  bgColor?: string;
  className?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder,
  full,
  bgColor,
  className,
}) => {
  return (
    <div
      className={`w-full  ${
        bgColor ? bgColor : "bg-white"
      } px-6 py-2 flex justify-center items-center ${
        full ? "rounded-full" : "rounded-sm"
      } `}
    >
      <SearchIcon className="text-[#3CB6D3]" />
      <input
        type="text"
        className={`${className} w-full border-none h-full   focus:ring-none  ${bgColor} `}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithIcon;
