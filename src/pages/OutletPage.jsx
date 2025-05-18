import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";

const OutletPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      outlet
    </motion.div>
  );
};

export default OutletPage;
