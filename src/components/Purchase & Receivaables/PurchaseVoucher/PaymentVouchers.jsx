import React, { useState } from "react";
import styles from "./PaymentVouchers.module.css";
import TableComponenetVoucher from "../../../Resources/Tables/TableComponentVoucher";

const TableHeader = [
  { label: "Sr No", key: "no" },
  { label: "Payment", key: "payment" },
  { label: "Date", key: "date" },
  { label: "Invoice", key: "invoice" },
  { label: "Payment Type", key: "paymentType" },
  { label: "Payable Amount", key: "payableAmount" },
  { label: "Paid Amount", key: "paidAmount" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    payment: "IDN-2023-06-T0001",
    date: "2025-12-01",
    invoice: "21211",
    paymentType: "PO-001",
    payableAmount: "1,234.00",
    paidAmount: "1,234.00",
    status: "Available",
  },
  {
    id: 2,
    no: "02",
    payment: "IDN-2023-06-T0001",
    date: "2025-12-01",
    invoice: "21211",
    paymentType: "PO-001",
    payableAmount: "1,234.00",
    paidAmount: "1,234.00",
    status: "Available",
  },
  {
    id: 3,
    no: "03",
    payment: "IDN-2023-06-T0001",
    date: "2025-12-01",
    invoice: "21211",
    paymentType: "PO-001",
    payableAmount: "1,234.00",
    paidAmount: "1,234.00",
    status: "Available",
  },
];
const PaymentVouchers = ({ onBack }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Payment Vouchers</span>
        </div>
      </div>
      <TableComponenetVoucher data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PaymentVouchers;
