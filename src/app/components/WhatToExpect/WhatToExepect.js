import styles from "../../page.module.css";

const WhatToExepect = () => {
  return (
    <div style={{ textAlign: "center" }} className="py-5">
      <h1>WHAT TO EXPECT</h1>
      <h2 className={styles.aboutHeading}>
        Great food and plenty of activities!
      </h2>

      <div className={styles.expectImg}>
        <div className={styles.expectImgContainer}>
          <h2 style={{width: '65%'}}>
            When you choose Concerned Country Care for a friend, family member,
            or loved one, you’re choosing to give the gift of an enriched life.{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhatToExepect;
