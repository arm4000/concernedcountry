import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { LuMapPin, LuPhone, LuFacebook } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <Container
      fluid
      className="pt-5 px-5 pb-2"
      style={{ backgroundColor: "#0E86AC" }}
    >
      <Row>
        <Col lg={4} sm={12}>
          <Image
            src="/images/logo.webp"
            height={180}
            width={300}
            style={{ objectFit: "contain" }}
            alt="Grand Blanc Fields Logo"
          />
        </Col>

        <Col lg={5} sm={12} className="pt-4 text-light">
          <div className="d-flex">
            <LuMapPin color="#F2F2F2" size={30} />
            <p className="mx-3" style={{ fontSize: 20 }}>
              11122 W. Wilson Road Montrose, MI 48457
            </p>
          </div>
          <div className="d-flex">
            <LuPhone color="#F2F2F2" size={30} />
            <Link href={"tel:(810) 639-2227"} style={{textDecoration: 'none'}}>
            <p className="mx-3" style={{ fontSize: 20, color: 'white' }}>
              (810) 639-2227
            </p>
            </Link>
          </div>
          <div className="d-flex">
            <LiaFaxSolid color="#F2F2F2" size={30} />
            <Link href={"tel:(810) 639-6981"} style={{textDecoration: 'none'}}>
            <p className="mx-3" style={{ fontSize: 20, color: 'white' }}>
              (810) 639-6981
            </p>
            </Link>
          </div>
          <Link
            href={"https://www.facebook.com/ConcernedCountyCare"}
            target="_blank"
            style={{
              // height: 50,
              // width: 50,
              // borderRadius: 50,
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // backgroundColor: "#000",
            }}
          >
            <LuFacebook size={30} color="white" />
          </Link>
        </Col>
      </Row>

      <h6 className="text-center text-dark pt-4 pb-2">
        © Concerned Countary Care - Adult Foster Care
      </h6>
    </Container>
  );
};

export default Footer;
