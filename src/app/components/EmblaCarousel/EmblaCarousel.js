"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './EmblaCarouselThumbsButton';
import styles from "../../page.module.css";
import Image from 'next/image';

import gallery1 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery2 from "../../../../public/images/grand-blanc-fields-2.webp";
import gallery3 from "../../../../public/images/grand-blanc-fields-3.webp";
import gallery4 from "../../../../public/images/grand-blanc-fields-4.webp";
import gallery5 from "../../../../public/images/grand-blanc-fields-5.webp";
import gallery6 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery7 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery8 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery9 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery10 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery11 from "../../../../public/images/grand-blanc-fields-1.webp";
import gallery12 from "../../../../public/images/grand-blanc-fields-1.webp";

const sliderData = [
  {
    id: 1,
    url: gallery1,
  },
  {
    id: 2,
    url: gallery2,
  },
  {
    id: 3,
    url: gallery3,
  },
  {
    id: 4,
    url: gallery4,
  },
  {
    id: 5,
    url: gallery5,
  },
];

const EmblaCarousel = (props) => {
  const { options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    console.log('image slidesssssssssss' + sliderData);
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaMainRef}>
        <div className={styles.embla__container}>
          {sliderData.map((item) => (
            <div className={styles.embla__slide} key={item.id}>
              <div className={styles.embla__slide__number}>
                <Image src={item.url} width={800} height={300} alt="slider images" style={{objectFit: 'contain'}} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla_thumbs}>
        <div className={styles.embla_thumbs__viewport} ref={emblaThumbsRef}>
          <div className={styles.embla_thumbs__container}>
            {sliderData.map((item) => (
              <Thumb
                key={item.id}
                onClick={() => onThumbClick(item.id)}
                selected={item.id === selectedIndex}
                index={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
