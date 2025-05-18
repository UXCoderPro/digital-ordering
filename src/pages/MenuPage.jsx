import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/PageTransition";
import Header from "../components/Menu/Header";
import BannerSlide from "../components/Menu/BannerSlide";
import Category from "../components/Menu/Category";
import Cart from "../components/Menu/Cart";
import categoryType from "../data/CategoryData";

const MenuPage = () => {
  // For Category Scroll Purpose
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryRefs = useRef({});

  // Initialize refs
  categoryType.forEach((cat) => {
    categoryRefs.current[cat.title] =
      categoryRefs.current[cat.title] || React.createRef();
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust sensitivity
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target.getAttribute("data-category");
          setSelectedCategory(category);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all category sections
    Object.keys(categoryRefs.current).forEach((catTitle) => {
      const ref = categoryRefs.current[catTitle];
      if (ref && ref.current) {
        ref.current.setAttribute("data-category", catTitle);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-screen overflow-y-auto scrollbar-hide bg-white"
    >
      <Header />
      <BannerSlide />
      <Category
        selected={selectedCategory}
        onCategorySelect={setSelectedCategory}
        categoryRefs={categoryRefs.current}
      />

      <Cart />
    </motion.div>
  );
};

export default MenuPage;
