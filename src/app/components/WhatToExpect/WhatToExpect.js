import { Container } from "react-bootstrap";
import styles from "../../page.module.css";
import Image from "next/image";

const WhatToExpect = () => {
  return (
    <Container style={{ textAlign: "center" }} className="py-5">
      <h1>WHAT TO EXPECT</h1>
      <h2 className={styles.aboutHeading}>
        Great food and plenty of activities!
      </h2>

      <div className={styles.expectImg}>
        <p style={{ fontSize: 22, lineHeight: 1.8 }}>
          When you choose Concerned Country Care for a friend, family member, or
          loved one, you’re choosing to give the gift of an enriched life.
        </p>
      </div>

      <Image
        alt="Grand Blanc Fields"
        src={"/images/headerBanner.webp"}
        height={0}
        width={0}
        sizes={"100vw"}
        style={{
          height: 400,
          width: "100%",
          objectFit: "cover",
          borderRadius: 10,
          objectPosition: 'center'
        }}
      />
    </Container>
  );
};

export default WhatToExpect;
