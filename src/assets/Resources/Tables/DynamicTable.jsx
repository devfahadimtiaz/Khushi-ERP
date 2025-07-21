import React from "react";
import styles from "./DynamicTable.module.css"; // Import your custom CSS module

const DynamicTable = ({ headers = [], data = [], maxRows }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        {headers.map((header, index) => (
          <div key={index} className={styles.tableHeaderCell}>
            {header}
          </div>
        ))}
      </div>

      {data.slice(0, maxRows).map((row, rowIndex) => (
        <div key={rowIndex} className={styles.tableRow}>
          {headers.map((header, colIndex) => (
            <div
              key={colIndex}
              className={
                header.toLowerCase().includes("make")
                  ? styles.tableCellCustomer
                  : header.toLowerCase().includes("profit")
                  ? styles.tableCellProfit
                  : styles.tableCell
              }
            >
              {row[header.toLowerCase().replace(/ /g, "")] ?? "-"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DynamicTable;
