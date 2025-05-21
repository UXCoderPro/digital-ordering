import React from "react";
import Icon from "../IconComponent";
import { MdCall } from "react-icons/md";
import brand from "../../assets/Menu/brand.jpg";

const OutletInfo = () => {
  return (
    <div className="mt-6 w-full flex justify-between items-center px-3.5 py-4 bg-white rounded-xl border border-border">
      <div className="flex items-center gap-3.5">
        <img
          src={brand}
          alt="Outlet"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-textDark font-sfDisplay text-base font-semibold">
            Stay Chill Cafe
          </h1>
          <p className="text-textDark font-sfText text-sm">
            Open Time: 11:00am - 12:00pm
          </p>
        </div>
      </div>
      <Icon
        icon={MdCall}
        iconColor="text-primary"
        bgColor="bg-redShade"
        borderColor="border-bgShade"
      />
    </div>
  );
};

export default OutletInfo;
