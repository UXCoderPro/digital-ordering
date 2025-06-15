import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Count total quantity of items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigation = () => {
    navigate("/MyCart");
  };

  const hasItems = totalItems > 0;

  return (
    <button
      onClick={handleNavigation}
      className={`fixed right-4 bottom-36 border border-solid flex justify-center items-center w-14 h-14 p-3 rounded-full z-50 shadow-md transition-colors duration-300 ${
        hasItems
          ? "bg-custom-red-gradient border-red-400"
          : "bg-bgShade border-border"
      }
      `}
      aria-label="Go to cart"
      title="Go to cart"
    >
      <IoMdCart
        className={`h-auto w-6 ${hasItems ? "text-white" : "text-textDark"}`}
      />
      {hasItems && (
        <span className="absolute top-1.5 right-1.5 text-xs font-sfDisplay bg-white text-red-500 font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-tight">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default Cart;
