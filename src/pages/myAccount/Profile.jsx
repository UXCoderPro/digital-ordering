import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/PageTransition";

const Profile = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      profile
    </motion.div>
  );
};
export default Profile;
