"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Mission = ({
  imageSrc = "/images/missionImg.png", // put your image inside /public/images/
  alt = "Smiling elderly woman",
  bgColor = "#E8E1D4", // teal background like your example
  className = "",
}) => {
  const [deviceHeight, setDeviceHeight] = useState();
  const [deviceWidth, setDeviceWidth] = useState();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    window.addEventListener("resize", () => {
      console.log(
        "device height: " + window.innerHeight,
        "device width: " + window.innerWidth
      );
      setDeviceHeight(window.innerHeight);
      setDeviceWidth(window.innerWidth);
    });
  }, []);

  return (
    <Container
      className={`${styles.missionContainer} py-4 px-2`}
      style={{
        borderRadius: 10,
        backgroundColor: "#E8E1D4",
      }}
    >
      <div>
        <Row>
          <Col lg={5} sm={12}>
            <Image
              src={"/images/mission2.png"}
              alt={alt}
              // fill
              height={0}
              width={0}
              sizes="100vw"
              style={{
                height: 450,
                // width: deviceWidth > 700 ? 500 : 320,
                width: 500,
                objectFit: "cover",
                // objectPosition: "center",
              }}
            />
            {/* <div className={`${styles.curved_image_wrapper}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.curved_svg}
                viewBox="0 0 1000 1000"
                style={{ overflow: "visible", transform: "rotate(0deg)" }}
              >
                <defs>
                  <clipPath id="curvedMask" clipPathUnits="userSpaceOnUse">
                    <path d="M985,535c-11.2,161-212.8,338-582.2,322C-48.1,837.4,27.9,571.5,67.2,450.1c25.7-79.5,177.4-409.7,343-403.4 c79.6,3,90.4,82,197.5,142.5C732.8,259.9,997.6,354.2,985,535z" />
                  </clipPath>
                </defs>

                <rect width="100%" height="100%" fill={bgColor} />

                <foreignObject
                  width="100%"
                  height="100%"
                  clipPath="url(#curvedMask)"
                >
                  <div className={styles.image_container}>
                    <Image
                      src={imageSrc}
                      alt={alt}
                      fill
                      // height={0}
                      // width={0} 
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </foreignObject>

                <g fill="rgba(255,255,255,0.6)">
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 6 }).map((_, j) => (
                      <circle
                        key={`${i}-${j}`}
                        cx={580 + j * 15}
                        cy={330 + i * 15}
                        r="2.2"
                      />
                    ))
                  )}
                </g>
              </svg>
            </div> */}
          </Col>

          <Col
            lg={7}
            sm={12}
            style={{
              fontSize: 20,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>
              <h2 className="pb-3">OUR MISSION</h2>
              <h4 className="pb-3">
                Changing the world is possible. We’ve done it before!
              </h4>
              <p style={{ lineHeight: 2 }}>
                Our leadership team bring years of experience to bear during the
                greatest challenge of our time. We’re results driven, with a
                proven record of previous successes. We accept residents ages 50
                and older, including those with Dementia, Alzheimers and other
                conditions requiring special assistance. We offer respite care,
                hospice, and licensed adult foster care services, giving you the
                peace and comfort of knowing that those you love the most are
                receiving ultimate care.
                <br />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Mission;
