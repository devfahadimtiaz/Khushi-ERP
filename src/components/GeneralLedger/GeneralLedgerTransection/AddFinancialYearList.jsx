import React from "react";
import styles from "./AddFinancialYearList.module.css";
// Sample data for the table
const AddFinancialYearList = ({ onCancel }) => {
  const EditIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
        stroke="#4318D1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DeleteIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M16.875 4.375H3.125M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
        stroke="#CF2129"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Add Financial Year</div>
        </div>
        <div className={styles.contentPanel}>
            <div className={styles.filterHeader}>
              <div className={styles.filterLabel}>Select Year</div>
              <div className={styles.filterLabel}>Status</div>
            </div>
            <div className={styles.filterControls}>
      
            <select className={styles.statusSelect}>
                <option className={styles.selectPlaceholder}>Select Year</option>
                <option className={styles.selectPlaceholder}>2021</option>
                <option className={styles.selectPlaceholder}>2022</option>
                <option className={styles.selectPlaceholder}>2023
                </option>
                </select>
              <select className={styles.statusSelect}>
                <option className={styles.selectPlaceholder}>Select Status</option>
                <option className={styles.selectPlaceholder}>Active</option>
                <option className={styles.selectPlaceholder}>Under Maintenance </option>
                <option className={styles.selectPlaceholder}>Inactive
                </option>
              </select>
            </div>
            <div className={styles.filterHeader}>
              <div className={styles.filterLabel}>From Date</div>
              <div className={styles.filterLabel}>To Date</div>
            </div>
            <div className={styles.filterControls}>
      
            <input type="month" className={styles.statusSelect}/>
            <input type="month" className={styles.statusSelect}/>
            </div>
            <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.createButton}  onClick={onCancel}>Generate</button>
        </div>
          </div>
          <table className={styles.tableContainer}>
        <thead className={styles.tableHeader}>
          <th className={styles.headerCell}>Sr</th>
          <th className={styles.headerCell}>Description</th>
          <th className={styles.headerCell}>Month Start</th>
          <th className={styles.headerCell}>Month End</th>
          <th className={styles.headerCell}>Active</th>
          <th className={styles.headerCell}>Sealed</th>
        </thead>

          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>1</td>
            <td className={styles.tableCell}>
            April 2024
            </td>
            <td className={styles.tableCell}>
            2023-04-01
            </td>
            <td className={styles.tableCell}>2024-03-31</td>
            <td className={styles.tableCell}><input type="checkbox" className={styles.codeTag}/></td>
            <td className={styles.tableCell}><input type="checkbox" className={styles.codeTag}/></td>
            
          </tr>
 
      </table>
      </div>
     
    </div>
  );
};

export default AddFinancialYearList;
