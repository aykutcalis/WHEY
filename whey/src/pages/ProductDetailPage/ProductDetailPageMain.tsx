// src/pages/ProductDetailPage/ProductDetailPageMain.tsx
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function ProductDetailPageMain() {
  const product = useLoaderData();  // Loader'dan gelen ürün verisini alıyoruz

  if (!product) {
    return <div>Product not found.</div>;  // Ürün verisi yoksa bir hata mesajı
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <div>{product.description}</div>
      <div><strong>Price:</strong> ${product.price}</div>
      {/* Diğer ürün bilgilerini buraya ekleyebilirsiniz */}
    </div>
  );
}

export default ProductDetailPageMain;
