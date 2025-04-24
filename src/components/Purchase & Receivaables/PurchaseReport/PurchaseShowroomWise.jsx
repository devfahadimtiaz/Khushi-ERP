import React from "react";
import styles from "./PurchaseShowroomWise.module.css";

function PurchaseShowroomWise() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Purchase Showroom Wise</span>
          <div className={styles.circleIcon}></div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.dateFilterRow}>
          <div className={styles.inputWrapper}>
            <div className={styles.dateLabel}>Date from</div>
           
              <input type="date" className={styles.dateInput} />
            </div>
            <div className={styles.inputWrapper}>
            <div className={styles.dateLabel}>Date to</div>
            
              <input type="date" className={styles.dateInput} />

            </div>
          </div>
          <div className={styles.showroomSection}>
            <div className={styles.showroomLabel}>Showroom</div>
            <select className={styles.selectWrapper}>
              <option className={styles.selectText}>Select showroom</option>
              <option className={styles.selectText}>KMK</option>
              <option className={styles.selectText}>KME</option>
              <option className={styles.selectText}>KMT</option>
              <option className={styles.selectText}>KMU</option>
            </select>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.resetButton}>Reset</button>
            <button className={styles.printButton}>Print</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseShowroomWise;
