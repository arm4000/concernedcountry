import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { LuMapPin, LuPhone, LuFacebook } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import styles from "../../page.module.css";
import Link from "next/link";

const ContactForm = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Col lg={7} md={7} sm={12} className="py-3">
          <div className="py-3">
            <h1 style={{ color: "#FF8F8F" }}> Contact Us </h1>{" "}
            <p className={styles.aboutText}>
              If you would like more information, feel free to call or use the
              contact form below:
            </p>
          </div>

          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                className={styles.formControl}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Last Name"
                className={styles.formControl}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className={styles.formControl}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Subject"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="subject"
                className={styles.formControl}
                required
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "100px" }}
                className={styles.formControl}
              />
            </FloatingLabel>

            <div className="text-center pt-3">
              <Button
                className="text-light border-0 my-2"
                style={{
                  backgroundColor: "#253551",
                  height: 50,
                  width: 310,
                  fontSize: 18,
                }}
              >
                SUBMIT
              </Button>
            </div>
          </Form>

          <h4 className="text-center my-4">Follow Us on Social Media</h4>
          <Link
            href={"https://www.facebook.com/ConcernedCountyCare"}
            target="_blank"
            className="mx-auto d-flex justify-content-center align-items-center"
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3B5998",
            }}
          >
            <LuFacebook size={25} color="white" />
          </Link>
        </Col>

        {/* <Container> */}
        <Col lg={4} md={4} sm={12} className="py-5 my-5">
          <h3 style={{ color: "#000", textAlign: "center" }} className="pb-5">
            {" "}
            Concerned Country Care Adult Foster Care{" "}
          </h3>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              backgroundColor: "#FF8F8F",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: "#FF8F8F",
              }}
            >
              <LuMapPin color="#fff" size={25} className="mx-2" />
            </div>
            <Link
              href={
                "http://maps.google.com/?q=11122 W. Wilson Road Montrose, MI 48457"
              }
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <p
                style={{
                  marginTop: 25,
                  fontSize: 18,
                  fontWeight: 500,
                  // color: "white",
                }}
                className={`${styles.contactLink} mx-2`}
              >
                11122 W. Wilson Road Montrose, MI 48457
              </p>
            </Link>
          </div>

          <div
            className="mt-5"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              backgroundColor: "#C2E2FA",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: "#C2E2FA",
              }}
            >
              <LuPhone color="#fff" size={25} className="mx-2" />
            </div>
            <Link
              href={"(810) 639-2227"}
              style={{ textDecoration: "none" }}
            >
              <p
                style={{ marginTop: 25, fontSize: 18, fontWeight: 500 }}
                className={`${styles.contactLink} mx-2`}
              >
                (810) 639-2227
              </p>
            </Link>
            <Link
              href={"(810) 730-0692"}
              style={{ textDecoration: "none" }}
            >
              <p
                style={{ marginTop: 25, fontSize: 18, fontWeight: 500 }}
                className={`${styles.contactLink} mx-2`}
              >
              / (810) 730-0692
              </p>
            </Link>
          </div>

          <div
            className="mt-5"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              backgroundColor: "#B7A3E3",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: "#B7A3E3",
              }}
            >
              <LiaFaxSolid color="#fff" size={25} className="mx-2" />
            </div>
            <Link
              href={"fax:(810) 639-6981"}
              style={{ textDecoration: "none" }}
            >
              <p
                style={{ marginTop: 25, fontSize: 18, fontWeight: 500 }}
                className={`${styles.contactLink} mx-2`}
              >
                (810) 639-6981
              </p>
            </Link>
          </div>
        </Col>
        {/* </Container> */}
      </Row>
    </Container>
  );
};

export default ContactForm;
