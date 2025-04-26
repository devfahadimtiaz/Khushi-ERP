import React, { useState } from "react";
import styles from "./LogBookTransfers.module.css";
import LogBookReceiptNote from "./LogBookReceiptNote";
import CreateLogBookTransfer from "./CreateLogBookTransfer";
const LogBookTransfers = () => {

  const [showLogBookTranfer, setShowLogBookTranfer]= useState(false);
  const [showCreateLogBookTransfer, setShowCreateLogBookTransfer]= useState(false);

const handleOnBack=()=>{
  setShowLogBookTranfer(false);
  setShowCreateLogBookTransfer(false);
}

const handleAddNew=()=>{
  setShowLogBookTranfer(true);
}
const handleTransfer=()=>{
  setShowCreateLogBookTransfer(true);
}

  if(showLogBookTranfer){
    return(
      <LogBookReceiptNote onBack={handleOnBack}/>
    )
  }
  if(showCreateLogBookTransfer){
    return(
      <CreateLogBookTransfer onBack={handleOnBack}/>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>LOG BOOK TRANSFERS</span>
        <div className={styles.actionButtons}>
          <button className={styles.actionButton} onClick={handleTransfer}>
            <span>Transfer</span>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <path
                  d="M10 3.33398V16.6673M16.6673 10.0007H3.33398"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <button className={styles.actionButton} onClick={handleAddNew}>
            <span>Add New</span>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <path
                  d="M10 3.33398V16.6673M16.6673 10.0007H3.33398"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Sr No</div>
          <div className={styles.headerCell}>Stock No</div>
          <div className={styles.headerCell}>Reg No</div>
          <div className={styles.headerCell}>Make</div>
          <div className={styles.headerCell}>Model</div>
          <div className={styles.headerCell}>Year</div>
          <div className={styles.headerCell}>Transferred From</div>
          <div className={styles.headerCell}>Transferred To</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}>Actions</div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.cell}>1</div>
          <div className={styles.cell}>ST001</div>
          <div className={styles.cell}>ABC123</div>
          <div className={styles.cell}>Toyota</div>
          <div className={styles.cell}>Camry</div>
          <div className={styles.cell}>2020</div>
          <div className={styles.cell}>ABC Motors</div>
          <div className={styles.cell}>John Smith</div>
          <div className={`${styles.cell} ${styles.statusPending}`}>
            Pending
          </div>
          <div className={styles.actionsCell}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.actionIcon}
              >
                <path
                  d="M10 4.37508C3.75 4.37508 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 15.6251 10 15.6251C16.25 15.6251 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 4.37508 10 4.37508Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.actionIcon}
              >
                <path
                  d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2175 1.87061 15.5238 1.80957 15.8334 1.80957C16.1429 1.80957 16.4493 1.87061 16.7353 1.98906C17.0214 2.10752 17.2812 2.28113 17.5001 2.5C17.7189 2.71887 17.8925 2.97871 18.011 3.26474C18.1294 3.55077 18.1905 3.85714 18.1905 4.16669C18.1905 4.47624 18.1294 4.78261 18.011 5.06864C17.8925 5.35467 17.7189 5.61451 17.5001 5.83335L6.25008 17.0834L1.66675 18.3334L2.91675 13.75L14.1667 2.5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>ST002</div>
          <div className={styles.cell}>XYZ789</div>
          <div className={styles.cell}>Honda</div>
          <div className={styles.cell}>Civic</div>
          <div className={styles.cell}>2021</div>
          <div className={styles.cell}>XYZ Dealers</div>
          <div className={styles.cell}>Jane Doe</div>
          <div className={`${styles.cell} ${styles.statusCompleted}`}>
            Completed
          </div>
          <div className={styles.actionsCell}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.actionIcon}
              >
                <path
                  d="M10 4.37508C3.75 4.37508 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 15.6251 10 15.6251C16.25 15.6251 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 4.37508 10 4.37508Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.actionIcon}
              >
                <path
                  d="M14.1667 1.69043C14.3856 1.47156 14.6454 1.29795 14.9314 1.17949C15.2175 1.06104 15.5238 1 15.8334 1C16.1429 1 16.4493 1.06104 16.7353 1.17949C17.0214 1.29795 17.2812 1.47156 17.5001 1.69043C17.7189 1.9093 17.8925 2.16914 18.011 2.45517C18.1294 2.7412 18.1905 3.04757 18.1905 3.35712C18.1905 3.66667 18.1294 3.97304 18.011 4.25907C17.8925 4.5451 17.7189 4.80494 17.5001 5.02378L6.25008 16.2738L1.66675 17.5238L2.91675 12.9404L14.1667 1.69043Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.cell}>3</div>
          <div className={styles.cell}>ST003</div>
          <div className={styles.cell}>DEF456</div>
          <div className={styles.cell}>BMW</div>
          <div className={styles.cell}>X5</div>
          <div className={styles.cell}>2019</div>
          <div className={styles.cell}>Premium Auto</div>
          <div className={styles.cell}>Mike Johnson</div>
          <div className={`${styles.cell} ${styles.statusPending}`}>
            Pending
          </div>
          <div className={styles.actionsCell}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.actionIcon}
              >
                <path
                  d="M10 1C3.75 1 1.25 6.62502 1.25 6.62502C1.25 6.62502 3.75 12.25 10 12.25C16.25 12.25 18.75 6.62502 18.75 6.62502C18.75 6.62502 16.25 1 10 1Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 9.25C11.7259 9.25 13.125 7.8509 13.125 6.125C13.125 4.39911 11.7259 3 10 3C8.27411 3 6.875 4.39911 6.875 6.125C6.875 7.8509 8.27411 9.25 10 9.25Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.actionIcon}
              >
                <path
                  d="M14.1667 1.69043C14.3856 1.47156 14.6454 1.29795 14.9314 1.17949C15.2175 1.06104 15.5238 1 15.8334 1C16.1429 1 16.4493 1.06104 16.7353 1.17949C17.0214 1.29795 17.2812 1.47156 17.5001 1.69043C17.7189 1.9093 17.8925 2.16914 18.011 2.45517C18.1294 2.7412 18.1905 3.04757 18.1905 3.35712C18.1905 3.66667 18.1294 3.97304 18.011 4.25907C17.8925 4.5451 17.7189 4.80494 17.5001 5.02378L6.25008 16.2738L1.66675 17.5238L2.91675 12.9404L14.1667 1.69043Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogBookTransfers;
