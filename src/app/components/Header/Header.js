import React from "react";
import styles from "../../page.module.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import { Badge } from "react-bootstrap";

const Header = () => {
  return (
    <div className={styles.headerConatiner}>
      <CustomNavbar />

      <div style={{ position: "absolute", bottom: 10, left: 30 }}>
        <div
          className="badge mb-3 px-3"
          style={{ paddingTop: 10, borderRadius: 50, backgroundColor: "#E8E1D4" }}
        >
          <h2 className="text-dark">Licensed Adult Foster Care</h2>
        </div>{" "}
        <br />
        <div
          className="badge mb-3 px-3"
          style={{paddingTop: 12, borderRadius: 50, backgroundColor: "#E8E1D4" }}
        >
          <h5 className="text-dark">Montrose, Michigan</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
