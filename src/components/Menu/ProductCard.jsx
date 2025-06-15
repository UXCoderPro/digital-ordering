// components/Menu/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Quantity from "../Quantity";
import { useCart } from "../../context/CartContext";

const backgroundColor = {
  normal: {
    container: "bg-white",
    label: "bg-redShade",
    costTxt: "text-primary",
    txt: "text-textDark",
  },
  Modifier: {
    container: "bg-modifier",
    label: "bg-modifierShade",
    costTxt: "text-[#B2BEC7]",
    txt: "text-white",
  },
  Combo: {
    container: "bg-combo",
    label: "bg-comboShade",
    costTxt: "text-[#C7BDB2]",
    txt: "text-white",
  },
};

const ProductCard = ({ item, highlight }) => {
  const { id, name, cost, image, type = "normal" } = item;
  const styles = backgroundColor[type];
  const { getProductQuantity, updateCartQuantity } = useCart();

  const quantity = getProductQuantity(id);
  const showQuantity = quantity > 0;

  const handleQuantityChange = (newQty) => {
    updateCartQuantity(id, newQty);
  };

  return (
    <div
      className={`flex flex-col h-80 justify-between  border rounded-2xl overflow-hidden cursor-pointer ${
        highlight ? "border-primary border-2" : "border-border "
      }   ${styles.container}`}
    >
      <div
        className="w-full h-52 bg-center bg-cover flex px-3 py-5 justify-center items-end"
        style={{ backgroundImage: `url(${image})` }}
      >
        {showQuantity && (
          <Quantity quantity={quantity} onChange={handleQuantityChange} />
        )}
      </div>
      <Link to={`/ProductInfo/${id}`}>
        <div className="w-full flex flex-col items-center  gap-3">
          <h1
            className={`text-center font-sfDisplay text-base w-4/5 font-semibold leading-normal ${styles.txt}`}
          >
            {name}
          </h1>

          <div
            className={`w-full flex justify-between items-center px-3 py-2 ${styles.label}`}
          >
            <p
              className={`text-base font-sfText font-semibold leading-normal ${styles.costTxt}`}
            >
              {cost}
            </p>
            <IoIosArrowForward className={styles.costTxt} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
