import React from "react";
import styles from "./ProfitAndLossStatement.module.css";

const ProfitAndLossStatement = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profit and Loss Statement</h1>

      <div className={styles.filterCard}>
        <div className={styles.filterRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              <span>Company Name</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option className={styles.placeholderText}>Select Company</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              <span>Type</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option className={styles.placeholderText}>Select Type</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              <span>Financial Year</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option className={styles.placeholderText}>Select Year</option>
            </select>
          </div>
        </div>

        <div className={styles.filterRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              <span>Financial Month</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option className={styles.placeholderText}>Select Month</option>
              
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Date From</label>
            <input type="date" className={styles.selectDateField}/>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Date To</label>
            <input type="date" className={styles.selectDateField}/>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.resetButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_78_477)">
                  <path
                    d="M1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699"
                    stroke="#4318D1"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M1.66699 10.0003L5.00033 13.3337M1.66699 10.0003L5.00033 6.66699M1.66699 10.0003H18.3337"
                    stroke="#4318D1"
                    strokeWidth="2"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_78_477">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>Reset</span>
            </button>

            <button className={styles.printButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.167 14.1667H14.1753M14.167 17.5H5.83366C4.91318 17.5 4.16699 16.7538 4.16699 15.8333V4.16667C4.16699 3.24619 4.91318 2.5 5.83366 2.5H10.4885C10.7095 2.5 10.9215 2.5878 11.0777 2.74408L15.5896 7.25593C15.7458 7.4122 15.8337 7.62417 15.8337 7.84518V15.8333C15.8337 16.7538 15.0875 17.5 14.167 17.5Z"
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

      <div className={styles.reportCard}>
        <div className={styles.reportSection}>
          <h2 className={styles.sectionTitle}>Revenue</h2>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Sales Revenue</span>
            <span className={styles.reportValue}>850,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Service Revenue</span>
            <span className={styles.reportValue}>150,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Other Income</span>
            <span className={styles.reportValue}>25,000.00</span>
          </div>
          <div className={styles.reportTotal}>
            <span>Total</span>
            <span>1,025,000.00</span>
          </div>
        </div>

        <div className={styles.reportSection}>
          <h2 className={styles.sectionTitle}>Cost of Sales</h2>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Purchases</span>
            <span className={styles.reportValue}>450,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Direct Labor</span>
            <span className={styles.reportValue}>125,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Manufacturing Overhead</span>
            <span className={styles.reportValue}>75,000.00</span>
          </div>
          <div className={styles.reportTotal}>
            <span>Total</span>
            <span>650,000.00</span>
          </div>
        </div>

        <div className={styles.reportSection}>
          <h2 className={styles.sectionTitle}>Operating Expenses</h2>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Salaries and Wages</span>
            <span className={styles.reportValue}>120,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Rent Expense</span>
            <span className={styles.reportValue}>45,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Utilities</span>
            <span className={styles.reportValue}>25,000.00</span>
          </div>
          <div className={styles.reportRow}>
            <span className={styles.reportLabel}>Office Supplies</span>
            <span className={styles.reportValue}>15,000.00</span>
          </div>
          <div className={styles.reportTotal}>
            <span>Total</span>
            <span>205,000.00</span>
          </div>
        </div>

        <div className={styles.reportSummary}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Gross Profit</span>
            <span className={styles.summaryValue}>375,000.00</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Net Profit</span>
            <span className={styles.summaryValue}>170,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitAndLossStatement;
