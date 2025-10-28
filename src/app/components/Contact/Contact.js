import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { RiHomeOfficeLine } from "react-icons/ri";
import styles from "../../page.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <Container
      className="my-5 py-4 px-3"
      style={{ backgroundColor: "#F2F2F2", borderRadius: 10 }}
    >
      <h1 className="text-center">Contact Us</h1>
      <Row
        className="py-3 px-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Col lg={5} md={5} sm={12} className="py-3 px-2 my-3">
          <h3> Concerned Countary Care </h3>
          <p>
            Call us anytime to learn more about our talented staff, or to set up
            an appointment to tour our facility.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <RiHomeOfficeLine size={25} className="mx-2" />
            <p
              style={{ marginTop: 10, fontSize: 18, fontWeight: 500 }}
              className="mx-2"
            >
              Gail Gauthier, Director of Admissions
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LuMapPin size={25} className="mx-2" />
            <p
              style={{ marginTop: 10, fontSize: 18, fontWeight: 500 }}
              className="mx-2"
            >
              11122 W. Wilson Road Montrose, MI 48457
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LuPhone size={25} className="mx-2" />
            <Link
              href={"tel:(810) 606-0823"}
              style={{ textDecoration: "none" }}
            >
              <p
                style={{ marginTop: 10, fontSize: 18, fontWeight: 500 }}
                className="mx-2"
              >
                (810) 639-2227
              </p>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LiaFaxSolid size={25} className="mx-2" />
            <Link
              href={"fax:(810) 606-0823"}
              style={{ textDecoration: "none" }}
            >
              <p
                style={{ marginTop: 10, fontSize: 18, fontWeight: 500 }}
                className="mx-2"
              >
                (810) 639-6981
              </p>
            </Link>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} className="py-3">
          <Form>
            <InputGroup>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
                style={{ paddingRight: 5 }}
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
            </InputGroup>

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
              label="Phone"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="phone"
                className={styles.formControl}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Im interested in"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Im interested in..."
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

            <div className="text-center">
              <Button
                className="text-light my-4 border-0"
                style={{ backgroundColor: "#253551", height: 50, width: 150 }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
