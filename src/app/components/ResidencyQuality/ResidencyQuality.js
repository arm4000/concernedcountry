"use client"
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const ResidencyQuality = () => {
  const [deviceHeight, setDeviceHeight] = useState();
  const [deviceWidth, setDeviceWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(
        "device height: " + window.innerHeight,
        "device width: " + window.innerWidth
      );
      setDeviceHeight(window.innerHeight);
      setDeviceWidth(window.innerWidth);
    });
  }, []);

  return (
    <Container className="py-4">
      <div
        className={`${styles.missionContainer} p-4`}
        style={{
          borderRadius: 10,
          backgroundColor: "#0E86AC",
        }}
      >
        <Row>
          <Col lg={7} sm={12} style={{ color: "white" }}>
            <h2 className="pb-3">
              Concerned Countary Care <br /> We value our residents
            </h2>
            <p>
              Our residents enjoy the comforts of a clean and spacious home,
              quality care and delicious, home-cooked meals. We value providing
              excellent caregiving with an extra dose of love and attention, 24
              hours a day, 7 days a week.
            </p>
          </Col>
          <Col lg={5} sm={12}>
            <Image
              src={"/images/caregiver3.jpg"}
              height={200}
              width={deviceWidth > 500 ? 500 : 325}
              // layout="responsive"
              style={{ borderRadius: 10, objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ResidencyQuality;
