import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import ResidencyQuality from "./components/ResidencyQuality/ResidencyQuality";
import Services from "./components/Services/Services";
import WhatToExepect from "./components/WhatToExpect/WhatToExepect";
import ResidencyArea from "./components/ResidencyArea/ResidencyArea";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Mission />
      <WhatToExepect />
      <Services />
      <ResidencyQuality />
      <Contact />
      <ResidencyArea />
      <Footer />
    </>
  );
};
