import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { styled } from 'styled-components';
const FooterWrapper = styled.footer`
  background-color: rgba(34, 34, 34, 1);
  padding: 20px 0;
`;
const FooterTextLeft = styled.span`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
   color: white;
  margin-right: 30px;
`;

const FooterTextRight = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: white;
  text-align: right;
`;

function HomePageInfo() {
  return (
    <div><FooterWrapper>
    <Container
      fluid
      style={{
        maxWidth: "1220px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    ><Row style={{ width: "100%" }}>
    {/* Sol Taraf: Logo ve metin */}
    <Col>
      <FooterTextLeft>
        <div style={{ display: "flex", alignItems: "center" }}>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} style={{ color: "gold", marginRight: "5px" }} />
          ))}
          <span style={{ color: "white", marginLeft: "10px" }}>(140.000+)</span>
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
  </Row></Container>
  </FooterWrapper></div>
  )
}

export default HomePageInfo

  
