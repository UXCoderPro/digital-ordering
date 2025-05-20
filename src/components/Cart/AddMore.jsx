import React, { useMemo, useState } from "react";
import productInfo from "../../data/ProductData";
import Quantity from "../Quantity";

const backgroundColor = {
  normal: {
    container: "bg-white",
    label: "bg-redShade",
    costTxt: "text-primary",
    txt: "text-textDark",
    btn: "bg-primary",
    btnTxt: "text-white",
  },
  Modifier: {
    container: "bg-modifier",
    label: "bg-modifierShade",
    costTxt: "text-[#B2BEC7]",
    txt: "text-white",
    btn: "bg-[#B2BEC7]",
    btnTxt: "text-[#060749]",
  },
  Combo: {
    container: "bg-combo",
    label: "bg-comboShade",
    costTxt: "text-[#C7BDB2]",
    txt: "text-white",
    btn: "bg-[#C7BDB2]",
    btnTxt: "text-[#492F06]",
  },
};

const AddMore = () => {
  const randomProducts = useMemo(() => {
    const shuffled = [...productInfo].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }, []);

  // Track active state and quantity for each product by id
  const [activeItems, setActiveItems] = useState({});

  const handleAddClick = (id) => {
    setActiveItems((prev) => ({
      ...prev,
      [id]: { quantity: 1 },
    }));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setActiveItems((prev) => ({
      ...prev,
      [id]: { quantity: newQuantity },
    }));
  };

  return (
    <div className="w-full py-5 pl-4 bg-redShade flex flex-col gap-2 border-b border-border border-solid">
      <h1 className="font-sfDisplay font-medium text-base text-textDark">
        Add More
      </h1>
      <div className="flex w-full overflow-x-auto scrollbar-hide gap-3 pr-4">
        {randomProducts.map((item) => {
          const type = item.type || "normal";
          const styles = backgroundColor[type];
          const isActive = !!activeItems[item.id];
          const quantity = activeItems[item.id]?.quantity || 1;

          return (
            <div
              key={item.id}
              className={`flex min-w-72 h-28 items-center gap-3 border border-solid rounded-lg overflow-hidden transition-all duration-200
                ${styles.container}
                ${isActive ? "border-primary" : "border-border"}
              `}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-24 h-full object-cover"
              />
              <div className="flex flex-col justify-between pr-2 w-full gap-1 py-2">
                <h2
                  className={`font-sfText text-sm font-semibold ${styles.txt}`}
                >
                  {item.name}
                </h2>
                <p
                  className={`font-sfText text-sm font-semibold ${styles.costTxt}`}
                >
                  {item.cost}
                </p>

                {isActive ? (
                  <Quantity
                    quantity={quantity}
                    onChange={(val) => handleQuantityChange(item.id, val)}
                  />
                ) : (
                  <button
                    onClick={() => handleAddClick(item.id)}
                    className={`px-4 py-2 text-xs font-sfText w-full rounded-md flex justify-center items-center gap-2 ${styles.btn} ${styles.btnTxt}`}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddMore;
