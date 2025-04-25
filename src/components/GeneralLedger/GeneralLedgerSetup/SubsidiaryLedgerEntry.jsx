import React, { useState } from "react";
import styles from "./SubsidiaryLedgerEntry.module.css";

const SubsidiaryLedgerEntry = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    file: "",
    chartOfAccount: "",
    subLedgerCode: "",
    subsidiaryDescription: "",
    entryNature: "",
    month: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Subsidiary Ledger Entry</div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <span>File-1</span>
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectContainer}>
                <select
                  name="file"
                  className={styles.select}
                  value={formData.file}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select File
                  </option>
                  <option value="file1">File 1</option>
                  <option value="file2">File 2</option>
                  <option value="file3">File 3</option>
                </select>
                <div className={styles.dropdownIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#363565"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <span>Chart of Account</span>
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectContainer}>
                <select
                  name="chartOfAccount"
                  className={styles.select}
                  value={formData.chartOfAccount}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Account
                  </option>
                  <option value="account1">Account 1</option>
                  <option value="account2">Account 2</option>
                  <option value="account3">Account 3</option>
                </select>
                <div className={styles.dropdownIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#363565"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Sub Ledger Code</label>
              <input
                type="text"
                name="subLedgerCode"
                className={styles.input}
                placeholder="Enter sub ledger code"
                value={formData.subLedgerCode}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Subsidiary Description</label>
              <input
                type="text"
                name="subsidiaryDescription"
                className={styles.input}
                placeholder="Enter description"
                value={formData.subsidiaryDescription}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <span>Entry Nature</span>
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectContainer}>
                <select
                  name="entryNature"
                  className={styles.select}
                  value={formData.entryNature}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Nature
                  </option>
                  <option value="debit">Debit</option>
                  <option value="credit">Credit</option>
                </select>
                <div className={styles.dropdownIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#363565"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <span>Select Month</span>
                <span className={styles.required}>*</span>
              </label>
              <input
                type="month"
                name="month"
                className={styles.input}
                value={formData.month}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubsidiaryLedgerEntry;
