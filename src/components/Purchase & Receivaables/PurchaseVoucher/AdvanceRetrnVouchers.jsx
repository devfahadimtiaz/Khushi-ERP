import React from "react";
import styles from "./AdvanceReturnVouchers.module.css";
import TableComponenetVoucher from "../../../Resources/Tables/TableComponentVoucher";

const TableHeader = [
  { label: "Sr No", key: "no" },
  { label: "Voucher", key: "Voucher" },
  { label: "Advance id", key: "advanceid" },
  { label: "Advance Date", key: "date" },
  { label: "Creation Date", key: "creationDate" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    Voucher: "IDN-2023-06-T0001",
    advanceid: "2025-12-01",
    date: "21211",
    creationDate: "PO-001",
    status: "Available",
  },
  {
    id: 2,
    no: "02",
    Voucher: "IDN-2023-06-T0001",
    advanceid: "2025-12-01",
    date: "21211",
    creationDate: "PO-001",
    status: "Available",
  },
  {
    id: 3,
    no: "03",
    Voucher: "IDN-2023-06-T0001",
    advanceid: "2025-12-01",
    date: "21211",
    creationDate: "PO-001",
    status: "Available",
  },
];
const AdvanceReturnVoucher = ({ onBack }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Advance Return Voucher</span>
        </div>
      </div>
      <TableComponenetVoucher data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default AdvanceReturnVoucher;
