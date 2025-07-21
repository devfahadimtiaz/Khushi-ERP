import React, { useState, useEffect } from "react";
import styles from "./CarTransferPopup.module.css";
const API_URL = process.env.REACT_APP_API_URL;

const CarTransferPopup = ({ isOpen, onClose, onTransfer, garageId }) => {
  const [fromCar, setFromCar] = useState(null);
  const [toCar, setToCar] = useState(null);
  const [fromCarId, setFromCarId] = useState(null);
  const [fromSlotId, setFromSlotId] = useState(null);
  const [tocarId, setToCarId] = useState(null);
  const [toSlotId, setToSlotId] = useState(null);

  const [parkedCars, setParkedCars] = useState([]);

  const fetchParkedCars = async () => {
    try {
      const response = await fetch(`${API_URL}/getParkedVehicle/${garageId}`);
      const data = await response.json();
      setParkedCars(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchParkedCars();
  }, []);

  if (!isOpen) return null;

  const handleCarSelect = (e) => {
    const selectedId = e.target.value;
    const selectedCarObj = parkedCars.find((car) => car.slot_id == selectedId);
    setFromCar(selectedCarObj);
    setFromCarId(selectedCarObj.vehicle_id);
    setFromSlotId(selectedCarObj.slot_id);
  };

  const handleToCarSpaceSelect = (e) => {
    const selectedId = e.target.value;
    const selectedCarObj = parkedCars.find((car) => car.slot_id == selectedId);
    setToCar(selectedCarObj);
    setToCarId(selectedCarObj.vehicle_id);
    setToSlotId(selectedCarObj.slot_id);
  };

  const handleSubmit = async () => {
    if (!fromCarId || !fromSlotId || !tocarId || !toSlotId) {
      alert("Please select both cars/slots before submitting.");
      return;
    }

    console.log({ fromCarId, fromSlotId, tocarId, toSlotId }); // Debug

    try {
      const response = await fetch(`${API_URL}/SwapVehiclesSlots`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromCarId,
          fromSlotId,
          tocarId,
          toSlotId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onTransfer();
        onClose();
      } else {
        alert(`Swap failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error swapping vehicles:", error.message, error);
      alert("Something went wrong. Please try again.");
    }
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
          <select className={styles.selectContainer} onChange={handleCarSelect}>
            <option value="" className={styles.dropdownItem}>
              {" "}
              Select Car
            </option>
            {parkedCars.map((car) => (
              <option
                key={car.slot_id}
                className={styles.dropdownItem}
                value={car.slot_id}
              >
                {car.stock_no} - {car.make} {car.model} {car.year}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.formLabel}>To Car Space:</div>
          <select
            className={styles.selectContainer}
            onChange={handleToCarSpaceSelect}
          >
            <option value="" className={styles.dropdownItem}>
              {" "}
              Select Car
            </option>
            {parkedCars.map((car) => (
              <option
                key={car.slot_id}
                className={styles.dropdownItem}
                value={car.slot_id}
              >
                {car.stock_no} - {car.make} {car.model} {car.year}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={handleSubmit}>
            Confirm Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarTransferPopup;
