import React from "react";
import styles from "./GatePass.module.css";

const GatePass = () => {
  return (
    <div className={styles.gatePass}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.formTitle}>Gate Pass Form</div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <div className={styles.fieldLabel}>Name</div>
              <input type="text" className={styles.inputField} placeholder="Enter full name"/>
            </div>
            <div className={styles.formColumn}>
              <div className={styles.fieldLabel}>City</div>
              <input type="text" className={styles.inputField} placeholder="Enter City"/>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <div className={styles.fieldLabel}>State</div>
              <input type="text" className={styles.inputField} placeholder="Enter State"/>
            </div>
            <div className={styles.formColumn}>
              <div className={styles.fieldLabel}>Address</div>
              <input type="text" className={styles.inputField} placeholder="Enter Address"/>
            </div>
          </div>

          <div className={styles.fieldLabel}>Contact</div>
          <input type="text" className={styles.inputField} placeholder="Enter Contact"/>

           

          <div className={styles.carDetailsSection}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.leftColumn}>
                <div className={styles.carDetailsTitle}>Car Details</div>
                <div className={styles.fieldLabel}>Make</div>
                <input type="text" className={styles.inputField} placeholder="Enter Make"/>
                <div className={styles.fieldLabel}>Color</div>
                <input type="text" className={styles.inputField} placeholder="Enter Color"/>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.fieldLabel}>Model</div>
                <input type="text" className={styles.inputField} placeholder="Enter Model"/>
                <div className={styles.fieldLabel}>Stock No</div>
                <input type="text" className={styles.inputField} placeholder="Enter Stock No"/>
              </div>
            </div>
          </div>

          <div className={styles.termsBox}>
            By my signature below, I acknowledge and hereby agree to use the
            above vehicle for the purpose of a demonstration drive only. I
            further agree to return it by the agreed time stated above
          </div>

          <button className={styles.submitButton}>Submit Gate Pass Form</button>
        </div>
      </div>
    </div>
  );
};

export default GatePass;
