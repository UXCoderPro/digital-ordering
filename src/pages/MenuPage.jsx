import React, { useState } from "react";
import Header from "../components/Menu/Header";
import BannerSlide from "../components/Menu/BannerSlide";
import Category from "../components/Menu/Category";
import Product from "../components/Menu/ProductList";
import Cart from "../components/Menu/Cart";
import PageLoaderWrapper from "../components/common/PageLoaderWrapper";

const MenuPage = () => {
  const [selectedcategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <PageLoaderWrapper loading={loading}>
      <div className="w-full h-screen overflow-y-auto scrollbar-hide bg-white">
        <Header />
        <BannerSlide />
        <Category
          selected={selectedcategory}
          onCategorySelect={setSelectedCategory}
        />
        <Product scrollToCategory={selectedcategory} />
        <Cart />
      </div>
    </PageLoaderWrapper>
  );
};

export default MenuPage;
