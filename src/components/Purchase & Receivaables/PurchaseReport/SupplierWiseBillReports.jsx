import React from "react";
import styles from "./SupplierWiseBillReports.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";

const TableHeader = [
  { label: "Bill No", key: "billNo" },
  { label: "Supplier", key: "supplier" },
  { label: "Bill Type", key: "billType" },
  { label: "Bill Date", key: "billDate" },
  { label: "Due Date", key: "dueDate" },
  { label: "Bill Amount", key: "billAmount" },
  { label: "Paid Amount", key: "paidAmount" },
  { label: "Balance", key: "balance" },
  { label: "Status", key: "status" },
];
const TableData = [
  {
    id: 1,
    billNo: "PO-2024-003",
    supplier: "Nagoya Shipping Co",
    billType: "Transmission Kit",
    billDate: "25",
    dueDate: "15",
    billAmount: "$350.00",
    paidAmount: "$8,750.00",
    balance: "2024-01-30",
    status: "Delayed",
  },
  {
    id: 2,
    billNo: "PO-2024-003",
    supplier: "Nagoya Shipping Co",
    billType: "Transmission Kit",
    billDate: "25",
    dueDate: "15",
    billAmount: "$350.00",
    paidAmount: "$8,750.00",
    balance: "2024-01-30",
    status: "Delayed",
  },
  {
    id: 3,
    billNo: "PO-2024-003",
    supplier: "Nagoya Shipping Co",
    billType: "Transmission Kit",
    billDate: "25",
    dueDate: "15",
    billAmount: "$350.00",
    paidAmount: "$8,750.00",
    balance: "2024-01-30",
    status: "Delayed",
  },
];
function SupplierWiseBillReports({ onBack }) {
  return (
    <div>
      <div className={styles.supplierWiseBill}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>Supplier Wise Bill Reports</div>
            <div className={styles.headerRight}>
              <button className={styles.totalBalance}>$28,500.00</button>
            
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.filterSection}>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Select Supplier</div>
                <div className={styles.selectBox}>
                  <div>Select supplier</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0cebb5f819c4134b5cbf5bfb8935bbf8dddbd1ed?placeholderIfAbsent=true"
                    className={styles.dropdownIcon}
                    alt="Dropdown"
                  />
                </div>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Bill Type</div>
                <div className={styles.selectBox}>
                  <div>Select bill type</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0cebb5f819c4134b5cbf5bfb8935bbf8dddbd1ed?placeholderIfAbsent=true"
                    className={styles.dropdownIcon}
                    alt="Dropdown"
                  />
                </div>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Status</div>
                <div className={styles.selectBox}>
                  <div>Select status</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0cebb5f819c4134b5cbf5bfb8935bbf8dddbd1ed?placeholderIfAbsent=true"
                    className={styles.dropdownIcon}
                    alt="Dropdown"
                  />
                </div>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Date Range</div>
                <div className={styles.dateRangeBox} />
              </div>
            </div>
            <div className={styles.statsSection}>
              <div className={styles.statsGrid}>
                <div className={styles.statsColumn}>
                  <div className={styles.statsCard}>
                    <div className={styles.statsLabel}>Total Bill Amount</div>
                    <div className={styles.statsValueBlue}>$42,000.00</div>
                  </div>
                </div>
                <div className={styles.statsColumn}>
                  <div className={styles.statsCard}>
                    <div className={styles.statsLabel}>Total Paid Amount</div>
                    <div className={styles.statsValueGreen}>$13,500.00</div>
                  </div>
                </div>
                <div className={styles.statsColumn}>
                  <div className={styles.statsCard}>
                    <div className={styles.statsLabel}>Total Balance</div>
                    <div className={styles.statsValuePurple}>$28,500.00</div>
                  </div>
                </div>
                <div className={styles.statsColumn}>
                  <div className={styles.statsCard}>
                    <div className={styles.statsLabel}>Total Overdue</div>
                    <div className={styles.statsValueRed}>$12,000.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.primaryButton}>Generate Report</div>
              <div className={styles.secondaryButton}>Export to Excel</div>
              <div className={styles.secondaryButton}>Print Report</div>
            </div>
          </div>
          <TableComponenet data={TableData} HeadData={TableHeader}/>
        </div>
      </div>
    </div>
  );
}

export default SupplierWiseBillReports;
