// components/Menu/ProductList.jsx
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import productInfo from "../../data/ProductData";
import ProductCategory from "./ProductCategory";

const Product = ({ scrollToCategory, highlightProductId }) => {
  const sectionRefs = useRef({});

  const groupedProducts = useMemo(() => {
    return productInfo.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    if (scrollToCategory && sectionRefs.current[scrollToCategory]) {
      sectionRefs.current[scrollToCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollToCategory]);

  const setSectionRef = useCallback(
    (category) => (el) => {
      if (el) sectionRefs.current[category] = el;
    },
    []
  );

  return (
    <div className="w-full flex flex-col gap-8 px-4 pt-5 pb-36">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <ProductCategory
          key={category}
          category={category}
          items={items}
          ref={setSectionRef(category)}
          highlightProductId={highlightProductId}
        />
      ))}
    </div>
  );
};

export default React.memo(Product);
