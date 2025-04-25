import React, {useState} from "react";
import styles from "./InternalCashTransfer.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import AddInternalCashTransfer from "./AddInternalCashTransfer";
const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "Voucher No", key: "voucherNo" },
  { label: "User", key: "user" },
  { label: "Transfer Date", key: "transferDate" },
  { label: "Till Balance", key: "tillBalance" },
  { label: "Transfer Amount", key: "transferAmount" },
  { label: "Remain Balance", key: "remainBalance" },
  { label: "Received By", key: "receivedBy" },
  { label: "Status", key: "status" },
];

const TableData = [
  {
    id: 1,
    srNo: "1",
    voucherNo: "CT-2024-001",
    user: "John Smith",
    transferDate: "2024-01-15",
    tillBalance: "250,000.00",
    transferAmount: "50,000.00",
    remainBalance: "200,000.00",
    receivedBy: "Sarah Wilson",
    status: "Completed",
  },
  {
    id: 2,
    srNo: "2",
    voucherNo: "CT-2024-001",
    user: "John Smith",
    transferDate: "2024-01-15",
    tillBalance: "250,000.00",
    transferAmount: "50,000.00",
    remainBalance: "200,000.00",
    receivedBy: "Sarah Wilson",
    status: "Completed",
  },
  {
    id: 3,
    srNo: "3",
    voucherNo: "CT-2024-001",
    user: "John Smith",
    transferDate: "2024-01-15",
    tillBalance: "250,000.00",
    transferAmount: "50,000.00",
    remainBalance: "200,000.00",
    receivedBy: "Sarah Wilson",
    status: "Completed",
  },
  
];
function OpeningBalanceVouchers({ onBack }) {
const [showAddInternal, setShowAddInternal]= useState(false);

const handelCashTransfer = ()=>{
    setShowAddInternal(true);
}

const handelBack = ()=>{
    setShowAddInternal(false);
}
if(showAddInternal){
    return(
        <AddInternalCashTransfer onBack={handelBack}/>
    )
}

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Internal Cash Transfer</span>
          
        </div>
        <div className={styles.contentCard}>
          <div className={styles.filterRow}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Date From</span>
              <input type="date" className={styles.selectInput}/>
              </div>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Date To</span>
              <input type="date" className={styles.selectInput}/>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.resetButton}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="64:668" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="reset-icon" style="width: 20px; height: 20px; margin-right: 8px"> <g clip-path="url(#clip0_64_668)"> <path d="M1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332C14.6024 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6024 1.6665 10.0001 1.6665" stroke="#4318D1" stroke-width="2"></path> <path d="M1.66675 9.99984L5.00008 13.3332M1.66675 9.99984L5.00008 6.6665M1.66675 9.99984H18.3334" stroke="#4318D1" stroke-width="2"></path> </g> <defs> <clipPath id="clip0_64_668"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>',
                  }}
                />
                <span className={styles.buttonText}>Reset</span>
              </button>
              <button className={styles.printButton}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="64:673" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="print-icon" style="width: 20px; height: 20px; margin-right: 8px"> <path d="M14.1667 14.1667H14.1751M14.1667 17.5H5.83341C4.91294 17.5 4.16675 16.7538 4.16675 15.8333V4.16667C4.16675 3.24619 4.91294 2.5 5.83341 2.5H10.4882C10.7092 2.5 10.9212 2.5878 11.0775 2.74408L15.5893 7.25593C15.7456 7.4122 15.8334 7.62417 15.8334 7.84518V15.8333C15.8334 16.7538 15.0872 17.5 14.1667 17.5Z" stroke="#4318D1" stroke-width="2"></path> </svg>',
                  }}
                />
                <span className={styles.buttonText}>Print</span>
              </button>
              <button className={styles.createButton}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="64:677" layer-name="Frame" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="create-icon" style="width: 12px; height: 12px; margin-right: 8px"> <path d="M6 2V10M2 6H10" stroke="white" stroke-width="2"></path> </svg>',
                }}
              />
              <span className={styles.createButtonText} onClick={handelCashTransfer}>Cash Transfer</span>
            </button>
            </div>
          </div>
          <TableComponent data={TableData} HeadData={TableHeader} />
          <div className={styles.recordCount}>Showing 4 records</div>
        </div>
      </div>
    </>
  );
}

export default OpeningBalanceVouchers;
