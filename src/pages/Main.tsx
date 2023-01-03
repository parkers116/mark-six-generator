import React, { useState } from "react";
import { Random } from "random-js";
import Chance from "chance";
import Ball from "../components/Ball";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";

type MainProps = {};

const Main = (props: MainProps) => {
  const DEFAULT_SELECTED_ALGO = "1";

  const [trigger, setTrigger] = useState<number>(0);
  const [selectedAlgo, setSelectedAlgo] = useState<string | number>(
    DEFAULT_SELECTED_ALGO
  );

  const arrOption = [
    { id: "1", label: "Native" },
    { id: "2", label: "Chance" },
    { id: "3", label: "Random.js" },
  ];

  const renderMarkSixCombination = () => {
    let setRandom = new Set<number>();

    if (trigger > 0) {
      while (setRandom.size < 6) {
        let randomNum = 0;

        console.log(selectedAlgo);

        switch (selectedAlgo) {
          case "1":
            randomNum = Math.floor(Math.random() * 49) + 1;
            break;
          case "2":
            randomNum = new Chance().integer({ min: 1, max: 49 });
            break;
          case "3":
            randomNum = new Random().integer(1, 49);
            break;
        }

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
        <SelectOption
          label={"Algo"}
          defaultId={DEFAULT_SELECTED_ALGO}
          arrOption={arrOption}
          callback={(selected) => setSelectedAlgo(selected)}
        />
      </div>
      <div className="flex justify-center p-3">
        <Button label="Start" onClick={() => setTrigger((prev) => prev + 1)} />
      </div>
      {renderMarkSixCombination()}
    </div>
  );
};

export default Main;
