import { LoaderFunction, json } from "react-router-dom";

// Ürün veri tipi
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

// API'nin temel URL'si
const baseUrl = "https://fe1111.projects.academy.onlyjs.com";

export const productLoader: LoaderFunction = async () => {
  try {
    // Best-sellers ürünlerini çek
    const bestSellersResponse = await fetch(`${baseUrl}/api/v1/products/best-sellers`);
    if (!bestSellersResponse.ok) {
      throw new Response("Best-sellers ürünleri çekilemedi!", { status: bestSellersResponse.status });
    }
    const bestSellersData = await bestSellersResponse.json();
    const bestSellers = bestSellersData.data.map((product: Product) => ({
      ...product,
      photo_src: `${baseUrl}${product.photo_src}`, // Resim yolunu tam URL'ye çeviriyoruz
    }));

    // Detaylı ürün verisini çek
    const productDetailResponse = await fetch(`${baseUrl}/api/v1/products/hyaluronic-acid`);
    if (!productDetailResponse.ok) {
      throw new Response("Ürün detayları çekilemedi!", { status: productDetailResponse.status });
    }
    const productDetailResult = await productDetailResponse.json();

    if (productDetailResult.status !== "success" || !productDetailResult.data) {
      throw new Response("Geçersiz ürün detayları!", { status: 404 });
    }

    // Best-sellers ve detaylı ürün verisini birlikte döndür
    return json({
      bestSellers,
      productDetail: productDetailResult.data,
    });
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    throw new Response("Sunucuyla bağlantı kurulamadı.", { status: 500 });
  }
};
