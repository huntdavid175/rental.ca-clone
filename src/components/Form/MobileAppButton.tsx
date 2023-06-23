import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";

interface MobileAppButtonProps {
  children: React.ReactNode;
  title: string;
}

const MobileAppButton: React.FC<MobileAppButtonProps> = ({
  children,
  title,
}) => {
  return (
    <button className="p-3 text-zinc-600 rounded-2xl text-lg">
      <span className="mr-1">{children}</span>
      {title}
    </button>
  );
};

export default MobileAppButton;
