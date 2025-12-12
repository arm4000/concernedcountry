import React from "react";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Footer from "../components/Footer/Footer";
import ServiceAbout from "../components/About/ServiceAbout";
import ServicesFeatures from "../components/Services/ServicesFeatures";
import Cta from "../components/Cta/Cta";

const Services = () => {
  return (
    <>
      <CustomNavbar />
      <ServiceAbout />
      <ServicesFeatures />
      <Cta />
      <Footer />
    </>
  );
};

export default Services;
