import React from "react";
import styles from "./GeneralLedgerReport.module.css";
import TableComponenet from "../../../Resources/Tables/TableSupplierStatus";
import { Tab } from "@mui/material";
const TableHeader = [
  { label: "Sr", key: "sr" },
  { label: "A/C Code", key: "acCode" },
  { label: "A/C Description", key: "acDescription" },
  { label: "VType", key: "vType" },
  { label: "Voucher#", key: "voucher" },
  { label: "Date", key: "date" },
  { label: "Reference", key: "refrence" },
  { label: "Narration", key: "narration" },
  { label: "Dr Amount", key: "drAmount" },
  { label: "Cr Amount", key: "crAmount" },
];

const TableData = [
  {
    id: 1,
    sr: "1",
    acCode: "1001",
    acDescription: "Cash in Hand",
    vType: "CP",
    voucher: "CP-2024-001",
    date: "2024-01-15",
    refrence: "REF001",
    narration: "Office Rent Payment",
    drAmount: "25,000.00",
    crAmount: "0.00",
  },
  {
    id: 2,
    sr: "1",
    acCode: "1001",
    acDescription: "Cash in Hand",
    vType: "CP",
    voucher: "CP-2024-001",
    date: "2024-01-15",
    refrence: "REF001",
    narration: "Office Rent Payment",
    drAmount: "25,000.00",
    crAmount: "0.00",
  },
  {
    id: 3,
    sr: "1",
    acCode: "1001",
    acDescription: "Cash in Hand",
    vType: "CP",
    voucher: "CP-2024-001",
    date: "2024-01-15",
    refrence: "REF001",
    narration: "Office Rent Payment",
    drAmount: "25,000.00",
    crAmount: "0.00",
  },
];

const GeneralLedger = ({ onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>General Ledger</h2>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>
              Financial Year
              <span className={styles.requiredMark}>*</span>
            </span>
            <select className={styles.selectField}>
              <option>Select Year</option>
          
            </select>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>
              Account From
              <span className={styles.requiredMark}>*</span>
            </span>
            <select className={styles.selectField}>
              <option>Select Account</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>
              Account To
              <span className={styles.requiredMark}>*</span>
            </span>
            <select className={styles.selectField}>
              <option>Select Account To</option>
            </select>
          </div>

          <div className={styles.dateGroup}>
            <div className={styles.inputGroupDate}>
              <span className={styles.inputLabel}>Date From</span>
              <input type="date" className={styles.dateField}/>
              </div>
              <div className={styles.inputGroupDate}>
              <span className={styles.inputLabel}>Date To</span>
              <input type="date" className={styles.dateField}/>
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
              >
                <g clipPath="url(#clip0_75_133)">
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
                  <clipPath id="clip0_75_133">
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
      <TableComponenet data={TableData} HeadData={TableHeader}/>
      <div className={styles.pagination}>Showing 4 transactions</div>
    </div>
  );
};

export default GeneralLedger;
