import React, { useState } from "react";
import styles from "./LogBookReceiptNote.module.css";
import RegistrationCertificatePopup from "./RegistrationCertificatePopup";

const LogBookReceiptNote = ({ onBack }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
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
          <h1 className={styles.title}>VEHICLE LOG BOOK RECEIPT NOTE</h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.paymentSection}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Currency</label>
            <input
              type="text"
              placeholder="KSH/Dollar"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Type of Payment</label>
            <input
              type="text"
              placeholder="Cash/Card/Check"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Amount Received By</label>
            <input
              type="text"
              placeholder="Amount Recieved"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Authorized Signature</label>
            <input
              type="text"
              placeholder="Signature"
              className={styles.inputField}
            />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>BUYER PARTICULARS</h2>

        <div className={styles.buyerInfoGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>FN</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>ML</label>
            <input
              type="text"
              name="MiddleName"
              placeholder="Middle Name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>LN</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.buyerInfoGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>ID</label>
            <input
              type="text"
              name="id"
              placeholder="National Id/Password"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>SA</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>SM</label>
            <input
              type="text"
              name="stateName"
              placeholder="State Name"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.buyerInfoGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>C</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>ZC</label>
            <input
              type="text"
              name="Zip Code"
              placeholder="Zip Code"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>PO</label>
            <input
              type="text"
              name="po"
              placeholder="P.O Box"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.buyerInfoGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>CN</label>
            <input
              type="text"
              name="cn"
              placeholder="Contact Name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>S</label>
            <input
              type="text"
              name="signature"
              placeholder="Signature"
              className={styles.input}
            />
          </div>

          <button className={styles.uploadButton} onClick={togglePopup}>
            Upload Registration Certificate
          </button>
        </div>

        <div className={styles.authorizationSection}>
          <div className={styles.authorizationTitle}>Released By</div>
          <div className={styles.authorizationTitle}>Authorized By</div>
        </div>

        <div className={styles.signatureSection}>
          <div className={styles.signatureColumn}>
            <label className={styles.signatureLabel}>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className={styles.signatureInput}
            />
            <label className={styles.signatureLabel}>Signature</label>
            <input
              type="text"
              placeholder="Signature"
              className={styles.signatureInput}
            />
          </div>

          <div className={styles.signatureColumn}>
            <label className={styles.signatureLabel}>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className={styles.signatureInput}
            />
            <label className={styles.signatureLabel}>Signature</label>
            <input
              type="text"
              placeholder="Signature"
              className={styles.signatureInput}
            />
          </div>
        </div>

        <div className={styles.footerActions}>
          <button className={styles.uploadDocsButton} onClick={onBack}>
            Save
          </button>
        </div>
      </div>

      {showPopup && <RegistrationCertificatePopup onClose={togglePopup} />}
    </div>
  );
};

export default LogBookReceiptNote;
