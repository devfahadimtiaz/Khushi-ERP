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
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Car Sales List</div>
              <div className={styles.searchBox}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/35e7907c3f1b8461ec1d8d277f576e35f9e96b6e?placeholderIfAbsent=true"
                  className={styles.searchIcon}
                />
                <input type="text" className={styles.searchText} placeholder="Search Stock"/>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default CarSalesList;
