import React, { useState } from "react";
import styles from "./VehicleReceivingPopup.module.css";

const VehicleReceivingPopup = ({ isOpen, onClose, vehicleData }) => {
  const [formData, setFormData] = useState({
    parkingZone: "",
    receivingTime: "",
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
    console.log("Receiving confirmation data:", {
      vehicle: vehicleData,
      ...formData,
    });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>Confirm Vehicle Receiving</div>
          <div onClick={onClose} className={styles.closeIconWrapper}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.closeIcon}
            >
              <path
                d="M18.3525 6.10181L6.35254 18.1018M6.35254 6.10181L18.3525 18.1018"
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
            <div className={styles.infoLabel}>Transfer ID:</div>
            <div className={styles.infoValue}>
              {vehicleData?.transferId || "TRF003"}
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Vehicle:</div>
            <div className={styles.infoValue}>
              {vehicleData?.vehicleName || "BMW X5 (2023)"}
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>From:</div>
            <div className={styles.infoValue}>
              {vehicleData?.fromShowroom || "Khushi Motors Uganda"}
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>VIN:</div>
            <div className={styles.infoValue}>
              {vehicleData?.vin || "GHI789RST"}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Parking Zone</div>
            <input
              type="text"
              className={styles.inputField}
              name="parkingZone"
              value={formData.parkingZone}
              onChange={handleChange}
              placeholder="Enter parking Zone number"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Receiving Time</div>
            <input
              type="datetime-local"
              className={styles.inputField}
              name="receivingTime"
              value={formData.receivingTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Notes</div>
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
              Confirm Receiving
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleReceivingPopup;
