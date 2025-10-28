import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import Image from "next/image";

const Mission = () => {
  return (
    <Container className="py-4">
      <div
        className={`${styles.missionContainer} p-4`}
        style={{
          borderRadius: 10,
          backgroundColor: "#E8E1D4",
        }}
      >

        <Row>
          <Col lg={5} sm={12}>
            <Image
              src={"/images/missionImg.webp"}
              height={400}
              width={400}
              layout="responsive"
              // className="py-2"
              style={{borderRadius: 10}}
            />
          </Col>
          <Col lg={7} sm={12}>
            <h2 className="pb-3">Changing the world is possible <br/> We’ve done it before!</h2>
            <p>
              Our leadership team bring years of experience to bear during the
              greatest challenge of our time. We’re results driven, with a
              proven record of previous successes.
            </p>
            <p>
              We accept residents ages 50 and older, including those with
              Dementia, Alzheimers and other conditions requiring special
              assistance.
            </p>
            <p>
              We offer respite care, hospice, and licensed adult foster care
              services, giving you the peace and comfort of knowing that those
              you love the most are receiving ultimate care.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Mission;
