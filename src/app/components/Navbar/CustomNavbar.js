"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdPhone } from "react-icons/md";
import { LiaFacebookF } from "react-icons/lia";
import styles from "../../page.module.css";

const CustomNavbar = () => {
  const [deviceHeight, setDeviceHeight] = useState();
  const [deviceWidth, setDeviceWidth] = useState();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

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
    <Navbar expand="lg" className={`${styles.navbar}`}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/images/logo.webp"
            // height={deviceWidth > 500 ? 150 : 100}
            // width={deviceWidth > 500 ? 300 : 120}
            height={150}
            width={250}
            style={{ objectFit: "contain" }}
            alt="Grand Blanc Fields Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light border-0" />
        <Navbar.Collapse className="justify-content-end">
          <Button
            className={`${styles.iconButton} bg-light text-dark mx-3 border-0`}
            href="https://www.facebook.com/ConcernedCountyCare"
            target="_blank"
            style={{
              borderRadius: 50,
              height: 50,
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5
            }}
          >
            <LiaFacebookF size={35} />
          </Button>
          <Button
            className={`${styles.iconButton} bg-light text-dark mx-3 border-0`}
            href="tel:(989) 244-6670"
            style={{
              borderRadius: 50,
              height: 50,
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5
            }}
          >
            <MdPhone size={35} />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
