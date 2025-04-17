import React from "react";
import styles from "./VehicleArrived.module.css";

function VehicleArrived({ onBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.headerchild}>
        <button className={styles.backButton} onClick={onBack}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#092C4C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={styles.headerTitle}>Vehicle in Yard</div>
      </div>
      <div className={styles.searchForm}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Chassis Number</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter chassis number"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>B/L Number</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter B/L number"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Booking Number</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter Booking Number"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Shipping Company</label>
          <select className={styles.selectContainer}>
            <option className={styles.selectText} disabled>
              Select Shipping Company
            </option>
            <option className={styles.selectText}>NAGOYA</option>
            <option className={styles.selectText}>TOKYO</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Shipping Request Type</label>
          <select className={styles.selectContainer}>
            <option className={styles.selectText} disabled>
              Select
            </option>
            <option className={styles.selectText}>Mombasa</option>
            <option className={styles.selectText}>Kenya</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Port From</label>
          <select className={styles.selectContainer}>
            <option className={styles.selectText} disabled>
              Select
            </option>
            <option className={styles.selectText}>Mombasa</option>
            <option className={styles.selectText}>Kenya</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Port To</label>
          <select className={styles.selectContainer}>
            <option className={styles.selectText} disabled>
              Select
            </option>
            <option className={styles.selectText}>Mombasa</option>
            <option className={styles.selectText}>Kenya</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Destination</label>
          <select className={styles.selectContainer}>
            <option className={styles.selectText} disabled>
              Select
            </option>
            <option className={styles.selectText}>Mombasa</option>
            <option className={styles.selectText}>Kenya</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>ETD from</label>
          <div className={styles.inputContainer}>
            <input type="date" className={styles.input} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>ETD To</label>
          <div className={styles.inputContainer}>
            <input type="date" className={styles.input} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>ETA from</label>
          <div className={styles.inputContainer}>
            <input type="date" className={styles.input} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>ETA To</label>
          <div className={styles.inputContainer}>
            <input type="date" className={styles.input} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Vessel Name</label>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input}   placeholder="Enter Vessel Name" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Voyage</label>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input}   placeholder="Enter Voyage Name"/>
          </div>
        </div>
        
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Chassis No</div>
          <div className={styles.tableHeaderCell}>Booking No</div>
          <div className={styles.tableHeaderCell}>Yard Name</div>
          <div className={styles.tableHeaderCell}>Port</div>
          <div className={styles.tableHeaderCell}>Destination</div>
          <div className={styles.tableHeaderCell}>Loading Date</div>
          <div className={styles.tableHeaderCell}>ETD</div>
          <div className={styles.tableHeaderCell}>Type</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableCell}>CHX-2023-001</div>
          <div className={styles.tableCell}>BK001</div>
          <div className={styles.tableCell}>Dubai Main Yard</div>
          <div className={styles.tableCell}>Dubai Port</div>
          <div className={styles.tableCell}>Singapore</div>
          <div className={styles.tableCell}>2024-01-15</div>
          <div className={styles.tableCell}>2024-01-20</div>
          <div className={styles.tableCell}>FCL</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableCell}>CHX-2023-002</div>
          <div className={styles.tableCell}>BK002</div>
          <div className={styles.tableCell}>Abu Dhabi Port Yard</div>
          <div className={styles.tableCell}>Abu Dhabi Port</div>
          <div className={styles.tableCell}>Shanghai</div>
          <div className={styles.tableCell}>2024-01-16</div>
          <div className={styles.tableCell}>2024-01-21</div>
          <div className={styles.tableCell}>LCL</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableCell}>CHX-2023-003</div>
          <div className={styles.tableCell}>BK003</div>
          <div className={styles.tableCell}>Sharjah Terminal</div>
          <div className={styles.tableCell}>Sharjah Port</div>
          <div className={styles.tableCell}>Rotterdam</div>
          <div className={styles.tableCell}>2024-01-17</div>
          <div className={styles.tableCell}>2024-01-22</div>
          <div className={styles.tableCell}>RORO</div>
        </div>
      </div>
      <div className={styles.exportContainer}>
        <button className={styles.exportButton}>Export Excel</button>
        <button className={styles.exportButton}>PDF</button>
      </div>
    </div>
  );
}

export default VehicleArrived;
