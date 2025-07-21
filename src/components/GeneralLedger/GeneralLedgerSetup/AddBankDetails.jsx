import React, { useEffect } from "react";
import styles from "./AddBankDetails.module.css";
import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const AddBankDetails = ({ onBack, data }) => {
  const [formData, setFormData] = useState({
    //Bank Details
    selectShowroom: "",
    status: "",
    bankName: "",
    accountTitle: "",
    bankCode: "",
    bankBranchCode: "",
    accountNumber: "",
    address: "",
    swiftCode: "",
    currency: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        selectShowroom: data.showroom_id || "",
        status: data.status || "",
        bankName: data.bank_name || "",
        accountTitle: data.account_title || "",
        bankCode: data.bank_code || "",
        bankBranchCode: data.branch_code || "",
        accountNumber: data.account_number || "",
        address: data.address || "",
        swiftCode: data.swift_code || "",
        currency: data.currency || "",
      });
    }
  }, [data]);

  const [garage, setGarage] = useState([]);
  useEffect(() => {
    const fetchGarage = async () => {
      try {
        const res = await axios.get(`http://localhost:8083/api/garage`);
        const fetchedGarage = res.data;
        setGarage(fetchedGarage);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGarage();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("selectShowroom", formData.selectShowroom);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("bankName", formData.bankName);
    formDataToSend.append("accountTitle", formData.accountTitle);
    formDataToSend.append("bankCode", formData.bankCode);
    formDataToSend.append("bankBranchCode", formData.bankBranchCode);
    formDataToSend.append("accountNumber", formData.accountNumber);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("swiftCode", formData.swiftCode);
    formDataToSend.append("currency", formData.currency);

    const isEdit = Boolean(data && data.id);
    const url = isEdit
      ? `http://localhost:8083/api/editBank/${data.id}`
      : "http://localhost:8083/api/addBank";
    const method = isEdit ? "PUT" : "POST";
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "An unExpected Error Occurred");
        return;
      }
      if (
        result.message === "Bank Added Successfully" ||
        result.message === "Bank Updated Successfully"
      ) {
        toast.success(result.message || "Bank Added Successfully");
        window.location.reload(true);
        handleCancle();
        onBack();
      } else {
        toast.error(result.message || "An unExpected Error Occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network or server error occurred.");
    }
  };
  const handleCancle = () => {
    setFormData({
      selectShowroom: "",
      status: "",
      bankName: "",
      accountTitle: "",
      bankCode: "",
      bankBranchCode: "",
      accountNumber: "",
      address: "",
      swiftCode: "",
      currency: "",
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmission}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>
              {data ? "Edit Bank Details" : "Add Bank"}
            </div>
          </div>

          <div className={styles.contentPanel}>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Showroom</div>
              {garage.length > 0 && (
                <select
                  name="selectShowroom"
                  className={styles.statusSelect}
                  value={formData.selectShowroom}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  {garage.map((garg) => (
                    <option key={garg.id} value={garg.id}>
                      {garg.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Status</div>
              <select
                className={styles.statusSelect}
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option className={styles.selectPlaceholder} value="">
                  Select status
                </option>
                <option className={styles.selectPlaceholder} value="Active">
                  Active
                </option>

                <option className={styles.selectPlaceholder} value="Inactive">
                  Inactive
                </option>
                <option className={styles.selectPlaceholder} value="Blocked">
                  Blocked
                </option>
              </select>
            </div>
          </div>
          <div className={styles.contentPanel}>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Bank Name</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="bankName"
                placeholder="Enter Bank Name"
                value={formData.bankName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Account Title</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="accountTitle"
                placeholder="Enter Account Title"
                value={formData.accountTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Bank Code</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="bankCode"
                placeholder="Enter Bank Code"
                value={formData.bankCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.contentPanel}>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Branch Code</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="bankBranchCode"
                placeholder="Enter Branch Code"
                value={formData.bankBranchCode}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Account Number</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="accountNumber"
                placeholder="Enter Account Number"
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Address</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.contentPanel}>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Swift Code</div>
              <input
                type="text"
                className={styles.statusSelect}
                name="swiftCode"
                placeholder="Enter Swift Code"
                value={formData.swiftCode}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterLabel}>Currency</div>
              <select
                className={styles.statusSelect}
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
              >
                <option className={styles.selectPlaceholder}>
                  Select Currency
                </option>
                <option className={styles.selectPlaceholder} value="KES (KSh)">
                  USD ($)
                </option>

                <option className={styles.selectPlaceholder} value="KES (KSh)">
                  KES (KSh)
                </option>
                <option className={styles.selectPlaceholder} value="UGX (USh)">
                  UGX (USh)
                </option>
                <option className={styles.selectPlaceholder} value="TZS (TSh)">
                  TZS (TSh)
                </option>
                <option className={styles.selectPlaceholder} value=" PKR (Rs)">
                  PKR (Rs)
                </option>
                <option className={styles.selectPlaceholder} value="JPY (¥)">
                  JPY (¥)
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onBack}
          >
            Cancel
          </button>
          <button className={styles.createButton} type="submit">
            {" "}
            {data ? "Update Bank Details" : "Save Changes"}
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default AddBankDetails;
