"use client";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import Link from "next/link";

const HomeAbout = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Container className="pt-5 pb-5">
      <Row
        className="p-4"
        style={{
          borderRadius: 10,
          backgroundColor: "#C2E2FA",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        <Col lg={7} sm={12}>
          <p>Welcome Home to </p>
          <h2 className={styles.aboutHeading}>Concerned Country Care</h2>
          <p>
            <b>Licensed Adult Foster Care - Montrose, Michigan </b>
          </p>
          <p style={{ lineHeight: 2.5 }}>
            At Concerned Country Care we understand that peace of mind comes
            with knowing your loved ones are well cared for. We take great pride
            in providing superior adult foster care services within an
            environment that offers all the comforts of home.
          </p>
        </Col>

        <Col lg={5} sm={12} className="px-5">
          <h3> Contact Us </h3>
          <Link
            href={
              "http://maps.google.com/?q=11122 W. Wilson Road Montrose, MI 48457"
            }
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <p
              style={{ fontSize: 18, fontWeight: 500 }}
              className={`${styles.homeLink} mt-4 mx-2`}
            >
              11122 W. Wilson Road Montrose, MI 48457
            </p>
          </Link>

          {/* <div className="mt-4 d-flex justify-content-center">
            <Button
              // disabled
              className="text-light border-0 my-2"
              style={{
                backgroundColor: "#253551",
                height: 50,
                width: 310,
                // paddingTop: 12,
              }}
            >
              12628 Pagels Dr. Grand Blanc, MI 48439
            </Button>
          </div> */}

          <div className="d-flex justify-content-center">
            <Button
              href="tel:(810) 639-2227"
              className="text-light border-0 my-2"
              style={{
                backgroundColor: "#253551",
                height: 50,
                width: 310,
                paddingTop: 12,
                fontSize: 18,
              }}
            >
              Call Today
            </Button>
          </div>

          <div className="d-flex justify-content-center">
            <Button
              href={"tel:(810) 639-6981"}
              target="_blank"
              className="text-light border-0 my-2"
              style={{
                backgroundColor: "#253551",
                height: 50,
                width: 310,
                paddingTop: 12,
                fontSize: 18,
              }}
            >
              Fax Number
            </Button>
          </div>

          <div className="d-flex justify-content-center">
            <Button
              href={"www.facebook.com/ConcernedCountyCare"}
              target="_blank"
              className="text-light border-0 my-2"
              style={{
                backgroundColor: "#253551",
                height: 50,
                width: 310,
                paddingTop: 12,
                fontSize: 18,
              }}
            >
              Follow us on Facebook
            </Button>
          </div>
        </Col>
      </Row>
    </Container>

    // <Container className="p-5">
    //   <span>Welcome Home to </span>
    //   <h1 style={{ color: "#6EC8BA" }}> Grand Blanc Fields </h1>{" "}
    //   <h3 style={{ color: "GrayText" }}>Assisted Living </h3>
    //   <p className={styles.aboutText}>
    //     Grand Blanc Fields Assisted Living would like to thank you for considering
    //     our community as your new home. Our beautiful community is conveviently
    //     located right in Grand Blanc just west of the Grand Blanc Premium Outlets,
    //     You will find our community offers a loving, caring staff that has been
    //     assembled for your care and comfort.
    //     <br/>
    //     <br/>
    //     We invite you to tour and discover
    //     living in beautiful Grand Blanc Fields Assisted Living. We are confident
    //     you will like what you see enough to join the many residents choosing
    //     our facility as their home.
    //     <br/>
    //     <br/>
    //     At Grand Blanc Fields Assisted Living,
    //     attention to your personal needs is delivered by our loving staff with
    //     dignity and a genuine spirit of caring. We offer the highest level of
    //     service, value, and quality - everything you are looking for in an
    //     assisted living community!
    //   </p>
    //   <Image
    //     alt="Grand Blanc Fields Building"
    //     src={"/images/birch-run-fields.webp"}
    //     width={0}
    //     height={0}
    //     sizes="100vw"
    //     style={{
    //       width: "100%",
    //       height: 400,
    //       objectFit: "cover",
    //       borderRadius: 10,
    //       marginTop: 10,
    //     }}
    //   />
    // </Container>
  );
};

export default HomeAbout;
