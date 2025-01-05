// LastViewedDatas.tsx
interface Product {
  id: string;
  name: string;
  short_explanation: string;
  photo_src: string;
  price_info: {
    total_price: number;
    discounted_price?: number;
    discount_percentage?: number;
  };
  comment_count: number;
}

// Ürün verisini dışa aktarıyoruz
export const exampleProducts: Product[] = [
    {
      id: "1",
      name: "Protein Shake",
      short_explanation: "Yüksek kaliteli protein içeriği ile kas gelişimine yardımcı olur.",
      photo_src: "https://via.placeholder.com/150",
      price_info: {
        total_price: 150,
        discounted_price: 120,
        discount_percentage: 20,
      },
      comment_count: 120,
    },
    {
      id: "2",
      name: "Hyaluronic Acid Serum",
      short_explanation: "Cilt nemlendirici ve yenileyici serum.",
      photo_src: "https://via.placeholder.com/150",
      price_info: {
        total_price: 200,
        discounted_price: 180,
        discount_percentage: 10,
      },
      comment_count: 80,
    },
    {
      id: "3",
      name: "Creatine Monohydrate",
      short_explanation: "Dayanıklılığı artıran ve kas kütlesi oluşturan kreatin.",
      photo_src: "https://via.placeholder.com/150",
      price_info: {
        total_price: 100,
        discounted_price: 90,
        discount_percentage: 10,
      },
      comment_count: 95,
    },
    {
      id: "4",
      name: "Multivitamin Tablets",
      short_explanation: "Günlük vitamin ihtiyacınızı karşılayan multivitamin tabletleri.",
      photo_src: "https://via.placeholder.com/150",
      price_info: {
        total_price: 60,
        discounted_price: 55,
        discount_percentage: 8,
      },
      comment_count: 40,
    },
    {
      id: "5",
      name: "Whey Protein Powder",
      short_explanation: "Kas onarımına yardımcı yüksek kaliteli whey protein tozu.",
      photo_src: "https://via.placeholder.com/150",
      price_info: {
        total_price: 250,
        discounted_price: 230,
        discount_percentage: 10,
      },
      comment_count: 110,
    },
    {
      id: "6",
      name: "BCAA Amino Acids",
      short_explanation: "Kas onarımını hızlandıran ve dayanıklılığı artıran BCAA amino asitleri.",
      photo_src: "https://via.placeholder.com/150",
      price_info: {
        total_price: 120,
        discounted_price: 100,
        discount_percentage: 17,
      },
      comment_count: 75,
    },
  ];