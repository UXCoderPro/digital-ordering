import React from "react";
import { BsSearchHeart } from "react-icons/bs";
import brand from "../../assets/Menu/brand.jpg"; // Adjust path as needed

const Header = () => {
  return (
    <header className="w-full h-14 flex justify-between items-center border-b border-solid border-border bg-bgShade">
      {/* Logo / Brand Area */}
      <div className="flex items-center justify-center w-14 h-full bg-black">
        <img
          src={brand}
          alt="Outlet Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Table Info */}
      <h1 className="text-textDark font-sfDisplay text-base font-semibold">
        T1 - 4 Pax
      </h1>

      {/* Search Icon */}
      <div className="flex items-center justify-center w-14 h-full border-solid border-l border-l-border cursor-pointer">
        <BsSearchHeart className="text-textDark w-5 h-5" />
      </div>
    </header>
  );
};

export default Header;
