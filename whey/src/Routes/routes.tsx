import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/root";
import HomePageMain from "../pages/HomePage/HomePageMain";
import ProductDetailPageMain from "../pages/ProductDetailPage/ProductDetailPageMain";
import { productDetailLoader } from "../Loaders/ProductDetailLoader";
import CartPageMain from "../pages/CartPage/CartPageMain";
import FAQPageMain from "../pages/FAQPage/FAQPageMain";
import LoginPageMain from "../pages/LoginPage/LoginPageMain";
import SignUpPageMain from "../pages/SignUpPage/SignUpPageMain";
import AccountInfoPageMain from "../pages/AccountInfoPage/AccountInfoPageMain";
import { accountInfoLoader } from "../Loaders/AccountInfoLoader";
import AboutUsPageMain from "../pages/AboutUsPage/AboutUsPageMain";
import MyAddressesPageMain from "../pages/MyAddressesPage/MyAddressesPageMain";
import MyOrdersPageMain from "../pages/MyOrdersPage/MyOrdersPageMain";
import ProductListPageMain from "../pages/ProductListPage/ProductListPageMain"
import { myOrdersLoader } from "../Loaders/MyOrdersLoader";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePageMain/>,
      },
      {
        path: "products/:categoryName",
        element: <ProductListPageMain />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPageMain/>,
        loader: productDetailLoader, // Ürün detay verisini URL üzerinden çekmek için
      },
      {
        path: "cart",
        element: <CartPageMain />,
      },
      {
        path: "faq",
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
        loader: accountInfoLoader, // Kullanıcı hesabı verisini URL üzerinden çekmek için
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
        element: <MyOrdersPageMain/>,
        loader: myOrdersLoader, // Sipariş verilerini URL üzerinden çekmek için
      },
    ],
  },
]);
