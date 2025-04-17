import React, { useState } from "react";
import styles from "./CashSale.module.css";
import SaleDetails from "./SaleDetails";

function CashSale() {
  const [saleType, setSaleType] = useState("cash"); // cash or credit
  const [showSaleDetails, setShowSaleDetails] = useState(false);

  const handleSaleTypeChange = (type) => {
    setSaleType(type);
  };

  const handleProcessSale = () => {
    // Show the SaleDetails component
    setShowSaleDetails(true);
    console.log("Processing sale...");
  };

  const handleCancel = () => {
    // Implement cancel logic
    console.log("Sale cancelled");
  };

  const handleSaleDetailsCancel = () => {
    setShowSaleDetails(false);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@400;700&family=Inter&display=swap"
      />
      {showSaleDetails ? (
        <SaleDetails onCancel={handleSaleDetailsCancel} />
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>New Sale</div>
            <div className={styles.saleTypeButtons}>
              <div
                className={`${styles.saleTypeButton} ${saleType === "cash" ? styles.active : ""}`}
                onClick={() => handleSaleTypeChange("cash")}
              >
                Cash Sale
              </div>
              <div
                className={`${styles.saleTypeButton} ${saleType === "credit" ? styles.active : ""}`}
                onClick={() => handleSaleTypeChange("credit")}
              >
                Credit Sales
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.sectionTitle}>Vehicle Details</div>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <div className={styles.label}>Make</div>
                <div className={styles.inputField}>Toyota</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Model</div>
                <div className={styles.inputField}>Land Cruiser</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Year of Manufacture</div>
                <div className={styles.inputField}>2024</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Chassis Number</div>
                <div className={styles.inputField}>GSX1234567890</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Stock Number</div>
                <div className={styles.inputField}>C24-345</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Engine CC</div>
                <div className={styles.inputField}>3000 CC</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Body Type</div>
                <div className={styles.inputField}>SUV</div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>Registration Number</div>
                <div className={styles.inputField}>ABC-123</div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div
                className={`${styles.actionButton} ${styles.processButton}`}
                onClick={handleProcessSale}
              >
                Process Sale
              </div>
              <div
                className={`${styles.actionButton} ${styles.cancelButton}`}
                onClick={handleCancel}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CashSale;
