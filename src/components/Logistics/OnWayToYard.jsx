import React from "react";
import styles from "./OnWayToYard.module.css";

// Sample data for demonstration
const sampleData = [
  {
    orderNumber: "ORD-2023-001",
    chassisNo: "JT731AB9207654321",
    customer: "John Smith",
    status: "In Transit",
    statusClass: "statusInTransit",
    origin: "Tokyo, Japan",
    destination: "Mombasa, Kenya",
    pickupDate: "2023-11-15",
    deliveryDate: "2023-12-20",
    value: "¥ 3,450,000",
  },
  {
    orderNumber: "ORD-2023-002",
    chassisNo: "JT458CD7654321098",
    customer: "Ahmed Khan",
    status: "Delayed",
    statusClass: "statusDelayed",
    origin: "Osaka, Japan",
    destination: "Lahore, Pakistan",
    pickupDate: "2023-11-18",
    deliveryDate: "2023-12-25",
    value: "¥ 2,780,000",
  },
  {
    orderNumber: "ORD-2023-003",
    chassisNo: "JT912EF6543210987",
    customer: "Sara Ali",
    status: "On Schedule",
    statusClass: "statusOnSchedule",
    origin: "Yokohama, Japan",
    destination: "Kampala, Uganda",
    pickupDate: "2023-11-20",
    deliveryDate: "2023-12-28",
    value: "¥ 4,120,000",
  },
  {
    orderNumber: "ORD-2023-004",
    chassisNo: "JT375GH5432109876",
    customer: "Zain Malik",
    status: "In Transit",
    statusClass: "statusInTransit",
    origin: "Dar e salam, Tanzania",
    destination: "Lahore,Pakistan",
    pickupDate: "2023-11-22",
    deliveryDate: "2023-12-30",
    value: "¥ 3,890,000",
  },
  {
    orderNumber: "ORD-2023-005",
    chassisNo: "JT624IJ4321098765",
    customer: "Fatima Hassan",
    status: "On Schedule",
    statusClass: "statusOnSchedule",
    origin: "Kobe, Japan",
    destination: "Nairobi, Kenya",
    pickupDate: "2023-11-25",
    deliveryDate: "2024-01-05",
    value: "¥ 3,250,000",
  },
];

function OnWayToYard({ onBack }) {
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
            <div className={styles.headerTitle}>On Way to Yard</div>
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
              <label className={styles.filterLabel}>Order Search</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Search orders..."
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Chassis Number</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter chassis number"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Status</label>
              <select className={styles.statusDropdown}>
                <option className={styles.options} disabled>
                  Select
                </option>
                <option className={styles.options}>In Transit</option>
                <option className={styles.options}>Delayed</option>
                <option className={styles.options}>On Schedule</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Pickup Location</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter pickup location"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Delivery Location</label>
              <input
                type="text"
                className={styles.filterInput}
                placeholder="Enter delivery location"
              />
            </div>

            <div className={styles.filterItem}>
              <label className={styles.filterLabel}>Pickup Date Range</label>
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
              <label className={styles.filterLabel}>Delivery Date Range</label>
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
            <div className={styles.tableHeaderCell}>Order Number</div>
            <div className={styles.tableHeaderCell}>Chassis No.</div>
            <div className={styles.tableHeaderCellCustomer}>Customer</div>
            <div className={styles.tableHeaderCell}>Status</div>
            <div className={styles.tableHeaderCell}>Origin</div>
            <div className={styles.tableHeaderCell}>Destination</div>
            <div className={styles.tableHeaderCell}>Pickup Date</div>
            <div className={styles.tableHeaderCell}>Delivery Date</div>
            <div className={styles.tableHeaderCell}>Value</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.orderNumber}</div>
              <div className={styles.tableCell}>{row.chassisNo}</div>
              <div className={styles.tableCellCustomer}>{row.customer}</div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${styles[row.statusClass]}`}
                >
                  {row.status}
                </span>
              </div>
              <div className={styles.tableCell}>{row.origin}</div>
              <div className={styles.tableCell}>{row.destination}</div>
              <div className={styles.tableCell}>{row.pickupDate}</div>
              <div className={styles.tableCell}>{row.deliveryDate}</div>
              <div className={styles.tableCell}>{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OnWayToYard;
