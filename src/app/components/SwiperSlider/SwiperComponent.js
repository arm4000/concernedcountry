"use client";
// import "../page.module.css";
// import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
// import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../swiperstyle.module.css";
import swiperstyles from "../../swiperstyle.module.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import CustomDivider from "../CustomDivider/CustomDivider";

// const images = [
//   {
//     original: "/images/grand-blanc-fields-1.webp",
//     thumbnail: "/images/grand-blanc-fields-1.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-2.webp",
//     thumbnail: "/images/grand-blanc-fields-2.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-3.webp",
//     thumbnail: "/images/grand-blanc-fields-3.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-4.webp",
//     thumbnail: "/images/grand-blanc-fields-4.webp",
//   },
//   {
//     original: "/images/grand-blanc-christmas.webp",
//     thumbnail: "/images/grand-blanc-christmas.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-5.webp",
//     thumbnail: "/images/grand-blanc-fields-5.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-6.webp",
//     thumbnail: "/images/grand-blanc-fields-6.webp",
//   },
//   {
//     original: "/images/grand-blanc-sitting-area.webp",
//     thumbnail: "/images/grand-blanc-sitting-area.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-7.webp",
//     thumbnail: "/images/grand-blanc-fields-7.webp",
//   },
//   {
//     original: "/images/grand-blanc-fields-8.webp",
//     thumbnail: "/images/grand-blanc-fields-8.webp",
//   },
//   {
//     original: "/images/grand-blanc-resident-room.webp",
//     thumbnail: "/images/grand-blanc-resident-room.webp",
//   },
//   {
//     original: "/images/grand-blanc-resident-room2.webp",
//     thumbnail: "/images/grand-blanc-resident-room2.webp",
//   },
// ];

// const sliderData = [
//   {
//     id: 1,
//     url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
//   },
//   {
//     id: 2,
//     url: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
//   },
//   {
//     id: 3,
//     url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
//   },
//   {
//     id: 4,
//     url: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
//   },
//   {
//     id: 5,
//     url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//   },
// ];

// const OPTIONS = {};
// const SLIDE_COUNT = 10;
// const SLIDES = Array.from(Array(sliderData).keys());

// const defaultProps = {
//   description: "",
//   fullscreen: "",
//   isFullscreen: false,
//   originalAlt: "",
//   originalHeight: "50%",
//   originalWidth: "50%",
//   thumbnailHeight: 300,
//   thumbnailWidth: 300,
//   originalTitle: "Grand Blanc Fields",
//   sizes: "",
//   srcSet: "",
//   loading: "eager",
// };

const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* <EmblaCarousel options={OPTIONS} /> */}
      <Container className="py-5">
        <h1 className="py-3 text-center" style={{color: '#6EC8BA'}}>Our Community Photo Gallery</h1>
        <CustomDivider />
        {/* <ImageGallery
          {...defaultProps}
          thumbnailPosition="right"
          items={images}
        /> */}

        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          loop={true}
          spaceBetween={5}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`${swiperstyles.mySwiper2} pt-5`}
          autoplay={true}
        >
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-1.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-2.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-3.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-4.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-christmas.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-5.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-6.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-sitting-area.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-7.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-fields-8.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-resident-room.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/grand-blanc-resident-room2.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={5}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`${swiperstyles.mySwiper} pt-5`}
        >
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-1.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-2.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-3.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-4.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-christmas.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-5.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-6.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-sitting-area.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-7.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-fields-8.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-resident-room.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/grand-blanc-resident-room2.webp"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default SwiperComponent;
