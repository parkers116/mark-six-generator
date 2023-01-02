import React, { useState } from "react";
import Button from "./Button";

type ObjOption = {
  id: string | number;
  label: string | number;
};

type SelectOptionProps = {
  label: string | number;
  arrOption: Array<ObjOption>;
  callback?: (selected: string | number) => void;
};

const SelectOption = (props: SelectOptionProps) => {
  const { label, arrOption, callback } = props;

  const [selected, setSelected] = useState<string | number>(
    arrOption[0]?.id ?? ""
  );

  return (
    <div className="p-4 box-border border-2 border-cyan-100 rounded-xl">
      <div className="p-2 text-xl underline">{label}</div>
      <div className="flex justify-between items-center">
        {arrOption.map((item) => (
          <Button label={item.label} width={100} />
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
