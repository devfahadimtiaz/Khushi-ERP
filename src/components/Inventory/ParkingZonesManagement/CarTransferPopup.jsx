import React, { useState } from "react";
import styles from "./CarTransferPopup.module.css";

const CarTransferPopup = ({ isOpen, onClose, onTransfer }) => {
  const [fromCar, setFromCar] = useState(null);
  const [toCar, setToCar] = useState(null);
  const [notes, setNotes] = useState("");
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);

  // Sample car data - in a real app, this would come from props or API
  const cars = [
    {
      id: 1,
      name: "Toyota Land Cruiser",
      stockNo: "TLC-001",
      location: "Zone A, A2-12",
    },
    { id: 2, name: "Honda Civic", stockNo: "HC-002", location: "Zone B, B3-5" },
    { id: 3, name: "BMW X5", stockNo: "BMW-003", location: "Zone C, C1-8" },
    {
      id: 4,
      name: "Mercedes Benz C-Class",
      stockNo: "MB-004",
      location: "Zone A, A1-3",
    },
  ];

  // Sample car spaces - in a real app, this would come from props or API
  const carSpaces = [
    { id: 1, zone: "A", location: "A1-4", status: "Empty" },
    { id: 2, zone: "B", location: "B2-7", status: "Empty" },
    { id: 3, zone: "C", location: "C3-2", status: "Empty" },
    { id: 4, zone: "D", location: "D1-9", status: "Empty" },
  ];

  if (!isOpen) return null;

  const handleFromCarSelect = (car) => {
    setFromCar(car);
    setFromDropdownOpen(false);
  };

  const handleToCarSpaceSelect = (space) => {
    setToCar(space);
    setToDropdownOpen(false);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = () => {
    if (!fromCar || !toCar) {
      alert(
        "Please select both a car to transfer from and a space to transfer to",
      );
      return;
    }

    const transferData = {
      fromCar,
      toCar,
      notes,
      transferDate: new Date().toISOString(),
    };

    onTransfer(transferData);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>
            Transfer Cars Between Locations
          </div>
          <div className={styles.closeButton} onClick={onClose}>
            ×
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.formLabel}>From Car:</div>
          <div
            className={styles.selectContainer}
            onClick={() => setFromDropdownOpen(!fromDropdownOpen)}
          >
            <div className={styles.selectText}>
              {fromCar
                ? `${fromCar.name} (${fromCar.stockNo})`
                : "Select car to transfer from"}
            </div>
            <div className={styles.dropdownIcon}>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 1H1L5 9L9 1Z" stroke="black"></path>
              </svg>
            </div>
            {fromDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={styles.dropdownItem}
                    onClick={() => handleFromCarSelect(car)}
                  >
                    {car.name} ({car.stockNo}) - {car.location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.formLabel}>To Car Space:</div>
          <div
            className={styles.selectContainer}
            onClick={() => setToDropdownOpen(!toDropdownOpen)}
          >
            <div className={styles.selectText}>
              {toCar
                ? `Zone ${toCar.zone}, ${toCar.location}`
                : "Select car space to transfer to"}
            </div>
            <div className={styles.dropdownIcon}>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 1H1L5 9L9 1Z" stroke="black"></path>
              </svg>
            </div>
            {toDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {carSpaces.map((space) => (
                  <div
                    key={space.id}
                    className={styles.dropdownItem}
                    onClick={() => handleToCarSpaceSelect(space)}
                  >
                    Zone {space.zone}, {space.location} - {space.status}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Transfer Notes:</div>
          <textarea
            className={styles.textareaField}
            value={notes}
            onChange={handleNotesChange}
            placeholder="Enter any additional notes here..."
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={handleSubmit}>
            Confirm Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarTransferPopup;
