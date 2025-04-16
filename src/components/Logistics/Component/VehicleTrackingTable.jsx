import React from "react";
import styles from "./VehicleTrackingTable.module.css";

function VehicleTrackingTable({ vehicles, headers }) {
  // Sample vehicle data - in a real application, this would likely be passed as props

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <div className={styles.container}>
        <div className={styles.title}>Vehicles</div>
        <table className={styles.tableContainer}>
          <thead className={styles.tableHeader}>
            {headers.map((header, indexHeader) => (
              <th key={indexHeader} className={styles.headerCell}>
                {header}
              </th>
            ))}
          </thead>

          {vehicles.map((vehicle, index) => (
            <tr key={index} className={styles.tableRow}>
              <td className={styles.tableCell}>{vehicle.col1}</td>
              <td className={styles.tableCell}>{vehicle.col2}</td>
              <td className={styles.tableCell}>{vehicle.col3}</td>
              <td className={styles.tableCell}>{vehicle.col4}</td>
              <td className={styles.tableCell}>{vehicle.col5}</td>
              <td className={styles.tableCell}>{vehicle.col6}</td>
              <td className={styles.tableCell}>{vehicle.col7}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default VehicleTrackingTable;
