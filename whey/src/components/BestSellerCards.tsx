import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { BottomStyledCard, StyledCardImgBottom, ContentTitle, ContentDescription, RatingStars, Comments, Price, DiscountBox } from '../styles/styles';

interface Product {
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

const BestSellerCards: React.FC = () => {
  const products = useLoaderData() as Product[];

  return (
    <Container>
      <Row className="mt-4">
        <Col style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px' }}>ÇOK SATANLAR</h2>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginTop: '10px' }}>
        {products.map((product, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={6} className="mb-3">
            <BottomStyledCard>
              {product.price_info.discount_percentage && (
                <DiscountBox>%{product.price_info.discount_percentage} İNDİRİM</DiscountBox>
              )}
              {/* Resmi doğru URL ile gösteriyoruz */}
              <StyledCardImgBottom variant="top" src={product.photo_src} alt={product.name} />
              <ContentTitle>{product.name}</ContentTitle>
              <ContentDescription>{product.short_explanation}</ContentDescription>
              <RatingStars>★★★★★</RatingStars>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerCards;
