import React, { useState } from "react";
import styles from "./RoadTestForm.module.css";

function RoadTestForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    address: "",
    drivingLicense: "",
    contact: "",
    make: "",
    model: "",
    color: "",
    stockNo: "",
    salesPerson: "",
    vehicleCheckout: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Road Test Form</h2>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                className={styles.inputField}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                className={styles.inputField}
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                className={styles.inputField}
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                className={styles.inputField}
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Driving License No</label>
              <input
                type="text"
                name="drivingLicense"
                placeholder="Enter license number"
                className={styles.inputField}
                value={formData.drivingLicense}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Contact</label>
              <input
                type="text"
                name="contact"
                placeholder="Enter contact number"
                className={styles.inputField}
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.carDetailsSection}>
            <div className={styles.twoColumnGrid}>
              <div className={styles.leftColumn}>
                <h3 className={styles.sectionTitle}>Car Details</h3>
                <label className={styles.inputLabel}>Make</label>
                <input
                  type="text"
                  name="make"
                  placeholder="Enter make"
                  className={styles.inputField}
                  value={formData.make}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.modelSection}>
                  <label className={styles.inputLabel}>Model</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Enter model"
                    className={styles.inputField}
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Color</label>
              <input
                type="text"
                name="color"
                placeholder="Enter color"
                className={styles.inputField}
                value={formData.color}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Stock No</label>
              <input
                type="text"
                name="stockNo"
                placeholder="Enter stock number"
                className={styles.inputField}
                value={formData.stockNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Sales Person</label>
              <input
                type="text"
                name="salesPerson"
                placeholder="Enter sales person name"
                className={styles.inputField}
                value={formData.salesPerson}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Vehicle Checkout</label>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="vehicleCheckout"
                  className={styles.checkbox}
                  checked={formData.vehicleCheckout}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.disclaimer}>
            By my signature below, I acknowledge and hereby agree to use the
            above vehicle for the purpose of a demonstration drive only. I
            further agree to return it by the agreed time stated above
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Road Test Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default RoadTestForm;
