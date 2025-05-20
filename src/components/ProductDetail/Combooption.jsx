import React from "react";

const ComboOptions = ({ combo, comboIndex, selectedCombo, onSelect }) => {
  return (
    <div className="mb-6">
      <h2 className="text-base font-medium font-sfDisplay text-textLight mb-3">
        Combo Options
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {combo.options.map((option, index) => (
          <div
            key={option.id || index}
            onClick={() => onSelect(comboIndex, option)}
            className={`flex gap-4 overflow-hidden border rounded-lg cursor-pointer ${
              selectedCombo?.name === option.name
                ? "border-primary"
                : "border-border"
            }`}
          >
            <img
              src={option.cover}
              alt={option.name}
              className="w-28 h-28 object-cover"
            />
            <div className="flex flex-col py-3 w-full pr-2 justify-between">
              <p className="text-base font-sfDisplay font-semibold text-textDark">
                {option.name}
              </p>
              <span className="text-sm w-full font-sfDisplay text-primary bg-redShade px-2 py-1">
                {option.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComboOptions;
