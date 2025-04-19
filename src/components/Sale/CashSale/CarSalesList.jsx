import React from "react";
import styles from "./CarSalesList.module.css";
const sampleData = [
  {
    srNo: "ORD-2023-001",
    stockNo: "C24-675",
    make: "Toyota",
    model: "Land Cruiser",
    variant: "Top",
    yom: "2025",
    purchasedPrice: "200000",
    sellPrice: "300000",
    profitLoss: "100000",
  },
  {
    srNo: "ORD-2023-001",
    stockNo: "C24-675",
    make: "Toyota",
    model: "Land Cruiser",
    variant: "Top",
    yom: "2025",
    purchasedPrice: "200000",
    sellPrice: "300000",
    profitLoss: "100000",
  },  {
    srNo: "ORD-2023-001",
    stockNo: "C24-675",
    make: "Toyota",
    model: "Land Cruiser",
    variant: "Top",
    yom: "2025",
    purchasedPrice: "200000",
    sellPrice: "300000",
    profitLoss: "100000",
  },

];
const CarSalesList = () => {
  return (
    <>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          />
          <div className={styles.container}>
            <div className={styles.title}>All Cash Sales</div>
            <div className={styles.searchSection}>
              <div className={styles.inputGroup}>
                <span className={styles.inputLabel}>Chassis No.</span>
                <input type="text" placeholder="Enter chassis number" className={styles.inputField}/>
              </div>
              <div className={styles.inputGroup}>
                <span className={styles.inputLabel}>Car Name/Stock no</span>
                <input type="text" placeholder="Make/Stock" className={styles.inputField}/>
              </div>
              <div className={styles.inputGroup}>
                <span className={styles.inputLabel}>Status</span>
                <select className={styles.statusDropdown}>
                  <option className={styles.dropdownText}>All Status</option>
                  <option className={styles.dropdownText}>Pending</option>  
                  <option className={styles.dropdownText}>Complete</option>
                  <option className={styles.dropdownText}>Processing</option>
                  
                </select>
              </div>
              <div className={styles.searchButton}>Search</div>
            </div>
           <div className={styles.tableContainer}>
                       <div className={styles.tableHeader}>
                         <div className={styles.tableHeaderCell}>Sr No</div>
                         <div className={styles.tableHeaderCell}>Stock No.</div>
                         <div className={styles.tableHeaderCellCustomer}>Make</div>
                         <div className={styles.tableHeaderCell}>Model</div>
                         <div className={styles.tableHeaderCell}>Variant</div>
                         <div className={styles.tableHeaderCell}>YOM</div>
                         <div className={styles.tableHeaderCell}>Purchased Price</div>
                         <div className={styles.tableHeaderCell}>Sell Price</div>
                         <div className={styles.tableHeaderCell}>Profit/Loss</div>
                       </div>
           
                       {/* Sample table rows with mock data */}
                       {sampleData.map((row, index) => (
                         <div key={index} className={styles.tableRow}>
                           <div className={styles.tableCell}>{row.srNo}</div>
                           <div className={styles.tableCell}>{row.stockNo}</div>
                           <div className={styles.tableCellCustomer}>{row.make}</div>
                           <div className={styles.tableCell}>{row.model}</div>
                           <div className={styles.tableCell}>{row.variant}</div>
                           <div className={styles.tableCell}>{row.yom}</div>
                           <div className={styles.tableCell}>{row.purchasedPrice}</div>
                           <div className={styles.tableCell}>{row.sellPrice}</div>
                           <div className={styles.tableCellProfit}>{row.profitLoss}</div>
           
                         </div>
                       ))}
                       </div>
          </div>
        </>
  );
};

export default CarSalesList;
