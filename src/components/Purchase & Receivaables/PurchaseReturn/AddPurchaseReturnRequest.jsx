import React from "react";
import styles from "./AddPurchaseReturnRequest.module.css";

const AddPurchaseReturnRequest = ({ onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formContent}>
          <div className={styles.title}>Purchase Return Request</div>

          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>PRO No#</div>
            <input type="text" placeholder="Enter PRO No#" className={styles.inputField}/>
          </div>
          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>PRR Date</div>
            <input type="text" placeholder="Enter PRR Date" className={styles.inputField}/>
          </div>

          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>Purchase Order Type</div>
            <select className={styles.selectField}>
              <option>Select Type</option>
              <option>Type A</option>
              <option>Type B</option>
            </select>
          </div>

          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>PO Date</div>
            <input type="date" className={styles.inputField}/>
          </div>

          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>Financial Year</div>
            <select className={styles.selectField}>
              <option disabled>Select Year</option>
              <option>2021-2022</option>
              <option>2022-2023</option>
              <option>2023-2024</option>
              <option>2024-2025</option>
              
            </select>
          </div>

          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>Active Months</div>
            <select className={styles.selectField}>
              <option disabled>Select Duration</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>

              
            </select>
          </div>

          <div className={styles.formCard}>
            <div className={styles.fieldLabel}>Delivery Mode</div>
            <select className={styles.selectField}>
              <option disabled>Select Mode</option>
              <option>Mode A</option>
              <option>Mode B</option>
              
             
            </select>
          </div>
        </div>

        <button className={styles.backButton} onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AddPurchaseReturnRequest;
