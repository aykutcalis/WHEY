import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TopStyledCard, StyledCardBody, StyledCardImgTop, CardTitleAndButtonContainer } from '../../../styles/styles';
import card1 from '.././assets/card1.png';
import card2 from '.././assets/card2.png';
import card3 from '.././assets/card3.png';
import card4 from '.././assets/card4.png';
import card5 from '.././assets/card5.png';
import card6 from '.././assets/card6.png';

const topCardColors = [
  'rgba(126, 160, 162, 1)',
  'rgba(253, 232, 215, 1)',
  'rgba(204, 203, 198, 1)',
  'rgba(217, 216, 211, 1)',
  'rgba(114, 180, 206, 1)',
  'rgba(114, 180, 206, 1)',
];

const HomePageCards: React.FC = () => {
  const cardData = [
    { img: card1, title: 'PROTEİN', path: 'products/protein' },
    { img: card2, title: 'VİTAMİNLER', path: 'products/vitamin' },
    { img: card3, title: 'SAĞLIK', path: 'products/saglik' },
    { img: card4, title: 'SPOR GIDALARI', path: 'products/spor-gidalar' },
    { img: card5, title: 'GIDA', path: 'products/gida' },
    { img: card6, title: 'TÜM ÜRÜNLER', path: 'products/tum-urunler' },
  ];

  return (
    <Container>
      <Row className="mb-4" style={{ justifyContent: 'center' }}>
        {cardData.map((card, index) => (
          <Col key={index} lg={4} md={4} sm={6} xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <TopStyledCard bgColor={topCardColors[index % topCardColors.length]} style={{ display: 'flex', justifyContent: 'center' }}>
              <StyledCardImgTop imgTitle={card.title} variant="top" src={card.img} />
              <StyledCardBody>
                <CardTitleAndButtonContainer>
                  <Card.Title>{card.title}</Card.Title>
                  <Link to={card.path}>
                    <Button variant="dark">İNCELE</Button>
                  </Link>
                </CardTitleAndButtonContainer>
              </StyledCardBody>
            </TopStyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePageCards;
