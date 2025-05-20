import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import Icon from "../IconComponent";

const ProductHeader = ({ image, onClose }) => {
  return (
    <div
      className="h-64 bg-cover bg-center sticky top-0 flex justify-end items-start pr-4 pt-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <button onClick={onClose}>
        <Icon
          icon={VscChromeClose}
          iconColor="text-white"
          bgColor="bg-[rgba(255,255,255,0.30)]"
          borderColor="border-border"
        />
      </button>
    </div>
  );
};

export default ProductHeader;
