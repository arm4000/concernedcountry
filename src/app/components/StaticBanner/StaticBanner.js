import Image from "next/image";
import styles from "../../page.module.css";

const StaticBanner = () => {
  return (
    <div style={{backgroundColor: 'red', position: 'relative', width: '100%'}}>
      <div
        src={"/images/servicesBanner.webp"}
        aria-label="Services Banner"
        className={styles.staticBannerImg}
      >
        <h1 style={{position: 'absolute', bottom: 0, textAlign: 'center'}}>Servicesdd</h1>
      </div>
    </div>
  );
};

export default StaticBanner;
