import React, { useState, useEffect } from "react";
import styles from "./EditParkingPopup.module.css";

const API_URL = process.env.REACT_APP_API_URL;

const EditParkingPopup = ({ onClose, onSave, garageId }) => {
  // State for selected values
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [location, setLocation] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");

  const [parkedCars, setParkedCars] = useState([]);
  const [zones, setZones] = useState([]);
  const [lines, setLines] = useState([]);
  const [slots, setSlots] = useState([]);
  // Fetch Cars
  // State for dropdown visibility
  //Fetch Cars
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
  const handleCarSelect = (slotId) => {
    const selectedCar = parkedCars.find((car) => car.slot_id == slotId);
    setLocation(selectedCar.slot_number);
    setSelectedCar(selectedCar.slot_id);
    setSelectedVehicleId(selectedCar.vehicle_id);
  };

  // Handle row selection
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

  // Handle save button click
  const handleSave = async () => {
  try {
    if (!selectedVehicleId || !selectedColumn) {
      alert("Please select a vehicle and a slot before saving.");
      return;
    }

    // 1️⃣ First: Make previous parking slot vacant
    const response = await fetch(`${API_URL}/UpdateVehicleZone/${selectedCar}`);
    if (!response.ok) throw new Error("Failed to update previous parking zone");

    // 2️⃣ Second: Assign vehicle to new selected slot
    const updateParkingZone = await fetch(`${API_URL}/updateVehicleToNewSlot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vehicleId: selectedVehicleId,
        slotId: selectedColumn, // ✅ FIXED HERE
      }),
    });

    if (!updateParkingZone.ok) throw new Error("Failed to assign vehicle to new slot");

    const data = await updateParkingZone.json();
    onSave(); // 👈 optionally call parent’s onSave()
    onClose();
  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
};


  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>Edit Parking Zone</div>
          <div className={styles.closeButton} onClick={onClose}>
            ×
          </div>
        </div>

        <div className={styles.formContent}>
          {/* Car Selection */}
          <div className={styles.formGroup}>
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
          </div>
          {/* Zone and Location Row */}
          <div className={styles.formRow}>
            {/* Location Input */}
            <div className={styles.formGroup}>
              <div className={styles.formLabel}>Location</div>
              <input
                type="text"
                placeholder="Location is "
                className={styles.inputField}
                value={location}
                disabled
              />
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
          </div>

          {/* Row and Column Row */}
          <div className={styles.formRow}>
            {/* Row Selection */}
            <div className={styles.formGroup}>
              <div className={styles.formLabel}>Select Line No.</div>
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
              <div className={styles.formLabel}>Select SLot No</div>
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
          </div>

          {/* Action Buttons */}
          <div className={styles.buttonContainer}>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
            <button className={styles.saveButton} onClick={() => handleSave()}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditParkingPopup;
