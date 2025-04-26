import React, { useState } from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Commission</label>
            <input
              type="text"
              name="enterCommission"
              placeholder="Enter Commission"
              className={styles.inputCommission}
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
