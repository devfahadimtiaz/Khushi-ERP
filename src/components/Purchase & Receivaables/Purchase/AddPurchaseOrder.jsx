import React, { useState } from "react";
import styles from "./AddPurchaseOrder.module.css";

const AddPurchaseOrder = ({ onBack }) => {
  const [purchaseOrder, setPurchaseOrder] = useState("");
  const [poDate, setPoDate] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [financialYear, setFinancialYear] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const [supplier, setSupplier] = useState("");
  const [supplierContact, setSupplierContact] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [shipmentMethod, setShipmentMethod] = useState("");
  const [remarks, setRemarks] = useState("");
  const [shipmentCharges, setShipmentCharges] = useState("0.00");
  const [value, setValue] = useState("0.00");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Add Purchase Order</span>
        <div className={styles.headerRight}>
          <div className={styles.profileCircle} />
        </div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Purchase Order</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter PO number"
              value={purchaseOrder}
              onChange={(e) => setPurchaseOrder(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>PO Date</label>
            <div className={styles.selectWrapper}>
              <input
                type="date"
                className={styles.input}
                value={poDate}
                onChange={(e) => setPoDate(e.target.value)}
                placeholder="Select date"
              />
              
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Type</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
                <option value="Type C">Type C</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Status</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="Draft">Draft</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Financial Year</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={financialYear}
                onChange={(e) => setFinancialYear(e.target.value)}
              >
                <option value="" disabled>
                  Select financial year
                </option>
                <option value="2020-2021">2020-2021</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Active Month</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={activeMonth}
                onChange={(e) => setActiveMonth(e.target.value)}
              >
                <option value="" disabled>
                  Select active month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Supplier</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
              >
                <option value="" disabled>
                  Select supplier
                </option>
                <option value="Supplier A">Supplier A</option>
                <option value="Supplier B">Supplier B</option>
                <option value="Supplier C">Supplier C</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Supplier Contact</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter supplier contact"
              value={supplierContact}
              onChange={(e) => setSupplierContact(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Delivery Location</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select delivery location
                </option>
                <option value="Location A">Location A</option>
                <option value="Location B">Location B</option>
                <option value="Location C">Location C</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Shipment Method</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={shipmentMethod}
                onChange={(e) => setShipmentMethod(e.target.value)}
              >
                <option value="" disabled>
                  Select shipment method
                </option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Land">Land</option>
              </select>
              <svg
                className={styles.dropdownIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7E92A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.remarksSection}>
          <label className={styles.label}>Remarks &amp; Attachments</label>
          <textarea
            className={styles.textarea}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
          <div className={styles.fileUpload}>
            <label className={styles.fileButton}>
              Choose File
              <input type="file" hidden onChange={handleFileChange} />
            </label>
            <span className={styles.fileName}>
              {file ? file.name : "No file chosen"}
            </span>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Shipment Charges</label>
            <input
              type="text"
              className={styles.input}
              value={shipmentCharges}
              onChange={(e) => setShipmentCharges(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Value</label>
            <input
              type="text"
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.saveButton}>Save</button>
          <button className={styles.cancelButton} onClick={onBack}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPurchaseOrder;
