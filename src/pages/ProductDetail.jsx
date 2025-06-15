import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ProductData from "../data/ProductData";
import { pageVariants, pageTransition } from "../utils/PageTransition";
import ProductHeader from "../components/ProductDetail/Productheader";
import ProductInfo from "../components/ProductDetail/productInfo";
import ComboOptions from "../components/ProductDetail/Combooption";
import ModifierOptions from "../components/ProductDetail/ModifierOption";
import ProductNav from "../components/ProductDetail/ProductNav";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductData.find((item) => item.id === parseInt(id));

  const {
    addToCart,
    setHighlightedProductId,
    cart,
    updateCartQuantity,
    getProductQuantity,
  } = useCart(); // ✅ hook from cart context

  // ✅ INIT QUANTITY from cart or start with 1
  const [quantity, setQuantity] = useState(() => {
    const existingQty = getProductQuantity(id);
    return existingQty > 0 ? existingQty : 1; // default to 1 for new product
  });
  const [selectedModifiers, setSelectedModifiers] = useState({});
  const [selectedCombos, setSelectedCombos] = useState({});

  // ✅ SYNC with cart on cart change
  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === parseInt(id));
    if (itemInCart) {
      setQuantity(itemInCart.quantity);
    }
  }, [cart, id]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateCartQuantity(id, newQuantity); // ✅ update context too
  };

  const handleModifierSelect = (modifierName, option) => {
    setSelectedModifiers((prev) => ({ ...prev, [modifierName]: option }));
  };

  const handleComboSelect = (comboIndex, option) => {
    setSelectedCombos((prev) => ({ ...prev, [comboIndex]: option }));
  };

  if (!product) {
    return <div className="text-center text-xl py-10">Product not found.</div>;
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      quantity,
      selectedModifiers,
      selectedCombos,
    };

    addToCart(itemToAdd); // ✅ Push to cart
    setHighlightedProductId(product.id);
    navigate("/", {
      state: {
        fromDetail: true,
        productId: product.id,
        category: product.category,
      },
    });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <div className="w-full h-screen overflow-y-auto scrollbar-hide">
        <ProductHeader image={product.image} onClose={() => navigate(-1)} />
        <ProductInfo
          name={product.name}
          description={product.description}
          cost={product.cost}
        />

        <div className="px-4 pt-6 pb-32 w-full">
          {product.type === "Combo" && product.combo && (
            <ComboOptions
              combo={product.combo[0]}
              comboIndex={0}
              selectedCombo={selectedCombos[0]}
              onSelect={handleComboSelect}
            />
          )}

          {product.type === "Modifier" && product.modifiers && (
            <ModifierOptions
              modifiers={product.modifiers}
              selectedModifiers={selectedModifiers}
              onSelect={handleModifierSelect}
            />
          )}
        </div>
        <ProductNav
          quantity={quantity}
          setQuantity={handleQuantityChange}
          basePrice={product.cost}
          selectedModifiers={selectedModifiers}
          selectedCombos={selectedCombos}
          onAddToCart={handleAddToCart} // ✅ callback
        />
      </div>
    </motion.div>
  );
};

export default ProductDetail;
