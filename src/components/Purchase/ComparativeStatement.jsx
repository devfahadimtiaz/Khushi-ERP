import React, { useState } from "react";
import styles from "./ComparativeStatement.module.css";
import TableComponenet from "../../Resources/Tables/TableComponent";
import AddComparativeStatement from "./AddComparativeStatement";

const TableHeader = [
  { label: "No", key: "no" },
  { label: "CS#", key: "cs" },
  { label: "Purchased Request", key: "purchaseRequest" },
  { label: "PR Date", key: "prDate" },
  { label: "Selected Quotation", key: "selectedQuotation" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    cs: "IDN-2023-06-T0001",
    purchaseRequest: "20/12/23",
    prDate: "IDM-0001",
    selectedQuotation: "IDM-0001",
    status: "Available",
  },
  {
    id: 2,
    no: "02",
    cs: "IDN-2023-06-T0001",
    purchaseRequest: "20/12/23",
    prDate: "IDM-0001",
    selectedQuotation: "IDM-0001",
    status: "Available",
  },
  {
    id: 3,
    no: "03",
    cs: "IDN-2023-06-T0001",
    purchaseRequest: "20/12/23",
    prDate: "IDM-0001",
    selectedQuotation: "IDM-0001",
    status: "Available",
  },
];
const ComparativeStatement = ({ onBack }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddNew = () => {
    setShowAddForm(true);
  };

  const handleBackToList = () => {
    setShowAddForm(false);
  };

  return (
    <div className={styles.container}>
      {!showAddForm ? (
        <>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.title}>Comparative Statement</span>
            </div>
            <div className={styles.headerRight}>
              <button className={styles.addButton} onClick={handleAddNew}>
                <div className={styles.addIconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.addIcon}
                  >
                    <path
                      d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                      fill="#ECECFE"
                    ></path>
                    <path
                      d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                      fill="#ECECFE"
                    ></path>
                  </svg>
                </div>
                <span>Add New</span>
              </button>
            </div>
          </div>
          <TableComponenet data={sampleData} HeadData={TableHeader} />
        </>
      ) : (
        <AddComparativeStatement onBack={handleBackToList} />
      )}
    </div>
  );
};

export default ComparativeStatement;
