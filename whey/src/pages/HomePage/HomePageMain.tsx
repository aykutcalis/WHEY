import BestSellerCards from "../../components/BestSellerCards"
import HomePageCards from "./sections/HomePageCards"
import HomePageCustomerSComments from "./sections/HomePageCustomerSComments"
import HomePageInfo from "./sections/HomePageInfo"
import HomePageIntroSection from "./sections/HomePageIntroSection"
import HomePageNutritionImage from "./sections/HomePageNutritionImage"



function HomePageMain() {
  return (
   <>
   <HomePageNutritionImage/>
   <HomePageCards/>
   <BestSellerCards/>
   <HomePageIntroSection/>
   <HomePageCustomerSComments/>
   <HomePageInfo/>
   
   </>
  )
}

export default HomePageMain