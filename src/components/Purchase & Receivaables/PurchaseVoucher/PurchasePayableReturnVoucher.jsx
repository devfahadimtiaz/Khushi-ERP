import React from "react";
import styles from "./PurchasePayableReturnVoucher.module.css";
import TableComponenetVoucher from "../../../Resources/Tables/TableComponentVoucher";

const TableHeader = [
  { label: "Sr No", key: "no" },
  { label: "Invoice", key: "invoice" },
  { label: "Date", key: "date" },
  { label: "Payable Amount", key: "payableAmount" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    invoice: "IDN-2023-06-T0001",
    date: "2025-12-01",
    payableAmount: "1,234.00",
    status: "Available",
  },
  {
    id: 2,
    no: "02",
    invoice: "IDN-2023-06-T0001",
    date: "2025-12-15",
    payableAmount: "1,234.00",
    status: "Available",
  },
  {
    id: 3,
    no: "03",
    invoice: "IDN-2023-06-T0001",
    date: "2025-12-20",
    payableAmount: "1,234.00",
    status: "Available",
  },
];
const PurchasePayableReturnVoucher = ({ onBack }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Purchase & Payble Return Voucher</span>
        </div>
      </div>
      <TableComponenetVoucher data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PurchasePayableReturnVoucher;
