import React, { useState } from "react";
import styles from "./OverdueInvoices.module.css";
import Receivables from "./Invoices"
import Statements from "./Statements"

const overdueInvoicesData = [
  {
    id: 1,
    invoiceNo: "INV-2024-001",
    invoiceDate: "2024-01-15",
    paymentDueDate: "2024-02-15",
    days: 30,
    totalAmount: "$2500.00",
    paidAmount: "$1500.00",
    balanceAmount: "$1000.00",
  },
  {
    id: 2,
    invoiceNo: "INV-2024-002",
    invoiceDate: "2024-01-20",
    paymentDueDate: "2024-02-20",
    days: 25,
    totalAmount: "$3500.00",
    paidAmount: "$2000.00",
    balanceAmount: "$1500.00",
  },
  {
    id: 3,
    invoiceNo: "INV-2024-003",
    invoiceDate: "2024-01-25",
    paymentDueDate: "2024-02-25",
    days: 20,
    totalAmount: "$4500.00",
    paidAmount: "$2500.00",
    balanceAmount: "$2000.00",
  },
];

function OverdueInvoices({ onBackToDashboard }) {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [activeTab, setActiveTab] = useState("overdue");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching with:", { invoiceNumber, dateFrom, dateTo });
  };

  const handleGeneratePDF = () => {
    // Implement PDF generation
    console.log("Generating PDF");
  };
  if (activeTab === "receivables") {
      return <Receivables onBackToDashboard={onBackToDashboard} />;
    }
  if (activeTab ==="statements"){
    return <Statements onBackToDashboard={onBackToDashboard}/>
  }
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

        <div className={styles.overdueCard}>
          <h2 className={styles.cardTitle}>Payment Overdue Invoices</h2>

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
              <label className={styles.filterLabel}>Date From</label>
              <div className={styles.dateInputWrapper}>
                <input
                  type="date"
                  className={styles.dateInput}
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.calendarIcon}
                >
                  <path
                    d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Date To</label>
              <div className={styles.dateInputWrapper}>
                <input
                  type="date"
                  className={styles.dateInput}
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.calendarIcon}
                >
                  <path
                    d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>

            <button className={styles.actionButton} onClick={handleSearch}>
              Search
            </button>

            <button className={styles.actionButton} onClick={handleGeneratePDF}>
              PDF
            </button>
          </div>

          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.tableHeaderCell}>Sr No</div>
              <div className={styles.tableHeaderCell}>Invoice No</div>
              <div className={styles.tableHeaderCell}>Invoice Date</div>
              <div className={styles.tableHeaderCell}>Payment Due Date</div>
              <div className={styles.tableHeaderCell}>Days</div>
              <div className={styles.tableHeaderCell}>Total Amount</div>
              <div className={styles.tableHeaderCell}>Paid Amount</div>
              <div className={styles.tableHeaderCell}>Balance Amount</div>
            </div>

            {overdueInvoicesData.map((invoice) => (
              <div key={invoice.id} className={styles.tableRow}>
                <div className={styles.tableCell}>{invoice.id}</div>
                <div className={styles.tableCell}>{invoice.invoiceNo}</div>
                <div className={styles.tableCell}>{invoice.invoiceDate}</div>
                <div className={styles.tableCell}>{invoice.paymentDueDate}</div>
                <div className={styles.tableCell}>{invoice.days}</div>
                <div className={styles.tableCell}>{invoice.totalAmount}</div>
                <div className={styles.tableCell}>{invoice.paidAmount}</div>
                <div className={styles.tableCell}>{invoice.balanceAmount}</div>
              </div>
            ))}

            <div className={styles.tableSummary}>
              <div className={styles.summaryText}>Total Overdue Amount:</div>
              <div className={styles.summaryAmount}>$4500.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverdueInvoices;
