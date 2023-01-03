import React, { useEffect, useState } from "react";
import Button from "./Button";

type ObjOption = {
  id: string | number;
  label: string | number;
};

type SelectOptionProps = {
  label: string | number;
  defaultId?: string | number;
  arrOption: Array<ObjOption>;
  callback?: (selected: string | number) => void;
};

const SelectOption = (props: SelectOptionProps) => {
  const { label, defaultId, arrOption, callback } = props;

  const [selected, setSelected] = useState<string | number>(
    defaultId ? defaultId : arrOption[0]?.id ?? ""
  );

  useEffect(() => {
    callback && callback(selected);
  }, [selected]);

  return (
    <div className="p-4 box-border border-2 border-cyan-100 rounded-xl">
      <div className="p-2 text-xl underline">{label}</div>
      <div className="flex justify-between items-center gap-2">
        {arrOption.map((item) => (
          <Button
            label={item.label}
            width={100}
            isSelected={selected === item.id}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
