import Footer from "./components/Footer/Footer";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import HomeAbout from "./components/About/HomeAbout";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import Mission from "./components/Mission/Mission";
import WhatToExpect from "./components/WhatToExpect/WhatToExpect";
import FloorPlan from "./components/FloorPlan/FloorPlan";
import Gallery from "./components/FloorPlan/Gallery";
import HomeServices from "./components/Services/HomeServices";
import Cta from "./components/Cta/Cta";

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <HeaderBanner />
      <HomeAbout />
      <Mission />
      <WhatToExpect />
      <FloorPlan />
      <HomeServices />
      <Cta />
      <Footer />
    </>
  );
}
