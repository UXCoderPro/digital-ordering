import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/PageTransition";
import HeaderNav from "../../components/HeaderNav";
import { useNavigate } from "react-router-dom";
import BannerSlide from "../../components/Menu/BannerSlide";
import QrView from "../../components/Qr/QrView";

const Coupon = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-screen"
    >
      <HeaderNav title="My QR" onClose={() => navigate(-1)} />
      <BannerSlide />

      <div className=" w-full px-4 py-10 h-full flex flex-col gap-12 items-center justify-start">
        <h1 className="text-textDark font-sfDisplay text-center text-lg font-semibold w-3/4 leading-normal">
          Please Scan the QR to Load the Profile or Use the Credits
        </h1>
        <QrView />
      </div>
    </motion.div>
  );
};

export default Coupon;
