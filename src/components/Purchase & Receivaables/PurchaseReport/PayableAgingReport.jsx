import React from "react";
import styles from "./PayableAgingReport.module.css";

function PayableAgingReport({ onBack }) {
  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />

      <div className={styles.header}>
        <span className={styles.title}>Payable Aging Report</span>
        <div className={styles.totalAmount}>$42,000.00</div>
        
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterColumn}>
          <span className={styles.filterLabel}>Start Date</span>
          <input type="date"  className={styles.inputContainer}/>
            
            
        </div>

        <div className={styles.filterColumn}>
          <span className={styles.filterLabel}>End Date</span>
          <input type="date"  className={styles.inputContainer}/>
        </div>

        <div className={styles.filterColumn}>
          <span className={styles.filterLabel}>Select Vendor</span>
          <select className={styles.inputContainer}>
            <option>Select vendor</option>
            <option>vendor A</option>
            <option>vendor B</option>
            <option>vendor C</option>
          </select>
        </div>
      </div>

      <div className={styles.actionRow}>
        <button className={styles.primaryButton}>Generate Report</button>
        <button className={styles.secondaryButton}>Export to Excel</button>
        <button className={styles.secondaryButton}>Print Report</button>
      </div>

      <div className={styles.summaryRow}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Current</span>
          <span className={styles.summaryAmount} style={{ color: "#4318D1" }}>
            $23,500.00
          </span>
        </div>

        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>1-30 Days</span>
          <span className={styles.summaryAmount} style={{ color: "#F5A623" }}>
            $12,000.00
          </span>
        </div>

        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>31-60 Days</span>
          <span className={styles.summaryAmount} style={{ color: "#CF2129" }}>
            $6,500.00
          </span>
        </div>

        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Total Outstanding</span>
          <span className={styles.summaryAmount} style={{ color: "#092C4C" }}>
            $42,000.00
          </span>
        </div>
      </div>

      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <th className={styles.tableHeaderCell}>Vendor Name</th>
          <th className={styles.tableHeaderCell}>Invoice No</th>
          <th className={styles.tableHeaderCell}>Amount</th>
          <th className={styles.tableHeaderCell}>Due Date</th>
          <th className={styles.tableHeaderCell}>Days Outstanding</th>
        </thead>

        <tr className={styles.tableRow}>
          <td className={styles.tableCell}>Tokyo Motors Inc</td>
          <td className={styles.tableCell}>INV-2024-001</td>
          <td className={styles.tableCell}>$15,000.00</td>
          <td className={styles.tableCell}>2024-01-15</td>
          <td className={styles.tableCell}>15 days</td>
        </tr>

        <tr className={styles.tableRow}>
          <td className={styles.tableCell}>Osaka Auto Parts</td>
          <td className={styles.tableCell}>INV-2024-002</td>
          <td className={styles.tableCell}>$8,500.00</td>
          <td className={styles.tableCell}>2024-01-01</td>
          <td className={styles.tableCell} style={{ color: "#F5A623" }}>
            29 days
          </td>
        </tr>

        <tr className={styles.tableRow}>
          <td className={styles.tableCell}>Nagoya Shipping Co</td>
          <td className={styles.tableCell}>INV-2024-003</td>
          <td className={styles.tableCell}>$12,000.00</td>
          <td className={styles.tableCell}>2023-12-15</td>
          <td className={styles.tableCell} style={{ color: "#CF2129" }}>
            45 days
          </td>
        </tr>

        <tr className={styles.tableRow}>
          <td className={styles.tableCell}>Yokohama Traders</td>
          <td className={styles.tableCell}>INV-2024-004</td>
          <td className={styles.tableCell}>$6,500.00</td>
          <td className={styles.tableCell}>2023-12-01</td>
          <td className={styles.tableCell}>60 days</td>
        </tr>
      </table>
    </div>
  );
}

export default PayableAgingReport;
