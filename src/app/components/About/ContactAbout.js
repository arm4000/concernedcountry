import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import { LuMapPin, LuPhone, LuFacebook } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import ContactForm from "../Form/ContactForm";

const ContactAbout = () => {
  return (
    <Container className="py-5">
      <div className="py-3">
        <h1 style={{ color: "#FF8F8F" }}> Contact Us </h1>{" "}
        <p className={styles.aboutText}>
          If you would like more information, feel free to call or use the
          contact form below:
        </p>
      </div>

      <ContactForm />
    </Container>
  );
};

export default ContactAbout;
