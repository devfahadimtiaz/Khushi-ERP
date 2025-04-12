import React, { useEffect } from "react";
import styles from "./FilterSystem.module.css";
import carFilterForm from "./CarFilterForm";
import CarFilterForm from "./CarFilterForm";

const FilterSystem = ({ isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Stop propagation to prevent clicks from affecting underlying content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.filterOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.filterSystem} onClick={handleContentClick}>
        <div className={styles.filterContainer}>
          <div className={styles.filterContent}>
            <div className={styles.filterHeader}>
              <div className={styles.filterTitle}>Advanced Car Search</div>
              <div className={styles.filterActions}>
                <button className={styles.resetButton}>Reset</button>
                <div className={styles.hideFilters} onClick={onClose}>
                  Hide Filters
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd4b7bae7a029289c81d688d8aca8414f210aa2?placeholderIfAbsent=true"
                  className={styles.closeIcon}
                  onClick={onClose}
                  alt="Close"
                />
              </div>
              <CarFilterForm/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FilterSystem;
