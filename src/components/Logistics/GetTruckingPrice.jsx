import React, { useState } from "react";
import styles from "./GetTruckingPrice.module.css";
import AllVehicles from "./AllVehicles";
import CreateTruckingOrder from "./CreateTruckingOrder";
import ViewTruckingOrders from "./ViewTruckingOrders";

const sampleData = [
  {
    srNo: "ABC-12345",
    RequestDate: "14-04-2025",
    deliveryLocation: "Mombasa",
    vehicleType: "Sedan",
    vehicleCondition: "Excellent",
    estPrice: "540000",
    remarks: "ABC",
    valid: "yes",
    actions: "link",
  },
  {
    srNo: "ABC-12345",
    RequestDate: "14-04-2025",
    deliveryLocation: "Mombasa",
    vehicleType: "Sedan",
    vehicleCondition: "Excellent",
    estPrice: "540000",
    remarks: "ABC",
    valid: "yes",
    actions: "link",
  },
  {
    srNo: "ABC-12345",
    RequestDate: "14-04-2025",
    deliveryLocation: "Mombasa",
    vehicleType: "Sedan",
    vehicleCondition: "Excellent",
    estPrice: "540000",
    remarks: "ABC",
    valid: "yes",
    actions: "link",
  },
];
function GetTruckingPrice({ onBackTodashboard, onAllVehicles }) {
  const [activeView, setActiveView] = useState("estimates");
  if (activeView === "createOrder") {
    return (
      <CreateTruckingOrder
        onBackToDashboard={onBackTodashboard}
        onGetEstimates={() => setActiveView("estimates")}
        onViewOrders={() => setActiveView("viewOrders")}
      />
    );
  }

  if (activeView === "viewOrders") {
    return (
      <ViewTruckingOrders
        onBackToDashboard={onBackTodashboard}
        onGetEstimates={() => setActiveView("estimates")}
        onCreateOrder={() => setActiveView("createOrder")}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleColumn}>
              <h1 className={styles.title}>Trucking</h1>
              <div className={styles.tabsContainer}>
                <button className={styles.tab} onClick={onBackTodashboard}>
                  Dashboard
                </button>
                <button className={styles.tab} onClick={onAllVehicles}>
                  All Vehicles
                </button>
                <button className={styles.tabActive}>Trucking</button>
                <button className={styles.tab}>Freight</button>
                <button className={styles.tab}>All Shipments</button>
                <button className={styles.tab}>Invoices</button>
                <button className={styles.tab}>BL & ED</button>
              </div>
            </div>
            <div className={styles.downloadButton}>Download All</div>
          </div>
          <div className={styles.actionButtons}>
            <button
              className={
                activeView === "estimates"
                  ? styles.actionButtonActive
                  : styles.actionButton
              }
              onClick={() => setActiveView("estimates")}
            >
              Get Estimates
            </button>
            <button
              className={
                activeView === "createOrder"
                  ? styles.actionButtonActive
                  : styles.actionButton
              }
              onClick={() => setActiveView("createOrder")}
            >
              Create order
            </button>
            <button
              className={
                activeView === "viewOrders"
                  ? styles.actionButtonActive
                  : styles.actionButton
              }
              onClick={() => setActiveView("viewOrders")}
            >
              View Orders
            </button>
          </div>
          <div className={styles.estimateCard}>
            <h2 className={styles.cardTitle}>Get Trucking Price Estimate</h2>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Pickup Location</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Enter pickup location"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Delivery Location</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Enter delivery location"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Vehicle Type</label>
              <select className={styles.selectInput}>
                <option>Select vehicle type</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Sports</option>
                <option>Luxury</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Vehicle Condition</label>
              <select className={styles.selectInput}>
                <option>Select vehicle Condition</option>
                <option>Exellent</option>
                <option>Good</option>
                <option>Satisfactory</option>
                <option>Poor</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Remarks</label>
              <textarea className={styles.textareaInput}></textarea>
            </div>
            <button className={styles.submitButton}>Get Price Estimate</button>
          </div>
          <div className={styles.recentEstimatesCard}>
            <h2 className={styles.recentEstimatesTitle}>Recent Estimates</h2>
            <div className={styles.estimateItem}>
              <div className={styles.estimateDetails}>
                <div className={styles.routeText}>Tokyo → Osaka</div>
                <div className={styles.vehicleDetails}>
                  Truck • New condition
                </div>
              </div>
              <div className={styles.priceText}>¥45,000</div>
            </div>
            <div className={styles.estimateItem}>
              <div className={styles.estimateDetails}>
                <div className={styles.routeText}>Nagoya → Yokohama</div>
                <div className={styles.vehicleDetails}>
                  Van • Used condition
                </div>
              </div>
              <div className={styles.priceText}>¥32,000</div>
            </div>
            <div className={styles.estimateItem}>
              <div className={styles.estimateDetails}>
                <div className={styles.routeText}>Sapporo → Sendai</div>
                <div className={styles.vehicleDetails}>
                  Trailer • New condition
                </div>
              </div>
              <div className={styles.priceText}>¥78,000</div>
            </div>
          </div>
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>SR</div>
              <div className={styles.headerCell}>Request Date</div>
              <div className={styles.headerCell}>Delivery Location</div>
              <div className={styles.headerCell}>Vehicle type</div>
              <div className={styles.headerCell}>Vehicle Condition</div>
              <div className={styles.headerCell}>Est Price</div>
              <div className={styles.headerCell}>Remarks</div>
              <div className={styles.headerCell}>Valid</div>
              <div className={styles.headerCell}>ACTIONS</div>
            </div>

            <div className={styles.tableContent}>
              {/* Sample table rows with mock data */}
              {sampleData.map((row, index) => (
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>{row.srNo}</div>
                  <div className={styles.tableCell}>{row.RequestDate}</div>
                  <div className={styles.tableCell}>{row.deliveryLocation}</div>
                  <div className={styles.tableCell}>{row.vehicleType}</div>
                  <div className={styles.tableCell}>{row.vehicleCondition}</div>
                  <div className={styles.tableCell}>¥{row.estPrice}</div>
                  <div className={styles.tableCell}>{row.remarks}</div>
                  <div className={styles.tableCell}>{row.valid}</div>
                  <div className={styles.tableCell}>
                    <button className={styles.actionButton}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTruckingPrice;
