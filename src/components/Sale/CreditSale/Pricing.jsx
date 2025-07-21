import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.css";

const Pricing = ({ handlePricingDataChange, PricingData, price }) => {
  const [formData, setFormData] = useState({
    price: price || 0,
    commitment: "",
    pendingPayment: 0,
    commission: "",
    tracker: "",
    insurance: "",
    totalPrice: 0,
  });

  useEffect(() => {
    const commitment = Number(PricingData.commitment || 0);
    const tracker = Number(PricingData.tracker || 0);
    const insurance = Number(PricingData.insurance || 0);
    const commission = Number(PricingData.commission || 0);
    const basePrice = Number(price || 0);

    const pendingPayment = basePrice - commitment;
    const totalPrice = basePrice + tracker + insurance + commission;

    const updatedData = {
      price: basePrice,
      commission,
      tracker,
      insurance,
      commitment,
      pendingPayment,
      totalPrice,
    };

    setFormData(updatedData);
   
  }, [PricingData, price]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value, // Don't convert to number here
    };

    // Convert to numbers only for calculation
    const priceNum = Number(updatedData.price || 0);
    const commitmentNum = Number(updatedData.commitment || 0);
    const trackerNum = Number(updatedData.tracker || 0);
    const insuranceNum = Number(updatedData.insurance || 0);
    const commissionNum = Number(updatedData.commission || 0);

    updatedData.pendingPayment = priceNum - commitmentNum;
    updatedData.totalPrice =
      priceNum + trackerNum + insuranceNum + commissionNum;

    setFormData(updatedData);
    handlePricingDataChange(updatedData);
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.sectionTitle}> Vehicle Pricing</div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Total Price</label>
          <input
            type="text"
            name="price"
            className={styles.input}
            value={formData.price}
            disabled
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Commitment </label>
          <input
            type="number"
            name="commitment"
            placeholder="Enter Commitment Payment"
            className={styles.input}
            value={formData.commitment}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Pending Payment</label>
          <input
            type="number"
            name="pendingPayment"
            disabled
            className={styles.input}
            value={formData.pendingPayment}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Tracker</label>
          <input
            type="number"
            name="tracker"
            placeholder="Enter Tracker Price"
            className={styles.input}
            value={formData.tracker}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Insurance</label>
          <input
            type="number"
            name="insurance"
            placeholder="Enter Insurance Price"
            className={styles.input}
            value={formData.insurance}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Commission</label>
          <input
            type="number"
            name="commission"
            placeholder="Enter Commission"
            className={styles.input}
            value={formData.commission}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Total Sale Price</label>
          <input
            type="number"
            name="totalPrice"
            className={styles.input}
            value={formData.totalPrice}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
