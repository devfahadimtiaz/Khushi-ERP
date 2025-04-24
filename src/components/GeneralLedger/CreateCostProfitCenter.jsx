import React from "react";
import styles from "./CreateCostProfitCenter.module.css";

const CreateCostProfitCenter = ({ onCancel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Create Cost and Profit Center</div>
      <div className={styles.formContainer}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <span>Name</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.inputField}>Enter full name</div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <span>Short Name</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.inputField}>Enter short name</div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <span>Department</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.selectField}>
              <span>Select department</span>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.dropdownIcon}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#363565"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <span>Type</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.checkboxContainer}>
              <div className={styles.checkboxGroup}>
                <div className={styles.checkbox}></div>
                <span className={styles.checkboxLabel}>Cost Center</span>
              </div>
              <div className={styles.checkboxGroup}>
                <div className={styles.checkbox}></div>
                <span className={styles.checkboxLabel}>Profit Center</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <span>Category</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.selectField}>
              <span>Select category</span>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.dropdownIcon}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#363565"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.label}>Status</div>
            <div className={styles.selectField}>
              <span className={styles.activeStatus}>Active</span>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.dropdownIcon}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#363565"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.createButton}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCostProfitCenter;
