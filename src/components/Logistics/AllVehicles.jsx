import React, { useState } from "react";
import styles from "./AllVehicles.module.css";
import VehicleDetailsPopup from "./VehicleDetailsPopup";
import NavigationTabs from "./Component/NavigationTabs";
const sampleData = [
  {
    companyName: "Ocean Trading",
    auctionNo:"Auction Number",
    customerStockNo:"C24-786",
    colorCode:"#1E40AF",
    color: "Deep Blue",
    shipperDetails:"ABC Shipping Co.",
    chassisNo: "ORD-2023-001",
    unitName: "XYZ",
    model: "Model X",
    status: "In Transit",
    destination: "Tokyo",
    yard: "Nagoya",
    yardIn: "Tokyo",
    action: "View Details",
  },
  {
    companyName: "Ocean Trading",
    auctionNo:"Auction Number",
    customerStockNo:"C24-786",
    colorCode:"#1E40AF",
    color: "Deep Blue",
    shipperDetails:"ABC Shipping Co.",
    chassisNo: "ORD-2023-001",
    unitName: "XYZ",
    model: "Model X",
    status: "In Transit",
    destination: "Tokyo",
    yard: "Nagoya",
    yardIn: "Tokyo",
    action: "View Details",
  },
  {
    companyName: "Ocean Trading",
    auctionNo:"Auction Number",
    customerStockNo:"C24-786",
    colorCode:"#1E40AF",
    color: "Deep Blue",
    shipperDetails:"ABC Shipping Co.",
    chassisNo: "ORD-2023-001",
    unitName: "XYZ",
    model: "Model X",
    status: "In Transit",
    destination: "Tokyo",
    yard: "Nagoya",
    yardIn: "Tokyo",
    action: "View Details",
  },
];

function AllVehicles({ onBackTodashboard, onTrucking, onFreight, onMyShipment, onInvoices, onBLED,navigateTo }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleViewDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.pageTitle}>All Vehicles</div>
        <div className={styles.tabsContainer}>
        <NavigationTabs active="AllVehicles" navigateTo={navigateTo} />
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
            <label className={styles.filterLabel}>Location</label>

            <select className={styles.statusDropdown}>
              <option className={styles.options} disabled>
                Select
              </option>
              <option className={styles.options}>Mombasa</option>
              <option className={styles.options}>Kenya</option>
              <option className={styles.options}>Tanzania</option>
              <option className={styles.options}>Uganda</option>
              <option className={styles.options}>Pakistan</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>Final Location</label>
            <select className={styles.statusDropdown}>
              <option className={styles.options} disabled>
                Select
              </option>
              <option className={styles.options}>NAGOYA</option>
              <option className={styles.options}>TOKYO</option>
              <option className={styles.options}>JAPAN</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>Status</label>
            <select className={styles.statusDropdown}>
              <option className={styles.options} disabled>
                Select Status
              </option>
              <option className={styles.options}>In Transit</option>
              <option className={styles.options}>Delivered</option>
              <option className={styles.options}>Processing</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>Model</label>
            <select className={styles.statusDropdown}>
              <option className={styles.options} disabled>
                Select Model
              </option>
              <option className={styles.options}>Model X</option>
              <option className={styles.options}>Model Y</option>
              <option className={styles.options}>Model Z</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>Vessel Name</label>
            <div className={styles.dateRangeContainer}>
              <input
                type="date"
                className={styles.dateInput}
                placeholder="Vessel Name"
              />
              <input
                type="date"
                className={styles.dateInput}
                placeholder="Vessel Name"
              />
            </div>
          </div>
        </div>

        <div className={styles.resultsCard}>
          <div className={styles.exportActions}>
            <div className={styles.exportButton}>
              <img alt="export"
                src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/1bcc0db5d6908515fd24466a3177d6117d5947e1?placeholderIfAbsent=true"
                className={styles.exportIcon}
              />
              <div>Save as PDF</div>
            </div>
            <div className={styles.exportButton}>
              <img alt="export"
                src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/1bcc0db5d6908515fd24466a3177d6117d5947e1?placeholderIfAbsent=true"
                className={styles.exportIcon}
              />
              <div>Save as Excel</div>
            </div>
          </div>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>CHASSIS No.</div>
            <div className={styles.tableHeaderCell}>UNIT NAME</div>
            <div className={styles.tableHeaderCellCustomer}>MODEL</div>
            <div className={styles.tableHeaderCell}>STATUS</div>
            <div className={styles.tableHeaderCell}>DESTINATION</div>
            <div className={styles.tableHeaderCell}>YARD</div>
            <div className={styles.tableHeaderCell}>YARD IN</div>
            <div className={styles.tableHeaderCell}>Action</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.chassisNo}</div>
              <div className={styles.tableCell}>{row.unitName}</div>
              <div className={styles.tableCellCustomer}>{row.model}</div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${styles[row.statusClass]}`}
                >
                  {row.status}
                </span>
              </div>
              <div className={styles.tableCell}>{row.destination}</div>
              <div className={styles.tableCell}>{row.yard}</div>
              <div className={styles.tableCell}>{row.yardIn}</div>
              <button
                className={styles.tableButton}
                onClick={() => handleViewDetails(row)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <VehicleDetailsPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        vehicleData={selectedVehicle}
      />
    </div>
  );
}

export default AllVehicles;
