import React, { useState, useEffect } from "react";
import styles from "./RemoveCarPopup.module.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const RemoveCarPopup = ({ isOpen, onClose, onDelete ,garageId }) => {
  // State for dropdown visibility
  const [parkedCars, setParkedCars] = useState([]);
  const [selectedParkedCar, setSelectedParkedCar] = useState("");
  const [selectedslot, setSelectedSlot] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Fetch Park Cars Cars
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
    if (garageId) fetchParkedCars();
  }, [garageId]);
  useEffect(() => {
    if (isOpen) {
      setSelectedParkedCar("");
      setSelectedSlot("");
      setVehicleId("");
      fetchParkedCars();
    }
  }, [isOpen, garageId]);

  // Sample parked cars data (in a real app, this would come from props or API)

  // State for selected car

  // Update selected car if prop changes

  const handleCarSelect = (selectedSlotId) => {
    setSelectedParkedCar(selectedSlotId);
    const selectedCarObj = parkedCars.find(
      (car) => car.slot_id == selectedSlotId
    );
    if (selectedCarObj) {
      setSelectedSlot(selectedCarObj.slot_number);
      setVehicleId(selectedCarObj.vehicle_id);
    } else {
      setSelectedSlot(""); // Clear if not found
    }
  };

  const handleCancel = () => {
    onClose();
  };


  const handleConfirm = async () => {
    try {
      if (!vehicleId || !selectedParkedCar) {
        console.error("Please select a car first");
        return;
      }

      setIsLoading(true); // start loading

      const response = await fetch(
        `${API_URL}/UpdateVehicleZone/${selectedParkedCar}`
      );
      if (!response.ok) throw new Error("Failed to update vehicle zone");

      const deleteResponse = await axios.put(
        `${API_URL}/deleteParkedVehicle/${vehicleId}`
      );
      if (deleteResponse.status !== 200)
        throw new Error("Failed to delete vehicle");
      onDelete()
      onClose();
    } catch (error) {
      console.error(error);
      console.error(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false); // stop loading
      fetchParkedCars();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.carSelector}`)) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.popupTitle}>Remove Car from Parking</div>

        <div className={styles.formLabel}>Select Car</div>

        <select
          className={styles.selectContainer}
          onChange={(e) => handleCarSelect(e.target.value)}
        >
          <option value="" className={styles.dropdownItem}>
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

        <div className={styles.sectionTitle}>Parking Details</div>

        <div className={styles.parkingDetailsContainer}>
          <div className={styles.detailLabels}>
            <div className={styles.detailLabel}>Space Number:</div>
          </div>
          <div className={styles.detailValues}>
            <div className={styles.detailValue}>{selectedslot}</div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button
            className={styles.confirmButton}
            onClick={handleConfirm}
            disabled={!selectedParkedCar || isLoading}
          >
            {isLoading ? "Removing..." : "Confirm Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveCarPopup;
