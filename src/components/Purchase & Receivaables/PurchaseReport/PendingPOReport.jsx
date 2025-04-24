import React,{useState} from "react";
import styles from "./PendingPOReport.module.css";
import TableSupplierStatus from "../../../Resources/Tables/TableSupplierStatus";



const TableHeader = [
  { label: "PO Number", key: "po" },
  { label: "Supplier", key: "supplier" },
  { label: "Item", key: "item" },
  { label: "Ordered Qty", key: "orderQty" },
  { label: "Pending Qty", key: "pendingQty" },
  { label: "Rate", key: "rate" },
  { label: "Amount", key: "amount" },
  { label: "Expected Date", key: "expDate" },
  { label: "Status", key: "status" },
];
const TableData = [
  {
    id: 1,
    po: "PO-2024-003",
    supplier: "Nagoya Shipping Co",
    item: "Transmission Kit",
    orderQty: "25",
    pendingQty: "15",
    rate: "$350.00",
    amount: "$8,750.00",
    expDate: "2024-01-30",
    status: "Delayed",
  },
  {
    id: 2,
    po: "PO-2024-002",
    supplier: "Osaka Auto Parts",
    item: "Brake System",
    orderQty: "30",
    pendingQty: "30",
    rate: "$200.00",
    amount: "$6,000.00",
    expDate: "2024-02-10",
    status: "Pending",
  },
  {
    id: 3,
    po: "PO-2024-001",
    supplier: "Tokyo Motors Inc",
    item: "Engine Parts",
    orderQty: "50",
    pendingQty: "20",
    rate: "$120.00",
    amount: "$4,000.00",
    expDate: "2024-02-15",
    status: "Partially Received",
  },
];
function PendingPOReport({ onBack }) {
const [selectedSupplier, setSelectedSupplier] = useState("");
const [selectedStatus, setSelectedStatus] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Pending PO Item and Supplier Wise</div>
        <div className={styles.totalAmount}>$20,750.00</div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterItem}>
          <div className={styles.filterLabel}>Select Supplier</div>
          
          <select className={styles.dropdown} value={selectedSupplier} onChange={(e) => setSelectedSupplier(e.target.value)}>
          <option value="">All Suppliers</option>
          {[...new Set(TableData.map((row) => row.supplier))].map((supplier, idx) => (
      <option key={idx} value={supplier}>
        {supplier}
      </option>
    ))}
            
          </select>
        </div>

        <div className={styles.filterItem}>
          <div className={styles.filterLabel}>Status</div>
          <select className={styles.dropdown} value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">All Status</option>
    {[...new Set(TableData.map((row) => row.status))].map((status, idx) => (
      <option key={idx} value={status}>
        {status}
      </option>
    ))}
            
          </select>
          
        </div>
      </div>

      <div className={styles.actionRow}>
        <div className={styles.generateButton}>Generate Report</div>
        <div className={styles.exportText}>Export to Excel</div>
      </div>
      
      <TableSupplierStatus HeadData={TableHeader} data={TableData} selectRowOne={selectedSupplier} SelectRowTwo={selectedStatus}/>

      <div className={styles.footer}>
        <div className={styles.totalValue}>Total Pending Value: $20,750.00</div>
        <div className={styles.legendContainer}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendDot} ${styles.dotPartial}`}></div>
            <span>Partially Received</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendDot} ${styles.dotPending}`}></div>
            <span>Pending</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendDot} ${styles.dotDelayed}`}></div>
            <span>Delayed</span>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
    </div>
  );
}

export default PendingPOReport;
