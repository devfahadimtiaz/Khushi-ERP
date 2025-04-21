import React from "react";
import styles from "./CommissionList.module.css";

const CommissionList = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Commission List</span>
          <div className={styles.searchBar}>
            <div
              className={styles.searchIcon}
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px"> <path d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 9.09938 14.0158 9.85792 13.7226 10.5657C13.4295 11.2734 12.9998 11.9164 12.4581 12.4581C11.9164 12.9998 11.2734 13.4295 10.5657 13.7226C9.85792 14.0158 9.09938 14.1667 8.33333 14.1667C7.56729 14.1667 6.80875 14.0158 6.10101 13.7226C5.39328 13.4295 4.75022 12.9998 4.20854 12.4581C3.66687 11.9164 3.23719 11.2734 2.94404 10.5657C2.65088 9.85792 2.5 9.09938 2.5 8.33333C2.5 6.78624 3.11458 5.30251 4.20854 4.20854C5.30251 3.11458 6.78624 2.5 8.33333 2.5C9.88043 2.5 11.3642 3.11458 12.4581 4.20854C13.5521 5.30251 14.1667 6.78624 14.1667 8.33333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
            <span className={styles.searchText}>Search</span>
          </div>
          <div className={styles.selectAllBtn}>Select All</div>
          <div className={styles.actionBtn}>Remove Selection</div>
          <div className={styles.downloadBtn}>
            <div
              className={styles.downloadIcon}
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px"> <path d="M3.33331 13.3334V14.1667C3.33331 14.8297 3.59671 15.4656 4.06555 15.9345C4.53439 16.4033 5.17027 16.6667 5.83331 16.6667H14.1666C14.8297 16.6667 15.4656 16.4033 15.9344 15.9345C16.4033 15.4656 16.6666 14.8297 16.6666 14.1667V13.3334M13.3333 10L9.99998 13.3334M9.99998 13.3334L6.66665 10M9.99998 13.3334V3.33337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
            <span>Download PDF</span>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.checkbox} />
            <span className={styles.headerCell}>ID</span>
            <span className={styles.headerCell}>Name</span>
            <span className={styles.headerCell}>Amount</span>
            <span className={styles.headerCell}>Phone</span>
            <span className={styles.headerCell}>Email</span>
            <span className={styles.headerCell}>For</span>
            <span className={styles.headerCell}>Current Balance</span>
            <span className={styles.headerCell}>Balance Due</span>
            <span className={styles.headerCell}>Payment Type</span>
            <span className={styles.headerCell}>Action</span>
          </div>

          {[1, 2, 3, 4, 5].map((id) => (
            <div key={id} className={styles.tableRow}>
              <div className={styles.checkbox} />
              <span className={styles.cell}>{id}</span>
              <span className={styles.cell}>ABC</span>
              <span className={styles.cell}>60,000</span>
              <span className={styles.cell}>+92301-222</span>
              <span className={styles.cell}>123@gmail.com</span>
              <span className={styles.cell}>Car Sale</span>
              <span className={styles.cell}>$2,000,000</span>
              <span className={styles.cell}>$55,000</span>
              <span className={styles.cell}>Cash</span>
              <div
                className={styles.actionIcon}
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: auto"> <path d="M12 5V5.01M12 12V12.01M12 19V19.01M12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6ZM12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19C11 18.7348 11.1054 18.4804 11.2929 18.2929C11.4804 18.1054 11.7348 18 12 18C12.2652 18 12.5196 18.1054 12.7071 18.2929C12.8946 18.4804 13 18.7348 13 19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommissionList;
