import React from "react";

type ButtonProps = {
  label: number | string;
  onClick?: () => void;
  width?: number;
};

const Button = (props: ButtonProps) => {
  const { label, onClick, width } = props;

  return (
    <button
      className="flex justify-center items-center px-3 py-1.5 text-base border-2 rounded-full"
      style={{ width: width }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
