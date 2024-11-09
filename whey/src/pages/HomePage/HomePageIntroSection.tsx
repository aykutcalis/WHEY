// src/components/HomePageIntroSection.tsx
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import MainVisual from "../../assets/images/MainVisual.png"; // Main görseli
import Logo from "../../assets/images/logo-white.png"; // Logo görseli

// Styled components tanımları
const IntroSectionWrapper = styled.div`
  position: relative;
  background-image: url(${MainVisual});
  height: 480px;
  width: 100%;
  background-size: cover;
  background-position: center;

  /* Ekran küçüldüğünde yüksekliği ayarla */
  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const LogoWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 120px;
  height: auto;
  background-image: url(${Logo});
  background-size: cover; /* contain yerine cover olarak değiştirin */
  background-repeat: no-repeat;
  background-position: center;
`;


const FooterWrapper = styled.footer`
  background-color: rgba(34, 34, 34, 1);
  padding: 20px 0;
`;

const FooterTextLeft = styled.span`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: #ffffff;
  margin-right: 30px;
`;

const FooterTextRight = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;
  text-align: right;
`;

function HomePageIntroSection() {
  return (
    <div>
      {/* Üstte yer alan arka plan resmi ve logo */}
      <IntroSectionWrapper>
        <LogoWrapper />
      </IntroSectionWrapper>

      {/* Footer kısmı */}
      <FooterWrapper>
        <Container
          fluid
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Row style={{ width: "100%" }}>
            {/* Sol Taraf: Logo ve metin */}
            <Col>
              <FooterTextLeft>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} style={{ color: "gold", marginRight: "5px" }} />
                  ))}
                  <span style={{ color: "#fff", marginLeft: "10px" }}>(140.000+)</span>
                </div>
                LABORATUVAR TESTLİ ÜRÜNLER<br />
                AYNI GÜN & ÜCRETSİZ KARGO<br />
                MEMNUNİYET GARANTİSİ
              </FooterTextLeft>
            </Col>

            {/* Sağ Taraf: Yazı */}
            <Col>
              <FooterTextRight>
                200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi seveceğinize
                eminiz. Eğer herhangi bir sebeple memnun kalmazsanız, bizimle iletişime
                geçtiğinizde çözüme kavuşturacağız.
              </FooterTextRight>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
    </div>
  );
}

export default HomePageIntroSection;
