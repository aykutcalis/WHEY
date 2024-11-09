import { Outlet } from "react-router-dom";
import NavbarBs from "../components/NavbarBs";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
    <NavbarBs/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout;