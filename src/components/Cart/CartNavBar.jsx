import React, { useState } from "react";
import CheckBox from "../CheckBox";

const CartNavBar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4 px-4 items-start py-4 drop-shadow-[0px_-4px_10px_rgba(0,0,0,0.10)] bg-redShade border-t border-border fixed bottom-7 z-50">
      {/* Opt-in Checkbox Section */}
      <div className="flex items-start gap-2">
        <CheckBox
          id="offer-optin"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p className="text-textDark font-sfDisplay text-sm font-medium leading-snug">
          Get Access to <span className="text-primary">Fantastic Offers!</span>{" "}
          Opt In for <span className="text-primary">Warely POS</span> Today!
        </p>
      </div>

      {/* Add Coupon Button */}
      <button className="w-full flex justify-center items-center py-3 rounded-xl bg-white px-6 text-secondary border border-border font-semibold font-sfDisplay text-base">
        Add Coupon
      </button>

      {/* Checkout Button */}
      <button className="w-full flex justify-between items-center py-3 rounded-xl bg-primary px-6 text-white font-semibold font-sfDisplay text-base">
        Check Out <span>$45.00</span>
      </button>
    </div>
  );
};

export default CartNavBar;
