import React, { useState } from "react";
import styles from "./SubsidiaryFileEntry.module.css";

const SubsidiaryFileEntry = ({ onCancel, onSave }) => {
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
      <div className={styles.title}>Subsidiary File Entry</div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <span>File no</span>
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
                    Select File no
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
                <span>Currency</span>
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
                    Select Currency
                  </option>
                  <option value="account1">Yen </option>
                  <option value="account2">Ksh</option>
                  <option value="account3">Tsh</option>
                  <option value="account3">pkr</option>
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
              <label className={styles.label}>Code</label>
              <input
                type="text"
                name="Code"
                className={styles.input}
                placeholder="Enter code"
                value={formData.subLedgerCode}
                onChange={handleChange}
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

export default SubsidiaryFileEntry;
