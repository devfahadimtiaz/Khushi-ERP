import React, { useState } from "react";
import styles from "./CurrencyManagement.module.css";

const CurrencyManagement = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleImport = () => {
    // Implement import functionality
    console.log("Import currencies");
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.pageTitle}>Currency Management</div>
        <div className={styles.contentPanel}>
          <div className={styles.searchRow}>
            <div className={styles.searchInput}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/27e61d6043150f47f7285a20cec94c158f305530?placeholderIfAbsent=true"
                className={styles.searchIcon}
                alt="Search icon"
              />
              <input
                type="text"
                placeholder="Search currencies..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchField}
              />
            </div>
            <button className={styles.importButton} onClick={handleImport}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/ae8206cec70e3ed0322e2eea74964f921bfdf05e?placeholderIfAbsent=true"
                className={styles.importIcon}
                alt="Import icon"
              />
              <span>Import</span>
            </button>
          </div>

          <div className={styles.tableHeader}>
            <div className={styles.leftColumns}>
              <div className={styles.columnHeader}>Currency Code</div>
              <div className={styles.columnHeader}>Currency Name</div>
              <div className={styles.columnHeader}>Symbol</div>
            </div>
            <div className={styles.rightColumns}>
              <div className={styles.columnHeader}>Exchange Rate</div>
              <div className={styles.columnHeader}>Status</div>
              <div className={styles.columnHeader}>Last Updated</div>
              <div className={styles.columnHeader}>Actions</div>
            </div>
          </div>

          {/* Sample currency data rows would go here */}
          {/* This is just a placeholder for the actual data that would be fetched */}
          <div className={styles.emptyState}>
            <p>No currencies found. Import currencies or add a new one.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyManagement;
