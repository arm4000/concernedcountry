"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "../../swiperstyle.module.css";

import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Pagination,
} from "swiper/modules";

const HeaderBanner = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
      className={`py-5 ${styles.mySwiper}`}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      mousewheel={true}
      style={{position: 'relative'}}
    >
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/logo.webp"
          style={{objectFit: 'contain', backgroundColor: '#B7A3E3'}}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-17.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-16.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-15.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-14.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-13.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-12.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-10.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-9.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-7.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-1.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-8.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-11.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-5.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-6.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-2.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-3.jpeg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <img
          className={styles.swiper_slide_img}
          src="/images/ccc-4.jpeg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderBanner;
