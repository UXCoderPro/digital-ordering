import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ProductData from "../data/ProductData";
import { pageVariants, pageTransition } from "../utils/PageTransition";
import ProductHeader from "../components/ProductDetail/Productheader";
import ProductInfo from "../components/ProductDetail/productInfo";
import ComboOptions from "../components/ProductDetail/Combooption";
import ModifierOptions from "../components/ProductDetail/ModifierOption";
import ProductNav from "../components/ProductDetail/ProductNav";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductData.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedModifiers, setSelectedModifiers] = useState({});
  const [selectedCombos, setSelectedCombos] = useState({});

  const handleModifierSelect = (modifierName, option) => {
    setSelectedModifiers((prev) => ({ ...prev, [modifierName]: option }));
  };

  const handleComboSelect = (comboIndex, option) => {
    setSelectedCombos((prev) => ({ ...prev, [comboIndex]: option }));
  };

  if (!product) {
    return <div className="text-center text-xl py-10">Product not found.</div>;
  }

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
          setQuantity={setQuantity}
          basePrice={product.cost}
          selectedModifiers={selectedModifiers}
          selectedCombos={selectedCombos}
        />
      </div>
    </motion.div>
  );
};

export default ProductDetail;
