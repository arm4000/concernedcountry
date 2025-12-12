"use client";
import Image from "next/image";

import Slider from "./Slider";

import styles from "./Gallery.module.scss";
import { useState } from "react";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const photos = [
    {
      url: "/images/grand-blanc-fields-1.webp",
    },
    {
      url: "/images/grand-blanc-fields-2.webp",
    },
    {
      url: "/images/grand-blanc-fields-3.webp",
    },
    {
      url: "/images/grand-blanc-fields-4.webp",
    },
    {
      url: "/images/grand-blanc-fields-5.webp",
    },
  ];

  // for (let i = 0; i < 10; i++) {
    // photos.push(`https://picsum.photos/id/${i + 1}/500/300`);
  // }

  return (
    <div className={styles.c_gallery}>
      <div className={styles.c_gallery__wrapper}>
        <Slider
          extraClassesSlides={styles.c_gallery__slide}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
        >
          {photos.map((url) => (
            // console.log(url.url)
            <Image 
              // key={url.url} 
              height={500} 
              width={1000} 
              objectFit="cover" 
              // src={url.url} 
              src={"/images/grand-blanc-fields-1.webp"} 
            />
          ))}
        </Slider>
      </div>

      {photos.length > 1 && (
        <div
          className={[
            styles.c_gallery__wrapper,
            styles.c_gallery__wrapper__thumb,
          ].join(" ")}
        >
          <Slider
            spaceBetween={20}
            navigation={false}
            onSwiper={setThumbsSwiper}
            freeMode
            watchSlidesProgress
          >
            {photos.map((url) => (
              // console.log(url)
              <div key={url.url} className={styles.c_gallery__thumb}>
                <Image
                  objectFit="cover"
                  // src={url.url}
                  src={"/images/grand-blanc-fields-1.webp"}   
                  height={125}
                  width={125}
                  alt="Miniatura"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
