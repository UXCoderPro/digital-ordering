import React from "react";
import categoryType from "../../data/CategoryData";

// Category.js
const Category = ({ onCategorySelect, selected, categoryRefs }) => {
  const handleCategoryClick = (title) => {
    onCategorySelect(title);
    if (categoryRefs[title]) {
      categoryRefs[title].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex sticky top-0 z-10 w-full items-center font-sfDisplay text-xs font-medium leading-normal justify-start border-b border-solid border-b-border bg-bgShade px-4 overflow-hidden py-3 gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory scroll-smooth">
      {categoryType.map((index) => (
        <button
          key={index.title}
          onClick={() => handleCategoryClick(index.title)}
          className={`flex justify-center items-center border border-solid px-5 py-2 rounded-3xl shrink-0 cursor-pointer ${
            selected === index.title
              ? "bg-custom-red-gradient text-white border-0"
              : "bg-white border-border text-textDark"
          }`}
        >
          {index.title}
        </button>
      ))}
    </div>
  );
};

export default Category;
