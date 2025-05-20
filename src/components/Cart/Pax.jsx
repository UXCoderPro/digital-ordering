import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Icon from "../IconComponent";

const Pax = () => {
  return (
    <div className="w-full px-4 py-2 flex justify-between items-center border-b border-border bg-white cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-10 h-10">
          <FaUsers className="text-primary w-5 h-auto" aria-label="Pax Icon" />
        </div>
        <h1 className="font-sfDisplay text-base font-semibold text-textDark">
          PAX
        </h1>
      </div>

      <Icon
        icon={IoIosArrowForward}
        iconColor="text-textDark"
        bgColor="bg-[rgba(255,255,255,0.30)]"
        borderColor="border-border"
      />
    </div>
  );
};

export default Pax;
