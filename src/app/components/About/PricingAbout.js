import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import CustomDivider from "../CustomDivider/CustomDivider";
import Cta from "../Cta/Cta";

const PricingAbout = () => {
  return (
    <Container className="pt-5 pb-4">
      <Row>
        <Col lg={8} sm={12}>
          <div className="py-3">
            <h1 style={{ color: "#FF8F8F" }}> Senior Living Floor Plans </h1>{" "}
            {/* <h3> Our Assisted Living Floor Plans </h3> */}
            <p style={{ fontSize: 18, lineHeight: 1.8 }}>
              Our home sits on 5 acres in a serene country setting, where your
              loved one will enjoy the natural beauty that surrounds them. While
              having the security of a dedicated and knowledgeable team of
              caregivers. 
              Our studio and one bedroom suites come with their own
              closets, private bathroom, generous window views and many other
              amenities. Room measurements are approximate.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#dc7575ff" }}>
              * Residents are urges to bring their own personal furnishing,
              utilize a mixture of their own and Grand Blanc Fields' or just
              enjoy the furnishings Grand Blanc Fields offers.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                fontWeight: 600,
                color: "GrayText",
              }}
            >
              Studio • Standard • Private • Suite
            </p>
          </div>
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
              height: 300,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
        </Col>
      </Row>

      <Container className="pt-5">
        <Row className="text-center">
          <Col lg={8} sm={12}>
            <h3 className="text-center"> Our Assisted Living Floor Plans </h3>
            <CustomDivider />
            <div className="pt-5 pb-3">
              <h4 style={{ color: "#FF8F8F" }}>
                STANDARD PRIVATE STUDIO - ALL INCLUSIVE
              </h4>
              <h5>Approx: 270 sq-ft | $4000 per month</h5>
              <Row>
                <Col lg={1} sm={0}></Col>
                <Col lg={10} sm={12}>
                  <p style={{ fontSize: 18, lineHeight: 1.8 }}>
                    This comfortable private studio includes bedroom area,
                    living area and private bathroom. It includes a spacious
                    closet and resident call pendant. Studio is furnished with
                    twin bed, three-drawer dresser, nightstand, lamp and chair.
                  </p>
                </Col>
                <Col lg={1} sm={0}></Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col lg={8} sm={12}>
            <Row>
              <Col lg={1} sm={0}></Col>
              <Col lg={10} sm={12}>
                <Image
                  alt="Home Banner Slide 1"
                  src={"/images/standard-private-studio.webp"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: 500,
                    height: 500,
                    objectFit: "contain",
                    marginTop: 20,
                  }}
                />
                <p
                  className="mt-4 mx-auto d-flex justify-content-center align-items-center"
                  style={{
                    height: 50,
                    width: 250,
                    backgroundColor: "#B7A3E3",
                    fontWeight: 500,
                    borderRadius: 10,
                  }}
                >
                  STANDARD PRIVATE STUDIO
                </p>
              </Col>
              <Col lg={1} sm={0}></Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5">
        <Row className="text-center">
          <Col lg={8} sm={12}>
            <div className="py-3">
              <h4 style={{ color: "#FF8F8F" }}>
                PRIVATE WALKOUT STUDIO - ALL INCLUSIVE
              </h4>
              <h5>Approx: 290 sq-ft | $4300 per month</h5>
              <Row>
                <Col lg={1} sm={0}></Col>
                <Col lg={10} sm={12}>
                  <p style={{ fontSize: 18, lineHeight: 1.8 }}>
                    This roomy private studio includes bedroom area, living area
                    and private bathroom with a walk-in shower stall, custom
                    built-in counter with mini fridge. It includes a spacious
                    closet and resident call pendant. Studio is furnished with
                    twin bed, three-drawer dresser, nightstand, lamp and chair.
                  </p>
                </Col>
                <Col lg={1} sm={0}></Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col lg={8} sm={12}>
            <Row>
              <Col lg={1} sm={0}></Col>
              <Col lg={10} sm={12}>
                <Image
                  alt="Home Banner Slide 1"
                  src={"/images/large-private-studio.webp"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: 500,
                    height: 500,
                    objectFit: "contain",
                    marginTop: 20,
                  }}
                />
                <p
                  className="mt-4 mx-auto d-flex justify-content-center align-items-center"
                  style={{
                    height: 50,
                    width: 250,
                    backgroundColor: "#B7A3E3",
                    fontWeight: 500,
                    borderRadius: 10,
                  }}
                >
                  PRIVATE WALKOUT STUDIO
                </p>
              </Col>
              <Col lg={1} sm={0}></Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5">
        <Row className="text-center">
          <Col lg={8} sm={12}>
            <div className="py-3">
              <h4 style={{ color: "#FF8F8F" }}>
                ONE BEDROOM WALKOUT SUITE - ALL INCLUSIVE
              </h4>
              <h5>Approx: 480 sq-ft | $4600 per month</h5>
              <Row>
                <Col lg={1} sm={0}></Col>
                <Col lg={10} sm={12}>
                  <p style={{ fontSize: 18, lineHeight: 1.8 }}>
                    This impressively-sized suite includes a private bedroom
                    with large closet, private living room with large closet,
                    private bathroom with walk-in shower. Custom built-in
                    counter with sink and mini fridge and resident call pendant.
                    Bedroom is furnished with twin bed, three-drawer dresser,
                    nightstand, lamp and chair.
                  </p>
                </Col>
                <Col lg={1} sm={0}></Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col lg={8} sm={12}>
            <Row>
              <Col lg={1} sm={0}></Col>
              <Col lg={10} sm={12}>
                <Image
                  alt="Home Banner Slide 1"
                  src={"/images/one-bedroom-suite.webp"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: 500,
                    height: 500,
                    objectFit: "contain",
                    marginTop: 20,
                  }}
                />
                <p
                  className="mt-4 mx-auto d-flex justify-content-center align-items-center"
                  style={{
                    height: 50,
                    width: 250,
                    backgroundColor: "#B7A3E3",
                    fontWeight: 500,
                    borderRadius: 10,
                  }}
                >
                  ONE BEDROOM WALKOUT SUITE
                </p>
              </Col>
              <Col lg={1} sm={0}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PricingAbout;
