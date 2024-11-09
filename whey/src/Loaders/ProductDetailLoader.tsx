// src/loaders/productDetailLoader.ts
export async function productDetailLoader({ params }: any) {
    const productId = params.productId; // URL'den gelen productId'yi alıyoruz
    
    try {
      // API'ye istek atıyoruz. Örneğin:
      const response = await fetch(`/api/products/${productId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
  
      const productData = await response.json();
      return productData; // Ürün verisini döndürüyoruz.
    } catch (error) {
      console.error(error);
      return null;  // Hata durumunda null döndürebiliriz.
    }
  }
  