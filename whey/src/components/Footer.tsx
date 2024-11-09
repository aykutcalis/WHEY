import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo-white.png"; 
import { useWindowSize, WindowSizeContextType } from "../context/WindowSizeContext";

const Footer: React.FC = () => {
  const { isMobile, isTablet } = useWindowSize() as WindowSizeContextType;

  const footerLinks = [
    { name: "İletişim", url: "/iletisim" },
    { name: "Hakkımızda", url: "/hakkimizda" },
    { name: "Sıkça Sorulan Sorular", url: "/sikca-sorulan-sorular" },
    { name: "KVKK", url: "/kvkk" },
    { name: "Çalışma İlkelerimiz", url: "/calisma-ilkelerimiz" },
    { name: "Satış Sözleşmesi", url: "/satis-sozlesmesi" },
    { name: "Garanti ve İade Koşulları", url: "/garanti-ve-iade-kosullari" },
    { name: "Gerçek Müşteri Yorumları", url: "/gercek-musteri-yorumlari" },
    { name: "Blog", url: "/blog" }
  ];

  const categoriesLinks = [
    { name: "Protein", url: "/protein" },
    { name: "Spor Gıdaları", url: "/spor-gidalar" },
    { name: "Sağlık", url: "/saglik" },
    { name: "Gıda", url: "/gida" },
    { name: "Vitamin", url: "/vitamin" },
    { name: "Aksesuar", url: "/aksesuar" },
    { name: "Tüm Ürünler", url: "/tum-urunler" },
    { name: "Paketler", url: "/paketler" },
    { name: "Lansmana Özel Fiyatlar", url: "/lansmana-ozel-fiyatlar" }
  ];

  const popularProductsLinks = [
    { name: "Whey Protein", url: "/whey-protein" },
    { name: "Cream of Rice", url: "/cream-of-rice" },
    { name: "Creatine", url: "/creatine" },
    { name: "BCAA+", url: "/bcaa-plus" },
    { name: "Pre-Workout", url: "/pre-workout" },
    { name: "Fitness Paketi", url: "/fitness-paketi" },
    { name: "Collagen", url: "/collagen" },
    { name: "Günlük Vitamin Paketi", url: "/gunluk-vitamin-paketi" },
    { name: "ZMA", url: "/zma" }
  ];

  // State for toggling visibility of each section on mobile
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div>
      <footer style={{ backgroundColor: "rgba(34, 34, 34, 1)", padding: "30px 0" }}>
        <Container
          fluid
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: isMobile || isTablet ? "column" : "row", // Stilin dinamik olması için
            gap: "20px"
          }}
        >
          <Row style={{ width: "100%", gap: "30px" }}>
            {/* Logo ve Footer Linkler */}
            <Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "30px",
                  width: "150px",
                  marginBottom: "20px",
                }}
              />
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      color: "rgba(153, 153, 153, 1)",
                      marginBottom: "10px",
                    }}
                  >
                    <a
                      href={link.url}
                      style={{
                        textDecoration: "none",
                        color: "rgba(153, 153, 153, 1)",
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  color: "rgba(153, 153, 153, 1)",
                  marginTop: "50px",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 100,
                  lineHeight: "42.7px",
                  letterSpacing: "1px",
                  textAlign: "left",
                }}
              >
                &copy; 2024 Şirket Adı. Tüm Hakları Saklıdır.
              </div>
            </Col>

            {/* Kategoriler */}
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: isMobile || isTablet ? "pointer" : "auto"
              }}
              onClick={() => isMobile || isTablet ? toggleSection("categories") : undefined}
            >
              <h5
                style={{
                  fontFamily: "Inter",
                  fontSize: "17.3px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  marginBottom: "15px",
                }}
              >
                Kategoriler
              </h5>
              {isMobile  ? (
                activeSection === "categories" && (
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {categoriesLinks.map((link, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: "Inter",
                          fontSize: "11.81px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "rgba(153, 153, 153, 1)",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href={link.url}
                          style={{
                            textDecoration: "none",
                            color: "rgba(153, 153, 153, 1)",
                          }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )
              ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {categoriesLinks.map((link, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: "Inter",
                        fontSize: "11.81px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        color: "rgba(153, 153, 153, 1)",
                        marginBottom: "10px",
                      }}
                    >
                      <a
                        href={link.url}
                        style={{
                          textDecoration: "none",
                          color: "rgba(153, 153, 153, 1)",
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Col>

            {/* Popüler Ürünler */}
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                cursor: isMobile || isTablet ? "pointer" : "auto"
              }}
              onClick={() => isMobile || isTablet ? toggleSection("popularProducts") : undefined}
            >
              <h5
                style={{
                  fontFamily: "Inter",
                  fontSize: "17.3px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  marginBottom: "15px",
                }}
              >
                Popüler Ürünler
              </h5>
              {isMobile  ? (
                activeSection === "popularProducts" && (
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {popularProductsLinks.map((link, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: "Inter",
                          fontSize: "11.81px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "rgba(153, 153, 153, 1)",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href={link.url}
                          style={{
                            textDecoration: "none",
                            color: "rgba(153, 153, 153, 1)",
                          }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )
              ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {popularProductsLinks.map((link, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: "Inter",
                        fontSize: "11.81px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        color: "rgba(153, 153, 153, 1)",
                        marginBottom: "10px",
                      }}
                    >
                      <a
                        href={link.url}
                        style={{
                          textDecoration: "none",
                          color: "rgba(153, 153, 153, 1)",
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
