import React from "react";

type ButtonProps = {
  label: number | string;
  onClick?: () => void;
  width?: number;
  isSelected?: boolean;
};

const Button = (props: ButtonProps) => {
  const { label, onClick, width, isSelected } = props;

  return (
    <button
      className={`flex justify-center items-center px-3 py-1.5 text-base border-2 rounded-full ${
        isSelected !== undefined && !isSelected
          ? "border-gray-500 text-gray-500"
          : ""
      }`}
      style={{ width: width }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
