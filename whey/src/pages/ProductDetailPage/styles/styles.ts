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
  background-color: #ffffff; /* Beyaz arka plan */
  padding: 15px 10px; /* Dikey ve yatay boşluk */
  font-weight: bold;
  width: 100%; /* Butonun genişliği */
  text-align: left; /* Metni sola hizala */
  border: none; /* Kenarlıkları kaldır */
  border-bottom: 1px solid rgba(221, 221, 221, 1); /* Alt çizgi */
  display: flex; /* İkon ve metni yan yana koymak için */
  justify-content: space-between; /* Metni sola, oku sağa hizalar */
  align-items: center; /* Dikeyde ortalama */
  cursor: pointer;

  &:hover {
    background-color: rgba(245, 245, 245, 1); /* Hover sırasında hafif gri arka plan */
  }
`;

export const PanelContent = styled.div`
  background-color: #ffffff; /* Beyaz arka plan */
  padding: 10px 15px; /* İçerik boşlukları */
  border-bottom: 1px solid rgba(221, 221, 221, 1); /* Alt çizgi */
  width: 100%; /* Genişlik */
  box-shadow: none; /* Gölgeler kaldırıldı */
  overflow-y: auto; /* İçerik taşarsa kaydırma çubuğu */
`;

export const PanelArrow = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-left: 2px solid #333; /* Sol çizgi */
  border-bottom: 2px solid #333; /* Alt çizgi */
  transform: rotate(-45deg); /* Çizgileri aşağı ok haline getirir */
  transition: transform 0.3s ease; /* Animasyon */
  

`;
export const Ratings = styled.div`
  display: flex;
  gap: 0px;
   border: none; /* Kenarlıkları kaldır */
  border-bottom: 1px solid rgba(221, 221, 221, 1); /* Alt çizgi */
`;

export const Aromas = styled.div`
  margin-top: 20px;
 
`;

export const Sizes = styled.div`
display:flex;
flex-direction:row;
  margin-top: 20px;
`;


export const QuantityControl = styled.div`
width: 122.08px;
height: 56px;

left: 1071.66px;

display: flex;
 align-items: space-between;
  button {
 height:100%;
 
    background: #f1f1f1;

   
    cursor: pointer;
  }
  span {
    margin: 0 10px;
    height:98%;
    display:flex;

   align-items:center;
  }
`;

export const IconLabel = styled.div`
font-family: Inter;
font-size: 11.81px;
font-weight: 400;
line-height: 20px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;

  display: flex;
  align-items: center;
  margin: 15px 10px;
  i {
    margin-right: 10px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain; /* Resmin kesilmeden görünmesini sağlar */
`;


export const AddToCartButton = styled.div`
font-family: Inter;
font-size: 19.5px;
font-weight: 600;
line-height: 32px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
width: 350.27px;
height: 55px;



  
  padding: 11.5px 92.75px 11.5px 92.96px;
  gap: 0px;
  border-radius: 4px 0px 0px 0px;
  opacity: 1;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;

  i {
    margin-right: 10px;
  }
`;
export const IconDiv = styled.div`
  display:flex;
  flex-direction:row;
   border: none; /* Kenarlıkları kaldır */
  border-bottom: 1px solid rgba(221, 221, 221, 1); /* Alt çizgi */
  

`
export const SizesBox = styled.div`
width: 141.5px;
height: 72px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-family: Inter;


line-height: 19.5px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
border: 3px solid rgba(229, 229, 229, 1)
`
