import React from "react";
import styles from "./BankDetailsTable.module.css";

const BankDetailsTable = () => {
  // Sample data for the table
  const bankDetails = [
    {
      id: 1,
      glCode: "1001",
      subCode: "SUB-A",
      branchName: "Main Branch",
      iban: "AE123456789",
      type: "Savings",
      contactPerson: "John Smith",
      email: "john@example.com",
    },
    {
      id: 2,
      glCode: "1001",
      subCode: "SUB-A",
      branchName: "Main Branch",
      iban: "AE123456789",
      type: "Savings",
      contactPerson: "John Smith",
      email: "john@example.com",
    },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Sr</div>
          <div className={styles.headerCell}>GL Code</div>
          <div className={styles.headerCell}>Sub Code</div>
          <div className={styles.headerCell}>Branch Name</div>
          <div className={styles.headerCell}>IBAN#</div>
          <div className={styles.headerCell}>Type</div>
          <div className={styles.headerCell}>Contact Person</div>
          <div className={styles.headerCell}>Email</div>
          <div className={styles.headerCell}>Signature</div>
          <div className={styles.headerCell}>Actions</div>
        </div>

        {bankDetails.map((bank) => (
          <div key={bank.id} className={styles.tableRow}>
            <div className={styles.tableCell}>{bank.id}</div>
            <div className={styles.tableCell}>
              <span className={styles.codeTag}>{bank.glCode}</span>
            </div>
            <div className={styles.tableCell}>
              <span className={styles.codeTag}>{bank.subCode}</span>
            </div>
            <div className={styles.tableCell}>{bank.branchName}</div>
            <div className={styles.tableCell}>{bank.iban}</div>
            <div className={styles.tableCell}>{bank.type}</div>
            <div className={styles.tableCell}>{bank.contactPerson}</div>
            <div className={styles.tableCell}>{bank.email}</div>
            <div className={styles.tableCell}>
              <div className={styles.signatureBox} />
            </div>
            <div className={styles.tableCell}>
              <i className={`ti ti-pencil ${styles.editIcon}`} />
              <i className={`ti ti-trash ${styles.deleteIcon}`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BankDetailsTable;
