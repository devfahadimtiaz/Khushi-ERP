import React from "react";
import styles from "./ViewTruckingOrders.module.css";

function ViewTruckingOrders({
  onBackToDashboard,
  onGetEstimates,
  onCreateOrder,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Trucking</h1>
            <div className={styles.tabsContainer}>
              <button className={styles.tab} onClick={onBackToDashboard}>
                Dashboard
              </button>
              <button className={styles.tab}>All Vehicles</button>
              <button className={styles.tabActive}>Trucking</button>
              <button className={styles.tab}>Freight</button>
              <button className={styles.tab}>All Shipments</button>
              <button className={styles.tab}>Invoices</button>
              <button className={styles.tab}>BL &amp; ED</button>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton} onClick={onGetEstimates}>
              Get Estimates
            </button>
            <button className={styles.actionButton} onClick={onCreateOrder}>
              Create order
            </button>
            <button className={styles.actionButtonActive}>View Orders</button>
          </div>
        </div>
        <div className={styles.ordersCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Trucking Orders</h2>
            <div className={styles.searchContainer}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search orders..."
              />
            </div>
          </div>
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.tableHeaderCell}>+</div>
              <div className={styles.tableHeaderCell}>Order Date</div>
              <div className={styles.tableHeaderCell}>Pickup Location</div>
              <div className={styles.tableHeaderCell}>Delivery Location</div>
              <div className={styles.tableHeaderCell}>POS No</div>
              <div className={styles.tableHeaderCell}>Units</div>
              <div className={styles.tableHeaderCell}>Trucking Price</div>
              <div className={styles.tableHeaderCell}>Remarks</div>
              <div className={styles.tableHeaderCell}>ATK Remarks</div>
              <div className={styles.tableHeaderCell}>Status</div>
              <div className={styles.tableHeaderCell}>Action</div>
            </div>
            <div className={styles.tableBody}>
              {/* Table rows would be dynamically generated here */}
              {/* This is just a placeholder for demonstration */}
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>+</div>
                <div className={styles.tableCell}>2023-06-15</div>
                <div className={styles.tableCell}>Tokyo</div>
                <div className={styles.tableCell}>Osaka</div>
                <div className={styles.tableCell}>POS-12345</div>
                <div className={styles.tableCell}>2</div>
                <div className={styles.tableCell}>¥45,000</div>
                <div className={styles.tableCell}>Urgent delivery</div>
                <div className={styles.tableCell}>Confirmed</div>
                <div className={styles.tableCell}>
                  <span className={styles.statusPending}>Pending</span>
                </div>
                <div className={styles.tableCell}>
                  <button className={styles.viewButton}>View</button>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>+</div>
                <div className={styles.tableCell}>2023-06-14</div>
                <div className={styles.tableCell}>Nagoya</div>
                <div className={styles.tableCell}>Yokohama</div>
                <div className={styles.tableCell}>POS-12346</div>
                <div className={styles.tableCell}>1</div>
                <div className={styles.tableCell}>¥32,000</div>
                <div className={styles.tableCell}>Standard delivery</div>
                <div className={styles.tableCell}>Awaiting confirmation</div>
                <div className={styles.tableCell}>
                  <span className={styles.statusCompleted}>Completed</span>
                </div>
                <div className={styles.tableCell}>
                  <button className={styles.viewButton}>View</button>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>+</div>
                <div className={styles.tableCell}>2023-06-13</div>
                <div className={styles.tableCell}>Sapporo</div>
                <div className={styles.tableCell}>Sendai</div>
                <div className={styles.tableCell}>POS-12347</div>
                <div className={styles.tableCell}>3</div>
                <div className={styles.tableCell}>¥78,000</div>
                <div className={styles.tableCell}>Fragile items</div>
                <div className={styles.tableCell}>
                  Special handling required
                </div>
                <div className={styles.tableCell}>
                  <span className={styles.statusInProgress}>In Progress</span>
                </div>
                <div className={styles.tableCell}>
                  <button className={styles.viewButton}>View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTruckingOrders;
