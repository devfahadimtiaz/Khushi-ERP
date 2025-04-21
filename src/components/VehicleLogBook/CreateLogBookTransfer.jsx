import React, { useState } from "react";
import styles from "./CreateLogBookTransfer.module.css";

const CreateLogBookTransfer = ({ onBack }) => {
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Create Log Book Transfer</div>
          <div className={styles.backButton} onClick={onBack}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.backIcon}
              >
                <path
                  d="M15.8334 10.0001H4.16675M4.16675 10.0001L10.0001 15.8335M4.16675 10.0001L10.0001 4.16675"
                  stroke="black"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>Back to Transfers</span>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Stock Number</label>
              <input type="text" placeholder="Select Stock number" className={styles.inputField}/>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Make</label>
              <input type="text" placeholder="Select Make" className={styles.inputField}/>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Model</label>
              <input type="text" placeholder="Select Model" className={styles.inputField}/>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Year</label>
              <input type="text" placeholder="Select Year" className={styles.inputField}/>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Transfer From</label>
              <select className={styles.inputField}>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Transfer To</label>
              <select className={styles.inputField}>
              </select>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <div className={styles.statusOptions}>
                <span
                  className={`${styles.statusOption} ${status === "Pending" ? styles.statusActive : ""}`}
                  onClick={() => handleStatusChange("Pending")}
                >
                  Pending
                </span>
                <span
                  className={`${styles.statusOption} ${status === "Completed" ? styles.statusActive : ""}`}
                  onClick={() => handleStatusChange("Completed")}
                >
                  Completed
                </span>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.cancelButton} onClick={onBack}>Cancel</button>
            <button className={styles.createButton} onClick={onBack}>Create Transfer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLogBookTransfer;
