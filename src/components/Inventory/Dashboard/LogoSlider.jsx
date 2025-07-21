import React, { useEffect, useState } from "react";
import styles from "./LogoSlider.module.css";
import logo from "../../../assets/uploads/KM-LOGO.png";
import oceanlogo from "../../../assets/uploads/ocean.png";
import Mombasa from "../../../assets/uploads/Stock Photos/Mombasa.png";
import Tanzania from "../../../assets/uploads/Stock Photos/Tanzania.png";
import Uganda from "../../../assets/uploads/Stock Photos/Uganda.png";
import Express from "../../../assets/uploads/Stock Photos/Express.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const API_URL = process.env.REACT_APP_API_URL;
const API_UPLOAD = process.env.REACT_APP_API_UPLOADS;
const logos = [`${Mombasa}`, `${Tanzania}`, `${Uganda}`, `${Express}`];

function LogoSlider({ data, handleShowroomId, selectedShowroom }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    console.log(selectedShowroom)
    if(selectedShowroom){
      setCurrentIndex(selectedShowroom-1)
    }
    else if(data.length > 0 && data[currentIndex]) {
      handleShowroomId(data[currentIndex].id);
    }
  }, [currentIndex, data, handleShowroomId,selectedShowroom]);

  return (
    <div className={styles.sliderContainer}>
      {!selectedShowroom &&(
      <button className={styles.arrow} onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      )}

      <div className={styles.sliderFrame}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((logo, index) => (
            <div className={styles.slide} key={logo.id}>
              <div className={styles.showroomName}>{logo.name}</div>
              <img
                src={`${API_UPLOAD}/BranchLogo/${logo.logo}`}
                alt={`Logo `}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
        {!selectedShowroom &&(
      <button className={styles.arrow} onClick={handleNext}>
        <FaChevronRight />
      </button>
        )}
    </div>
  );
}

export default LogoSlider;
