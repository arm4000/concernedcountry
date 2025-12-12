"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LuMapPin, LuPhone, LuFacebook } from "react-icons/lu";
import { MdOutlineFax } from "react-icons/md";
import styles from "../../page.module.css";

const Footer = () => {
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
    <Container
      fluid
      className="pt-5 px-5 pb-2"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <Row>
        <Col lg={4} sm={12}>
          <Image
            src="/images/logo.webp"
            // height={deviceHeight > 500 ? 200 : 200}
            // width={deviceWidth > 500 ? 400 : 300}
            height={160}
            width={280}
            style={{ objectFit: "contain" }}
            alt="Grand Blanc Fields Logo"
          />
          <p className="py-2" style={{ paddingRight: 20 }}>
            Enhancing lives through compassionate care and a true sense of home.
          </p>
        </Col>

        <Col lg={2} sm={12} className="pt-2">
          <h5>Links</h5>
          <div
            style={{
              height: 2,
              width: 20,
              backgroundColor: "black",
              marginBottom: 10,
            }}
          />
          <h6>
            <Link href={"/services"} className={styles.footerLink}>
              Services
            </Link>
          </h6>
          <h6>
            <Link href={"/pricing"} className={styles.footerLink}>
              Amenities
            </Link>
          </h6>
          <h6>
            <Link href={"/gallery"} className={styles.footerLink}>
              Gallery
            </Link>
          </h6>
          <h6>
            <Link href={"/career"} className={styles.footerLink}>
              Careers
            </Link>
          </h6>
          <h6>
            <Link href={"/contact"} className={styles.footerLink}>
              Contact
            </Link>
          </h6>
        </Col>

        <Col lg={4} sm={12} className="pt-2">
          <h5>Contact</h5>
          <div
            style={{
              height: 2,
              width: 20,
              backgroundColor: "black",
              marginBottom: 10,
            }}
          />
          <div className="d-flex">
            <LuMapPin style={{ color: "GrayText" }} size={20} />
            <Link
              href={
                "http://maps.google.com/?q=11122 W. Wilson Road Montrose, MI 48457"
              }
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <h6
                className={`${styles.footerLink} mx-3`}
                style={{ fontSize: 16 }}
              >
                11122 W. Wilson Road Montrose, MI 48457
              </h6>
            </Link>
          </div>
          <div className="d-flex">
            <LuPhone style={{ color: "GrayText" }} size={20} />
            <Link
              href={"tel:(810) 639-2227"}
              style={{ textDecoration: "none" }}
            >
              <h6
                className={`${styles.footerLink} mx-3`}
                style={{ fontSize: 16 }}
              >
                (810) 639-2227
              </h6>
            </Link>
            <p className={`${styles.footerLink}`} style={{ fontSize: 16 }}> / </p>
            <Link
              href={"tel:(810) 730-0692"}
              style={{ textDecoration: "none" }}
            >
              <h6
                className={`${styles.footerLink} mx-3`}
                style={{ fontSize: 16 }}
              >
                (810) 730-0692
              </h6>
            </Link>
          </div>
          <div className="d-flex">
            <MdOutlineFax style={{ color: "GrayText" }} size={20} />
            <Link
              href={"fax:(810) 639-6981"}
              style={{ textDecoration: "none" }}
            >
              <h6
                className={`${styles.footerLink} mx-3`}
                style={{ fontSize: 16 }}
              >
                (810) 639-6981
              </h6>
            </Link>
          </div>
          <Link
            href={"https://www.facebook.com/ConcernedCountyCare"}
            target="_blank"
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#253551",
            }}
          >
            <LuFacebook size={20} color="white" />
          </Link>
        </Col>
      </Row>

      <h6 className="text-center text-dark pt-4 pb-2">
        © Concerned Country Care - Adult Foster Care
      </h6>
    </Container>
  );
};

export default Footer;
