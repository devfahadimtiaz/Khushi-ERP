import React, { useState } from "react";
import styles from "./PurchaseReturnVouchers.module.css";
import TableComponenetVoucher from "../../../Resources/Tables/TableComponentVoucher";

const TableHeader = [
  { label: "Sr No", key: "no" },
  { label: "Purchase Return", key: "purchaseReturn" },
  { label: "Return Date", key: "date" },
  { label: "PO#", key: "po" },
  { label: "Payment Type", key: "payment" },
  { label: "Payable Amount", key: "payableAmount" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    purchaseReturn: "IDN-2023-06-T0001",
    date: "2025-12-01",
    po: "PO-001",
    payment: "Cash",
    payableAmount: "1,234.00",
    status: "Available",
  },
  {
    id: 2,
    no: "02",
    purchaseReturn: "IDN-2023-06-T0001",
    date: "2025-12-15",
    po: "PO-001",
    payment: "Cash",
    payableAmount: "1,234.00",
    status: "Available",
  },
  {
    id: 3,
    no: "03",
    purchaseReturn: "IDN-2023-06-T0001",
    date: "2025-12-20",
    po: "PO-001",
    payment: "Cash",
    payableAmount: "1,234.00",
    status: "Available",
  },
];
const PurchasedReturnVoucher = ({ onBack }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Purchase Return Voucher</span>
        </div>
      </div>
      <TableComponenetVoucher data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PurchasedReturnVoucher;
