// import React from "react";
// import { IoMdCart } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

// const Cartico = () => {
//   const navigate = useNavigate();
//   const { cartItems } = useCart();

//   const handleNavigation = () => {
//     navigate("/MyCart");
//   };

//   const hasItems = cartItems.length > 0;

//   return (
//     <button
//       onClick={handleNavigation}
//       className={`fixed right-4 bottom-32 border border-solid flex justify-center items-center w-14 h-14 p-3 rounded-full z-10 shadow-md transition-colors duration-300 ${
//         hasItems ? "bg-primary border-primary" : "bg-bgShade border-border"
//       }`}
//       aria-label="Go to cart"
//       title="Go to cart"
//     >
//       <IoMdCart
//         className={`h-auto w-6 ${hasItems ? "text-white" : "text-textDark"}`}
//       />
//     </button>
//   );
// };

// export default Cartico;

import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Cart = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/MyCart");
  };

  return (
    <button
      onClick={handleNavigation}
      className={`fixed right-4 bottom-36 border border-solid flex justify-center items-center w-14 h-14 p-3 rounded-full z-50 shadow-md transition-colors duration-300 bg-bgShade border-border"
      `}
      aria-label="Go to cart"
      title="Go to cart"
    >
      <IoMdCart className={`h-auto w-6 text-textDark`} />
    </button>
  );
};

export default Cart;
