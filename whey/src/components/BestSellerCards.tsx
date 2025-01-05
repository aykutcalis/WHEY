import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

// Ürün veri tipi
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
  const { bestSellers } = useLoaderData() as { bestSellers: Product[] };

  return (
    <Container>
      <Row className="mt-4">
        <Col style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px' }}>ÇOK SATANLAR</h2>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginTop: '10px' }}>
        {bestSellers.map((product, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={6} className="mb-3">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerCards;
