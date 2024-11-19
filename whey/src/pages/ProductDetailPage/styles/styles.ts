import styled from 'styled-components';

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 587px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  padding-left: 20px;

  h1 {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const Panels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 20px; /* Panelin üst kısmında boşluk bırakmak için */
  }
`;

export const PanelButton = styled.button`
  background-color: #f0f0f0;
  padding: 10px;
  font-weight: bold;
`;

export const PanelContent = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
`;

export const Ratings = styled.div`
  display: flex;
  gap: 10px;
`;

export const Aromas = styled.div`
  margin-top: 20px;
`;

export const Sizes = styled.div`
  margin-top: 20px;
`;

export const AddToCartButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 10px;
`;
