import React from "react";
import { TiTick } from "react-icons/ti";

const CheckBox = ({ id, checked, onChange }) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div className="w-5 h-5 rounded-full border-2 border-border  flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition duration-200">
        {/* Check Icon */}
      </div>
    </label>
  );
};

export default CheckBox;
