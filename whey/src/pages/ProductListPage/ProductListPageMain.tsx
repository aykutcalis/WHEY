// src/pages/ProductListPage/ProductListPageMain.tsx
import React from "react";
import { useParams } from "react-router-dom";
import ProteinPage from "./products/Protein";

const ProductListPageMain: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  switch (categoryName) {
    case "protein":
      return <ProteinPage />;
    // Diğer kategoriler için case eklenebilir
    default:
      return <div>Geçersiz kategori!</div>;
  }
};

export default ProductListPageMain;
