import React from "react";
import styles from "./InputDesign.module.css";

function InputDesign() {
  return (
    <div className={styles.container}>
      <div className={styles.purchaseOrderList}>
        <div className={styles.backgroundRectangle} />
        <div className={styles.headerRectangle} />
        <div className={styles.pageTitle}>Purchase order list</div>
        <div className={styles.profileCircle} />
        <div className={styles.dateFromLabel}>Date from</div>
        <div className={styles.dateFromInput} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/b0aab6633f85a7f705354791feabb82d19578660?placeholderIfAbsent=true"
          className={styles.dateFromIcon}
        />
        <div className={styles.dateToLabel}>Date to</div>
        <div className={styles.dateToInput} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/b0aab6633f85a7f705354791feabb82d19578660?placeholderIfAbsent=true"
          className={styles.dateToIcon}
        />
        <div className={styles.itemLabel}>Item</div>
        <div className={styles.itemInput} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/953f7be172678057b68ee0823484711b6fe7c339?placeholderIfAbsent=true"
          className={styles.itemIcon}
        />
        <div className={styles.statusLabel}>Status</div>
        <div className={styles.statusInput} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/953f7be172678057b68ee0823484711b6fe7c339?placeholderIfAbsent=true"
          className={styles.statusIcon}
        />
        <div className={styles.resetButton} />
        <div className={styles.resetText}>Reset</div>
        <div className={styles.printButton} />
        <div className={styles.printText}>Print</div>
        <div className={styles.dateFromPlaceholder}>Select date</div>
        <div className={styles.dateToPlaceholder}>Select date</div>
        <div className={styles.itemPlaceholder}>Select item</div>
        <div className={styles.statusPlaceholder}>Select status</div>
      </div>
    </div>
  );
}

export default InputDesign;
