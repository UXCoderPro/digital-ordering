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

const MyCart = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-screen overflow-y-auto scrollbar-hide"
    >
      <HeaderNav title="My Cart" onClose={() => navigate(-1)} />
      <AddMore quantity={quantity} setQuantity={setQuantity} />
      <Pax />
      <div className="w-full px-4 py-6 flex flex-col gap-2 ">
        <div className="flex justify-between w-full h-6 items-center">
          <h1 className="text-textDark font-sfDisplay font-normal text-sm">
            Total <span className="text-primary">3</span> Items
          </h1>
          <Icon
            icon={MdDelete}
            iconColor="text-white"
            bgColor="bg-secondary"
            borderColor="border-secondary"
            className="cursor-pointer"
          />
        </div>

        <div className="w-full h-6 flex-col gap-3 items-start justify-start mt-7 bg-black"></div>
      </div>
      <CartNavBar />
    </motion.div>
  );
};

export default MyCart;
