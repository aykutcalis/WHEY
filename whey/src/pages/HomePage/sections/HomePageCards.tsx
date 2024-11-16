import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { TopStyledCard, StyledCardBody, StyledCardImgTop, BottomStyledCard, StyledCardImgBottom, ContentTitle,
   ContentDescription, RatingStars, Comments, Price, CardTitleAndButtonContainer, DiscountBox } from '../../../styles/styles';
import card1 from '.././assets/card1.png';
import card2 from '.././assets/card2.png';
import card3 from '.././assets/card3.png';
import card4 from '.././assets/card4.png';
import card5 from '.././assets/card5.png';
import card6 from '.././assets/card6.png';
import homeCard1 from '.././assets/homeCard1.png';
import homeCard2 from '.././assets/homeCard2.png';
import homeCard3 from '.././assets/homeCard3.png';
import homeCard4 from '.././assets/homeCard4.png';
import homeCard5 from '.././assets/homeCard5.png';
import homeCard6 from '.././assets/homeCard6.png';
import { Link } from 'react-router-dom';

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

  const homeCardData = [
    { img: homeCard1, title: 'WHEY PROTEİN', description: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ', comments: '1324 YORUM', price: '549 TL', path: '/product/7' },
    { img: homeCard2, title: 'FİTNESS PAKETİ', description: 'EN POPÜLER ÜRÜNLER BİR ARADA', comments: '897 YORUM', price: '234 TL', path: '/product/8' },
    { img: homeCard3, title: 'GÜNLÜK VİTAMİN PAKETİ', description: 'EN SIK TÜKETİLEN TAKVİYELER', comments: '9873 YORUM', price: '234 TL', path: '/product/9' },
    { img: homeCard4, title: 'PRE-WORKOUT SUPREME', description: 'ANTRENMAN ÖNCESİ TAKVİYESİ', comments: '987 YORUM', price: '748 TL', path: '/product/10' },
    { img: homeCard5, title: 'CREAM OF RICE', description: 'EN LEZZETLİ PİRİNÇ KREMASI', comments: '9807 YORUM', price: '905 TL', path: '/product/11' },
    { img: homeCard6, title: 'CREATİNE', description: 'EN POPÜLER SPORCU TAKVİYESİ', comments: '3494 YORUM', price: '783 TL', path: '/product/12' },
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
                  <Link to={card.path}> {/* Ürün sayfasına yönlendiren Link */}
                    <Button variant="dark">İNCELE</Button>
                  </Link>
                </CardTitleAndButtonContainer>
              </StyledCardBody>
            </TopStyledCard>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col style={{ marginTop: '50px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px' }}>ÇOK SATANLAR</h2>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginTop: '10px' }}>
        {homeCardData.map((card, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={6} className="mb-3">
            <BottomStyledCard>
              {index === 1 || index === 2 ? (
                <DiscountBox>%20 İNDİRİM</DiscountBox>
              ) : null}
              <StyledCardImgBottom variant="top" src={card.img} />
              <ContentTitle>{card.title}</ContentTitle>
              <ContentDescription>{card.description}</ContentDescription>
              <RatingStars>★★★★★</RatingStars>
              <Comments>{card.comments}</Comments>
              <Price>{card.price}</Price>
           
            </BottomStyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePageCards;
