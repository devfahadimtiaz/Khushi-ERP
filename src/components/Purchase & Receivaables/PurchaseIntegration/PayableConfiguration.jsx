import React, { useState } from "react";
import styles from "./PayableConfiguration.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";

const TableHeader = [
  { label: "SR.", key: "no" },
  { label: "Voucher Name", key: "voucherName" },
  { label: "Date", key: "date" },
  { label: "Type", key: "type" },
 
];

const sampleData = [
  {
    id: 1,
    no: "01",
    voucherName: "BP-2024-001",
    date: "22/01/24",
    type: "Bank Payment",
  },
  {
    id: 2,
    no: "02",
    voucherName: "BP-2024-001",
    date: "22/01/24",
    type: "Bank Payment",
  },
  {
    id: 3,
    no: "03",
    voucherName: "BP-2024-001",
    date: "22/01/24",
    type: "Bank Payment",
  },
];
const PayableConfiguration = ({ onBack }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Payable Configuration</span>
        </div>
      </div>
      <TableComponenet data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PayableConfiguration;
