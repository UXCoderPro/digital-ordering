import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";
import { useNavigate } from "react-router-dom";

import HeaderNav from "../components/HeaderNav";
import AddMore from "../components/Cart/AddMore";
import Pax from "../components/Cart/Pax";
import CartNavBar from "../components/Cart/CartNavBar";
import Icon from "../components/IconComponent";
import { MdDelete } from "react-icons/md";
import UpdateCart from "../components/Cart/UpdateCart";
import { useCart } from "../context/CartContext";

const MyCart = () => {
  const navigate = useNavigate();

  const { cart, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-screen overflow-y-auto scrollbar-hide bg-white"
    >
      <HeaderNav title="My Cart" onClose={() => navigate(-1)} />
      <AddMore />
      <Pax />

      <div className="w-full px-4 py-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-sfDisplay font-medium text-textDark">
            Total
            <span className="text-primary font-semibold"> {totalItems} </span>
            Items
          </h1>
          <Icon
            icon={MdDelete}
            iconColor="text-white"
            bgColor="bg-secondary"
            borderColor="border-secondary"
            className="cursor-pointer"
            onClick={clearCart}
          />
        </div>

        <div className="flex flex-col gap-3 mt-3 pb-56">
          {cart.map((items, index) => (
            <UpdateCart key={index} item={items} />
          ))}
        </div>
      </div>

      <CartNavBar />
    </motion.div>
  );
};

export default MyCart;
