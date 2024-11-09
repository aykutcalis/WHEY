// src/components/HomePageMainVisual.tsx
import styled from "styled-components";
import MainVisual from "../../assets/MainVisual.png"; // Main görseli
import Logo from "../../assets/logo-white.png"; // Logo görseli

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
  left: 10%;
  transform: translateY(-50%);
  width: 120px;
  height: auto;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HomePageMainVisual = () => {
  return (
    <IntroSectionWrapper>
      {/* Logo */}
      <LogoWrapper />
    </IntroSectionWrapper>
  );
};

export default HomePageMainVisual;
