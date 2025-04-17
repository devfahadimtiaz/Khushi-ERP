import React, { useState } from "react";
import OverdueInvoices from "./OverdueInvoices";
import Statements from "./Statements";
import styles from "./Invoices.module.css";
const freightInvoices = [
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
];
const generalInvoices = [
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
];
const servicesInvoices = [
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
  {
    invoiceNo: "#1000",
    invoiceDate: "14 April 2025",
    paymentDue: "15 Appril 2025",
    paymentAmount: "25000",
    paidAmount: "15000",
    balance: "10000",
  },
];
function Invoices({ onBackTodashboard }) {
  const [activeTab, setActiveTab] = useState("receivables");

  if (activeTab === "overdue") {
    return <OverdueInvoices onBackToDashboard={onBackTodashboard} />;
  }

  if (activeTab === "statements") {
    return <Statements onBackToDashboard={onBackTodashboard} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.pageTitle}>My Shipments</h1>
            <div className={styles.tabsContainer}>
              <button className={styles.tab} onClick={onBackTodashboard}>
                Dashboard
              </button>
              <button className={styles.tab}>All Vehicles</button>
              <button className={styles.tab}>Trucking</button>
              <button className={styles.tab}>Freight</button>
              <button className={styles.tab}>All Shipments</button>
              <button className={styles.tabActive}>Invoices</button>
              <button className={styles.tab}>BL & ED</button>
            </div>
          </div>
        </div>

        <div className={styles.tabsCard}>
          <div className={styles.tabsRow}>
            <button
              className={
                activeTab === "receivables"
                  ? styles.tabButtonActive
                  : styles.tabButton
              }
              onClick={() => setActiveTab("receivables")}
            >
              Receivables
            </button>
            <button
              className={
                activeTab === "overdue"
                  ? styles.tabButtonActive
                  : styles.tabButton
              }
              onClick={() => setActiveTab("overdue")}
            >
              Overdue
            </button>
            <button
              className={
                activeTab === "statements"
                  ? styles.tabButtonActive
                  : styles.tabButton
              }
              onClick={() => setActiveTab("statements")}
            >
              Statements
            </button>
          </div>
        </div>
        <h1 className={styles.tableHeading}>Freight Invoices</h1>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Invoice No</div>
          <div className={styles.tableHeaderCell}>Invoice Date</div>
          <div className={styles.tableHeaderCellCustomer}>Payment Due Date</div>
          <div className={styles.tableHeaderCell}>Total Amount</div>
          <div className={styles.tableHeaderCell}>Paid Amount</div>
          <div className={styles.tableHeaderCell}>Balance Amount</div>
        </div>
        {freightInvoices.map((row, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>{row.invoiceNo}</div>
            <div className={styles.tableCell}>{row.invoiceDate}</div>
            <div className={styles.tableCellCustomer}>{row.paymentDue}</div>
            <div className={styles.tableCell}>{row.paymentAmount}</div>
            <div className={styles.tableCell}>{row.paidAmount}</div>
            <div className={styles.tableCell}>{row.balance}</div>
          </div>
        ))}
        <h1 className={styles.tableHeading}>General Invoices</h1>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Invoice No</div>
          <div className={styles.tableHeaderCell}>Invoice Date</div>
          <div className={styles.tableHeaderCellCustomer}>Payment Due Date</div>
          <div className={styles.tableHeaderCell}>Total Amount</div>
          <div className={styles.tableHeaderCell}>Paid Amount</div>
          <div className={styles.tableHeaderCell}>Balance Amount</div>
        </div>
        {generalInvoices.map((row, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>{row.invoiceNo}</div>
            <div className={styles.tableCell}>{row.invoiceDate}</div>
            <div className={styles.tableCellCustomer}>{row.paymentDue}</div>
            <div className={styles.tableCell}>{row.paymentAmount}</div>
            <div className={styles.tableCell}>{row.paidAmount}</div>
            <div className={styles.tableCell}>{row.balance}</div>
          </div>
        ))}
        <h1 className={styles.tableHeading}>Services Invoices</h1>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Invoice No</div>
          <div className={styles.tableHeaderCell}>Invoice Date</div>
          <div className={styles.tableHeaderCellCustomer}>Payment Due Date</div>
          <div className={styles.tableHeaderCell}>Total Amount</div>
          <div className={styles.tableHeaderCell}>Paid Amount</div>
          <div className={styles.tableHeaderCell}>Balance Amount</div>
        </div>
        {servicesInvoices.map((row, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>{row.invoiceNo}</div>
            <div className={styles.tableCell}>{row.invoiceDate}</div>
            <div className={styles.tableCellCustomer}>{row.paymentDue}</div>
            <div className={styles.tableCell}>{row.paymentAmount}</div>
            <div className={styles.tableCell}>{row.paidAmount}</div>
            <div className={styles.tableCell}>{row.balance}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invoices;
