// NavigationTabs.js
import React from "react";
import styles from "../ShippingDashboard.module.css";

function NavigationTabs({ active, navigateTo }) {
  return (
    <div className={styles.tabsContainer}>
      <button className={active === "Dashboard" ? styles.tabActive : styles.tab} onClick={() => navigateTo("Dashboard")}>
        Dashboard
      </button>
      <button className={active === "AllVehicles" ? styles.tabActive : styles.tab} onClick={() => navigateTo("AllVehicles")}>
        All Vehicles
      </button>
      <button className={active === "TruckingPrice" ? styles.tabActive : styles.tab} onClick={() => navigateTo("TruckingPrice")}>
        Trucking
      </button>
      <button className={active === "FreightEstimate" ? styles.tabActive : styles.tab} onClick={() => navigateTo("FreightEstimate")}>
        Freight
      </button>
      <button className={active === "MyShipments" ? styles.tabActive : styles.tab} onClick={() => navigateTo("MyShipments")}>
        All Shipments
      </button>
      <button className={active === "Invoices" ? styles.tabActive : styles.tab} onClick={() => navigateTo("Invoices")}>
        Invoices
      </button>
      <button className={active === "BillOfLading" ? styles.tabActive : styles.tab} onClick={() => navigateTo("BillOfLading")}>
        BL & ED
      </button>
    </div>
  );
}

export default NavigationTabs;
