import React from "react";
import styles from "./BalanceSheet.module.css";

const BalanceSheet = ({ onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Balance Sheet</h2>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>
              Company
              <span className={styles.requiredMark}>*</span>
            </span>
            <div className={styles.selectWrapper}>
              <select className={styles.selectField}>
                <option>Select Company</option>
              </select>
              
            </div>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>
              Date From
              <span className={styles.requiredMark}>*</span>
            </span>
            <div className={styles.dateWrapper}>
              <input type="date" className={styles.dateField} />
             
            </div>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>
              Date To
              <span className={styles.requiredMark}>*</span>
            </span>
            <div className={styles.dateWrapper}>
              <input type="date" className={styles.dateField} />
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.resetIcon}
              >
                <g clipPath="url(#clip0_730_21370)">
                  <path
                    d="M1.66663 9.99935C1.66663 14.6017 5.39758 18.3327 9.99996 18.3327C14.6023 18.3327 18.3333 14.6017 18.3333 9.99935C18.3333 5.39697 14.6023 1.66602 9.99996 1.66602"
                    stroke="#4318D1"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M1.66663 9.99935L4.99996 13.3327M1.66663 9.99935L4.99996 6.66602M1.66663 9.99935H18.3333"
                    stroke="#4318D1"
                    strokeWidth="2"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_730_21370">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>Reset</span>
            </button>

            <button className={styles.actionButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.printIcon}
              >
                <path
                  d="M14.1666 14.1667H14.175M14.1666 17.5H5.83329C4.91282 17.5 4.16663 16.7538 4.16663 15.8333V4.16667C4.16663 3.24619 4.91282 2.5 5.83329 2.5H10.4881C10.7091 2.5 10.9211 2.5878 11.0774 2.74408L15.5892 7.25593C15.7455 7.4122 15.8333 7.62417 15.8333 7.84518V15.8333C15.8333 16.7538 15.0871 17.5 14.1666 17.5Z"
                  stroke="#4318D1"
                  strokeWidth="2"
                ></path>
              </svg>
              <span>Print</span>
            </button>

            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>

      <div className={styles.reportContent}>
        <div className={styles.reportColumn}>
          <h3 className={styles.sectionTitle}>Assets</h3>

          <div className={styles.sectionGroup}>
            <h4 className={styles.subSectionTitle}>Current Assets</h4>
            <div className={styles.sectionRow}>
              <span className={styles.rowLabel}>Total Current Assets</span>
              <span className={styles.rowValue}>750,000.00</span>
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <h4 className={styles.subSectionTitle}>Fixed Assets</h4>
            <div className={styles.sectionRow}>
              <span className={styles.rowLabel}>Total Fixed Assets</span>
              <span className={styles.rowValue}>900,000.00</span>
            </div>
          </div>

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total Assets</span>
            <span className={styles.totalValue}>1,650,000.00</span>
          </div>
        </div>

        <div className={styles.reportColumn}>
          <h3 className={styles.sectionTitle}>Liabilities and Equity</h3>

          <div className={styles.sectionGroup}>
            <h4 className={styles.subSectionTitle}>Current Liabilities</h4>
            <div className={styles.sectionRow}>
              <span className={styles.rowLabel}>Total Current Liabilities</span>
              <span className={styles.rowValue}>270,000.00</span>
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <h4 className={styles.subSectionTitle}>Long-term Liabilities</h4>
            <div className={styles.sectionRow}>
              <span className={styles.rowLabel}>
                Total Long-term Liabilities
              </span>
              <span className={styles.rowValue}>575,000.00</span>
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <h4 className={styles.subSectionTitle}>Equity</h4>
            <div className={styles.sectionRow}>
              <span className={styles.rowLabel}>Total Equity</span>
              <span className={styles.rowValue}>805,000.00</span>
            </div>
          </div>

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>
              Total Liabilities and Equity
            </span>
            <span className={styles.totalValue}>1,650,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
