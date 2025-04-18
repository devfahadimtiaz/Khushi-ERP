import React from "react";
import styles from "./VehicleRepairDetails.module.css";

function VehicleRepairDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.formCard}>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>Vehicle Repair Details</h1>
            <button className={styles.submitButton}>
              Submit Repair Request
            </button>
          </div>

          <div className={styles.formLabels}>
            <div className={styles.label}>Vehicle Make</div>
            <div className={styles.label}>Issue Description</div>
          </div>

          <div className={styles.formContent}>
            <div className={styles.formRow}>
              <div className={styles.column}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    className={styles.textInput}
                    placeholder="Enter vehicle make"
                  />

                  <div className={styles.fieldLabel}>Vehicle Model</div>
                  <input
                    type="text"
                    className={styles.textInput}
                    placeholder="Enter vehicle model"
                  />

                  <div className={styles.fieldLabel}>Vehicle Trim</div>
                  <input
                    type="text"
                    className={styles.textInput}
                    placeholder="Enter vehicle trim"
                  />

                  <div className={styles.fieldLabel}>Vehicle Year</div>
                  <input
                    type="text"
                    className={styles.textInput}
                    placeholder="Enter vehicle year"
                  />
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.rightColumnContent}>
                  <textarea
                    className={styles.descriptionTextarea}
                    placeholder="Describe the issue"
                  />

                  <div className={styles.fieldLabel}>Assign Technician</div>
                  <select className={styles.selectWrapper}>
                    <option className={styles.selectText} disabled>Select a technician</option>
                    <option className={styles.selectText}>ABC</option>
                    <option className={styles.selectText}>ABC</option>
                    <option className={styles.selectText}>ABC</option>
                    
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleRepairDetails;
