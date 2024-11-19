import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom"; // Link'i import ediyoruz
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
  StyledLoadMoreButton,
} from "../styles/styles";

type Product = {
  id: string;  // Ürünün ID'si
  name: string;
  short_explanation: string;
  price_info: {
    total_price: number;
    discounted_price: number | null;
    discount_percentage: number | null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
};

const ProteinPage: React.FC = () => {
  const products = useLoaderData() as Product[] | undefined;
  const [visibleCount, setVisibleCount] = useState(12);

  if (!products) {
    return <p>Yükleniyor...</p>;
  }

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2 style={{ textAlign: "center", fontSize: "24px" }}>PROTEİN</h2>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginTop: "10px" }}>
        {visibleProducts.map((product, index) => (
          <Col key={index} lg={3} md={4} sm={6} xs={6} className="mb-3">
            <Link to={`/products/hyaluronic-acid`}style={{ textDecoration: 'none' }}> {/* Link ile ürün detayına yönlendiriyoruz */}
              <BottomStyledCard>
                {product.price_info.discount_percentage && (
                  <DiscountBox>
                    %{product.price_info.discount_percentage} İNDİRİM
                  </DiscountBox>
                )}
                <StyledCardImgBottom
                  src={`https://fe1111.projects.academy.onlyjs.com${product.photo_src}`}
                />
                <ContentTitle>{product.name}</ContentTitle>
                <ContentDescription>{product.short_explanation}</ContentDescription>
                <RatingStars>
                  {"★".repeat(Math.round(product.average_star))}
                </RatingStars>
                <Comments>{product.comment_count} YORUM</Comments>
                <Price>
                  {product.price_info.discounted_price ? (
                    <>
                      <span className="discounted">
                        {product.price_info.discounted_price} TL
                      </span>
                      <span className="original-price">
                        {product.price_info.total_price} TL
                      </span>
                    </>
                  ) : (
                    `${product.price_info.total_price} TL`
                  )}
                </Price>
              </BottomStyledCard>
            </Link>
          </Col>
        ))}
      </Row>

      {visibleCount < products.length && (
        <Row>
          <Col className="text-center">
            <StyledLoadMoreButton
              onClick={() => setVisibleCount((prev) => prev + 12)}
            >
              Daha Fazla Göster
            </StyledLoadMoreButton>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProteinPage;
