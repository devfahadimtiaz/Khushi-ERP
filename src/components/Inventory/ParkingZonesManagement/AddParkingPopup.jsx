import React, { useState, useEffect, use } from "react";
import styles from "./AddParkingPopup.module.css";
const API_URL = process.env.REACT_APP_API_URL;

const AddParkingPopup = ({ onClose, onSave, garageId }) => {
  // State for selected values
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [cars, setCars] = useState([]);
  const [zones, setZones] = useState([]);
  const [lines, setLines] = useState([]);
  const [slots, setSlots] = useState([]);
  // Fetch Cars
  const fetchCars = async () => {
    try {
      const response = await fetch(
        `${API_URL}/getUnParkedVehicles/${garageId}`
      );
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/getZone/${garageId}`)
      .then((res) => res.json())
      .then((data) => {
        setZones(data);
      });
  }, [garageId]);
  useEffect(() => {
    if (selectedZone) {
      fetch(`${API_URL}/getLineNumbers/${selectedZone}`)
        .then((res) => res.json())
        .then((data) => setLines(data))
        .catch((err) => console.error(err));
    }
  }, [selectedZone]);

  useEffect(() => {
    if (selectedRow) {
      fetch(`${API_URL}/getSlotNumber/${selectedRow}`)
        .then((res) => res.json())
        .then((data) => setSlots(data))
        .catch((error) => console.error(error));
    }
  }, [selectedRow]);

  // Handle car selection
  const handleCarSelect = (e) => {
    const { value } = e.target;
    setSelectedCar(value);
  };

  // Handle zone selection
  const handleZoneSelect = (e) => {
    const { value } = e.target;
    setSelectedZone(value);
  };

  // Handle row selection
  const handleRowSelect = (e) => {
    const { value } = e.target;
    setSelectedRow(value);
  };

  // Handle column selection
  const handleColumnSelect = (e) => {
    const { value } = e.target;
    setSelectedColumn(value);
  };

  // Close all dropdowns when clicking outside

  // Handle save button click
  const handleSave = async () => {
    if (!selectedCar || !selectedZone || !selectedRow || !selectedColumn) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/addParkingSlot/${selectedColumn}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedCar }), // Backend expects { selectedCar }
        }
      );

      const data = await response.json();

      if (response.ok) {
        onSave(); // call parent onSave if needed (like refreshing parking data)
        onClose();
      } else {
        alert(data.message || "Failed to add parking slot");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving parking data.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>Add New Parking</div>
          <div className={styles.closeButton} onClick={onClose}>
            ×
          </div>
        </div>

        {/* Car Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Car</div>
          <select
            className={styles.selectContainer}
            onChange={(e) => handleCarSelect(e)}
          >
            <option value="" className={styles.dropdownItem}>
              {" "}
              Select Car
            </option>
            {cars.map((car) => (
              <option
                key={car.id}
                className={styles.dropdownItem}
                value={car.id}
              >
                {car.stock_no} - {car.make} {car.model} {car.year}
              </option>
            ))}
          </select>
        </div>

        {/* Zone Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Zone</div>
          <select
            className={styles.selectContainer}
            onChange={(e) => handleZoneSelect(e)}
          >
            <option className={styles.dropdownItem} value="">
              Select Zone
            </option>
            {zones.map((zone) => (
              <option
                key={zone.id}
                value={zone.id}
                className={styles.dropdownItem}
              >
                {zone.name}
              </option>
            ))}
          </select>
        </div>

        {/* Row Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Line</div>
          <select
            className={styles.selectContainer}
            onChange={(e) => handleRowSelect(e)}
          >
            <option className={styles.dropdownItem} value="">
              Select Line
            </option>
            {lines.map((line) => (
              <option
                key={line.id}
                value={line.id}
                className={styles.dropdownItem}
              >
                {line.line_number}
              </option>
            ))}
          </select>
        </div>

        {/* Column Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Slot No.</div>
          <select
            className={styles.selectContainer}
            onChange={(e) => handleColumnSelect(e)}
          >
            <option className={styles.dropdownItem} value="">
              Select Slot
            </option>
            {slots.map((slot) => (
              <option
                key={slot.id}
                value={slot.id}
                className={styles.dropdownItem}
              >
                {slot.slot_number}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParkingPopup;
