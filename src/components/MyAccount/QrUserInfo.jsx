import React from "react";
import Icon from "../IconComponent";
import Qr from "../../assets/Account/Qr.png";
import { FaUserTie } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const QrUserInfo = ({ route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) navigate(route);
  };

  return (
    <div className="w-full mt-6 bg-account-bg bg-center bg-cover rounded-xl flex justify-between items-center px-3.5 py-10">
      <img
        src={Qr}
        alt="Warely QR"
        onClick={handleClick}
        className="w-28 h-auto cursor-pointer"
      />
      <div className="flex flex-col items-end gap-2 text-white">
        <div className="flex items-center gap-4">
          <h1 className="font-sfDisplay text-base font-medium">
            Abdul Aziz V I
          </h1>

          <Icon
            icon={FaUserTie}
            iconColor="text-white"
            bgColor="bg-rgba(255,255,255,0.30)"
            borderColor="border-primary"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="font-sfDisplay text-base font-medium">+91 7904332064</p>

          <Icon
            icon={MdCall}
            iconColor="text-white"
            bgColor="bg-rgba(255,255,255,0.30)"
            borderColor="border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default QrUserInfo;
