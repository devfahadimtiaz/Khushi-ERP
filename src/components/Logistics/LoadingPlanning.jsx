import React from "react";
import styles from "./LoadingPlanning.module.css";

// Sample data for demonstration
const sampleData = [
  {
    srNo: "ORD-2023-001",
    chassis: "JT731AB9207654321",
    yardNo: "John Smith",
    shippingReq: "In Transit",
    destination: "statusInTransit",
    model: "Tokyo, Japan",
    etd: "Mombasa, Kenya",
    yardin: "2023-11-15",
    vanningDate: "2023-12-20",
  },
  {
    srNo: "ORD-2023-001",
    chassis: "JT731AB9207654321",
    yardNo: "John Smith",
    shippingReq: "In Transit",
    destination: "statusInTransit",
    model: "Tokyo, Japan",
    etd: "Mombasa, Kenya",
    yardin: "2023-11-15",
    vanningDate: "2023-12-20",
  },
  {
    srNo: "ORD-2023-001",
    chassis: "JT731AB9207654321",
    yardNo: "John Smith",
    shippingReq: "In Transit",
    destination: "statusInTransit",
    model: "Tokyo, Japan",
    etd: "Mombasa, Kenya",
    yardin: "2023-11-15",
    vanningDate: "2023-12-20",
  },

];

function LoadingPlanning({ onBack, onBackTodashboard }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.headerchild}>
              <button className={styles.backButton} onClick={onBackTodashboard}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="#092C4C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            <div className={styles.headerTitle}>Loading Planing</div>
            </div>
            <div className={styles.headerActions}>
              <button className={styles.exportPdfButton}>Export as PDF</button>
              <button className={styles.exportExcelButton}>
                Export as Excel
              </button>
            </div>
          </div>

          <div className={styles.filterSection}>
            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Chassis Number</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter Chassis No"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Shipping Request No</label>
              
              <select className={styles.statusDropdown}>
                <option className={styles.options} disabled>
                  Select
                </option>
                <option className={styles.options}>Y001</option>
                <option className={styles.options}>Y002</option>
                <option className={styles.options}>Y003</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Yard No</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter shipping Request"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Destination</label>
              <select className={styles.statusDropdown}>
                <option className={styles.options} >
                  ALL Destination
                </option>
                <option className={styles.options}>Mombasa</option>
                <option className={styles.options}>Tanzania</option>
                <option className={styles.options}>Uganda</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Model</label>
              <select className={styles.statusDropdown}>
                <option className={styles.options}>
                  All Models
                </option>
                <option className={styles.options}>Model X</option>
                <option className={styles.options}>Model Y</option>
                <option className={styles.options}>Model Z</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>ETD</label>
              <div className={styles.dateRangeContainer}>
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="From"
                />
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="to"
                />
              </div>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Yard In Range</label>
              <div className={styles.dateRangeContainer}>
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="From"
                />
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="to"
                />
              </div>
            </div>
            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Vanning Date</label>
              <div className={styles.dateRangeContainer}>
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="From"
                />
                <input
                  type="date"
                  className={styles.dateInput}
                  placeholder="to"
                />
              </div>
            </div>
          </div>

          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Sr No</div>
            <div className={styles.tableHeaderCell}>Chassis No.</div>
            <div className={styles.tableHeaderCellCustomer}>Yard No</div>
            <div className={styles.tableHeaderCell}>Shipping Req</div>
            <div className={styles.tableHeaderCell}>Destination</div>
            <div className={styles.tableHeaderCell}>Model</div>
            <div className={styles.tableHeaderCell}>ETD</div>
            <div className={styles.tableHeaderCell}>Yard In</div>
            <div className={styles.tableHeaderCell}>Vanning Date</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.srNo}</div>
              <div className={styles.tableCell}>{row.chassis}</div>
              <div className={styles.tableCellCustomer}>{row.yardNo}</div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${styles[row.statusClass]}`}
                >
                  {row.shippingReq}
                </span>
              </div>
              <div className={styles.tableCell}>{row.destination}</div>
              <div className={styles.tableCell}>{row.model}</div>
              <div className={styles.tableCell}>{row.etd}</div>
              <div className={styles.tableCell}>{row.yardin}</div>
              <div className={styles.tableCell}>{row.vanningDate}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LoadingPlanning;
