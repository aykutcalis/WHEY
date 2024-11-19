import { LoaderFunction, json } from "react-router-dom";

export const productDetailLoader: LoaderFunction = async () => {
 
 
  try {
    const response = await fetch(`https://fe1111.projects.academy.onlyjs.com/api/v1/products/hyaluronic-acid`);
   
    if (!response.ok) {
      throw new Response("Geçersiz kategori!", { status: response.status });
    }

    const result = await response.json();

    if (result.status !== "success" || !result.data) {
      throw new Response("Geçersiz ürün!", { status: 404 });
    }

    return json(result.data); // Sadece "data" kısmını döndürüyoruz.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Response("Sunucuyla bağlantı kurulamadı.", { status: 500 });
  }
};
