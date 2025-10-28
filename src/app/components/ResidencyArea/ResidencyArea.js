import styles from "../../page.module.css";

const ResidencyArea = () => {
  return (
    <div style={{ textAlign: "center" }} className="pt-1 pb-5">
      <div className={styles.residencyImg} aria-label="Residency Image">
        <div className={styles.expectImgContainer}>
          <h2 style={{ width: "70%" }}>
            Our home sits on 5 acres in a serene country setting, where your
            loved one will enjoy the natural beauty that surrounds them. While
            having the security of a dedicated and knowledgeable team of
            caregivers.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ResidencyArea;
