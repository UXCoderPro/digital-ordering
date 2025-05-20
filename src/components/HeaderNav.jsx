import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import Icon from "./IconComponent"; // Adjust path if needed

const HeaderNav = ({ title = "Page", onClose, showBorder = true }) => {
  return (
    <nav
      className={`w-full px-4 py-2 flex justify-between items-center bg-bgShade sticky top-0 z-40 ${
        showBorder ? "border-b border-b-border border-solid" : ""
      }`}
    >
      <h1 className="font-sfDisplay font-semibold text-lg">{title}</h1>
      {onClose && (
        <button onClick={onClose}>
          <Icon
            icon={VscChromeClose}
            iconColor="text-textDark"
            bgColor="bg-[rgba(255,255,255,0.30)]"
            borderColor="border-border"
          />
        </button>
      )}
    </nav>
  );
};

export default HeaderNav;
