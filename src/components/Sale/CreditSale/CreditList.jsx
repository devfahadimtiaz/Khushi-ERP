import React, { useState } from "react";
import styles from "./CreditList.module.css";
import CreditReceiptDetails from "./CreditReceiptDetails";
const sampleData = [
  {
    reciptNo: "ORD-2023-001",
    ChassisNo: "ABC1234",
    model: "ABC",
    customer: "Land Cruiser",
    amount: "30000",
    status: "Pending",
    date: "14 April, 2025",
  },
  {
    reciptNo: "ORD-2023-001",
    ChassisNo: "ABC1234",
    model: "ABC",
    customer: "Land Cruiser",
    amount: "30000",
    status: "Complete",
    date: "14 April, 2025",
  },
  {
    reciptNo: "ORD-2023-001",
    ChassisNo: "ABC1234",
    model: "ABC",
    customer: "Land Cruiser",
    amount: "30000",
    status: "Complete",
    date: "14 April, 2025",
  },
];
const CreditReceipts = () => {
  const [selectedReceipt, setSelectedReceipt] = useState("");

  const handleViewReceipt = (receipt) => {
    setSelectedReceipt(receipt);
  };

  const handleBack = () => {
    setSelectedReceipt(" ");
  };
 

  if (selectedReceipt==="viewReceipt") {
    return (
      <CreditReceiptDetails receipt={selectedReceipt} onBack={handleBack} />
    );
  }
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <div className={styles.container}>
        <div className={styles.title}>All Credit Sales</div>
        <div className={styles.searchSection}>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>Chassis No.</span>
            <input
              type="text"
              placeholder="Enter chassis number"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>Car Name/Stock no</span>
            <input
              type="text"
              placeholder="Make/Stock"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>Status</span>
            <select className={styles.statusDropdown}>
              <option className={styles.dropdownText}>All Status</option>
              <option className={styles.dropdownText}>Pending</option>
              <option className={styles.dropdownText}>Complete</option>
              <option className={styles.dropdownText}>Processing</option>
            </select>
          </div>
          <div className={styles.searchButton}>Search</div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Recipt No.</div>
            <div className={styles.tableHeaderCell}>Chassis No.</div>
            <div className={styles.tableHeaderCellCustomer}>Model</div>
            <div className={styles.tableHeaderCell}>Customer</div>
            <div className={styles.tableHeaderCell}>Amount</div>
            <div className={styles.tableHeaderCell}>Status</div>
            <div className={styles.tableHeaderCell}>Date</div>
            <div className={styles.tableHeaderCell}>Action</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.reciptNo}</div>
              <div className={styles.tableCell}>{row.ChassisNo}</div>
              <div className={styles.tableCell}>{row.model}</div>
              <div className={styles.tableCell}>{row.customer}</div>
              <div className={styles.tableCell}>{row.amount}</div>
              <div className={styles.tableCell}>{row.status}</div>
              <div className={styles.tableCell}>{row.date}</div>
              <button
                className={styles.tableButton}
                onClick={() => handleViewReceipt("viewReceipt")}
              >
                View Receipt
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreditReceipts;
