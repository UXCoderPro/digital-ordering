import React from "react";

const ProductInfo = ({ name, description, cost }) => {
  return (
    <div className="px-4 py-6 bg-white border-b border-border">
      <h1 className="text-2xl font-semibold text-textDark font-sfDisplay ">
        {name}
      </h1>
      <p className="text-base text-textLight font-sfText mt-2">{description}</p>
      <h2 className="text-lg text-primary font-sfDisplay font-semibold mt-3">
        {cost}
      </h2>
    </div>
  );
};

export default ProductInfo;
