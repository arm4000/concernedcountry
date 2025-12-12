"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import CustomDivider from "../CustomDivider/CustomDivider";

const HomeServices = () => {
  return (
    <Container className="py-5">
      {/* <CustomDivider /> */}
      <h1 className="text-center">OUR SERVICES</h1>
      <p style={{fontSize: 22}} className={`text-center pt-2 pb-4`}>
        Choose <b>Concerned Country Care</b>. We’re results driven, with a proven record of previous successes.
      </p>

      <Row>
        <Col lg={3} sm={12}>
          <Card className="my-2">
            <Image
              variant="top"
              objectFit="cover"
              height={0}
              width={0}
              sizes="100vw"
              src="/images/basic-services.jpg"
              style={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <CardBody>
              <CardTitle>Care</CardTitle>
              <div className="d-flex">
                <ul>
                  <li>In-House Physician</li>
                  <li>In-House Podiatrist</li>
                  <li>Medication Administration</li>
                  <li>Well-Trained & Caring Staff </li>
                </ul>
              </div>

              {/* <Button
                className="border-0 text-dark"
                as={Link}
                href="/services"
                style={{
                  width: "100%",
                  backgroundColor: "#FF8F8F",
                  fontWeight: 700,
                }}
              >
                Learn More
              </Button> */}
            </CardBody>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card className="my-2">
            <Image
              variant="top"
              objectFit="cover"
              height={0}
              width={0}
              sizes="100vw"
              src="/images/ccc-1.jpeg"
              style={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <CardBody>
              <CardTitle>Comfort</CardTitle>
              <div className="d-flex">
                <ul>
                  <li>Home-Cooked Meals </li>
                  <li>Laundry Services</li>
                  <li>8 Private Room</li>
                  <li>2 Semi-Private Rooms</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card className="my-2">
            <Image
              variant="top"
              objectFit="cover"
              height={0}
              width={0}
              sizes="100vw"
              src="/images/personal-service.jpg"
              style={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <CardBody>
              <CardTitle>Commitment</CardTitle>
              <div className="d-flex">
                <ul>
                  <li>Family Owned & Operated</li>
                  <li>Affordable Rates</li>
                  <li>Handicapped Accessible</li>
                  <li>State Licensed</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card className="my-2">
            <Image
              variant="top"
              objectFit="cover"
              height={0}
              width={0}
              sizes="100vw"
              src="/images/ccc-3.jpeg"
              style={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <CardBody>
              <CardTitle>Convenience</CardTitle>
              <div className="d-flex">
                <ul>
                  <li>20 Minutes from Flint</li>
                  <li>30 Minutes from Saginaw</li>
                  <li>30 Minutes from Owosso</li>
                  <li>Affordable Rates</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeServices;
