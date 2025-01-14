import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/root";
import HomePageMain from "../pages/HomePage/HomePageMain";
import ProductDetailPageMain from "../pages/ProductDetailPage/ProductDetailPageMain";
import CartPageMain from "../pages/CartPage/CartPageMain";
import FAQPageMain from "../pages/FAQPage/FAQPageMain";
import LoginPageMain from "../pages/LoginPage/LoginPageMain";
import SignUpPageMain from "../pages/SignUpPage/SignUpPageMain";
import AccountInfoPageMain from "../pages/AccountInfoPage/AccountInfoPageMain";
import AboutUsPageMain from "../pages/AboutUsPage/AboutUsPageMain";
import MyAddressesPageMain from "../pages/MyAddressesPage/MyAddressesPageMain";
import MyOrdersPageMain from "../pages/MyOrdersPage/MyOrdersPageMain";
import ProductListPageMain from "../pages/ProductListPage/ProductListPageMain";
import { fetchProteinProducts } from "../Loaders/ProteinLoader"; // Örnek bir loader
import { productLoader } from "../Loaders/ProductsLoader";
import ContactUsPageMain from "../pages/ContactPage/ContactPageMain";
// import { productDetailLoader } from "../Loaders/ProductDetailLoader";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePageMain />,
        loader: productLoader,
      },
   {
        path: "products/:categoryName", 
        element: <ProductListPageMain />,
        loader: async ({ params }) => {
          const { categoryName } = params;
          switch (categoryName) {
            case "protein":
              return fetchProteinProducts();
            default:
              throw new Error("Geçersiz kategori!");
          }
        },
      },
      {
        path: "/products/hyaluronic-acid",
        element: <ProductDetailPageMain />,
        loader: productLoader,
        errorElement: <div>Ürün bulunamadı veya bir hata oluştu.</div>,
      },
       
      {
        path: "cart",
        element: <CartPageMain />,
      },
      {
        path: "iletisim",
        element: <ContactUsPageMain />,
      },
      {
        path: "/sikca-sorulan-sorular",
        element: <FAQPageMain />,
      },
      {
        path: "login",
        element: <LoginPageMain />,
      },
      {
        path: "signup",
        element: <SignUpPageMain />,
      },
      {
        path: "account",
        element: <AccountInfoPageMain />,
       
      },
      {
        path: "about",
        element: <AboutUsPageMain />,
      },
      {
        path: "addresses",
        element: <MyAddressesPageMain />,
      },
      {
        path: "orders",
        element: <MyOrdersPageMain />,
       
      },
    ],
  },
]);
