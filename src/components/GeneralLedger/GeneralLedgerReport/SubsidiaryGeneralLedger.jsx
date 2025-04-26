import React from "react";
import styles from "./SubsidiaryGeneralLedger.module.css";
import TableComponenet from "../../../Resources/Tables/TableSupplierStatus";

const SubsidiaryGeneralLedger = ({ onBack }) => {

  const tableHeader=[
    { label: "Sr", key: "sr" },
  { label: "Account Code", key: "accountCode" },
  { label: "Account Discription", key: "accountDescription" },
  { label: "Subsidiary Code", key: "subsidiaryCode" },
  { label: "Subsidiary Description", key: "subsidiaryDescription" },
  { label: "VType", key: "vType" },
  { label: "Voucher #", key: "voucher" },
  { label: "Date", key: "date" },
  { label: "Reference", key: "reference" },
  { label: "Narration", key: "narration" },
  { label: "Dr Amount", key: "drAmount" },
  { label: "Cr Amount", key: "crAmount" },
];
  // Sample data for the table
  const tableData = [
    {
      id: 1,
      sr: "1",
      accountCode: "2001",
      accountDescription: "Customer Accounts",
      subsidiaryCode: "CUST-001",
      subsidiaryDescription: "Customer A",
      vType: "INV",
      voucher: "INV-2024-001",
      date: "2024-01-15",
      reference: "REF001",
      narration: "Sales Invoice",
      drAmount: "50,000.00",
      crAmount: "0.00",
    },
    {
      id: 2,
      sr: "2",
      accountCode: "2001",
      accountDescription: "Customer Accounts",
      subsidiaryCode: "CUST-002",
      subsidiaryDescription: "Customer B",
      vType: "RCP",
      voucher: "RCP-2024-001",
      date: "2024-01-16",
      reference: "REF002",
      narration: "Payment Receipt",
      drAmount: "0.00",
      crAmount: "25,000.00",
    },
    {
      id: 3,
      sr: "3",
      accountCode: "2002",
      accountDescription: "Vendor Accounts",
      subsidiaryCode: "VEND-001",
      subsidiaryDescription: "Vendor X",
      vType: "BILL",
      voucher: "BILL-2024-001",
      date: "2024-01-17",
      reference: "REF003",
      narration: "Purchase Bill",
      drAmount: "0.00",
      crAmount: "75,000.00",
    },
    {
      id: 4,
      sr: "4",
      accountCode: "2002",
      accountDescription: "Vendor Accounts",
      subsidiaryCode: "VEND-002",
      subsidiaryDescription: "Vendor Y",
      vType: "PMT",
      voucher: "PMT-2024-001",
      date: "2024-01-18",
      reference: "REF004",
      narration: "Payment Made",
      drAmount: "35,000.00",
      crAmount: "0.00",
    },
  ];

  // Calculate totals
  const totalDrAmount = "85,000.00";
  const totalCrAmount = "100,000.00";

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Subsidiary General Ledger</h2>

      <div className={styles.filterSection}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>
              <span>Financial Year</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select Year</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Date From</label>
            <input type="date" className={styles.dateField} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Date To</label>
            <input type="date" className={styles.dateField} />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>
              <span>General Ledger From</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select GL Account</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>
              <span>General Ledger To</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select GL Account</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>
              <span>Subsidiary Ledger From</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select SL Account</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>
              <span>Subsidiary Ledger To</span>
              <span className={styles.requiredMark}>*</span>
            </label>
            <select className={styles.selectField}>
              <option>Select SL Account</option>
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
              >
                <g clipPath="url(#clip0_76_251)">
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
                  <clipPath id="clip0_76_251">
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

      <TableComponenet data={tableData} HeadData={tableHeader}/>
      <div className={styles.pagination}>Showing 4 transactions</div>
    </div>
  );
};

export default SubsidiaryGeneralLedger;
