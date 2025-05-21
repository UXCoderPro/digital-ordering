import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";

import OutletInfo from "../components/MyAccount/OutletInfo";
import QrUserInfo from "../components/MyAccount/QrUserInfo";
import CrmInfo from "../components/MyAccount/CrmInfo";
import { FaSackDollar, FaHandHoldingDollar } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import AccountSection from "../components/MyAccount/AccountSection";
import { GiMilkCarton } from "react-icons/gi";
import { TiUser } from "react-icons/ti";
import { PiAddressBookFill } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";

const AccountPage = () => {
  const crmItems = [
    {
      icon: FaSackDollar,
      bgColor: "bg-[rgba(73,190,48,0.30)]",
      iconColor: "text-[#49be30]",
      borderColor: "border-border",
      title: "Credit",
      value: "2500",
      valueColor: "text-[#49be30]",
      route: "/account/Credits",
    },
    {
      icon: FaHandHoldingDollar,
      bgColor: "bg-[rgba(33,150,243,0.30)]",
      iconColor: "text-[#2196F3]",
      borderColor: "border-border",
      title: "Points",
      value: "150",
      valueColor: "text-[#2196F3]",
      route: "/account/Points",
    },
    {
      icon: BiSolidCoupon,
      bgColor: "bg-[rgba(255,166,77,0.30)]",
      iconColor: "text-[#FFA64D]",
      borderColor: "border-border",
      title: "Coupon",
      value: "10",
      valueColor: "text-[#FFA64D]",
      route: "/account/Coupon",
    },
  ];

  const actionItems = [
    {
      icon: GiMilkCarton,
      title: "My Orders",
      desc: "Review & Access Order History",
      route: "/account/MyOrders",
    },
    {
      icon: TiUser,
      title: "Personal Details",
      desc: "Check your personal details",
      route: "/account/Profile",
    },
    {
      icon: PiAddressBookFill,
      title: "Address",
      desc: "Organize & Maintain Delivery Address",
      route: "/account/Address",
    },
    {
      icon: MdOutlineLogin,
      title: "Logout",
      desc: "Logout from this Device",
      route: "/",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="bg-bgShade w-full min-h-screen overflow-y-auto scrollbar-hide px-4 pb-44"
    >
      <h2 className="text-textDark font-sfDisplay text-lg font-semibold mt-7">
        My Account
      </h2>

      <OutletInfo />
      <QrUserInfo route="/account/MyQr" />

      {/* CRM Grid */}
      <div className="grid grid-cols-3 gap-5 mt-7">
        {crmItems.map((item, index) => (
          <CrmInfo key={index} {...item} />
        ))}
      </div>

      <AccountSection items={actionItems} />
    </motion.div>
  );
};

export default AccountPage;
