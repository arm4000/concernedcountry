import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import styles from "./Slider.module.scss";
import IconChevronRight from "./IconChevronRight";
import IconChevronLeft from "./IconChevronLeft";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Slider = (props) => {
  const [swiperInstance, setSwiper] = useState(null);
  const [swiperBeginningOrEnd, setSwiperBeginningOrEnd] = useState({
    prev: false,
    next: true
  });

  const setStatusNavigation = (swiper) => {
    setSwiperBeginningOrEnd({
      prev: swiper.isBeginning,
      next: swiper.isEnd
    });
  };

  const onNextSlide = () => {
    swiperInstance.slideNext();
    props.thumbs.swiper.slideNext();
    setStatusNavigation(swiperInstance);
  };

  const onPrevSlide = () => {
    swiperInstance.slidePrev();
    props.thumbs.swiper.slidePrev();
    setStatusNavigation(swiperInstance);
  };

  const containerStyles = {};
  if (props.autofit && !Number.isNaN(props.slidesPerView)) {
    containerStyles.maxWidth = `calc(${props.slidesPerView} * ${props.slideWidth}px)`;
  }

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  const slides = children.map((child, index) => {
    const classes = [styles.c_slider__slide].concat(
      props.extraClassesSlides
    );

    return (
      <SwiperSlide className={classes.join(" ")} key={index}>
        {child}
      </SwiperSlide>
    );
  });

  const classes = [styles.c_slider].concat(props.extraClasses);

  return (
    <div className={classes.join(" ")}>
      {props.navigation && (
        <div
          className={[
            styles.c_slider__navigation,
            styles.c_slider__navigation__left
          ].join(" ")}
          disabled={swiperBeginningOrEnd.prev}
          onClick={onPrevSlide}
        >
          <IconChevronLeft />
        </div>
      )}
      <Swiper
        modules={[Navigation, Thumbs, FreeMode]}
        style={containerStyles}
        breakpoints={props.breakpoints}
        centeredSlides={props.centeredSlides}
        centerInsufficientSlides={props.centerInsufficientSlides}
        className={props.className}
        freeMode={props.freeMode}
        slidesPerView={props.slidesPerView}
        slidesOffsetBefore={props.slidesOffsetBefore}
        slidesOffsetAfter={props.slidesOffsetAfter}
        spaceBetween={props.spaceBetween}
        watchSlidesProgress={props.watchSlidesProgress}
        thumbs={props.thumbs}
        onSlideChange={(swiper) => setStatusNavigation(swiper)}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setStatusNavigation(swiper);
          // props.onSwiper(swiper);
        }}
      >
        {slides}
      </Swiper>
      {props.navigation && (
        <div
          className={[
            styles.c_slider__navigation,
            styles.c_slider__navigation__right
          ].join(" ")}
          disabled={swiperBeginningOrEnd.next}
          onClick={onNextSlide}
        >
          <IconChevronRight />
        </div>
      )}
    </div>
  );
};

Slider.defaultProps = {
  autofit: false,
  breakpoints: {},
  centeredSlides: false,
  centerInsufficientSlides: false,
  className: "",
  freeMode: false,
  navigation: true,
  slidesPerView: "auto",
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  slideWidth: 0,
  spaceBetween: 0,
  watchSlidesProgress: false,
  thumbs: {},
  onSwiper: () => {},
  children: [],
  extraClasses: [],
  extraClassesSlides: []
};

export default Slider;
