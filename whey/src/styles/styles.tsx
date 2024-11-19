import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const DiscountBox = styled.div`
  z-index: 1;
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
  margin-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (max-width: 390px) {
    margin-top: 5px;
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
    height: auto;
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
  border: none;  /* Border kaldırıldı */

  @media (max-width: 768px) {
    width: 233.39px;
    height: 127.23px;
  }

  @media (max-width: 390px) {
    width: 176.11px;
    height: 96.01px;
  }
`;

export const StyledCardImgTop = styled(Card.Img)<{ imgTitle: string }>`
  width: 100%;
  height: 100%;

  ${({ imgTitle }) =>
    imgTitle === 'TÜM ÜRÜNLER'
      ? `
      width: 45%;
      height: auto;
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
  margin-bottom: 20px;
  border: none;  /* Border kaldırıldı */

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (max-width: 390px) {
    margin-bottom: 5px;
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
  margin: 0px 10px;
  font-family: Inter, sans-serif;
  font-size: 15.33px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  margin-top: 200px;
`;

export const ContentDescription = styled.div`
  margin: 0px 20px;
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
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  .original-price {
    font-size: 16px;
    text-decoration: line-through;
    color: red;
  }

  .discounted {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const CardTitle = styled.div`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 20px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
