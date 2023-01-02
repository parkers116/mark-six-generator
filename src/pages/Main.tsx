import React, { useState } from "react";
import Ball from "../components/Ball";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";

type MainProps = {};

const Main = (props: MainProps) => {
  const [trigger, setTrigger] = useState<number>(0);

  const arrOption = [
    { id: "1", label: "Native" },
    { id: "2", label: "Chance" },
    { id: "3", label: "Random.js" },
  ];

  const renderMarkSixCombination = () => {
    let setRandom = new Set<number>();

    if (trigger > 0) {
      while (setRandom.size < 6) {
        setRandom.add(Math.floor(Math.random() * 49) + 1);
      }
    }

    return (
      <div className="flex justify-around h-10 text-white">
        {Array.from(setRandom)
          .sort((a, b) => a - b)
          .map((item) => (
            <Ball label={item} />
          ))}
      </div>
    );
  };

  return (
    <div>
      <div className="text-4xl">Mark Six Generator</div>
      <div className="flex justify-center p-3">
        <SelectOption label={"Algo"} arrOption={arrOption} />
      </div>
      <div className="flex justify-center p-3">
        <Button label="Start" onClick={() => setTrigger((prev) => prev + 1)} />
      </div>
      {renderMarkSixCombination()}
    </div>
  );
};

export default Main;
