import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "../IconComponent";

const AccountSection = ({ items }) => {
  const navigate = useNavigate();

  const fadeInVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="flex mt-7 w-full h-auto flex-col gap-4 justify-between items-center shrink-0 border border-border bg-white px-5 py-3 rounded-lg"
      initial="initial"
      animate="animate"
      variants={fadeInVariant}
    >
      {items.map(({ icon, title, desc, route }, index) => (
        <motion.div
          key={index}
          className="w-full h-auto p-1 flex items-start justify-start gap-4 cursor-pointer"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate(route)}
        >
          <Icon
            icon={icon}
            iconColor="text-primary"
            bgColor="bg-redShade"
            borderColor="border-border"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-textDark text-base font-sfDisplay font-semibold leading-normal">
              {title}
            </h1>
            <p className="text-[#595959] font-sfText text-xs leading-normal font-normal">
              {desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AccountSection;
