import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/PageTransition";

const Credits = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      Credits
    </motion.div>
  );
};

export default Credits;
