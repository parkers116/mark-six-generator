import React from "react";

type Props = {
  label: number | string;
};

const Ball = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-10 h-10 text-xl rounded-full bg-green-500">
      {props.label}
    </div>
  );
};

export default Ball;
