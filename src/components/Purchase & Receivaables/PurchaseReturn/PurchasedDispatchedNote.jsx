import React from "react";
import styles from "./PurchaseReturnRequest.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";

const TableHeader = [
  { label: "No", key: "no" },
  { label: "PDSN", key: "pdsn" },
  { label: "Dispatched Date", key: "date" },
  { label: "PRR Number", key: "prr" },
  { label: "Vendor Name", key: "vendor" },
  { label: "Date", key: "date" },
  { label: "Dispatched Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    pdsn: "PDSN-2023-001",
    date: "2023-12-01",
    prr: "PRR-001",
    vendor: "Tech Solutions Ltd",
    date: "2023-12-05",
    status: "Delivered",
  },
  {
    id: 2,
    no: "01",
    pdsn: "PDSN-2023-001",
    date: "2023-12-01",
    prr: "PRR-001",
    vendor: "Tech Solutions Ltd",
    date: "2023-12-05",
    status: "Delivered",
  },
  {
    id: 3,
    no: "01",
    pdsn: "PDSN-2023-001",
    date: "2023-12-01",
    prr: "PRR-001",
    vendor: "Tech Solutions Ltd",
    date: "2023-12-05",
    status: "Delivered",
  },
  {
    id: 4,
    no: "01",
    pdsn: "PDSN-2023-001",
    date: "2023-12-01",
    prr: "PRR-001",
    vendor: "Tech Solutions Ltd",
    date: "2023-12-05",
    status: "Delivered",
  },
];
const PurchasedDispatchedNote = ({ onBack }) => {
 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Purchase Dispatched Note</span>
        </div>
        <div className={styles.headerRight}>
         
        </div>
      </div>
      <TableComponenet data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PurchasedDispatchedNote;
