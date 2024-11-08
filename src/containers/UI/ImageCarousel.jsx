/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

// Styles
import styles from "./styles/styles.module.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={styles.carousel_button} onClick={prevSlide}>
        ❮
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={[
          styles.carousel_image,
          currentIndex ? "activeCarousel" : "",
        ].join(" ")}
      />
      <button className={styles.carousel_button} onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
