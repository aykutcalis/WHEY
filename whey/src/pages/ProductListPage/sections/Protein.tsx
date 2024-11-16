import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BottomStyledCard,
  StyledCardImgBottom,
  ContentTitle,
  ContentDescription,
  RatingStars,
  Comments,
  Price,
  DiscountBox,
} from "../ProductListStyles/styles";

const dummyProteinData = Array.from({ length: 12 }, (_, i) => ({
  img: `https://via.placeholder.com/277x424.png?text=Protein+Ürünü+${i + 1}`,
  title: `Protein Ürünü ${i + 1}`,
  description: "Bu ürün, yüksek protein içeriği ile öne çıkar.",
  comments: `${Math.floor(Math.random() * 1000) + 100} YORUM`,
  price: `${Math.floor(Math.random() * 500) + 100} TL`,
  discount: i % 3 === 0 ? `%${Math.floor(Math.random() * 20) + 5} İNDİRİM` : null,
}));

const ProteinPage: React.FC = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2 style={{ textAlign: "center", fontSize: "24px" }}>PROTEİN</h2>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginTop: "10px" }}>
        {dummyProteinData.map((product, index) => (
          <Col
            key={index}
            lg={3} // PC: 4x4x4 (12/3 = 4 sütun)
            md={4} // Tablet: 3x3x3 (12/4 = 3 sütun)
            sm={6} // Mobil: 2x2x2x2x2x2 (12/6 = 2 sütun)
            xs={6}
            className="mb-3"
          >
            <BottomStyledCard style={{ width: "277px", height: "424px" }}>
              {product.discount && <DiscountBox>{product.discount}</DiscountBox>}
              <StyledCardImgBottom variant="top" src={product.img} />
              <ContentTitle>{product.title}</ContentTitle>
              <ContentDescription>{product.description}</ContentDescription>
              <RatingStars>★★★★★</RatingStars>
              <Comments>{product.comments}</Comments>
              <Price>{product.price}</Price>
            </BottomStyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProteinPage;
