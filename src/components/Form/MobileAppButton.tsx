import React from "react";

interface MobileAppButtonProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
  textColor?: string;
}

const MobileAppButton: React.FC<MobileAppButtonProps> = ({
  children,
  title,
  className,
  textColor,
}) => {
  return (
    <button
      className={`p-3 ${
        textColor ? textColor : "text-zinc-600"
      } rounded-2xl text-lg ${className}`}
    >
      <span className="mr-1">{children}</span>
      {title}
    </button>
  );
};

export default MobileAppButton;
