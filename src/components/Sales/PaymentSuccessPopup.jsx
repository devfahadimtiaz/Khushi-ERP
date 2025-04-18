import React from "react";
import styles from "./PaymentSuccessPopup.module.css";

function PaymentSuccessPopup({
  onClose,
  paymentAmount,
  referenceNumber,
  paymentDate,
  paymentMethod,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.headerContent}>
            <span className={styles.title}>Payment Successful</span>
            <span className={styles.subtitle}>
              Your payment has been processed successfully
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.row}>
            <span className={styles.label}>Amount Paid</span>
            <span className={styles.value}>{paymentAmount || "¥350,000"}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Reference Number</span>
            <span className={styles.value}>
              {referenceNumber || "CR-2024-001"}
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Payment Date</span>
            <span className={styles.value}>{paymentDate || "2024-01-20"}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Payment Method</span>
            <span className={styles.value}>
              {paymentMethod || "Bank Transfer"}
            </span>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPopup;
