// components/Menu/ProductCategory.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductCategory = React.forwardRef(({ category, items }, ref) => {
  return (
    <div ref={ref}>
      <h1 className="font-sfDisplay text-base font-medium text-textDark px-2 rounded-3xl py-3 w-full bg-redShade mb-5">
        {category}
      </h1>
      <div className="grid grid-cols-2 gap-x-1 gap-y-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
});

export default ProductCategory;
