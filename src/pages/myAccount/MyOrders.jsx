import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/PageTransition";

const MyOrders = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      My orders
    </motion.div>
  );
};
export default MyOrders;
