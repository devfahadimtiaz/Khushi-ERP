import React from "react";
import styles from "./VehicleInventoryTable.module.css";

const VehicleInventoryTable = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>Vehicle</div>
        <div className={styles.headerCell}>VIN</div>
        <div className={styles.headerCell}>Model</div>
        <div className={styles.headerCell}>Current Showroom</div>
        <div className={styles.headerCell}>Status</div>
        <div className={styles.headerCell}>Actions</div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.tableCell}>Toyota Camry</div>
        <div className={styles.tableCell}>ABC123XYZ</div>
        <div className={styles.tableCell}>2023</div>
        <div className={styles.tableCell}>Main Branch</div>
        <div className={styles.tableCell}>Available</div>
        <div className={styles.actionCell}>Transfer</div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.tableCell}>Honda Civic</div>
        <div className={styles.tableCell}>DEF456UVW</div>
        <div className={styles.tableCell}>2023</div>
        <div className={styles.tableCell}>Main Branch</div>
        <div className={styles.tableCell}>Available</div>
        <div className={styles.actionCell}>Transfer</div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.tableCell}>BMW X5</div>
        <div className={styles.tableCell}>GHI789RST</div>
        <div className={styles.tableCell}>2023</div>
        <div className={styles.tableCell}>Main Branch</div>
        <div className={styles.tableCell}>Available</div>
        <div className={styles.actionCell}>Transfer</div>
      </div>
    </div>
  );
};

export default VehicleInventoryTable;
