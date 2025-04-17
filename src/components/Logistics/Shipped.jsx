import React from "react";
import styles from "./Shipped.module.css";

// Sample data for demonstration
const sampleData = [
  {
    srNo: "ORD-2023-001",
    billNo: "JT731AB9207654321",
    bookingNo: "Book",
    shippingcompany: "Nagoya",
    portFrom: "Tokyo",
    portTo: "mombasa",
    destination: "kenya",
    etd: "2023-11-15",
    eta: "2023-12-20",
    vesselName: "2023-12-20",
    voyageNo: "2023-12-20",
    shippingType: "2023-12-20",
  },
  {
    srNo: "ORD-2023-001",
    billNo: "JT731AB9207654321",
    bookingNo: "Book",
    shippingcompany: "Nagoya",
    portFrom: "Tokyo",
    portTo: "mombasa",
    destination: "kenya",
    etd: "2023-11-15",
    eta: "2023-12-20",
    vesselName: "2023-12-20",
    voyageNo: "2023-12-20",
    shippingType: "2023-12-20",
  },
  {
    srNo: "ORD-2023-001",
    billNo: "JT731AB9207654321",
    bookingNo: "Book",
    shippingcompany: "Nagoya",
    portFrom: "Tokyo",
    portTo: "mombasa",
    destination: "kenya",
    etd: "2023-11-15",
    eta: "2023-12-20",
    vesselName: "2023-12-20",
    voyageNo: "2023-12-20",
    shippingType: "2023-12-20",
  },

];

function Shipped({ onBack }) {
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
              <button className={styles.backButton} onClick={onBack}>
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
            <div className={styles.headerTitle}>Shipped</div>
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
              <label className={styles.filterLabel}>Chassis No</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter Chassis Number"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Shipping Company</label>
              
              <select className={styles.statusDropdown}>
                <option className={styles.options} disabled>
                  Select
                </option>
                <option className={styles.options}>Company 1</option>
                <option className={styles.options}>Company 2</option>
                <option className={styles.options}>Company 3</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>BL Number</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter BL No"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Port From</label>
              <select className={styles.statusDropdown}>
                <option className={styles.options} >
                  Select
                </option>
                <option className={styles.options}>NAGOYA</option>
                <option className={styles.options}>TOKYO</option>
                <option className={styles.options}>JAPAN</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Port To</label>
              <select className={styles.statusDropdown}>
                <option className={styles.options}>
                  All Models
                </option>
                <option className={styles.options}>Mombasa</option>
                <option className={styles.options}>Nairobi</option>
                <option className={styles.options}>Tanzania</option>
                <option className={styles.options}>Uganda</option>
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
              <label className={styles.filterLabel}>ETA</label>
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
              <label className={styles.filterLabel}>Shipping Request Type</label>
              <div className={styles.dateRangeContainer}>
                <input
                  type="text"
                  className={styles.dateInput}
                  placeholder="RORO"
                />
              
              </div>
            </div>
            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Vessel Name</label>
              <div className={styles.dateRangeContainer}>
                <input
                  type="text"
                  className={styles.dateInput}
                  placeholder="Vessel Name"
                />
              </div>
            </div>
            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Vogage No</label>
              <div className={styles.dateRangeContainer}>
                <input
                  type="text"
                  className={styles.dateInput}
                  placeholder="Vogage No"
                />
              
              </div>
            </div>
          </div>
          <h1>Freight Invoices</h1>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Sr No</div>
            <div className={styles.tableHeaderCell}>Bill No.</div>
            <div className={styles.tableHeaderCellCustomer}>Booking No</div>
            <div className={styles.tableHeaderCell}>Shipping Company</div>
            <div className={styles.tableHeaderCell}>Port From</div>
            <div className={styles.tableHeaderCell}>Port To</div>
            <div className={styles.tableHeaderCell}>Destination</div>
            <div className={styles.tableHeaderCell}>ETD</div>
            <div className={styles.tableHeaderCell}>ETA</div>
            <div className={styles.tableHeaderCell}>Vessel Name</div>
            <div className={styles.tableHeaderCell}>Voyage No</div>
            <div className={styles.tableHeaderCell}>Shipping Type</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.srNo}</div>
              <div className={styles.tableCell}>{row.billNo}</div>
              <div className={styles.tableCellCustomer}>{row.bookingNo}</div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${styles[row.statusClass]}`}
                >
                  {row.shippingcompany}
                </span>
              </div>
              <div className={styles.tableCell}>{row.portFrom}</div>
              <div className={styles.tableCell}>{row.portTo}</div>
              <div className={styles.tableCell}>{row.destination}</div>
              <div className={styles.tableCell}>{row.etd}</div>
              <div className={styles.tableCell}>{row.eta}</div>
              <div className={styles.tableCell}>{row.vesselName}</div>
              <div className={styles.tableCell}>{row.voyageNo}</div>
              <div className={styles.tableCell}>{row.shippingType}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shipped;
