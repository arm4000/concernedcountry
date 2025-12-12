import CustomNavbar from "../components/Navbar/CustomNavbar";
import Footer from "../components/Footer/Footer";
import SwiperComponent from "../components/SwiperSlider/SwiperComponent";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import Cta from "../components/Cta/Cta";

const page = () => {
  return (
    <>
      <CustomNavbar />
      <PhotoGallery />
      <Cta />
      <Footer />
    </>
  );
};

export default page;
