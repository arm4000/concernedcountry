import React from "react";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Footer from "../components/Footer/Footer";
import ContactAbout from "../components/About/ContactAbout";
import ContactForm from "../components/Form/ContactForm";
import Cta from "../components/Cta/Cta";

const page = () => {
  return (
    <>
      <CustomNavbar />
      <ContactForm />
      <Cta />
      <Footer />
    </>
  );
};

export default page;
