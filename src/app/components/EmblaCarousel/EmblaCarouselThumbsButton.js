import React from 'react'
import styles from "../../page.module.css";

export const Thumb = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={styles.embla_thumbs__slide.concat(
        selected ? styles.embla_thumbs__slide__selected : ''
      )}
      style={{backgroundColor: 'grey', margin: 5}}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles.embla_thumbs__slide__number}
      >
        {index}
      </button>
    </div>
  )
}
