import styled from "styled-components";
import OJS from "../../../../src/assets/images/OJS-nutrition-slider-banner.png"

// Styled components tanımları
const NutritionImageWrapper = styled.div`
  position: relative;
  background-image: url(${OJS});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 640px;



  /* PC için */
  @media (max-width: 1200px) {
    height: 500px;
   
  }

  /* Tablet için */
  @media (max-width: 768px) {
    height: 400px;
   
  }

  /* Mobil için */
  @media (max-width: 480px) {
    height: 300px;
    
  }
`;

function HomePageNutritionImage() {
  return (
    <div>
      <NutritionImageWrapper />
    </div>
  );
}

export default HomePageNutritionImage;
