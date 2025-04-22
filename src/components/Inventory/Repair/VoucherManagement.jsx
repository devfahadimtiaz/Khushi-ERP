import React from "react";
import styles from "./VoucherManagement.module.css";

const VoucherManagement = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Voucher Management Repairing</div>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 9.16663V14.1666L10 11.6666L12.5 14.1666V9.16663"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 3.33337V11.6667"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16.6673 17.5H3.33398"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span>Export PDF</span>
            </button>
            <select className={styles.actionButton}>
              <option>Payment Status</option>
              <option>Paid</option>
              <option>Unpaid</option>
            </select>
          </div>
        </div>
        <div className={styles.searchBar}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.5 17.5L13.875 13.875"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <span>Search vouchers...</span>
        </div>
        <table className={styles.tableContainer}>
          <thead className={styles.tableHeader}>
            <th className={styles.tableCell}>Date</th>
            <th className={styles.tableCell}>Staff Name</th>
            <th className={styles.tableCell}>Vendor Name</th>
            <th className={styles.tableCell}>Car Name</th>
            <th className={styles.tableCell}>Stock No</th>
            <th className={styles.tableCell}>Voucher No</th>
            <th className={styles.tableCell}>Payment</th>
            <th className={styles.tableCell}>Actions</th>
          </thead>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>2024-01-15</td>
            <td className={`${styles.tableCell} ${styles.staffCell}`}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.staffAvatar} />
              <span>Michael Chen</span>
            </td>
            <td className={styles.tableCell}>AutoPro Services</td>
            <td className={styles.tableCell}>Toyota Camry</td>
            <td className={styles.tableCell}>STK-2024-001</td>
            <td className={styles.tableCell}>RPR-2401-001</td>
            <td className={`${styles.tableCell} ${styles.paymentCell}`}>
              <td className={styles.paidStatus}>Paid</td>
            </td>
            <td className={`${styles.tableCell} ${styles.actionsCell}`}>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>2024-01-14</td>
            <td className={`${styles.tableCell} ${styles.staffCell}`}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.staffAvatar} />
              <span>Sarah Johnson</span>
            </td>
            <td className={styles.tableCell}>Elite Repairs</td>
            <td className={styles.tableCell}>Honda Civic</td>
            <td className={styles.tableCell}>STK-2024-002</td>
            <td className={styles.tableCell}>RPR-2401-002</td>
            <td className={`${styles.tableCell} ${styles.paymentCell}`}>
              <div className={styles.unpaidStatus}>Unpaid</div>
            </td>
            <td className={`${styles.tableCell} ${styles.actionsCell}`}>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>2024-01-13</td>
            <td className={`${styles.tableCell} ${styles.staffCell}`}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.staffAvatar} />
              <span>David Miller</span>
            </td>
            <td className={styles.tableCell}>QuickFix Pro</td>
            <td className={styles.tableCell}>Ford Mustang</td>
            <td className={styles.tableCell}>STK-2024-003</td>
            <td className={styles.tableCell}>RPR-2401-003</td>
            <td className={`${styles.tableCell} ${styles.paymentCell}`}>
              <div className={styles.paidStatus}>Paid</div>
            </td>
            <td className={`${styles.tableCell} ${styles.actionsCell}`}>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>2024-01-12</td>
            <td className={`${styles.tableCell} ${styles.staffCell}`}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.staffAvatar} />
              <span>Emma Wilson</span>
            </td>
            <td className={styles.tableCell}>Master Mechanics</td>
            <td className={styles.tableCell}>BMW 3 Series</td>
            <td className={styles.tableCell}>STK-2024-004</td>
            <td className={styles.tableCell}>RPR-2401-004</td>
            <dtdiv className={`${styles.tableCell} ${styles.paymentCell}`}>
              <div className={styles.unpaidStatus}>Unpaid</div>
            </dtdiv>
            <td className={`${styles.tableCell} ${styles.actionsCell}`}>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default VoucherManagement;
