import React from "react";
import styles from "./ReceiptDetails.module.css";

function ReceiptDetails({ onBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.card}>
          <div className={styles.headerSection}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Receipt Details</div>
              <div className={styles.reference}>Reference: CR-2024-001</div>
            </div>
            <button className={styles.downloadButton}>Download PDF</button>
          </div>

          <div className={styles.vehicleDetailsSection}>
            <div className={styles.threeColumnLayout}>
              <div className={styles.column}>
                <div className={styles.sectionTitle}>Vehicle Details</div>
                <div className={styles.fieldLabel}>Make</div>
                <div className={styles.fieldValue}>Toyota</div>
                <div className={styles.fieldLabel}>Stock No.</div>
                <div className={styles.fieldValue}>ST12345</div>
                <div className={styles.fieldLabel}>Color</div>
                <div className={styles.fieldValue}>Pearl White</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Model</div>
                <div className={styles.fieldValue}>Camry</div>
                <div className={styles.fieldLabel}>Chassis No.</div>
                <div className={styles.fieldValue}>JT2BF22K1W0123456</div>
                <div className={styles.fieldLabel}>Mileage</div>
                <div className={styles.fieldValue}>15,000 km</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Trim</div>
                <div className={styles.fieldValue}>XSE</div>
                <div className={styles.fieldLabel}>Registration No.</div>
                <div className={styles.fieldValue}>ABC-123</div>
                <div className={styles.fieldLabel}>Year</div>
                <div className={styles.fieldValue}>2023</div>
              </div>
            </div>
          </div>

          <div className={styles.paymentDetailsSection}>
            <div className={styles.paymentHeader}>
              <div className={styles.paymentTitleSection}>
                <div className={styles.sectionTitle}>Payment Details</div>
                <div className={styles.paymentTypeLabel}>Payment Type</div>
              </div>
              <div className={styles.amountLabel}>Amount</div>
              <div className={styles.dueDateLabel}>Due Date</div>
              <div className={styles.totalSection}>
                <div className={styles.totalRow}>
                  <div className={styles.totalLabel}>Total Sale Amount:</div>
                  <div className={styles.totalAmount}>¥4,850,000</div>
                </div>
                <div className={styles.statusLabel}>Status</div>
              </div>
            </div>

            <div className={styles.paymentRow}>
              <div className={styles.paymentType}>Cash</div>
              <div className={styles.paymentAmount}>¥350,000</div>
            </div>
          </div>

          <div className={styles.customerSection}>
            <div className={styles.threeColumnLayout}>
              <div className={styles.column}>
                <div className={styles.sectionTitle}>Customer Information</div>
                <div className={styles.fieldLabel}>Name</div>
                <div className={styles.fieldValue}>John Smith</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Phone</div>
                <div className={styles.fieldValue}>+81 80-1234-5678</div>
              </div>

              <div className={styles.column}>
                <div className={styles.fieldLabel}>Email</div>
                <div className={styles.fieldValue}>john.smith@email.com</div>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.backButton} onClick={onBack}>
              Back to Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptDetails;
