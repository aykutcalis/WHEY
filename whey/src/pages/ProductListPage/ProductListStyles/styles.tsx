import styled from "styled-components";

export const BottomStyledCard = styled.div`
  width: 277px;
  height: 424px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) { /* Tablet */
    width: 220px;
    height: 340px;
    padding: 12px;
  }

  @media (max-width: 768px) { /* Mobile */
    width: 180px;
    height: 280px;
    padding: 10px;
  }
`;

export const StyledCardImgBottom = styled.img`
  width: 100%;
  height: 180px; /* Default height */
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 992px) { /* Tablet */
    height: 140px;
  }

  @media (max-width: 768px) { /* Mobile */
    height: 100px;
  }
`;

export const DiscountBox = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;

  @media (max-width: 768px) { /* Mobile */
    font-size: 10px;
    padding: 2px 6px;
  }
`;

export const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 8px 0;
  text-align: center;

  @media (max-width: 992px) { /* Tablet */
    font-size: 16px;
  }

  @media (max-width: 768px) { /* Mobile */
    font-size: 14px;
  }
`;

export const ContentDescription = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
  margin: 0 0 8px;

  @media (max-width: 992px) { /* Tablet */
    font-size: 12px;
  }

  @media (max-width: 768px) { /* Mobile */
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

  @media (max-width: 992px) { /* Tablet */
    font-size: 18px;
  }

  @media (max-width: 768px) { /* Mobile */
    font-size: 16px;
  }
`;
