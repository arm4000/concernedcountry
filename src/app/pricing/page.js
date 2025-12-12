import React from "react";
import PricingAbout from "../components/About/PricingAbout";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta/Cta";

const Pricing = () => {
  return (
    <>
      <CustomNavbar />
      <PricingAbout />
      <Cta />
      <Footer />
    </>
  );
};

export default Pricing;
