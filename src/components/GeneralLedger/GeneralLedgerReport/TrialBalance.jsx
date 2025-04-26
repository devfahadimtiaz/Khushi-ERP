import React from "react";
import styles from "./TrialBalance.module.css";
import TableComponenet from "../../../Resources/Tables/TableSupplierStatus";

const TrialBalance = ({ onBack }) => {
  const tableHeader=[
    { label: "Sr", key: "sr" },
  { label: "Account Code", key: "accountCode" },
  { label: "Account Name", key: "accountName" },
  { label: "Level", key: "level" },
  { label: "Opening Debit", key: "openingDebit" },
  { label: "Opening Credit", key: "openingCredit" },
  { label: "Current Debit", key: "currentDebit" },
  { label: "Closing Debit", key: "closingDebit" },
  { label: "Closing Credit", key: "closingCredit" },
];
  const trialBalanceData = [
    {
      id: 1,
      accountCode: "1000",
      accountName: "Assets",
      level: "1",
      openingDebit: "500,000.00",
      openingCredit: "0.00",
      currentDebit: "250,000.00",
      currentCredit: "50,000.00",
      closingDebit: "700,000.00",
      closingCredit: "0.00",
    },
    {
      id: 2,
      accountCode: "2000",
      accountName: "Liabilities",
      level: "1",
      openingDebit: "0.00",
      openingCredit: "300,000.00",
      currentDebit: "25,000.00",
      currentCredit: "175,000.00",
      closingDebit: "0.00",
      closingCredit: "450,000.00",
    },
    {
      id: 3,
      accountCode: "3000",
      accountName: "Capital",
      level: "1",
      openingDebit: "0.00",
      openingCredit: "200,000.00",
      currentDebit: "0.00",
      currentCredit: "50,000.00",
      closingDebit: "0.00",
      closingCredit: "250,000.00",
    },
    {
      id: 4,
      accountCode: "4000",
      accountName: "Revenue",
      level: "1",
      openingDebit: "0.00",
      openingCredit: "0.00",
      currentDebit: "0.00",
      currentCredit: "150,000.00",
      closingDebit: "0.00",
      closingCredit: "150,000.00",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Trial Balance</h2>
      </div>

      <div className={styles.filterCard}>
        <div className={styles.filterRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              Company
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select Company</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              Date
              <span className={styles.requiredMark}>*</span>
            </label>
            <input type="date" className={styles.dateField}/>
          </div>
        </div>

        <div className={styles.filterRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              Account Level
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select Level</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              Date Type
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select Date Type</option>
            </select>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.buttonIcon}
              >
                <g clipPath="url(#clip0_77_367)">
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
                  <clipPath id="clip0_77_367">
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
                className={styles.buttonIcon}
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

  <TableComponenet data={trialBalanceData} HeadData={tableHeader}/>
      <div className={styles.pagination}>Showing 4 accounts</div>
    </div>
  );
};

export default TrialBalance;
