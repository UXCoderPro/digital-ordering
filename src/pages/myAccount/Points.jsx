import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/PageTransition";

const Points = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      points
    </motion.div>
  );
};

export default Points;
