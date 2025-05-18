import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";

const ProductDetail = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      product details
    </motion.div>
  );
};

export default ProductDetail;
