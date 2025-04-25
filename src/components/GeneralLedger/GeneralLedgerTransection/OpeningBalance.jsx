import React, { useState } from "react";
import styles from "./OpeningBalance.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import AddOpeningBalance from "./AddOpeningBalance";

const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "Chart of Account", key: "chartOfAccount" },
  { label: "Account Code", key: "accountCode" },
  { label: "Opening Balance Dr", key: "openingBalanceDr" },
  { label: "Opening Balance Cr", key: "openingBalanceCr" },
  { label: "Status", key: "status" },
];

const TableData = [
  {
    id: 1,
    srNo: "1",
    chartOfAccount: "Cash in Hand",
    accountCode: "1001",
    openingBalanceDr: "50,000.00",
    openingBalanceCr: "0.00",
    status: "Active",
  },
  {
    id: 2,
    srNo: "2",
    chartOfAccount: "Bank Account - Main",
    accountCode: "1002",
    openingBalanceDr: "150,000.00",
    openingBalanceCr: "0.00",
    status: "Active",
  },
  {
    id: 3,
    srNo: "3",
    chartOfAccount: "Accounts Receivable",
    accountCode: "1003",
    openingBalanceDr: "75,000.00",
    openingBalanceCr: "0.00",
    status: "Active",
  },
 
];
const OpeningBalance = ({ onBack }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleAddNew = () => {
    setShowCreateForm(true);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
  };
  if (showCreateForm) {
    return <AddOpeningBalance onCancel={handleCancelCreate} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Opening Balance</div>
          <button
            className={styles.addAccountBtn}
            onClick={() => setShowCreateForm(true)}
          >
            Add Opening Balance
          </button>
        </div>

        <TableComponent data={TableData} HeadData={TableHeader} />
      </div>
    </div>
  );
};

export default OpeningBalance;
