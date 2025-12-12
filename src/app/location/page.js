import React from "react";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Footer from "../components/Footer/Footer";
import { Container } from "react-bootstrap";
import LocationMap from "../components/Map/LocationMap";
import Cta from "../components/Cta/Cta";
import Link from "next/link";
import styles from "../page.module.css";

const page = () => {
  return (
    <>
      <CustomNavbar />
      <Container style={{ maxWidth: 1200, marginBottom: 50 }}>
        <div className="mt-5 text-center">
          <h1 className="baloo2-extraBold mb-3" style={{ color: "#FF8F8F" }}>
            Our Location
          </h1>
          <Link
            href={
              "http://maps.google.com/?q=11122 W. Wilson Road Montrose, MI 48457"
            }
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <p
              style={{ fontSize: 28, fontWeight: 500 }}
              className={`${styles.homeLink} mt-2 mb-4 mx-2`}
            >
              11122 W. Wilson Road Montrose, MI 48457
            </p>
          </Link>
        </div>

        <LocationMap />
      </Container>
      <Cta />
      <Footer />
    </>
  );
};

export default page;
