import { LoaderFunction } from 'react-router-dom';

// Product veri tipi
interface Product {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    total_price: number;
    discounted_price?: number;
    discount_percentage?: number;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
}

const baseUrl = 'https://fe1111.projects.academy.onlyjs.com';  // API'nin temel URL'si

export const productLoader: LoaderFunction = async () => {
  try {
    // API'den ürün verilerini çekiyoruz
    const response = await fetch(`${baseUrl}/api/v1/products/best-sellers`);
    
    if (!response.ok) {
      throw new Error('Veri çekilemedi!');
    }

    const data = await response.json();
    // Resim URL'lerini tam URL'ye dönüştürüyoruz
    const updatedProducts = data.data.map((product: Product) => ({
      ...product,
      photo_src: `${baseUrl}${product.photo_src}`,  // Resim yolunu tam URL'ye çeviriyoruz
    }));

    return updatedProducts;  // Güncellenmiş veri ile döneceğiz
   
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    return [];  // Hata durumunda boş bir dizi döndürüyoruz
  }
};
