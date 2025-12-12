"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "../../thumbSwiperStyle.module.css";
import swiperstyles from "../../thumbSwiperStyle.module.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FloorPlan = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Container className="py-3 text-center">
        <h1 className="text-center">FLOOR PLANS</h1>
        <p style={{ fontSize: 22 }} className={`text-center pt-2`}>
          Take a look at pictures and floor plans of our model apartment units.
          To see them all click the button below.
        </p>

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
          className={`${swiperstyles.mySwiper2} pt-2 mySwiper2`}
          autoplay={true}
        >
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/ccc-5.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/ccc-6.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/ccc-2.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/ccc-3.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage}
              src="/images/ccc-4.jpeg"
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
          className={`${swiperstyles.mySwiper} pt-5 mySwiper`}
        >
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/ccc-5.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/ccc-6.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/ccc-2.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/ccc-3.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={swiperstyles.swiperImage2}
              src="/images/ccc-4.jpeg"
              height={0}
              width={0}
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>

        <Button
          className="border-0 mt-4"
          as={Link}
          href="/pricing"
          style={{
            backgroundColor: "#253551",
            height: 50,
            width: 310,
            paddingTop: 12,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          All Floor Plans
        </Button>
      </Container>
    </>
  );
};

export default FloorPlan;
