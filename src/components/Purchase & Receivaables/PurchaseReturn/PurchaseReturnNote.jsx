import React from "react";
import styles from "./PurchaseReturnRequest.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";

const TableHeader = [
  { label: "SR #", key: "no" },
  { label: "PRN No", key: "prn" },
  { label: "PRN Date", key: "date" },
  { label: "PSDNs #", key: "psdn" },
  { label: "Vendor Name", key: "vendor" },
  { label: "Payment Type", key: "paymentType" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    prn: "PRN-2024-001",
    date: "2023-12-01",
    psdn: "PSDN-001",
    vendor: "Tech Solutions Ltd",
    paymentType: "Wire Transfer",
    status: "Delivered",
  },
  {
    id: 2,
    no: "02",
    prn: "PRN-2024-001",
    date: "2023-12-01",
    psdn: "PSDN-001",
    vendor: "Tech Solutions Ltd",
    paymentType: "Wire Transfer",
    status: "Delivered",
  },
  {
    id: 3,
    no: "03",
    prn: "PRN-2024-001",
    date: "2023-12-01",
    psdn: "PSDN-001",
    vendor: "Tech Solutions Ltd",
    paymentType: "Wire Transfer",
    status: "Delivered",
  },
  {
    id: 4,
    no: "04",
    prn: "PRN-2024-001",
    date: "2023-12-01",
    psdn: "PSDN-001",
    vendor: "Tech Solutions Ltd",
    paymentType: "Wire Transfer",
    status: "Delivered",
  },
  
];
const PurchaseReturnNote = ({ onBack }) => {
 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Purchase Return Note</span>
        </div>
        <div className={styles.headerRight}>
         
        </div>
      </div>
      <TableComponenet data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PurchaseReturnNote;
