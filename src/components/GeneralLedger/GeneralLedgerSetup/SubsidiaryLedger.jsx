import React, { useState } from "react";
import styles from "./SubsidiaryLedger.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import SubsidiaryLedgerEntry from "./SubsidiaryLedgerEntry";

const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "GL A/C", key: "glAc" },
  { label: "Sub Code", key: "subCode" },
  { label: "Description", key: "discription" },
  { label: "Opening Dr", key: "OpenDr" },
  { label: "Opening Cr", key: "OpenCr" },
  { label: "Opening Month", key: "OpenMonth" },
];

const TableData = [
  {
    id: 1,
    srNo: "1",
    glAc: "1100 - Accounts Receivable",
    subCode: "AR-001",
    discription: "Customer A Receivables",
    OpenDr: "$25,000.00",
    OpenCr: "$0.00",
    OpenMonth: "2024-01",
  },
  {
    id: 2,
    srNo: "2",
    glAc: "1100 - Accounts Receivable",
    subCode: "AR-001",
    discription: "Customer A Receivables",
    OpenDr: "$25,000.00",
    OpenCr: "$0.00",
    OpenMonth: "2024-01",
  },
  {
    id: 3,
    srNo: "3",
    glAc: "1100 - Accounts Receivable",
    subCode: "AR-001",
    discription: "Customer A Receivables",
    OpenDr: "$25,000.00",
    OpenCr: "$0.00",
    OpenMonth: "2024-01",
  },
  {
    id: 4,
    srNo: "4",
    glAc: "1100 - Accounts Receivable",
    subCode: "AR-001",
    discription: "Customer A Receivables",
    OpenDr: "$25,000.00",
    OpenCr: "$0.00",
    OpenMonth: "2024-01",
  },
];
const SubsidiaryLedger = ({ onBack }) => {
  const [showEntryForm, setShowEntryForm] = useState(false);

  const handleAddNewClick = () => {
    setShowEntryForm(true);
  };

  const handleCancel = () => {
    setShowEntryForm(false);
  };

  const handleSave = (formData) => {
    // Here you would typically save the data to your backend
    console.log("Saving subsidiary data:", formData);
    // After saving, hide the form
    setShowEntryForm(false);
  };

  return (
    <div className={styles.container}>
      {showEntryForm ? (
        <SubsidiaryLedgerEntry onCancel={handleCancel} onSave={handleSave} />
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>Subsidiary Ledger</div>
            <div className={styles.headerActions}>
              <button className={styles.addButton} onClick={handleAddNewClick}>
                Add New Subsidiary
              </button>
            </div>
          </div>
          <div className={styles.contentPanel}>
            <div className={styles.filterControls}>
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Search by code or description"
                  className={styles.searchPlaceholder}
                />

                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/27e61d6043150f47f7285a20cec94c158f305530"
                  className={styles.searchIcon}
                  alt="Search"
                />
              </div>
              <select className={styles.statusSelect}>
                <option className={styles.selectPlaceholder}>
                  Filter by GL Account
                </option>
                <option className={styles.selectPlaceholder}>Account 1</option>
                <option className={styles.selectPlaceholder}>Account 2</option>
                <option className={styles.selectPlaceholder}>Account 3</option>
              </select>
            </div>
          </div>

          <TableComponent data={TableData} HeadData={TableHeader} />
        </div>
      )}
    </div>
  );
};

export default SubsidiaryLedger;
