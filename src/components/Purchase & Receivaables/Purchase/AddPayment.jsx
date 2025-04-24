import React, { useState } from "react";
import styles from "./AddPayment.module.css";

const AddPayment = ({ onBack }) => {
  const [reference, setReference] = useState("Refx");
  const [paymentNumber, setPaymentNumber] = useState("");
  const [voucherNumber, setVoucherNumber] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Select Method");
  const [financialYear, setFinancialYear] = useState("Select Year");
  const [month, setMonth] = useState("Select Month");
  const [currency, setCurrency] = useState("Select Currency");
  const [accountCode, setAccountCode] = useState("");
  const [subCode, setSubCode] = useState("");
  const [enteredBy, setEnteredBy] = useState("");
  const [chequeNo, setChequeNo] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      reference,
      paymentNumber,
      voucherNumber,
      paymentDate,
      paymentMethod,
      financialYear,
      month,
      currency,
      accountCode,
      subCode,
      enteredBy,
      chequeNo,
      remarks,
    });
    // Return to payment list after submission
    onBack();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Add Payment</div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Reference</label>
            <select className={styles.selectField}>
              <option className={styles.selectText} disabled>
                Select Refrence
              </option>
              <option className={styles.selectText}>Refrence A</option>
              <option className={styles.selectText}>Refrence B</option>
              <option className={styles.selectText}>Refrence C</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Payment #</label>
            <input
              type="text"
              className={styles.input}
              value={paymentNumber}
              onChange={(e) => setPaymentNumber(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Voucher #</label>
            <input
              type="text"
              className={styles.input}
              value={voucherNumber}
              onChange={(e) => setVoucherNumber(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Payment Date</label>
            <div className={styles.dateInputWrapper}>
              <input
                type="date"
                className={styles.input}
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Payment Method</label>
            <select className={styles.selectField}>
              <option className={styles.selectText} disabled>
                Select Payment Methos
              </option>
              <option className={styles.selectText}>Cash</option>
              <option className={styles.selectText}>Bank Transfer</option>
              <option className={styles.selectText}>Credit Card</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Financial Year</label>
            <select className={styles.selectField}>
              <option className={styles.selectText} disabled>
                Select Financial Year
              </option>
              <option className={styles.selectText}>2021 - 2022</option>
              <option className={styles.selectText}>2022 - 2023</option>
              <option className={styles.selectText}>2023 - 2024</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Month</label>
            <select className={styles.selectField}>
            <option className={styles.selectText} disabled>Select Month</option>
              <option className={styles.selectText}>Jan</option>
              <option className={styles.selectText}>Feb</option>
              <option className={styles.selectText}>Mar</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Currency</label>
            <select className={styles.selectField}>
            <option className={styles.selectText} disabled>Select Currency</option>
              <option className={styles.selectText}>Yen</option>
              <option className={styles.selectText}>KSh</option>
              <option className={styles.selectText}>Pkr</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Account Code</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter account code"
              value={accountCode}
              onChange={(e) => setAccountCode(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Sub Code</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter sub code"
              value={subCode}
              onChange={(e) => setSubCode(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Entered By</label>
            <input
              type="text"
              className={styles.input}
              value={enteredBy}
              onChange={(e) => setEnteredBy(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Cheque No</label>
            <input
              type="text"
              className={styles.input}
              value={chequeNo}
              onChange={(e) => setChequeNo(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.remarksGroup}>
          <label className={styles.label}>Remarks</label>
          <textarea
            className={styles.textarea}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onBack}
          >
            Cancel
          </button>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPayment;
