import React from "react";
import styles from "./Dashboard.module.css";

const StatCard = ({ imageSrc, percentage, amount, title, comparison }) => {
  return (
    <div className={styles.financialCard}>
      <div className={styles.financialContent}>
        <img
          src={imageSrc}
          className={styles.financialImage}
          alt="Financial icon"
        />
        <div className={styles.financialInfo}>
          <div className={styles.percentageContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/494c29d3c93b1e33a516b6d208d638fbd43cc416?placeholderIfAbsent=true"
              className={styles.percentageIcon}
              alt="Percentage icon"
            />
          </div>
          <div className={styles.financialValues}>
            <div className={styles.percentageValue}>{percentage}</div>
            <div className={styles.amountValue}>{amount}</div>
          </div>
        </div>
      </div>
      <div className={styles.financialFooter}>
        <div className={styles.financialTitle}>{title}</div>
        <div className={styles.financialComparison}>{comparison}</div>
      </div>
    </div>
  );
};

export default StatCard;
