import React from "react";

interface BasicButtonProps {
  title: string;
  children?: React.ReactNode;
}

const BasicButton: React.FC<BasicButtonProps> = ({ children, title }) => {
  return (
    <button className="px-4 py-1 bg-white text-[#3CB6D3] rounded-2xl text-md">
      {children}
      {title}
    </button>
  );
};

export default BasicButton;
