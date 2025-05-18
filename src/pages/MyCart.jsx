import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";

const MyCart = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      My cart
    </motion.div>
  );
};

export default MyCart;
