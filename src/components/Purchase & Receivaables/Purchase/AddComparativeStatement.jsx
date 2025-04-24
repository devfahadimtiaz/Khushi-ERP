import React, { useState } from "react";
import styles from "./AddComparativeStatement.module.css";

const AddComparativeStatement = ({ onBack }) => {
  const [purchaseRequestNo, setPurchaseRequestNo] = useState("");
  const [financialYear, setFinancialYear] = useState("");
  const [csDate, setCsDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      purchaseRequestNo,
      financialYear,
      csDate,
      status,
    });

    // Return to the main comparative statement list
    if (onBack) onBack();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>Add Comparative Statement</div>
            <div className={styles.profileCircle}>
            
            </div>
          </div>
          <div className={styles.divider} />

          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formLabel}>Purchase Request No# *</div>
              <div className={styles.formLabel}>Financial Year</div>
            </div>

            <div className={styles.inputRow}>
              <input
                type="text"
                className={styles.textInput}
                placeholder="Enter purchase request number"
                value={purchaseRequestNo}
                onChange={(e) => setPurchaseRequestNo(e.target.value)}
                required
              />
              <div className={styles.selectWrapper}>
                <select
                  className={styles.selectInput}
                  value={financialYear}
                  onChange={(e) => setFinancialYear(e.target.value)}
                >
                  <option value="" disabled>
                    Select financial year
                  </option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2025-2026">2025-2026</option>
                </select>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/dbca71364dee603793fd1d2614575aa3559e2300?placeholderIfAbsent=true"
                  alt="Dropdown"
                  className={styles.dropdownIcon}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formLabel}>CS Date *</div>
              <div className={styles.formLabel}>Status</div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.dateWrapper}>
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="Select date"
                  value={csDate}
                  onChange={(e) => setCsDate(e.target.value)}
                  required
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/953f7be172678057b68ee0823484711b6fe7c339?placeholderIfAbsent=true"
                  alt="Calendar"
                  className={styles.calendarIcon}
                />
              </div>
              <div className={styles.selectWrapper}>
                <select
                  className={styles.selectInput}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="" disabled>
                    Select status
                  </option>
                  <option value="Draft">Draft</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/953f7be172678057b68ee0823484711b6fe7c339?placeholderIfAbsent=true"
                  alt="Dropdown"
                  className={styles.dropdownIcon}
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComparativeStatement;
