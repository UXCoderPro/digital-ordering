import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";

const MorePage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      More
    </motion.div>
  );
};

export default MorePage;
