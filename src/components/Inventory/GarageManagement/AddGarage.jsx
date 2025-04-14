import React, { useState } from "react";
import styles from "./AddGarage.module.css";

const AddGarage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyLogo: null,
    country: "",
    currency: "",
    companyId: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      companyLogo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or state management here
  };

  const handleCancel = () => {
    // Navigate back or clear form
    setFormData({
      companyName: "",
      companyLogo: null,
      country: "",
      currency: "",
      companyId: "",
      description: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Add Garage or Division</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.logoUpload}>
            <span className={styles.logoLabel}>Company Logo</span>
            <label className={styles.uploadLabel}>
              <span className={styles.uploadText}>(Click to upload)</span>
              <input
                type="file"
                name="companyLogo"
                accept="image/*"
                onChange={handleFileUpload}
                className={styles.fileInput}
              />
            </label>
          </div>

          <div className={styles.rowFields}>
            <div className={styles.selectField}>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="japan">Japan</option>
                <option value="kenya">Kenya</option>
                <option value="uganda">Uganda</option>
                <option value="tanzania">Tanzania</option>
              </select>
            </div>

            <div className={styles.currencySelect}>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Currency
                </option>
                <option value="pkr">PKR</option>
                <option value="yen">Yen</option>
                <option value="ksh">KHS</option>
                <option value="tzs">TZS</option>
                <option value="ugs">UGS</option>
              </select>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/494c29d3c93b1e33a516b6d208d638fbd43cc416?placeholderIfAbsent=true"
                className={styles.dropdownIcon}
                alt="Dropdown icon"
              />
            </div>
          </div>

          <div className={styles.inputField}>
            <input
              type="text"
              name="companyId"
              placeholder="Company ID"
              value={formData.companyId}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.textareaField}>
            <textarea
              name="description"
              placeholder="Description or additional notes"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
            ></textarea>
          </div>

          <div className={styles.actionButtons}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGarage;
