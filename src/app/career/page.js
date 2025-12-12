import React from "react";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Footer from "../components/Footer/Footer";
import CareerAbout from "../components/About/CareerAbout";
import Cta from "../components/Cta/Cta";

const page = () => {
  return (
    <>
      <CustomNavbar />
      <CareerAbout />
      <Cta />
      <Footer />
    </>
  );
};

export default page;
