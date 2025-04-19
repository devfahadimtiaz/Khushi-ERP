import React, { useState } from "react";
import styles from "./Pricing.module.css";
import CameraPopup from "../Componenet/CameraPopup";

const Pricing = () => {
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
            <label className={styles.label}>Commitment </label>
            <input
              type="text"
              name="downPayment"
              placeholder="Enter Commitment Payment"
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
      
          
        

          

      </div>
    </>
  );
};
export default Pricing;
