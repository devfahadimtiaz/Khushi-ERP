import React from "react";
import styles from "./BillOfLadingExportDeclaration.module.css";
import alertIcon from "../../uploads/icons/alert-icon.svg";
import NavigationTabs from "./Component/NavigationTabs"

const sampleData = [
  {
    sr: "Ocean Trading",
    BL: "Auction Number",
    export: "C24-786",
    invoice: "#1E40AF",
    booking: "Deep Blue",
    vessel: "ABC Shipping Co.",
    etd: "ORD-2023-001",
    eta: "XYZ",
    
  },
  {
    sr: "Ocean Trading",
    BL: "Auction Number",
    export: "C24-786",
    invoice: "#1E40AF",
    booking: "Deep Blue",
    vessel: "ABC Shipping Co.",
    etd: "ORD-2023-001",
    eta: "XYZ",
    
  },
  {
    sr: "Ocean Trading",
    BL: "Auction Number",
    export: "C24-786",
    invoice: "#1E40AF",
    booking: "Deep Blue",
    vessel: "ABC Shipping Co.",
    etd: "ORD-2023-001",
    eta: "XYZ",
    
  },
];

function BillOfLadingExportDeclaration({ onBackTodashboard, navigateTo }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>My Shipments</h1>
          <div className={styles.tabsContainer}>
          <NavigationTabs active="BillOfLading" navigateTo={navigateTo} />
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>ETD From</label>
            <input type="date" className={styles.filterInput} />
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>ETD To</label>
            <input type="date" className={styles.filterInput} />
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>ETA From</label>
            <input type="date" className={styles.filterInput} />
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>ETA To</label>
            <input type="date" className={styles.filterInput} />
          </div>

          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>Invoice No</label>
            <input type="text" className={styles.filterInput} />
          </div>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel}>Booking No</label>
            <input type="text" className={styles.filterInput} />
          </div>
        </div>

        <div className={styles.resultsSection}>
          <div className={styles.resultsHeader}>
            <div className={styles.resultsTitle}>Results</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/bf0f0891552e9d5ce58805c7e5f75649bf577623?placeholderIfAbsent=true"
              alt="Export"
              className={styles.exportIcon}
            />
          </div>
<div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Sr</div>
            <div className={styles.tableHeaderCell}>BL</div>
            <div className={styles.tableHeaderCellCustomer}>Export Declaration</div>
            <div className={styles.tableHeaderCell}>Invoice No</div>
            <div className={styles.tableHeaderCell}>Booking No</div>
            <div className={styles.tableHeaderCell}>Vessel Name</div>
            <div className={styles.tableHeaderCell}>ETD</div>
            <div className={styles.tableHeaderCell}>ETA</div>
          </div>

          {/* Sample table rows with mock data */}
          {sampleData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>{row.sr}</div>
              <div className={styles.tableCell}>{row.bill}</div>
              <div className={styles.tableCellCustomer}>{row.export}</div>
              <div className={styles.tableCell}>{row.invoice}</div>
              <div className={styles.tableCell}>{row.booking}</div>
              <div className={styles.tableCell}>{row.vessel}</div>
              <div className={styles.tableCell}>{row.etd}</div>
              <div className={styles.tableCell}>{row.eta}</div>
            </div>
          ))}
           
          
        </div>
      </div>
    </div>
  );
}

export default BillOfLadingExportDeclaration;
