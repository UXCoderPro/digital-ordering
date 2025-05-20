import React from "react";

const ModifierOptions = ({ modifiers, selectedModifiers, onSelect }) => {
  return (
    <div className="w-full">
      {modifiers.map((modifier, modIndex) => (
        <div key={modIndex} className="mb-6 flex flex-col gap-3 justify-start">
          <h2 className="mb-2 text-base font-sfDisplay text-textLight font-medium">
            {modifier.name}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {modifier.options.map((opt, optIndex) => (
              <div
                key={optIndex}
                onClick={() => onSelect(modifier.name, opt)}
                className={`flex flex-col items-center border rounded-xl gap-2 cursor-pointer overflow-hidden ${
                  selectedModifiers[modifier.name]?.name === opt.name
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                <img
                  src={opt.cover}
                  alt={opt.name}
                  className="w-full h-32 object-cover"
                />
                <p className="text-base font-sfDisplay font-medium text-textDark mt-2">
                  {opt.name}
                </p>
                {opt.price !== 0 && (
                  <span className="text-xs font-sfDisplay text-primary bg-bgShade w-full text-center py-1">
                    ${opt.price}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModifierOptions;
