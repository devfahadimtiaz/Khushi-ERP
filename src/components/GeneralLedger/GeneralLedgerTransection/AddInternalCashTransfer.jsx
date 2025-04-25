import React, { useState } from "react";
import styles from "./AddInternalCashTransfer.module.css";

const InternalCashTransfer = ({ onBack }) => {
  const [transferDetails, setTransferDetails] = useState([]);
  const [formData, setFormData] = useState({
    financialYear: "",
    yearStatus: "",
    date: "",
    currency: "PKR",
    ictNumber: "",
    tillBalance: "",
    paidAmount: "",
    amountInWords: "",
    fromAccount: "",
    toAccount: "",
    transferAmount: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTransferDetail = () => {
    if (
      !formData.fromAccount ||
      !formData.toAccount ||
      !formData.transferAmount
    ) {
      return; // Don't add if required fields are empty
    }

    const newTransferDetail = {
      fromAccount: formData.fromAccount,
      toAccount: formData.toAccount,
      amount: formData.transferAmount,
      description: formData.description,
    };

    setTransferDetails([...transferDetails, newTransferDetail]);

    // Reset the transfer detail fields
    setFormData({
      ...formData,
      transferAmount: "",
      description: "",
    });
  };

  const handleRemoveTransferDetail = (index) => {
    const updatedDetails = [...transferDetails];
    updatedDetails.splice(index, 1);
    setTransferDetails(updatedDetails);
  };

  const calculateTotal = () => {
    return transferDetails
      .reduce((total, detail) => total + parseFloat(detail.amount || 0), 0)
      .toFixed(2);
  };

  const handleSave = () => {
    // Implement save functionality
    console.log("Saving form data:", formData);
    console.log("Transfer details:", transferDetails);
  };

  const handleDraft = () => {
    // Implement draft functionality
    console.log("Saving as draft");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Internal Cash Transfer</span>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Financial Year</span>
              <span className={styles.required}>*</span>
            </label>
            <select className={styles.selectContainer}>
              <option className={styles.selectText}>Select Year</option>
            
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Year Status</span>
              <span className={styles.required}>*</span>
            </label>
            <select className={styles.selectContainer}>
              <option className={styles.selectText}>Select Status</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Date</span>
              <span className={styles.required}>*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Currency</span>
              <span className={styles.required}>*</span>
            </label>
            <select className={styles.selectContainer}>
              <option className={styles.selectText}>PKR</option>
        
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>ICT Number</label>
            <input
              type="text"
              name="ictNumber"
              value={formData.ictNumber}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Till Balance</label>
            <input
              type="text"
              name="tillBalance"
              value={formData.tillBalance}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Paid Amount</span>
              <span className={styles.required}>*</span>
            </label>
            <input
              type="number"
              name="paidAmount"
              value={formData.paidAmount}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Amount in Words</span>
              <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="amountInWords"
              value={formData.amountInWords}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.transferDetailsSection}>
          <span className={styles.sectionTitle}>Transfer Details</span>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>From Account</label>
              <select className={styles.selectContainer}>
                <option className={styles.selectText}>Select Account</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>To Account</label>
              <select className={styles.selectContainer}>
                <option className={styles.selectText}>Select Account</option>
            
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Transfer Amount</label>
              <input
                type="number"
                name="transferAmount"
                value={formData.transferAmount}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <button
              className={styles.addButton}
              onClick={handleAddTransferDetail}
              aria-label="Add transfer detail"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.addIcon}
              >
                <path
                  d="M9.99992 3.33301V16.6663M3.33325 9.99967H16.6666"
                  stroke="white"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <span className={styles.tableHeaderCell}>From Account</span>
            <span className={styles.tableHeaderCell}>To Account</span>
            <span className={styles.tableHeaderCell}>Amount</span>
            <span className={styles.tableHeaderCell}>Description</span>
            <span className={styles.tableHeaderCell}>Action</span>
          </div>

          {transferDetails.map((detail, index) => (
            <div key={index} className={styles.tableRow}>
              <span className={styles.tableCell}>{detail.fromAccount}</span>
              <span className={styles.tableCell}>{detail.toAccount}</span>
              <span className={styles.tableCell}>{detail.amount}</span>
              <span className={styles.tableCell}>{detail.description}</span>
              <span className={styles.tableCell}>
                <button
                  onClick={() => handleRemoveTransferDetail(index)}
                  className={styles.deleteButton}
                  aria-label="Delete transfer detail"
                >
                  <i className="ti ti-trash"></i>
                </button>
              </span>
            </div>
          ))}

          <div className={styles.tableFooter}>
            <span className={styles.tableCell}>Total</span>
            <span className={styles.tableCell}></span>
            <span className={styles.tableCell}>{calculateTotal()}</span>
            <span className={styles.tableCell}></span>
            <span className={styles.tableCell}></span>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.draftButton} onClick={onBack}>
            Draft
          </button>
          <button className={styles.saveButton} onClick={onBack}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternalCashTransfer;
