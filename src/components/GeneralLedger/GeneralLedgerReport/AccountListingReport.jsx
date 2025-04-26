import React from "react";
import styles from "./AccountListingReport.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent"
import TableComponenet from "../../../Resources/Tables/TableSupplierStatus";


const TableHeader = [
  { label: "Account Code", key: "accountCode" },
  { label: "Account Name", key: "accountName" },
  { label: "Account Type", key: "accountType" },
  { label: "Parent Account", key: "parentAccount" },
  { label: "Level", key: "level" },
  { label: "Status", key: "status" },
];

const TableData = [
  {
    id: 1,
    accountCode: "1000",
    accountName: "Current Assets",
    accountType: "Asset",
    parentAccount: "Current Assets",
    level: "2",
    status: "Active",
  },
  {
    id: 2,
    accountCode: "1000",
    accountName: "Current Assets",
    accountType: "Asset",
    parentAccount: "Current Assets",
    level: "2",
    status: "Active",
  },
  {
    id: 3,
    accountCode: "1000",
    accountName: "Current Assets",
    accountType: "Asset",
    parentAccount: "Current Assets",
    level: "2",
    status: "Active",
  },
];
const AccountListingReport = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.reportContainer}>
        <div className={styles.headerSection}>
          <span className={styles.reportTitle}>Account Listing Report</span>
        
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Account Type</span>
            <select className={styles.dropdownField}>
              <option className={styles.dropdownText}>All Types</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Account Status</span>
            <select className={styles.dropdownField}>
              <option className={styles.dropdownText}>All Status</option>
 
            </select>
          </div>
          <div className={styles.exportButtonsContainer}>
            <button className={styles.exportButton}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.exportIcon}
              >
                <path
                  d="M12.0415 12.5417H12.0486M12.0415 15.375H4.95817C4.17577 15.375 3.5415 14.7408 3.5415 13.9583V4.04167C3.5415 3.25926 4.17577 2.625 4.95817 2.625H8.91478C9.10263 2.625 9.28283 2.69963 9.41564 2.83246L13.2507 6.66754C13.3835 6.80037 13.4582 6.98054 13.4582 7.1684V13.9583C13.4582 14.7408 12.8239 15.375 12.0415 15.375Z"
                  stroke="#4318D1"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className={styles.exportText}>Export PDF</span>
            </button>
            <button className={styles.exportButton}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.exportIcon}
              >
                <path
                  d="M12.0415 12.5417H12.0486M12.0415 15.375H4.95817C4.17577 15.375 3.5415 14.7408 3.5415 13.9583V4.04167C3.5415 3.25926 4.17577 2.625 4.95817 2.625H8.91478C9.10263 2.625 9.28283 2.69963 9.41564 2.83246L13.2507 6.66754C13.3835 6.80037 13.4582 6.98054 13.4582 7.1684V13.9583C13.4582 14.7408 12.8239 15.375 12.0415 15.375Z"
                  stroke="#4318D1"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className={styles.exportText}>Export Excel</span>
            </button>
          </div>
        </div>
        <TableComponenet HeadData={TableHeader} data={TableData}/>
        <div className={styles.tableFooter}>Showing 10 accounts</div>
      </div>
    </>
  );
};

export default AccountListingReport;
