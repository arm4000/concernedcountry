"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
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
            src="/images/logo.png"
            // height={deviceWidth > 500 ? 150 : 100}
            // width={deviceWidth > 800 ? 300 : 120}
            height={150}
            width={250}
            style={{ objectFit: "contain" }}
            alt="Grand Blanc Fields Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" className={`mx-3 ${styles.navTitle}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/services" className={`mx-3 ${styles.navTitle}`}>
              Amenities
            </Nav.Link>
            <Nav.Link as={Link} href="/pricing" className={`mx-3 ${styles.navTitle}`}>
              Floor Plans
            </Nav.Link>
            {/* <NavDropdown
              title="More Info"
              id="basic-nav-dropdown"
              className={`mx-3 ${styles.navTitle}`}
            >
              <NavDropdown.Item
                as={Link}
                href="/services"
                className={styles.navTitle}
              >
                Services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/pricing"
                className={styles.navTitle}
              >
                Pricing
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link
              as={Link}
              href="/gallery"
              className={`mx-3 ${styles.navTitle}`}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/career"
              className={`mx-3 ${styles.navTitle}`}
            >
              Careers
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              className={`mx-3 ${styles.navTitle}`}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/location"
              className={`mx-3 ${styles.navTitle}`}
            >
              Location
            </Nav.Link>
          </Nav>
          {/* <Button
            className="bg-dark text-light mx-3 border-0"
            href="tel:(810) 606-0823"
          >
            Call us: (810) 606-0823
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
