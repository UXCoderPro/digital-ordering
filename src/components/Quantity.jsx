import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Quantity = ({ quantity, onChange }) => {
  const safeQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 0;

  const decrease = () => {
    if (safeQuantity > 0) onChange(safeQuantity - 1);
  };

  const increase = () => {
    onChange(safeQuantity + 1);
  };

  return (
    <div className="flex w-3/4 min-w-36 h-10 justify-between items-center shrink-0 rounded-md border border-border bg-white overflow-hidden">
      <button
        className="h-full w-10 flex justify-center items-center border-r border-border bg-white p-1 cursor-pointer disabled:opacity-40"
        onClick={decrease}
        disabled={safeQuantity === 0}
      >
        <AiOutlineMinus className="text-textDark" />
      </button>

      <h1 className="text-textDark font-sfDisplay text-sm font-medium">
        {safeQuantity}
      </h1>

      <button
        className="h-full w-10 flex justify-center items-center border-l border-border bg-primary p-1 cursor-pointer"
        onClick={increase}
      >
        <AiOutlinePlus className="text-white" />
      </button>
    </div>
  );
};

export default Quantity;
