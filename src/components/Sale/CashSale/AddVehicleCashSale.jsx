import React, { useState } from "react";
import styles from "./AddVehicleCashSale.module.css";
import SaleSummary from "./SaleSummary";
import CashBuyerDetails from "./CashBuyerDetails";
import Pricing from "./Pricing";

const AddVehicleCashSale = () => {
  const [activeTab, setActiveTab] = useState("buyer");
  const [showSaleSummary, setShowSaleSummary] = useState(false);
  // State for form fields could be added here if needed
  const [formData, setFormData] = useState({
    stockNumber: "",
    salesType: "",
    customerCategory: "",
    customerName: "",
    contactNumber: "",
    emailAddress: "",
    paymentMethod: "",
    saleDate: "",
    status: "",
    invoiceId: "",
    address: "",
    // Vehicle details
    fetchStockNo: "",
    model: "",
    yearOfManufacture: "",
    chassisNumber: "",
    stockNumberVehicle: "",
    engineCC: "",
    bodyType: "",
    registrationNumber: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log("Form cancelled");
  };
  const handleProcessSale = () => {
    setShowSaleSummary(true);
  };

  const handleBackFromSummary = () => {
    setShowSaleSummary(false);
  };

  return (
    <div className={styles.container}>
      {showSaleSummary ? (
        <SaleSummary onBack={handleBackFromSummary} />
      ) : (
        <>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
          />
          <div className={styles.header}>Add Vehicle Sale</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Stock Number</label>
                  <div className={styles.inputWithIcon}>
                    <input
                      type="text"
                      name="stockNumber"
                      placeholder="Enter stock number"
                      className={styles.input}
                      value={formData.stockNumber}
                      onChange={handleInputChange}
                    />
                    <div className={styles.searchButton}>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 17.6768L12.5 12.6768M14.1667 8.51009C14.1667 9.27614 14.0158 10.0347 13.7226 10.7424C13.4295 11.4501 12.9998 12.0932 12.4581 12.6349C11.9164 13.1766 11.2734 13.6062 10.5657 13.8994C9.85792 14.1925 9.09938 14.3434 8.33333 14.3434C7.56729 14.3434 6.80875 14.1925 6.10101 13.8994C5.39328 13.6062 4.75022 13.1766 4.20854 12.6349C3.66687 12.0932 3.23719 11.4501 2.94404 10.7424C2.65088 10.0347 2.5 9.27614 2.5 8.51009C2.5 6.96299 3.11458 5.47926 4.20854 4.3853C5.30251 3.29134 6.78624 2.67676 8.33333 2.67676C9.88043 2.67676 11.3642 3.29134 12.4581 4.3853C13.5521 5.47926 14.1667 6.96299 14.1667 8.51009Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Sales Type</label>
                  <select
                    name="salesType"
                    className={styles.select}
                    value={formData.salesType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Sales Type</option>
                    <option value="cash">Cash</option>
                    <option value="credit">Credit</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Customer Category</label>
                  <select
                    name="customerCategory"
                    className={styles.select}
                    value={formData.customerCategory}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    placeholder="Enter customer name"
                    className={styles.input}
                    value={formData.customerName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Contact Number</label>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Enter contact number"
                    className={styles.input}
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="text"
                    name="emailAddress"
                    placeholder="Enter email address"
                    className={styles.input}
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Payment Method</label>
                  <select
                    name="paymentMethod"
                    className={styles.select}
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="cash">Cash</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="mpesa">M-Pesa</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Sale Date</label>
                  <div className={styles.dateInput}>
                    <input
                      type="date"
                      name="saleDate"
                      className={styles.input}
                      value={formData.saleDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Status</label>
                  <select
                    name="status"
                    className={styles.select}
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Installment ID or Invoice ID
                  </label>
                  <input
                    type="text"
                    name="invoiceId"
                    placeholder="Auto Fetch According to system"
                    disabled
                    className={styles.input}
                    value={formData.invoiceId}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Address</label>
                <textarea
                  name="address"
                  className={styles.textarea}
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.sectionTitle}>Vehicle Details</div>

            <div className={styles.formSection}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Fetch from Stock no</label>
                  <input
                    type="text"
                    name="fetchStockNo"
                    placeholder="Fetch from Stock no"
                    className={styles.input}
                    value={formData.fetchStockNo}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Model</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.model}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Year of Manufacture</label>
                  <input
                    type="text"
                    name="yearOfManufacture"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.yearOfManufacture}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Chassis Number</label>
                  <input
                    type="text"
                    name="chassisNumber"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.chassisNumber}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Stock Number</label>
                  <input
                    type="text"
                    name="stockNumberVehicle"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.stockNumberVehicle}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Engine CC</label>
                  <input
                    type="text"
                    name="engineCC"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.engineCC}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Body Type</label>
                  <select
                    name="bodyType"
                    className={styles.select}
                    value={formData.bodyType}
                    onChange={handleInputChange}
                    disabled
                  >
                    <option value="">Select body type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="pickup">Pickup</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Registration Number</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div>
              {/* Tabs */}
              <div className={styles.tabsContainer}>
                <button
                  className={
                    activeTab === "buyer" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("buyer")}
                >
                  Buyer Details
                </button>
                <button
                  className={
                    activeTab === "pricing" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("pricing")}
                >
                  Pricing
                </button>
                <button
                  className={
                    activeTab === "agreement" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("agreement")}
                >
                  Agreement
                </button>
              </div>

              {/* Conditional Rendering */}
              <div className="tab-content">
              {activeTab === "buyer" && <CashBuyerDetails />}
              {activeTab === "pricing" && <Pricing />}
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.saveButton}
                onClick={handleProcessSale}
              >
                Save Sale
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddVehicleCashSale;
