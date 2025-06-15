import React, { useState } from "react";
import Quantity from "../Quantity";
import CheckBox from "../CheckBox";
import { IoMdArrowDropdown } from "react-icons/io";
import food from "../../assets/product/Beef/Beef.jpg";
import { useCart } from "../../context/CartContext";
import { MdDelete } from "react-icons/md";
import Icon from "../IconComponent";

const UpdateCart = ({ item, onQuantityChange }) => {
  const [checked, setChecked] = useState(false);
  const [click, setClick] = useState(false);

  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQty) => {
    updateQuantity(item.id, newQty);
  };

  return (
    <div className="w-full py-4 border-b border-border flex flex-col gap-4">
      {/* Top section with image, title, quantity */}
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center">
          <img
            src={item.img}
            alt="Beef Combo Pack"
            className="w-20 h-20 rounded-md object-cover"
          />
          <h1 className="text-base font-sfDisplay font-semibold text-textDark">
            {item.name}
          </h1>
        </div>
        <div>
          <Quantity quantity={item.quantity} onChange={handleQuantityChange} />
          <Icon
            icon={MdDelete}
            iconColor="text-white"
            bgColor="bg-secondary"
            borderColor="border-secondary"
            className="cursor-pointer"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      </div>

      {/* Options and Price */}
      <div className="flex justify-between w-full items-start">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <CheckBox
              id="takeaway"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className="text-sm text-textDark font-sfText">
              Do you need Take Away?
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <CheckBox
              id="servelater"
              checked={click}
              onChange={() => setClick(!click)}
            />
            <span className="text-sm text-textDark font-sfText">
              Serve Later
            </span>
          </label>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <h1 className="text-base font-sfDisplay font-bold text-textDark">
            {item.cost}
          </h1>
          <p className="text-sm text-primary font-sfText flex items-center gap-1 cursor-pointer">
            Expand <IoMdArrowDropdown />
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateCart;
