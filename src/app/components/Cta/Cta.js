import React from "react";
import styles from "../../cta.module.css";

const Cta = () => {
  return (
    <div
      className={`${styles.container} py-5 text-center`}
      style={{ backgroundColor: "#C2E2FA" }}
    >
      <h1>Lock-In Low Rates, Call Today</h1>
      <h3>Call with your questions we are here and ready to help.</h3>
      <h1>
          <a
            className={`${styles.ctaLink}`}
            style={{ textDecoration: "none" }}
            href="tel:(810) 606-0823"
          >
            (810) 639-2227
          </a>
      </h1>
    </div>
  );
};

export default Cta;
