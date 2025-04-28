import React, { useEffect, useState } from 'react';
import styles from './LogoSlider.module.css';
import logo from "../../../uploads/KM-LOGO.png";
import oceanlogo from "../../../uploads/ocean.png";
import Mombasa from "../../../uploads/Stock Photos/Mombasa.png"
import Tanzania from "../../../uploads/Stock Photos/Tanzania.png"
import Uganda from "../../../uploads/Stock Photos/Uganda.png"
import Express from "../../../uploads/Stock Photos/Express.png"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const logos = [
  `${Mombasa}`,
  `${Tanzania}`,
  `${Uganda}`,
  `${Express}`,
];

function LogoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? logos.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className={styles.sliderContainer}>
        <button className={styles.arrow} onClick={handlePrev}>
        <FaChevronLeft />
        </button>
  
        <div className={styles.sliderFrame}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {logos.map((logo, index) => (
              <div className={styles.slide} key={index}>
                <img src={logo} alt={`Logo ${index + 1}`} className={styles.logoImg} />
              </div>
            ))}
          </div>
        </div>
  
        <button className={styles.arrow} onClick={handleNext}>
        <FaChevronRight />
        </button>
      </div>
    );
  }
  
  export default LogoSlider;