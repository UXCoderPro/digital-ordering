import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Menu/Header";
import BannerSlide from "../components/Menu/BannerSlide";
import Category from "../components/Menu/Category";
import Product from "../components/Menu/ProductList";
import Cart from "../components/Menu/Cart";
import PageLoaderWrapper from "../components/common/PageLoaderWrapper";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import Icon from "../components/IconComponent";
import { IoIosCart } from "react-icons/io";
import { useRef } from "react";

const SuccessToast = () => {
  return (
    <div className="w-full py-1  flex gap-3 px-4 items-center rounded-full justify-center bg-custom-green-gradient">
      <Icon
        icon={IoIosCart}
        iconColor="text-white"
        bgColor="bg-transparent"
        borderColor="border-trasparent"
      />
      <p className="text-white font-sfDisplay font-medium text-base leading-normal">
        Selected Items Added to Cart
      </p>
    </div>
  );
};

const MenuPage = () => {
  const [selectedcategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { highlightedProductId } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const hasShownToast = useRef(false);

  useEffect(() => {
    if (
      !hasShownToast.current &&
      location.state?.fromDetail &&
      location.state?.productId
    ) {
      hasShownToast.current = true;

      toast.custom((t) => <SuccessToast />, {
        duration: 3000,
      });

      // Remove state from URL to avoid triggering again
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (location.state?.fromDetail && location.state?.productId) {
      setSelectedCategory(location.state.category || "");
    }
    // fake loader for visual effect
    const timer = setTimeout(() => setLoading(true), 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <PageLoaderWrapper loading={loading}>
      <div className="w-full h-screen overflow-y-auto scrollbar-hide bg-white">
        <Header />
        <BannerSlide />
        <Category
          selected={selectedcategory}
          onCategorySelect={setSelectedCategory}
        />
        <Product
          scrollToCategory={selectedcategory}
          highlightProductId={highlightedProductId}
        />
        <Cart />
      </div>
    </PageLoaderWrapper>
  );
};

export default MenuPage;
