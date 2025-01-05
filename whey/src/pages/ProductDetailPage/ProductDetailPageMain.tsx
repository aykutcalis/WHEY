// ProductDetailPageMain.tsx
import React from "react";
import ProductDetail from "./sections/ProductDetail";
import BestSellerCards from "../../components/BestSellerCards";
import LastViewedSection from "./sections/LastViewedSection";
import { exampleProducts } from "../../components/LastViewedDatas";

const ProductDetailPageMain: React.FC = () => {
  return (
    <>
      <ProductDetail />
      <LastViewedSection products={exampleProducts} /> {/* Burada doğru şekilde dizi geçiyoruz */}
      <BestSellerCards />
    </>
  );
};

export default ProductDetailPageMain;
