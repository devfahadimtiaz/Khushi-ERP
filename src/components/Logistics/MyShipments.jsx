import React from "react";
import styles from "./MyShipments.module.css";
import NavigationTabs from "./Component/NavigationTabs"
const sampleData = [
  {
    details: "Toyota Camry 2023",
    portFrom: "Yokohama",
    portTo: "Dubai",
    destination: "USA",
    units: "2",
    etd: "2024-02-15",
    eta: "2024-03-01",
    bookingNo: "BK123456",
    vesselNo: "VS789",
    status: "In Transit",
  },
  {
    details: "Toyota Camry 2023",
    portFrom: "Yokohama",
    portTo: "Dubai",
    destination: "USA",
    units: "2",
    etd: "2024-02-15",
    eta: "2024-03-01",
    bookingNo: "BK123456",
    vesselNo: "VS789",
    status: "In Transit",
  },
  {
    details: "Toyota Camry 2023",
    portFrom: "Yokohama",
    portTo: "Dubai",
    destination: "USA",
    units: "2",
    etd: "2024-02-15",
    eta: "2024-03-01",
    bookingNo: "BK123456",
    vesselNo: "VS789",
    status: "In Transit",
  },


];
function MyShipments({ onBackTodashboard, navigateTo }) {
  // Sample shipment data

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.pageTitle}>My Shipments</h1>
            <div className={styles.tabsContainer}>
            <NavigationTabs active="MyShipments" navigateTo={navigateTo} />
            </div>
          </div>
        </div>

        <div className={styles.searchCard}>
          <div className={styles.searchInputsRow}>
            <input
              type="text"
              className={styles.searchInputField}
              placeholder="Chassis No."
            />

            <input
              type="text"
              className={styles.searchInputField}
              placeholder="Booking No."
            />
          </div>
          <div className={styles.searchFiltersRow}>
            <select className={styles.filterDropdown}>
              <option className={styles.filterLabel}>Port From</option>
              <option className={styles.filterLabel}>Port 1</option>
              <option className={styles.filterLabel}>Port 2</option>
              <option className={styles.filterLabel}>Port 3</option>
            </select>

            <select className={styles.filterDropdown}>
              <option className={styles.filterLabel}>Port From</option>
              <option className={styles.filterLabel}>Port 1</option>
              <option className={styles.filterLabel}>Port 2</option>
              <option className={styles.filterLabel}>Port 3</option>
            </select>

            <select className={styles.filterDropdown}>
              <option className={styles.filterLabel}>Final Destination</option>
              <option className={styles.filterLabel}>Port 1</option>
              <option className={styles.filterLabel}>Port 2</option>
              <option className={styles.filterLabel}>Port 3</option>
            </select>
          </div>
          <button className={styles.searchButton}>Search Shipments</button>
        </div>

        <div className={styles.shipmentsTable}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Details</div>
            <div className={styles.tableHeaderCell}>Port From</div>
            <div className={styles.tableHeaderCellCustomer}>Port To</div>
            <div className={styles.tableHeaderCell}>Destination</div>
            <div className={styles.tableHeaderCell}>Units</div>
            <div className={styles.tableHeaderCell}>ETD</div>
            <div className={styles.tableHeaderCell}>ETA</div>
            <div className={styles.tableHeaderCell}>Booking No</div>
            <div className={styles.tableHeaderCell}>Vessel No</div>
            <div className={styles.tableHeaderCell}>Status</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.details}</div>
              <div className={styles.tableCell}>{row.portFrom}</div>
              <div className={styles.tableCellCustomer}>{row.portTo}</div>
              <div className={styles.tableCell}>{row.destination}</div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${styles[row.statusClass]}`}
                >
                  {row.units}
                </span>
              </div>
              <div className={styles.tableCell}>{row.etd}</div>
              <div className={styles.tableCell}>{row.eta}</div>
              <div className={styles.tableCell}>{row.bookingNo}</div>
              <div className={styles.tableCell}>{row.vesselNo}</div>
              <div className={styles.tableCell}>{row.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyShipments;
