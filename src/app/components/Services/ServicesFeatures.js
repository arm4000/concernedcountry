import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomDivider from "../CustomDivider/CustomDivider";
import Image from "next/image";

const ServicesFeatures = () => {
  return (
    <>
      <Container className="py-3">
        <h3 className="py-3">FEATURES AND AMENITIES</h3>
        <Row className="">
          <Col lg={4} sm={12}>
            <ul>
              <li>State Licensed</li>
              <li>Socializing Area</li>
              <li>Main Dining Room</li>
              <li>Parking Area</li>
              <li>Formal Dining Room</li>
              <li>Arts & Crafts</li>
              <li>Daily Activities</li>
              <li>TV Set Included</li>
              <li>Cable TV (subscription extra)</li>
              <li>Free Public WiFi</li>
              <li>Hair/Nail Salon</li>
              <li>Basement Storage</li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <ul>
              <li>Rooms Available with Fenced Patio</li>
              <li>Individual Room Heaters</li>
              <li>Fire, Smoke and Sprinkler System</li>
              <li>Emergency Call Response System Pendants </li>
              <li>Private and Shared Showers </li>
              <li>Grab Bars in all Bathrooms </li>
              <li>Intercom Two-Way System at Front Door</li>
              <li>Paid Utilities (except phone and TV) </li>
              <li>Comfortable Sitting Area</li>
              <li>Religious Services </li>
              <li>Exterior/Interior Surveillance Cameras</li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <Image
              alt="Home Banner Slide 1"
              src={"/images/ccc-14.jpeg"}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Col>
        </Row>

        {/* <CustomDivider /> */}

        <h3 className="pt-5">PERSONALIZED SERVICES</h3>
        <Row className="py-3">
          <Col lg={4} sm={12}>
            <ul>
              <li>Medication Management </li>
              <li>Showering and Bathing Assistance</li>
              <li>Dressing and Grooming Assistance </li>
              <li>Clothing Selection Assistance</li>
              <li>Personal Laundry Service </li>
              <li>Additional Personal Care</li>
              <li>Incontinence Management </li>
              <li>Walker and Wheelchair Transfer Assistance</li>
              <li>Reminding and Socialization Encouragement </li>
              <li>Escorting Assistance</li>
              <li>Room Service</li>
              <li>Behavioral Monitoring</li>
              <li>Short Term Care Stays </li>
              <li>In-house Podiatry and Audiology Care</li>
              <li>
                Physical, Occupational, Speech Therapy & Hospice Offered Through
                In-Home Health Care
              </li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <Image
              alt="Home Banner Slide 1"
              src={"/images/ccc-17.jpeg"}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Col>
        </Row>

        {/* <CustomDivider /> */}

        <Row className="pt-5">
          <Col lg={4} sm={12}>
            <h3 className="py-3">BASIC SERVICES</h3>
            <ul>
              <li>24 Hour Trained and Caring Staff </li>
              <li>Three Daily Delicious, Well-balanced Meals </li>
              <li>Daily Menu and Activity Display Screen</li>
              <li>Daily Snacks</li>
              <li>Monthly Wellness Reviews </li>
              <li>Daily Room Service and Trash Removal</li>
              <li>Suite Maintenance Service</li>
              <li>Weekly Housekeeping and Linen Services</li>
              <li>Planned Activities and Entertainment</li>
              <li>Holiday Activities and Family Socials </li>
              <li>Waiver Program Information</li>
              <li>Aid and Attendance (Veterans) Information</li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <Image
              alt="Home Banner Slide 1"
              src={"/images/ccc-12.jpeg"}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServicesFeatures;
