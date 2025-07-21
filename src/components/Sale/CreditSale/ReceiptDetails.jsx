import React from "react";
import styles from "./ReceiptDetails.module.css";

const ReceiptDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitle}>Receipt Details</div>
            <div className={styles.headerReference}>Reference: CR-2024-001</div>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.totalSalesButton}>Total Sales</div>
            <div className={styles.downloadButton}>Download PDF</div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Vehicle Details</div>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Make</div>
              <div className={styles.detailValue}>Toyota</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Model</div>
              <div className={styles.detailValue}>Camry</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Trim</div>
              <div className={styles.detailValue}>XSE</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Stock No.</div>
              <div className={styles.detailValue}>ST12345</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Chassis No.</div>
              <div className={styles.detailValue}>JT2BF22K1W0123456</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Registration No.</div>
              <div className={styles.detailValue}>ABC-123</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Color</div>
              <div className={styles.detailValue}>Pearl White</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Mileage</div>
              <div className={styles.detailValue}>15,000 km</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Year</div>
              <div className={styles.detailValue}>2023</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.paymentHeader}>
            <div className={styles.sectionTitle}>Payment Details</div>
            <div className={styles.totalAmount}>
              <span className={styles.totalLabel}>Total Sale Amount:</span>
              <span className={styles.totalValue}>¥4,850,000</span>
            </div>
          </div>

          <div className={styles.paymentTable}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>Payment Type</div>
              <div className={styles.headerCell}>Amount</div>
              <div className={styles.headerCell}>Due Date</div>
              <div className={styles.headerCell}>Status</div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.paymentType}>Cash</div>
              <div></div>
              <div></div>
              <div className={styles.paymentAmount}>¥350,000</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Customer Information</div>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Name</div>
              <div className={styles.detailValue}>John Smith</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Phone</div>
              <div className={styles.detailValue}>+81 80-1234-5678</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Email</div>
              <div className={styles.detailValue}>john.smith@email.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDetails;
