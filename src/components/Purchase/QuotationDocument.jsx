import React, {useState} from "react";
import styles from "./QuotationDocument.module.css";
import AddQuotationDocument from "./AddQuotationDocument"

const sampleData = [
  {
    no: "IDN-2023-01",
    quotation: "Need Product",
    requestNo: "IDM-0001",
    supplier: "ABC",
    quotaionDate: "14/04/2025",
    status: "Complete",
    action: "View",
  },

];
const PurchaseRequisition = ({ onBack }) => {

const [showAddQuotationDocument, setshowAddQuotationDocument] = useState(false);
const handleAddDocument=()=>{
  setshowAddQuotationDocument(true);
}

const handleOnback=()=>{
  setshowAddQuotationDocument(false);
}

if(showAddQuotationDocument){
  return(
    <AddQuotationDocument onBack={handleOnback}/>
  )
}

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Quotation Document</span>
        </div>
        <div className={styles.headerRight}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button className={styles.addButton} onClick={handleAddDocument}>
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
      <table className={styles.tableCard}>
        <thead className={styles.tableHeader}>
          <th className={styles.headerCell}>No</th>
          <th className={styles.headerCell}>Quotation</th>
          <th className={styles.headerCell}>Request No</th>
          <th className={styles.headerCell}>Supplier</th>
          <th className={styles.headerCell}>Quotation Date</th>
          <th className={styles.headerCell}>Status</th>
          <th className={styles.headerCell}>Action</th>
        </thead>
        {sampleData.map((TableRow, index) => (
          <tr className={styles.tableRow}>
            <td className={styles.cell}>{TableRow.no}</td>
            <td className={styles.cell}>{TableRow.quotation}</td>
            <td className={styles.cell}>{TableRow.requestNo}</td>
            <td className={styles.cell}>{TableRow.supplier}</td>
            <td className={styles.cell}>{TableRow.quotaionDate}</td>
            <td className={styles.statusDraft}>{TableRow.status}</td>
            <td className={styles.actionLink}>View</td>
          </tr>
        ))}

        <div className={styles.tablePagination}>
          <span className={styles.paginationInfo}>
            Showing 1 to 8 of 24 entries
          </span>
          <div className={styles.paginationControls}>
            <div className={styles.paginationArrow}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.prevIcon}
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#A0A3BD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className={styles.paginationActive}>1</div>
            <div className={styles.paginationNumber}>2</div>
            <div className={styles.paginationNumber}>3</div>
            <div className={styles.paginationArrow}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.nextIcon}
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="#A0A3BD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </table>
    </div>
  );
};

export default PurchaseRequisition;
