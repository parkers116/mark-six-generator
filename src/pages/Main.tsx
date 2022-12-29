import React, { useState } from "react";
import Ball from "../components/Ball";
import Button from "../components/Button";

type MainProps = {};

const Main = (props: MainProps) => {
  const [trigger, setTrigger] = useState<number>(0);

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
        <Button label="Start" onClick={() => setTrigger((prev) => prev + 1)} />
      </div>

      {renderMarkSixCombination()}
    </div>
  );
};

export default Main;
