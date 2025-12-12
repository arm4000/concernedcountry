import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";

const ServiceAbout = () => {
  return (
    <Container className="pt-5 pb-4">
      <h1 style={{ color: "#FF8F8F" }}> Community Services and Amenities </h1>{" "}
      <Row>
        <Col lg={8} sm={12}>
          <p style={{ fontSize: 18, lineHeight: 1.8 }}>
            Our residents enjoy the comforts of a clean and
            spacious home, quality care and delicious, home-cooked meals. We
            value providing excellent caregiving with an extra dose of love and
            attention, 24 hours a day, 7 days a week.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={8} sm={12}>
          <Image
            alt="Home Banner Slide 1"
            src={"/images/ccc-5.jpeg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: 400,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
        </Col>
        <Col lg={4} sm={12}>
          <Image
            alt="Home Banner Slide 1"
            src={"/images/ccc-map.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: 400,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceAbout;
