import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/Splash/bg.svg";
import brand from "../assets/Splash/brand.svg";

const SplashScreen = () => {
  return (
    <div className="bg-custom-red-gradient flex justify-center items-center w-full h-screen overflow-hidden relative">
      <img
        src={bg}
        alt="Background"
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="relative z-10 w-auto h-12 flex items-center justify-center">
        <img
          src={brand}
          alt="Brand"
          className="relative z-10 w-auto h-full object-contain"
        />

        {/* Light reflection overlay */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="w-32 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 blur-sm rotate-[20deg]" />
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
