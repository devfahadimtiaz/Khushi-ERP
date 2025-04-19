import React from "react";
import styles from "./SaleSummary.module.css";

function SaleSummary({ onBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.contentCard}>
          <div className={styles.vehicleInfoSection}>
            <div className={styles.leftColumn}>
              <div className={styles.sectionTitle}>Sale Summary</div>
              <div className={styles.fieldLabel}>Make</div>
              <div className={styles.fieldValue}>Toyota</div>
              <div className={styles.fieldLabel}>Stock No.</div>
              <div className={styles.fieldValue}>ST12345</div>
            </div>
            <div className={styles.middleColumn}>
              <div className={styles.fieldLabel}>Model</div>
              <div className={styles.fieldValue}>Camry</div>
              <div className={styles.fieldLabel}>Chassis No.</div>
              <div className={styles.fieldValue}>JT2BF22K1W0123456</div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.fieldLabel}>Trim</div>
              <div className={styles.fieldValue}>XSE</div>
            </div>
          </div>
          <div className={styles.paymentDetailsSection}>
            <div className={styles.paymentLeftColumn}>
              <div className={styles.paymentSectionTitle}>Payment Details</div>
              <div className={styles.paymentFieldLabel}>Trade-in Transfer</div>
              <div className={styles.paymentFieldValue}>USD 1,200</div>
              <div className={styles.paymentFieldLabel}>Sale VAT</div>
              <div className={styles.paymentFieldValue}>USD 3,500</div>
              <div className={styles.paymentFieldLabel}>
                Khushi Media Office
              </div>
              <div className={styles.paymentFieldValue}>USD 450</div>
              <div className={styles.paymentFieldLabel}>Tracker</div>
              <div className={styles.paymentFieldValue}>USD 300</div>
              <div className={styles.paymentFieldLabel}>Sale Commission</div>
              <div className={styles.paymentFieldValue}>USD 800</div>
            </div>
            <div className={styles.paymentRightColumn}>
              <div className={styles.paymentFieldLabel}>Branch Name</div>
              <div className={styles.paymentFieldValue}>KMK</div>
              <div className={styles.paymentFieldLabel}>Date</div>
              <div className={styles.paymentFieldValue}>2024-01-18</div>
              <div className={styles.currencyContainer}>
                <div className={styles.paymentFieldLabel}>Currency</div>
                <div className={styles.currencyBadge}>KSH</div>
              </div>
            </div>
          </div>
          <div className={styles.financialSummarySection}>
            <div className={styles.summaryLeftColumn}>
              <div className={styles.summaryFieldLabel}>Amount in KSH</div>
              <div className={styles.summaryAmount}>KSH 4,850,000</div>
              <div className={styles.summaryFieldLabel}>Total Expenses</div>
              <div className={styles.summaryFieldLabel}>Purchase Amount</div>
              <div className={styles.profitLabel}>Profit</div>
            </div>
            <div className={styles.summaryMiddleColumn}>
              <div className={styles.summaryFieldLabel}>Amount in USD</div>
              <div className={styles.summaryAmount}>USD 38,150</div>
            </div>
            <div className={styles.summaryRightColumn}>
              <div className={styles.expenseAmount}>USD 6,250</div>
              <div className={styles.purchaseAmount}>USD 32,000</div>
              <div className={styles.profitAmount}>USD -100</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pdfButton} onClick={onBack}>
        PDF
      </div>
    </div>
  );
}

export default SaleSummary;
