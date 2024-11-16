import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const DiscountBox = styled.div`
z-index:1;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
`;

export const CardTitleAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-top: 10px;  // Başlık ve buton arasına biraz boşluk ekliyoruz
  text-align: center; // Başlık ve butonun ortalanmasını sağlıyoruz

  @media (max-width: 768px) {
    margin-top: 10px;  // Tablet boyutunda biraz boşluk ekleyelim
  }

  @media (max-width: 390px) {
    margin-top: 5px;  // Mobilde daha az boşluk bırakıyoruz
  }
`;
export const StyledCardBody = styled(Card.Body)`
  max-width: 70%;
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  text-align: right;

  @media (max-width: 768px) {
    height: auto;  // Tablet boyutunda yükseklik otomatik ayarlanabilir
  }

  @media (max-width: 390px) {
    
    max-width: 70%;
   
  }
`;

export const TopStyledCard = styled(Card)<{ bgColor: string }>`
  margin-top: 10px;
  width: 384.43px;
  height: 157px;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    width: 233.39px;  // Tablet boyutunda width
    height: 127.23px; // Tablet boyutunda height
  }

  @media (max-width: 390px) {
    width: 176.11px;  // Mobil boyutunda width
    height: 96.01px;  // Mobil boyutunda height
  }
`;
export const StyledCardImgTop = styled(Card.Img)<{ imgTitle: string }>`
  width: 100%;  // Görsel genişliğini %80 olarak ayarlıyoruz
  height: 100%; // Yükseklik otomatik ayarlanacak, orantılı kalacak

  ${({ imgTitle }) =>
    imgTitle === 'TÜM ÜRÜNLER'
      ? `
      width: 45%;  // Resmi küçültüyoruz
      height: auto;  // Yüksekliği orantılı olarak ayarlıyoruz
      transform: translateX(10px) translateY(0%);
    `
      : `
      transform: none;
    `}
`;

export const BottomStyledCard = styled(Card)`
  width: 200px;
  height: 365px;
  position: relative;
  margin-bottom: 20px;  // PC için 20px
  @media (max-width: 768px) {
    margin-bottom: 10px;  // Tablet için 10px
  }
  @media (max-width: 390px) {
    margin-bottom: 5px;  // Mobil için 5px
  }
`;

export const StyledCardImgBottom = styled(Card.Img)`
  width: 168px;
  height: 168px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const ContentTitle = styled.div`
margin:0px 10px;
  font-family: Inter, sans-serif;
  font-size: 15.33px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  margin-top: 200px;
`;

export const ContentDescription = styled.div`
margin:0px 20px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-top: 5px;
`;

export const RatingStars = styled.div`
  color: gold;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
`;

export const Comments = styled.div`
  font-family: Inter, sans-serif;
  font-size: 11px;
  text-align: center;
  margin-top: 5px;
`;

export const Price = styled.div`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  color: #333;
`;

// Başlık için stil ekleyelim
export const CardTitle = styled.div`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 20px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
