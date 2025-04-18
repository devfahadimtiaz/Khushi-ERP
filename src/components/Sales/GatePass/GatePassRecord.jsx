import React from "react";
import styles from "./GatePassRecord.module.css";

function GatePassRecords() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Gate Pass Records</span>
        <button className={styles.exportButton}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 9.16675V14.1667L10 11.6667L12.5 14.1667V9.16675" stroke="#344054" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10 3.33325V11.6666" stroke="#344054" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M16.6673 17.5H3.33398" stroke="#344054" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
            }}
          />
          <span>Export PDF</span>
        </button>
        <select className={styles.statusFilter}>
          <option>All Status</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>
      </div>

      <div className={styles.searchBar}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M17.5 17.5L13.875 13.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>`,
          }}
        />
        <span>Search records...</span>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>
            <span>Car Details</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>
            <span>Registration</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 6.125L7.5 9.875L11.25 6.125" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>
            <span>Stock No</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>
            <span>YOM</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 6.125L7.5 9.875L11.25 6.125" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>
            <span>Chassis</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>
            <span>Color</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>
            <span>Date</span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
          <div className={styles.headerCell}>Mileage</div>
          <div className={styles.headerCell}>Actions</div>
        </div>

        {/* Row 1 */}
        <div className={styles.tableRow}>
          <div className={styles.cell}>Toyota Camry 2.5</div>
          <div className={styles.driverCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.profileImg} />
            <span>ABC123</span>
          </div>
          <div className={styles.cell}>STK-2024-001</div>
          <div className={styles.cell}>2023</div>
          <div className={styles.cell}>JT153YEK309472183</div>
          <div className={styles.cell}>Blue</div>
          <div className={styles.cell}>2024-01-15</div>
          <div className={styles.statusCell}>
            <span className={styles.inProgressStatus}>15,000</span>
          </div>
          <div className={styles.actionsCell}>
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.tableRow}>
          <div className={styles.cell}>Toyota Camry 2.5</div>
          <div className={styles.driverCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.profileImg} />
            <span>ABC123</span>
          </div>
          <div className={styles.cell}>STK-2024-001</div>
          <div className={styles.cell}>2023</div>
          <div className={styles.cell}>JT153YEK309472183</div>
          <div className={styles.cell}>Blue</div>
          <div className={styles.cell}>2024-01-15</div>
          <div className={styles.statusCell}>
            <span className={styles.inProgressStatus}>15,000</span>
          </div>
          <div className={styles.actionsCell}>
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className={styles.tableRow}>
          <div className={styles.cell}>Toyota Camry 2.5</div>
          <div className={styles.driverCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.profileImg} />
            <span>ABC123</span>
          </div>
          <div className={styles.cell}>STK-2024-001</div>
          <div className={styles.cell}>2023</div>
          <div className={styles.cell}>JT153YEK309472183</div>
          <div className={styles.cell}>Blue</div>
          <div className={styles.cell}>2024-01-15</div>
          <div className={styles.statusCell}>
            <span className={styles.inProgressStatus}>15,000</span>
          </div>
          <div className={styles.actionsCell}>
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className={styles.tableRow}>
          <div className={styles.cell}>Toyota Camry 2.5</div>
          <div className={styles.driverCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true" alt="" className={styles.profileImg} />
            <span>ABC123</span>
          </div>
          <div className={styles.cell}>STK-2024-001</div>
          <div className={styles.cell}>2023</div>
          <div className={styles.cell}>JT153YEK309472183</div>
          <div className={styles.cell}>Blue</div>
          <div className={styles.cell}>2024-01-15</div>
          <div className={styles.statusCell}>
            <span className={styles.inProgressStatus}>15,000</span>
          </div>
          <div className={styles.actionsCell}>
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
            <div
              className={styles.actionIcon}
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>`,
              }}
            />
          </div>
        </div>
        </div>
        </div>
  );
}

export default GatePassRecords;
