import React from "react";
import styles from "./AddExpensePopup.module.css";

function AddExpensePopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleReset = () => {
    // Reset form logic here
    console.log("Form reset");
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <div className={styles.headerContainer}>
          <span className={styles.title}>Add New Expense</span>
          <span className={styles.resetLink} onClick={handleReset}>
            Reset Form
          </span>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="expense-type">
                  <span>Expense Type</span>
                  <span className={styles.required}>*</span>
                </label>
                <select id="expense-type" className={styles.formControl}>
                  <option value="">Select Type</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="amount">
                  <span>Amount</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="amount"
                  placeholder="Rs 0.00"
                  className={styles.formControlInput}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="date">
                  <span>Date</span>
                  <span className={styles.required}>*</span>
                </label>
                <input type="text" id="date" className={styles.formControlInput} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="invoice-number">
                  <span>Invoice Number</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="invoice-number"
                  placeholder="Enter invoice number"
                  className={styles.formControlInput}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="vendor-name">
                  <span>Vendor Name</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="vendor-name"
                  placeholder="Enter vendor name"
                  className={styles.formControlInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="payment-method">
                  <span>Payment Method</span>
                  <span className={styles.required}>*</span>
                </label>
                <select id="payment-method" className={styles.formControl}>
                  <option value="">Select Payment Method</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="category">
                  <span>Category</span>
                  <span className={styles.required}>*</span>
                </label>
                <select id="category" className={styles.formControl}>
                  <option value="">Select Category</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="sub-category">
                  <span>Sub-Category</span>
                  <span className={styles.required}>*</span>
                </label>
                <select id="sub-category" className={styles.formControl}>
                  <option value="">Select Sub-Category</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className={styles.formControlInputs}
                  rows="3"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label htmlFor="additional-notes">Additional Notes</label>
                <textarea
                  id="additional-notes"
                  className={styles.formControlInputs}
                  rows="3"
                />
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className={styles.saveButton}>
                Save Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddExpensePopup;
