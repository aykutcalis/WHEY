import styled from "styled-components";
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

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 3px 6px;
  }
`;

export const BottomStyledCard = styled.div`
  width: 100%;
  min-height: 400px; /* Minimum yükseklik */
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* Bu satır eklendi */
`;


export const StyledCardImgBottom = styled.img`
  width: 100%; /* Esnek genişlik */
  height: 200px; /* Sabit yükseklik */
  object-fit: cover;
  border-radius: 8px; /* Gerekirse bu kısmı da kaldırabilirsiniz */

  /* PC için uygun boyut */
  @media (min-width: 993px) { /* PC */
    height: 277px;
  }

  @media (max-width: 992px) { /* Tablet */
    height: 200px;
  }

  @media (max-width: 768px) { /* Mobile */
    height: 200px; /* Mobilde de sabit yükseklik */
  }
`;



export const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 8px 0;
  text-align: center;
  flex-grow: 1; /* İçerik alana esneklik ekler */

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContentDescription = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
  margin: 0 0 8px;
  flex-grow: 1; /* İçerik alana esneklik ekler */

  @media (max-width: 992px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const RatingStars = styled.div`
  font-size: 14px;
  color: gold;
  margin-bottom: 4px;

  @media (max-width: 992px) { /* Tablet */
    font-size: 12px;
  }

  @media (max-width: 768px) { /* Mobile */
    font-size: 10px;
  }
`;

export const Comments = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 8px;

  @media (max-width: 992px) { /* Tablet */
    font-size: 10px;
  }

  @media (max-width: 768px) { /* Mobile */
    font-size: 8px;
  }
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 8px;
  display: flex;
  justify-content: space-between; /* Fiyatları sağ ve sola yerleştirir */
  align-items: center;
  text-align: center;

  @media (max-width: 992px) { /* Tablet */
    font-size: 18px;
  }

  @media (max-width: 768px) { /* Mobile */
    font-size: 16px;
  }

  .original-price {
    font-size: 16px;
    text-decoration: line-through; /* Üstü çizili */
    color: red; /* Kırmızı renk indirimli fiyat için */
    margin-right: 18px;
  }

  .discounted {
    font-size: 20px;
    
    font-weight: bold;
  }
`;


export const StyledLoadMoreButton = styled.button`
  left: 1px;
  font-family: Inter;
  font-size: 13.75px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background: none;
  border: none;
  color: rgba(5, 150, 105, 1); /* Bootstrap'in mavi rengi */
  cursor: pointer;

  &:hover {
    color: #0056b3; /* Hover rengi */
  }
`;
