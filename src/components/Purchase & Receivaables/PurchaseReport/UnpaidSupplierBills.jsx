import React from "react";
import styles from "./UnpaidSupplierBills.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";

const TableHeader = [
  { label: "Invoice No", key: "billNo" },
  { label: "Supplier", key: "supplier" },
  { label: "Bill Date", key: "billDate" },
  { label: "Due Date", key: "dueDate" },
  { label: "Bill Amount", key: "billAmount" },
  { label: "Paid Amount", key: "paidAmount" },
  { label: "Balance", key: "balance" },
  { label: "Overdue Days", key: "overDueDays" },
  { label: "Status", key: "status" },
];
const TableData = [
  {
    id: 1,
    billNo: "INV-2024-001",
    supplier: "Tokyo Motors Inc",
    billDate: "2024-01-05",
    dueDate: "2024-02-05",
    billAmount: "$15,000.00",
    paidAmount: "$5,000.00",
    balance: "$10,000.00",
    overDueDays: "5 days",
    status: "Partially Paid",
  },
  {
    id: 1,
    billNo: "INV-2024-001",
    supplier: "Tokyo Motors Inc",
    billDate: "2024-01-05",
    dueDate: "2024-02-05",
    billAmount: "$15,000.00",
    paidAmount: "$5,000.00",
    balance: "$10,000.00",
    overDueDays: "5 days",
    status: "Partially Paid",
  },
  {
    id: 1,
    billNo: "INV-2024-001",
    supplier: "Tokyo Motors Inc",
    billDate: "2024-01-05",
    dueDate: "2024-02-05",
    billAmount: "$15,000.00",
    paidAmount: "$5,000.00",
    balance: "$10,000.00",
    overDueDays: "5 days",
    status: "Partially Paid",
  },
];
function UnpaidSupplierBills({ onBack }) {
  return (
    <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>Unpaid Supplier Bills</div>
            
              <button className={styles.totalAmount}>$37,000.00</button>

           
          </div>
          <div className={styles.contentBox}>
            <div className={styles.filterSection}>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Search Invoice</div>
                <div className={styles.searchInput}>
                  <input type="text" placeholder="Search by invoice number" className={styles.searchPlaceholder}/>

                  <img src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/27e61d6043150f47f7285a20cec94c158f305530?placeholderIfAbsent=true" className={styles.searchIcon} alt="Search" />
                </div>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Select Supplier</div>
                <select className={styles.selectInput}>
                  <option className={styles.selectPlaceholder}>
                    Select supplier
                  </option>
                  <option className={styles.selectPlaceholder}>
                    Supplier A
                  </option><option className={styles.selectPlaceholder}>
                    Supplier B
                  </option>
                </select>
              </div>
              <div className={styles.filterItem}>
                <div className={styles.filterLabel}>Date Range</div>
                <input type="date" className={styles.dateInput} />
              </div>
            </div>
            <div className={styles.statsSection}>
              <div className={styles.statsColumn}>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Total Unpaid Amount</div>
                  <div className={styles.statValuePrimary}>$37,000.00</div>
                </div>
              </div>
              <div className={styles.statsColumn}>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Total Overdue Amount</div>
                  <div className={styles.statValueDanger}>$20,500.00</div>
                </div>
              </div>
              <div className={styles.statsColumn}>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Bills Overdue</div>
                  <div className={styles.statValueWarning}>2 Bills</div>
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.primaryButton}>Process Payment</div>
              <div className={styles.secondaryButton}>Export Report</div>
              <div className={styles.secondaryButton}>Print List</div>
            </div>
          </div>
       
        <TableComponenet data={TableData} HeadData={TableHeader}/>
      
    </div>
  );
}

export default UnpaidSupplierBills;
