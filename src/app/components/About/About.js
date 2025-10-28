import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { RiHomeOfficeLine } from "react-icons/ri";
import Link from "next/link";

const About = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row
        className="p-4"
        style={{
          borderRadius: 10,
          backgroundColor: "#F2F2F2",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        <Col lg={7} sm={12}>
          <h2 className={styles.aboutHeading}>
            Welcome Home to Concerned Countary Care
          </h2>
          <h4>Adult Foster Care</h4>
          <p>
            At Concerned Country Care we understand that peace of mind comes
            with knowing your loved ones are well cared for.
          </p>
          <p>
            We take great pride in providing superior adult foster care services
            within an environment that offers all the comforts of home.
          </p>
        </Col>

        <Col lg={5} sm={12} className="px-5">
          <h3> Contact Us </h3>
            <p style={{ fontSize: 18, fontWeight: 500 }} className="mx-2">
              11122 W. Wilson Road Montrose, MI 48457
            </p>

          <div className="d-flex justify-content-center">
            <Button
              href="tel:(810) 639-2227"
              className="text-light border-0"
              style={{
                backgroundColor: "#253551",
                height: 50,
                width: 150,
                marginRight: 10,
                paddingTop: 12
              }}
            >
              Call Today
            </Button>
            <Button
              href="fax:(810) 639-6981"
              className="text-light border-0"
              style={{ backgroundColor: "#253551", height: 50, width: 150, paddingTop: 12 }}
            >
              Fax Us
            </Button>
          </div>

<div className="d-flex justify-content-center">
          <Button
            href={"https://www.facebook.com/ConcernedCountyCare"}
            target="_blank"
            className="text-light border-0 my-2"
            style={{ backgroundColor: "#253551", height: 50, width: 310, paddingTop: 12 }}
          >
            Follow us on Facebook
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
