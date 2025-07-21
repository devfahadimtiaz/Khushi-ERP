import React, { useState, useEffect } from "react";
import styles from "./AddGarage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;
const API_UPLOAD = process.env.REACT_APP_API_UPLOADS

const AddGarage = ({ onBack, data }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyLogo: null,
    country: "",
    currency: "",
    address: "",
    phone:"",
    email:"",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        companyName: data.name || "",
        companyLogo: null,
        country: data.country || "",
        currency: data.currency || "",
        address: data.address || "",
        phone: data.phone_number || "",
        email: data.email || "",
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    setFormData((prev) => ({
      ...prev,
      companyLogo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.companyName);
    formDataToSend.append("logo", formData.companyLogo);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("currency", formData.currency);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);

    const isEdit = Boolean(data && data.id);
    const url = isEdit
      ? `${API_URL}/garage/${data.id}`
      : `${API_URL}/AddGarage`;
    const method = isEdit ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        toast.error(result.message || "An unexpected error occurred");
        return;
      }

      if (result.message === "Garage added successfully" || result.message === "Garage updated successfully") {
        toast.success(result.message);
        window.location.reload(true);
        handleCancel(); // Reset form
        onBack();       // Go back
  
      } else {
        toast.error("Unexpected response: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network or server error occurred.");
    }
  };

  const handleCancel = () => {
    setFormData({
      companyName: "",
      companyLogo: null,
      country: "",
      currency: "",
      address: "",
      email:"",
      phone:"",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>
          {data ? "Edit Garage or Division" : "Add Garage or Division"}
        </h1>

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
            {formData.companyLogo ? (
              <img
                src={URL.createObjectURL(formData.companyLogo)}
                alt="Preview"
                className={styles.logoPreview}
              />
            ) : data?.logo ? (
              <img
                src={`${API_UPLOAD}/BranchLogo/${data.logo}`}
                alt="Existing Logo"
                className={styles.logoPreview}
              />
            ) : null}
          </div>

          <div className={styles.rowFields}>
            <div className={styles.selectField}>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Country
                </option>
                <option value="Pakistan">Pakistan</option>
                <option value="Japan">Japan</option>
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Tanzania">Tanzania</option>
              </select>
            </div>

            <div className={styles.currencySelect}>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Currency
                </option>
                <option value="PKR">PKR</option>
                <option value="Yen">Yen</option>
                <option value="KHS">KHS</option>
                <option value="TZS">TZS</option>
                <option value="UGS">UGS</option>
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
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
           <div className={styles.inputField}>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputField}>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.actionButtons}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onBack}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              {data ? "Update Garage" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddGarage;
