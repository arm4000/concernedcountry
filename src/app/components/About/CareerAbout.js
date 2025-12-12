import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import styles from "../../page.module.css";
import { LuDownload, LuPrinter } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import {
  FcDownload,
  FcPrint,
  FcRefresh,
  FcEditImage,
  FcRight,
} from "react-icons/fc";
import Link from "next/link";

const CareerAbout = () => {
  return (
    <div>
      {/* <div className={styles.stepContainer}>
        <div className={`${styles.step} ${styles.active}`}>
          Download the applicaton form
        </div>
        <div className={styles.step}>Step 2</div>
        <div className={styles.step}>Step 3</div>
        <div className={styles.step}>Step 3</div>
      </div> */}

      <Row className="text-center">
        <Col lg={2} sm={0}></Col>
        <Col lg={8} sm={12} className="my-5">
          <h1 style={{ color: "#FF8F8F" }}>
            {" "}
            Apply to Grand Blanc Fields Assisted <br /> Living Today{" "}
          </h1>{" "}
          <p style={{ fontSize: 20, lineHeight: 1.8 }}>
            If you wish to apply for a job and join our team at Grand Blanc
            Fields Assisted Living, please use one of the two methods to do so
            below. We look forward to hearing from you!
          </p>
        </Col>
        <Col lg={2} sm={0}></Col>
      </Row>

      <Row className="pb-3">
        <Col lg={2}></Col>
        <Col lg={4} className="pb-2">
          <Card className="my-2">
            <CardHeader
              style={{
                fontSize: 25,
                backgroundColor: "#C2E2FA",
                fontWeight: 500,
              }}
            >
              Application Form
            </CardHeader>
            <CardBody>
              <CardTitle></CardTitle>
              <div className="d-flex">
                <ul style={{ fontSize: 20, lineHeight: 1.8 }}>
                  <li>Download the application form</li>
                  <li>Print the application form</li>
                  <li>Complete the application form</li>
                  <li>Return application to our office</li>
                  <li style={{ color: "#dc7575ff" }}>
                    12628 Pagels Dr. Grand Blanc, MI 48439
                  </li>
                </ul>
              </div>

              <Button
                className="border-0 text-dark"
                href="https://static1.squarespace.com/static/5aa46829a2772c59eb98f282/t/5acab8fb1ae6cf686ae3ad93/1523235069562/EMPLOYMENT+APPLICATION_GBFAL.pdf"
                target="_blank"
                style={{
                  width: "100%",
                  backgroundColor: "#B7A3E3",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "white",
                }}
              >
                DOWNLOAD
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="my-2">
            <CardHeader
              style={{
                fontSize: 25,
                backgroundColor: "#C2E2FA",
                fontWeight: 500,
              }}
            >
              Apply Online
            </CardHeader>
            <CardBody>
              <CardTitle></CardTitle>
              <div className="d-flex">
                <ul style={{ fontSize: 20, lineHeight: 1.8 }}>
                  <li>Fill out the form</li>
                  <li>Submit the form online</li>
                  <li style={{ color: "#dc7575ff" }}>
                    Please allow time for completing the entire application as
                    there is no way to save and come back later.
                  </li>
                </ul>
              </div>

              <Button
                className="border-0 text-dark"
                href="https://docs.google.com/forms/d/e/1FAIpQLScAARYPLCeTvoe21PbT090SC4MJ7U3XljO0mNvvlsJ4HkHk_w/viewform"
                target="_blank"
                style={{
                  width: "100%",
                  backgroundColor: "#B7A3E3",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                APPLY
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg={2}></Col>
      </Row>
      {/* <Row className="pt-5">
        <h4 className="pb-3">Method 1: Download Application Form</h4>{" "}
        <Col lg={3} sm={12}>
          <div className="d-flex justify-content-center align-items-center">
            <div className={styles.progressIcon}>
              <FcDownload size={60} color="black" />
            </div>
          </div>
          <p className="mt-4 text-center fw-bold">Download Application Form</p>
        </Col>
        <Col lg={3} sm={12}>
          <div className="d-flex justify-content-center align-items-center">
            <div className={styles.progressIcon}>
              <FcPrint size={60} color="black" />
            </div>
          </div>
          <p className="mt-4 text-center fw-bold">Print Application Form</p>
        </Col>
        <Col lg={3} sm={12}>
          <div className="d-flex justify-content-center align-items-center">
            <div className={styles.progressIcon}>
              <FcEditImage size={60} color="black" />
            </div>
          </div>
          <p className="mt-4 text-center fw-bold">Complete Application Form</p>
        </Col>
        <Col lg={3} sm={12}>
          <div className="d-flex justify-content-center align-items-center">
            <div className={styles.progressIcon}>
              <FcRefresh size={60} color="black" />
            </div>
          </div>
          <p className="mt-4 text-center fw-bold">Return Form to our Office</p>
        </Col>
      </Row> */}
      {/* <div className="d-flex justify-content-center align-items-center my-4">
        <Button
          href="https://static1.squarespace.com/static/5b68e7fa8ab7226692b40b29/t/5b68f9d4758d46cbe67029d5/1533606356783/EMPLOYMENT+APPLICATION_BRFAL.pdf"
          className="bg-dark text-light mx-2 border-0"
          style={{ paddingTop: 12, height: 50, width: 250 }}
          target="_blank"
        >
          Download Application Form
        </Button>
      </div> */}
      {/* <h4 className="mt-5 py-3">Method 2: Apply Online</h4>{" "} */}
      {/* <Container>
        <Row
          className="py-3 my-3"
          style={{
            backgroundColor: "white",
            border: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col lg={9} md={9} sm={12}>
            <div style={{ lineHeight: 1 }}>
              <p style={{ fontSize: 20, marginTop: 5 }}>
                {"Fill out the form and submit online."}
              </p>
              <span style={{ fontSize: 15, color: "red" }}>
                *Please allow time for completing the entire application as
                there is no way to save and come back later.
              </span>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLScaTSrU_z35ofi9xgz8FR37wCk0wBzzGSA-Rss5dcJA7cI2Ww/viewform?usp=sf_link"
              className="bg-dark text-light mx-2 mt-4 border-0"
              style={{ paddingTop: 12, height: 50, width: 250 }}
              target="_blank"
            >
              Apply Online
            </Button>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default CareerAbout;
