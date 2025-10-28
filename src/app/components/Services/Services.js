"use client";
import { Card, Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="pb-5">
      <h1 className="text-center">Why choose Concerned Countary Care</h1>
      <Row className="pt-4">
        <Col lg={3} sm={12}>
          <Card className="border-0 shadow mb-3" style={{ height: 226 }}>
            <Card.Header style={{ backgroundColor: "#7da58eff"}}>
              <h4>Comfort</h4>
            </Card.Header>
            <Card.Body>
              <ul style={{ fontSize: 18 }}>
                <li>Home-Cooked Meals</li>
                <li>Laundry Services </li>
                <li>8 Private Room </li>
                <li>2 Semi-Private Rooms </li>
                <li>Handicapped Accessible </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card className="border-0 shadow mb-3" style={{ height: 226 }}>
            <Card.Header style={{ backgroundColor: "#EAD2AC" }}>
              <h4>Care</h4>
            </Card.Header>
            <Card.Body>
              <ul style={{ fontSize: 18 }}>
                <li>In-House Physician</li>
                <li>In-House Podiatrist </li>
                <li>Medication Administration</li>
                <li>Well-Trained & Caring Staff </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card className="border-0 shadow mb-3" style={{ height: 226 }}>
            <Card.Header style={{ backgroundColor: "#7BAFD4" }}>
              <h4>Convenience</h4>
            </Card.Header>
            <Card.Body>
              <ul style={{ fontSize: 18 }}>
                <li>20 Minutes from Flint</li>
                <li>30 Minutes from Saginaw</li>
                <li>30 Minutes from Owosso</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card className="border-0 shadow mb-3" style={{ height: 226 }}>
            <Card.Header style={{ backgroundColor: "#D97B66" }}>
              <h4>Commitment </h4>
            </Card.Header>
            <Card.Body>
              <ul style={{ fontSize: 18 }}>
                <li>Family Owned & Operated</li>
                <li>Affordable Rates </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
