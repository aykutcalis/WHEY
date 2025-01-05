// LastViewedSection.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../../components/ProductCard';  // Kart bileşenini import ediyoruz.


// Burada exampleProducts verisini tanımlıyoruz.
interface Product {
  id: string;
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

interface LastViewedSectionProps {
  products: Product[]; // Son görüntülenen ürünlerin listesi
}

const LastViewedSection: React.FC<LastViewedSectionProps> = ({ products }) => {
  return (
    <Container>
    
      <Row className="mt-4">
        <Col style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px' }}>SON GÖRÜNTÜLENENLER</h2>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginTop: '10px' }}>
        {products.map((product) => (
          <Col key={product.id} lg={2} md={4} sm={6} xs={6} className="mb-3">
            {/* Her bir ürün için ProductCard bileşenini kullanıyoruz */}
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LastViewedSection;
