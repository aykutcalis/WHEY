import styled from "styled-components";
import MainVisual from "../assets/MainVisual.png"; // Main görseli
import Logo from "../../../assets/images/logo-white.png"; // Logo görseli

// Styled components tanımları
const IntroSectionWrapper = styled.div`
  position: relative;
  background-image: url(${MainVisual});
  height: 480px;
  width: 100%;
  background-size: cover;
  background-position: center;

  /* Ekran küçüldüğünde yüksekliği ayarla */
  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const LogoWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);

  /* PC için */
  width: 360px;
  height: 82px;

  /* Tablet için */
  @media (max-width: 768px) {
    width: 253px;
    height: 25.09px;
    top: 158.02px;
    left: 150px;
   
  }

  /* Mobil için */
  @media (max-width: 390px) {
    width: 226px;
    height: 24px;
    left: 30%;
   
  }
`;

const LogoImage = styled.img`
  width: 100%;
  

`;

function HomePageIntroSection() {
  return (
    <div>
      {/* Üstte yer alan arka plan resmi ve logo */}
      <IntroSectionWrapper>
        <LogoWrapper>
          <LogoImage src={Logo} alt="Logo" />
        </LogoWrapper>
      </IntroSectionWrapper>

      {/* Footer kısmı */}
    </div>
  );
}

export default HomePageIntroSection;
