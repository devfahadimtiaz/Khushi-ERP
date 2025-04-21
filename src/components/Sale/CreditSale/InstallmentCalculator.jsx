import React, { useState } from "react";
import styles from "./InstallmentCalculator.module.css";
import CameraPopup from "../Componenet/CameraPopup";

const InstallmentCalculator = () => {
  const sampleData = [
    {
      srNo: "1",
      installmentNo: "Installment 1",
      dueDate: "April 1, 2025",
      motorVehicleAmount: "10000",
      insuranceAmount: "200",
      trackerAmount: "100",
      total: "10300",
    },
    {
      srNo: "2",
      installmentNo: "Installment 2",
      dueDate: "May 1, 2025",
      motorVehicleAmount: "10000",
      insuranceAmount: "200",
      trackerAmount: "100",
      total: "10300",
    },
    {
      srNo: "3",
      installmentNo: "Installment 3",
      dueDate: "June 1, 2025",
      motorVehicleAmount: "10000",
      insuranceAmount: "200",
      trackerAmount: "100",
      total: "10300",
    },
  ];
  const [formData, setFormData] = useState({
    // Buyer details
    firstName: "",
    lastName: "",
    nationalId: "",
    kraPinNumber: "",
    occupation: "",
    state: "",
    streetNumber: "",
    city: "",
    zipCode: "",
    businessAddress: "",
    emailBuyer: "",
    socialMedia: "",
    contactNumberBuyer: "",
    residenceContactNumber: "",
    documents: "",
    capturedImage: "",
  });
  const [showCameraPopup, setShowCameraPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div className={styles.formSection}>
        <div className={styles.sectionTitle}> Select Pricing Type</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Type</label>
            <select className={styles.input} onChange={handleInputChange}>
              <option className={styles.options}> Select Type </option>
              <option className={styles.options}> Auto </option>
              <option className={styles.options}> Manual </option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Tenure</label>
            <select className={styles.input} onChange={handleInputChange}>
              <option className={styles.options}> Select Tenure </option>
              <option className={styles.options}> 12 Months </option>
              <option className={styles.options}> 24 Months </option>
              <option className={styles.options}> 36 Months </option>
              <option className={styles.options}> 48 Months </option>
              <option className={styles.options}> 60 Months </option>
            </select>
          </div>
        </div>
        <div className={styles.sectionTitle}> Vehicle Pricing</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Price</label>
            <input
              type="text"
              name="totalPrice"
              placeholder="Auto Fetch"
              className={styles.input}
              value={formData.firstName}
              disabled
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Down Payment</label>
            <input
              type="text"
              name="downPayment"
              placeholder="Enter Down Payment"
              className={styles.input}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pending Payment</label>
            <input
              type="text"
              name="pendingPayment"
              placeholder="Auto Calculate"
              disabled
              className={styles.input}
              value={formData.nationalId}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sectionTitle}> Insurance Pricing</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Price</label>
            <input
              type="text"
              name="totalPrice"
              placeholder="Enter Total Price"
              className={styles.input}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Down Payment</label>
            <input
              type="text"
              name="downPayment"
              placeholder="Enter Down Payment"
              className={styles.input}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pending Payment</label>
            <input
              type="text"
              name="pendingPayment"
              placeholder="Auto Calculate"
              disabled
              className={styles.input}
              value={formData.nationalId}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sectionTitle}> Tracker Pricing</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Price</label>
            <input
              type="text"
              name="totalPrice"
              placeholder="Enter Total Price"
              className={styles.input}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Down Payment</label>
            <input
              type="text"
              name="downPayment"
              placeholder="Enter Down Payment"
              className={styles.input}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pending Payment</label>
            <input
              type="text"
              name="pendingPayment"
              placeholder="Auto Calculate"
              disabled
              className={styles.input}
              value={formData.nationalId}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sectionTitle}> Brocker</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Commission</label>
            <input
              type="text"
              name="commission"
              placeholder="Commission"
              className={styles.inputCommission}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          </div>
        <div className={styles.sectionTitle}>Extra</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Grace Period</label>
            <input
              type="text"
              name="totalPrice"
              placeholder="Enter Grace Period"
              className={styles.input}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Penalty</label>
            <input
              type="text"
              name="downPayment"
              placeholder="Enter Panalty"
              className={styles.input}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.uploadActions}>
              <span className={styles.captureText} type="button">
                Make Installments
              </span>
            </button>
          </div>
        </div>
        <div className={styles.sectionTitles}>Installment Schedule</div>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Sr No.</div>
          <div className={styles.tableHeaderCell}>Installment No.</div>
          <div className={styles.tableHeaderCellCustomer}>Due Date</div>
          <div className={styles.tableHeaderCell}>Motor Vehicle Amount</div>
          <div className={styles.tableHeaderCell}>Insurance Amount</div>
          <div className={styles.tableHeaderCell}>Tracker Amount</div>
          <div className={styles.tableHeaderCell}>Total</div>
          <div className={styles.tableHeaderCell}>Actions</div>
        </div>

        {/* Sample table rows with mock data */}
        {sampleData.map((row, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>{row.srNo}</div>
            <div className={styles.tableCell}>{row.installmentNo}</div>
            <div className={styles.tableCellCustomer}>{row.dueDate}</div>
            <div className={styles.tableCell}>{row.motorVehicleAmount}</div>
            <div className={styles.tableCell}>{row.insuranceAmount}</div>
            <div className={styles.tableCell}>{row.trackerAmount}</div>
            <div className={styles.tableCell}>{row.total}</div>
            <button className={styles.tableCellButton}>View Details</button>

          </div>
        ))}
      </div>
    </>
  );
};
export default InstallmentCalculator;
