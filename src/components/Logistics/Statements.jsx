import React, { useState } from "react";
import styles from "./Statements.module.css";
import Invoices from "./Invoices";
import OverdueInvoices from "./OverdueInvoices";

const statementData = [
  {
    invoiceDate: "2024-01-15",
    invoiceNo: "INV-001",
    remarks: "Monthly Service",
    invoiceAmount: "$45,000",
    amountAdjusted: "$40,000",
    closingBalance: "$5,000",
  },
  {
    invoiceDate: "2024-01-20",
    invoiceNo: "INV-002",
    remarks: "Consulting",
    invoiceAmount: "$28,000",
    amountAdjusted: "$28,000",
    closingBalance: "$0",
  },
  {
    invoiceDate: "2024-01-25",
    invoiceNo: "INV-003",
    remarks: "Development",
    invoiceAmount: "$65,000",
    amountAdjusted: "$45,000",
    closingBalance: "$20,000",
  },
];

function Statements({ onBackToDashboard }) {
  const [activeTab, setActiveTab] = useState("statements");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  if (activeTab === "receivables") {
    return <Invoices onBackToDashboard={onBackToDashboard} />;
  }

  if (activeTab === "overdue") {
    return <OverdueInvoices onBackToDashboard={onBackToDashboard} />;
  }

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching with:", { invoiceNumber, dateFrom, dateTo });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.pageTitle}>My Shipments</h1>
            <div className={styles.tabsContainer}>
              <button className={styles.tab} onClick={onBackToDashboard}>
                Dashboard
              </button>
              <button className={styles.tab}>All Vehicles</button>
              <button className={styles.tab}>Trucking</button>
              <button className={styles.tab}>Freight</button>
              <button className={styles.tab}>All Shipments</button>
              <button className={styles.tabActive}>Invoices</button>
              <button className={styles.tab}>BL &amp; ED</button>
            </div>
          </div>
        </div>

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

        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Invoice No</label>
            <input
              type="text"
              className={styles.filterInput}
              placeholder="Enter invoice number"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>From Date</label>
            <div className={styles.dateInputWrapper}>
              <input
                type="date"
                className={styles.dateInput}
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>To Date</label>
            <div className={styles.dateInputWrapper}>
              <input
                type="date"
                className={styles.dateInput}
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Invoice Amount</div>
            <div className={styles.statValue}>$245,000</div>
            <div className={styles.statTrend}>+14%</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Amount Received</div>
            <div className={styles.statValue}>$180,000</div>
            <div className={styles.statTrend}>+8%</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Receivable</div>
            <div className={styles.statValue}>$65,000</div>
            <div className={styles.statTrend}>-2%</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Closing Balance</div>
            <div className={styles.statValue}>$42,000</div>
            <div className={styles.statTrend}>+5%</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Over Due</div>
            <div className={styles.statValue}>$23,000</div>
            <div className={styles.statTrend}>-12%</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Excess Amount</div>
            <div className={styles.statValue}>$8,000</div>
            <div className={styles.statTrend}>+3%</div>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Invoice Date</div>
            <div className={styles.tableHeaderCell}>Invoice No</div>
            <div className={styles.tableHeaderCell}>Remarks</div>
            <div className={styles.tableHeaderCell}>Invoice Amount</div>
            <div className={styles.tableHeaderCell}>Amount Adjusted</div>
            <div className={styles.tableHeaderCell}>Closing Balance</div>
            <div className={styles.tableHeaderCell}>Actions</div>
          </div>

          {statementData.map((item, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{item.invoiceDate}</div>
              <div className={styles.tableCell}>{item.invoiceNo}</div>
              <div className={styles.tableCell}>{item.remarks}</div>
              <div className={styles.tableCell}>{item.invoiceAmount}</div>
              <div className={styles.tableCell}>{item.amountAdjusted}</div>
              <div className={styles.tableCell}>{item.closingBalance}</div>
              <div className={styles.tableCellActions}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.actionIcon}
                >
                  <path
                    d="M10.0013 8.33333V13.3333M10.0013 13.3333L7.5013 10.8333M10.0013 13.3333L12.5013 10.8333M14.168 17.5H5.83464C5.39261 17.5 4.96868 17.3244 4.65612 17.0118C4.34356 16.6993 4.16797 16.2754 4.16797 15.8333V4.16667C4.16797 3.72464 4.34356 3.30072 4.65612 2.98816C4.96868 2.67559 5.39261 2.5 5.83464 2.5H10.4896C10.7106 2.50005 10.9226 2.58788 11.0788 2.74417L15.5905 7.25583C15.7468 7.41208 15.8346 7.624 15.8346 7.845V15.8333C15.8346 16.2754 15.659 16.6993 15.3465 17.0118C15.0339 17.3244 14.61 17.5 14.168 17.5Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.actionIcon}
                >
                  <path
                    d="M7.5013 14.1667V12.5M10.0013 14.1667V10.8333M12.5013 14.1667V9.16667M14.168 17.5H5.83464C5.39261 17.5 4.96868 17.3244 4.65612 17.0118C4.34356 16.6993 4.16797 16.2754 4.16797 15.8333V4.16667C4.16797 3.72464 4.34356 3.30072 4.65612 2.98816C4.96868 2.67559 5.39261 2.5 5.83464 2.5H10.4896C10.7106 2.50005 10.9226 2.58788 11.0788 2.74417L15.5905 7.25583C15.7468 7.41208 15.8346 7.624 15.8346 7.845V15.8333C15.8346 16.2754 15.659 16.6993 15.3465 17.0118C15.0339 17.3244 14.61 17.5 14.168 17.5Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statements;
