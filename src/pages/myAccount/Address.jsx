import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/PageTransition";

const Address = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      Address
    </motion.div>
  );
};

export default Address;
