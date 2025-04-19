import React, { useState } from "react";
import styles from "./AddPayment.module.css";
import PaymentSuccessPopup from "./PaymentSuccessPopup";

function AddPayment({ receipt, onCancel }) {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment submission logic here
    console.log({
      paymentAmount,
      paymentType,
      paymentMethod,
      paymentDate,
      referenceNumber,
      notes,
    });
    // Show success popup after submission
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    // Optionally reset form or navigate away
  };

  return (
    <div className={styles.container}>
      {showSuccessPopup && (
        <PaymentSuccessPopup
          onClose={handleClosePopup}
          paymentAmount={paymentAmount}
          referenceNumber={referenceNumber}
          paymentDate={paymentDate}
          paymentMethod={paymentMethod}
        />
      )}
      <div className={styles.rectangle}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.headerSection}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Add Payment</div>
              <div className={styles.reference}>
                Reference: {receipt?.reciptNo || "CR-2024-001"}
              </div>
            </div>
            <div className={styles.amountSection}>
              <div className={styles.amountLabel}>Total Amount Due</div>
              <div className={styles.amountValue}>¥350,000</div>
            </div>
          </div>

          <label className={styles.fieldLabel}>Payment Amount</label>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Enter amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />

          <div className={styles.twoColumnLayout}>
            <div className={styles.column}>
              <div className={styles.formGroup}>
                <label>Payment Type</label>
                <select className={styles.selectField}>
                  <option>Select payment type</option>
                  <option value="cash">Cash</option>
                  <option value="bankTransfer">Bank Transfer</option>
                  <option value="creditCard">Credit Card</option>
                  
                </select>

                <label style={{ marginTop: "26px" }}>Payment Method</label>
                <select className={styles.selectField}>
                  <option>Select payment type</option>
                  <option value="cash">Cash</option>
                  <option value="bankTransfer">Bank Transfer</option>
                  <option value="creditCard">Credit Card</option>
                  
                </select>
              </div>
            </div>

            <div className={`${styles.column} ${styles.columnRight}`}>
              <div className={styles.formGroup}>
                <label>Payment Date</label>
                <input
                  type="date"
                  className={styles.dateField}
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                />

                <label style={{ marginTop: "24px" }}>Reference Number</label>
                <input
                  type="text"
                  className={styles.refField}
                  placeholder="Enter reference number"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label className={styles.notesLabel}>Notes</label>
          <textarea
            className={styles.notesField}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className={styles.footerSection}>
            <div className={styles.vehicleDetails}>
              <div>Vehicle Details</div>
              <div className={styles.vehicleName}>Toyota Camry XSE 2023</div>
              <div>Stock No: ST12345</div>
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={onCancel}
              >
                Cancel
              </button>
              <button type="submit" className={styles.submitButton}>
                Submit Payment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPayment;
