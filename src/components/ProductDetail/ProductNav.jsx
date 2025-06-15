import React from "react";
import Quantity from "../Quantity";

const ProductNav = ({
  quantity,
  setQuantity,
  basePrice,
  selectedModifiers,
  selectedCombos,
  onAddToCart, // ✅ receive this prop
}) => {
  // Convert base price string to number
  const base =
    typeof basePrice === "string"
      ? parseFloat(basePrice.replace("$", ""))
      : basePrice || 0;

  // Sum modifier prices
  const modifiersTotal = Object.values(selectedModifiers).reduce(
    (sum, opt) => sum + (opt?.price || 0),
    0
  );

  // Sum combo prices
  const combosTotal = Object.values(selectedCombos).reduce(
    (sum, opt) => sum + (opt?.price || 0),
    0
  );

  // Final total = (base + modifiers + combos) * quantity
  const totalPrice = (base + modifiersTotal + combosTotal) * quantity;

  return (
    <div className="fixed bottom-6 w-full flex flex-col  justify-between items-center z-50 bg-white pb-2">
      <nav className="w-11/12 px-4 py-5 shadow-md bg-white border border-border rounded-lg flex items-center justify-between">
        <div>
          <Quantity quantity={quantity} onChange={setQuantity} />
        </div>
        <button
          onClick={onAddToCart}
          className={`px-8 py-2 rounded-md flex justify-center items-center gap-2 font-semibold transition duration-200 ${
            quantity > 0
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-bgShade text-gray-500  cursor-not-allowed"
          }`}
          disabled={quantity <= 0}
        >
          Add Item ${totalPrice.toFixed(2)}
        </button>
      </nav>
    </div>
  );
};

export default ProductNav;
