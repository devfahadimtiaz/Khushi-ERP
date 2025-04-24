import React, { useState } from "react";
import styles from "./ChartOfAccountsSetup.module.css";
import TableComponenet from "../../Resources/Tables/TableComponent";
import CreateNewAccount from "./CreateNewAccount";

const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "File Name", key: "fileName" },
  { label: "Account Level", key: "accountLevel" },
  { label: "Acc Size", key: "accSize" },
  { label: "Remarks", key: "remarks" },
  { label: "Sub Ledger", key: "subLedger" },
  { label: "Locked", key: "locked" },
];

const TableData = [
  {
    id: 1,
    srNo: "1",
    fileName: "Assets",
    accountLevel: "1",
    accSize: "4",
    remarks: "Main asset accounts",
    subLedger: "Yes",
    locked: "Active",
  },
  {
    id: 2,
    srNo: "1",
    fileName: "Assets",
    accountLevel: "1",
    accSize: "4",
    remarks: "Main asset accounts",
    subLedger: "Yes",
    locked: "Active",
  },
  {
    id: 3,
    srNo: "1",
    fileName: "Assets",
    accountLevel: "1",
    accSize: "4",
    remarks: "Main asset accounts",
    subLedger: "Yes",
    locked: "Active",
  },
  {
    id: 4,
    srNo: "1",
    fileName: "Assets",
    accountLevel: "1",
    accSize: "4",
    remarks: "Main asset accounts",
    subLedger: "Yes",
    locked: "Active",
  },
];
const ChartOfAccountsSetup = ({ onBack }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  if (showCreateForm){
    return(
    <CreateNewAccount onClose={() => setShowCreateForm(false)} />
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.chartsOfAccounts}>
        <div className={styles.headerContainer}>
          <div className={styles.pageTitle}>Chart of Accounts Setup</div>
          <button
            className={styles.addAccountBtn}
            onClick={() => setShowCreateForm(true)}
          >
            Add New Account
          </button>
        </div>
        <div className={styles.contentPanel}>
          <div className={styles.actionBar}>
            <div className={styles.searchContainer}></div>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/8ea40446a269c15b85f0d28039224e33f8f0cfc1?placeholderIfAbsent=true"
                  className={styles.buttonIcon}
                  alt="Import icon"
                />
                <span>Import</span>
              </button>
              <button className={styles.actionButton}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/ae8206cec70e3ed0322e2eea74964f921bfdf05e?placeholderIfAbsent=true"
                  className={styles.buttonIcon}
                  alt="Export icon"
                />
                <span>Export</span>
              </button>
            </div>
          </div>
          <TableComponenet data={TableData} HeadData={TableHeader} />
        </div>
      </div>

    </div>
  );
};

export default ChartOfAccountsSetup;
