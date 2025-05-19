// src/components/BottomPromo.jsx
import React from "react";
import promo from "../assets/promo.png";

const BottomPromo = () => {
  return (
    <div className="w-full fixed bg-white bottom-0 h-7 bg-promo-bg flex justify-center items-center gap-1 border-t border-border">
      <p className="font-sfText text-xs font-semibold text-textDark">
        Powered By
      </p>
      <img src={promo} alt="warelypos" className="w-20 h-auto" />
      <p className="font-sfText text-xs font-semibold text-textDark">.com.sg</p>
    </div>
  );
};

export default BottomPromo;
