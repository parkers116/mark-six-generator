import React from "react";

type ButtonProps = {
  label: number | string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { label, onClick } = props;

  return (
    <button
      className="flex justify-center items-center px-3 py-1.5 text-base border-2 rounded-full"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
