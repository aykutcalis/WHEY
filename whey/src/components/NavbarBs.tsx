import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { BsCart, BsPerson, BsList } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { useWindowSize, WindowSizeContextType } from "../context/WindowSizeContext"; // useWindowSize hook'unu import edin

const CustomNavbar: React.FC = () => {
  const { isMobile, isTablet } = useWindowSize() as WindowSizeContextType;

  // Menü açma/kapama fonksiyonu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Üst Navbar */}
      <Navbar
        expand="lg"
        style={{
          height: isTablet ? "60px" : "94px", // Tablet modunda yüksekliği azaltıldı
          width: "100%",
          maxWidth: "1700px",
          fontFamily: "Inter, sans-serif",
          backgroundColor: "rgba(255, 255, 255, 1)",
          position: "relative",
        }}
      >
        <Container
          style={{
            height: "46px",
            maxWidth: "1400px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="d-flex"
        >
          {/* Sol Taraf - Hamburger Menü */}
          {isMobile && (
            <div
              onClick={toggleMenu}
              style={{
                cursor: "pointer",
                zIndex: 1000,
              }}
            >
              <BsList size={32} />
            </div>
          )}

          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center" style={{ flexGrow: 1, justifyContent: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: isTablet ? "30px" : "38px",
                width: "auto",
                transition: "height 0.3s",
              }}
            />
          </Navbar.Brand>

          {/* Arama Çubuğu */}
          {!isMobile && (
            <Form className="d-flex align-items-center" style={{ maxWidth: isTablet ? "250px" : "400px", width: "100%", paddingRight: "30px", height: isTablet ? "38px" : "46px" }}>
              <div className="search-wrapper d-flex align-items-center" style={{ width: "100%", height: "100%" }}>
                <FormControl
                  type="search"
                  placeholder="Aradığınız ürünü yazınız"
                  aria-label="Search"
                  style={{
                    width: "80%",
                    maxWidth: isTablet ? "180px" : "400px",
                    height: "100%",
                    borderRadius: "5px 0 0 5px",
                    border: "2px solid rgba(145, 145, 145, 1)",
                    borderRight: "none",
                  }}
                />
                <div
                  className="search-button"
                  style={{
                    width: "30%",
                    height: "100%",
                    border: "2px solid rgba(145, 145, 145, 1)",
                    borderRadius: "0 5px 5px 0",
                    backgroundColor: "rgba(145, 145, 145, 1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: isTablet ? "12px" : "14px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  ARA
                </div>
              </div>
            </Form>
          )}

          {/* Hesap ve Sepet İkonları */}
          {!isMobile && (
            <div className="d-flex align-items-center">
              <NavDropdown
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  height: isTablet ? "38px" : "46px",
                  width: isTablet ? "110px" : "190px",
                   padding:isTablet ? "4px 20px": "4px 40px",
                  borderRadius: "5px",
                  border: "2px solid rgba(145, 145, 145, 1)",
                }}
                title={<span><BsPerson size={isTablet ? 20 : 32} className="me-1" />HESAP</span>}
                id="account-dropdown"
              >
                <NavDropdown.Item href="#profile">Hesabım</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Müşteri Yorumları</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">İletişim</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
  href="#cart"
  style={{
    height: isTablet ? "38px" : "46px",
    width: isTablet ? "110px" : "190px",
    display: "inline-flex",
    alignItems: "center",
    padding:isTablet ? "6px 20px": "6px 50px",  // Sağdaki boşluğu artırmak için paddingRight değeri artırıldı
    borderRadius: "5px",
    backgroundColor: "rgba(145, 145, 145, 1)",
    color: "white",
    marginLeft: "10px",  // Sağ tarafa kaydırma için marginLeft ekleyebilirsiniz
  }}
>
  <BsCart size={isTablet ? 20 : 32} className="me-1" />
  Sepet
</Nav.Link>
            </div>
          )}
          
          {isMobile && (
            <div className="d-flex align-items-center">
              <BsCart className="me-1" />
            </div>
          )}
        </Container>
      </Navbar>
      {!isMobile &&  (
        <div
          style={{
            
            width: "100%",
            backgroundColor: "black",
            color: "white",
          
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Nav.Link href="/products/protein" style={{ color: "white", padding: "10px 0" }}>
            PROTEİN
          </Nav.Link>
          <Nav.Link href="/products/spor-gıdalar" style={{ color: "white", padding: "10px 0" }}>
            SPOR GIDALARI
          </Nav.Link>
          <Nav.Link href="/products/saglik" style={{ color: "white", padding: "10px 0" }}>
            SAĞLIK
          </Nav.Link>
          <Nav.Link href="/products/gida" style={{ color: "white", padding: "10px 0" }}>
            GIDA
          </Nav.Link>
          <Nav.Link href="/products/vitamin" style={{ color: "white", padding: "10px 0" }}>
            VİTAMİN
          </Nav.Link>
          <Nav.Link href="/products/tum-urunler" style={{ color: "white", padding: "10px 0" }}>
            TÜM ÜRÜNLER
          </Nav.Link>
          
        </div>
      )}
      {/* Hamburger Menü */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "94px",
            left: 0,
            width: "100%",
            backgroundColor: "black",
            color: "white",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "10px",
          }}
        >
          <Nav.Link href="/products/protein" style={{ color: "white", padding: "10px 0" }}>
            PROTEİN
          </Nav.Link>
          <Nav.Link href="/products/spor-gıdalar" style={{ color: "white", padding: "10px 0" }}>
            SPOR GIDALARI
          </Nav.Link>
          <Nav.Link href="/products/saglik" style={{ color: "white", padding: "10px 0" }}>
            SAĞLIK
          </Nav.Link>
          <Nav.Link href="/products/gida" style={{ color: "white", padding: "10px 0" }}>
            GIDA
          </Nav.Link>
          <Nav.Link href="/products/vitamin" style={{ color: "white", padding: "10px 0" }}>
            VİTAMİN
          </Nav.Link>
          <Nav.Link href="/products/tum-urunler" style={{ color: "white", padding: "10px 0" }}>
            TÜM ÜRÜNLER
          </Nav.Link>
          <Nav.Link href="/products/profile" style={{ color: "white", padding: "10px 0" }}>
            Hesabım
          </Nav.Link>
          <Nav.Link href="/products/settings" style={{ color: "white", padding: "10px 0" }}>
            Müşteri Yorumları
          </Nav.Link>
          <Nav.Link href="/products/contact" style={{ color: "white", padding: "10px 0" }}>
            İletişim
          </Nav.Link>
        </div>
      )}
    </>
  );
};

export default CustomNavbar;
