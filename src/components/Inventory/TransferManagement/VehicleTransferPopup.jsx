import React, { useState } from "react";
import styles from "./VehicleTransferPopup.module.css";

const VehicleTransferPopup = ({ isOpen, onClose, vehicleData }) => {
  const [formData, setFormData] = useState({
    targetShowroom: "",
    location: "",
    transferDate: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer data:", { vehicle: vehicleData, ...formData });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>Transfer Vehicle</div>
          <div onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.closeIcon}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>

        <div className={styles.vehicleInfoContainer}>
          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>Vehicle</div>
              <div className={styles.infoValue}>
                {vehicleData?.name || "Toyota Camry"}
              </div>
            </div>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>VIN</div>
              <div className={styles.infoValue}>
                {vehicleData?.vin || "ABC123XYZ"}
              </div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>Color</div>
              <div className={styles.infoValue}>
                {vehicleData?.color || "Pearl White"}
              </div>
            </div>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>Price</div>
              <div className={styles.infoValue}>
                {vehicleData?.price || "$35,000"}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Target Showroom</div>
            <select
              className={styles.inputField}
              name="targetShowroom"
              value={formData.targetShowroom}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Showroom
              </option>
              <option value="main">Main Branch</option>
              <option value="ocean">Ocean Trading</option>
              <option value="tanzania">Tanzania</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Location</div>
            <select
              className={styles.inputField}
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="nairobi">Nairobi</option>
              <option value="mombasa">Mombasa</option>
              <option value="dar">Dar es Salaam</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Expected Transfer Date</div>
            <input
              type="date"
              className={styles.inputField}
              name="transferDate"
              value={formData.transferDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Transfer Notes</div>
            <textarea
              className={styles.textareaField}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Enter any additional notes here..."
            />
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.confirmButton}>
              Confirm Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleTransferPopup;
