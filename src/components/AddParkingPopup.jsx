import React, { useState, useEffect } from "react";
import styles from "./AddParkingPopup.module.css";

const AddParkingPopup = ({ onClose, onSave }) => {
  // State for selected values
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  // State for dropdown visibility
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);
  const [zoneDropdownOpen, setZoneDropdownOpen] = useState(false);
  const [rowDropdownOpen, setRowDropdownOpen] = useState(false);
  const [columnDropdownOpen, setColumnDropdownOpen] = useState(false);

  // Sample car data
  const cars = [
    { id: 1, name: "Toyota Land Cruiser", stockNo: "TLC-001" },
    { id: 2, name: "Honda Civic", stockNo: "HC-002" },
    { id: 3, name: "BMW X5", stockNo: "BMW-003" },
    { id: 4, name: "Mercedes Benz C-Class", stockNo: "MB-004" },
    { id: 5, name: "Ford Ranger", stockNo: "FR-005" },
    { id: 6, name: "Nissan Patrol", stockNo: "NP-006" },
    { id: 7, name: "Lexus LX570", stockNo: "LX-007" },
  ];

  // Zone configurations from ParkingZoneManagement
  const zoneConfigurations = {
    A: {
      rows: 14,
      columns: 5,
      columnLabels: ["A1", "A2", "A3", "A4", "A5"],
    },
    B: {
      rows: 10,
      columns: 6,
      columnLabels: ["B1", "B2", "B3", "B4", "B5", "B6"],
    },
    C: {
      rows: 12,
      columns: 4,
      columnLabels: ["C1", "C2", "C3", "C4"],
    },
    D: {
      rows: 8,
      columns: 8,
      columnLabels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    },
    E: {
      rows: 6,
      columns: 10,
      columnLabels: [
        "E1",
        "E2",
        "E3",
        "E4",
        "E5",
        "E6",
        "E7",
        "E8",
        "E9",
        "E10",
      ],
    },
  };

  // Available zones
  const zones = Object.keys(zoneConfigurations);

  // Generate row numbers based on selected zone
  const getRowNumbers = () => {
    if (!selectedZone) return [];
    const rowCount = zoneConfigurations[selectedZone].rows;
    return Array.from({ length: rowCount }, (_, i) => i + 1);
  };

  // Get column labels based on selected zone
  const getColumnLabels = () => {
    if (!selectedZone) return [];
    return zoneConfigurations[selectedZone].columnLabels;
  };

  // Handle car selection
  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setCarDropdownOpen(false);
  };

  // Handle zone selection
  const handleZoneSelect = (zone) => {
    setSelectedZone(zone);
    setSelectedRow(null); // Reset row when zone changes
    setSelectedColumn(null); // Reset column when zone changes
    setZoneDropdownOpen(false);
  };

  // Handle row selection
  const handleRowSelect = (row) => {
    setSelectedRow(row);
    setRowDropdownOpen(false);
  };

  // Handle column selection
  const handleColumnSelect = (column) => {
    setSelectedColumn(column);
    setColumnDropdownOpen(false);
  };

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.selectContainer}`)) {
        setCarDropdownOpen(false);
        setZoneDropdownOpen(false);
        setRowDropdownOpen(false);
        setColumnDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle save button click
  const handleSave = () => {
    if (!selectedCar || !selectedZone || !selectedRow || !selectedColumn) {
      alert("Please fill in all fields");
      return;
    }

    // Create parking data object
    const parkingData = {
      car: selectedCar,
      zone: selectedZone,
      row: selectedRow,
      column: selectedColumn,
    };

    // Call the onSave function with the parking data
    onSave(parkingData);
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
          <div className={styles.formLabel}>Search Car</div>
          <div
            className={styles.selectContainer}
            onClick={() => setCarDropdownOpen(!carDropdownOpen)}
          >
            <div className={styles.selectText}>
              {selectedCar
                ? `${selectedCar.name} (${selectedCar.stockNo})`
                : "Select a car"}
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
            {carDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={styles.dropdownItem}
                    onClick={() => handleCarSelect(car)}
                  >
                    {car.name} ({car.stockNo})
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Zone Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Zone</div>
          <div
            className={styles.selectContainer}
            onClick={() => setZoneDropdownOpen(!zoneDropdownOpen)}
          >
            <div className={styles.selectText}>
              {selectedZone ? `Zone ${selectedZone}` : "Select a zone"}
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
            {zoneDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {zones.map((zone) => (
                  <div
                    key={zone}
                    className={styles.dropdownItem}
                    onClick={() => handleZoneSelect(zone)}
                  >
                    Zone {zone}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Row Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Row</div>
          <div
            className={styles.selectContainer}
            onClick={() => selectedZone && setRowDropdownOpen(!rowDropdownOpen)}
          >
            <div className={styles.selectText}>
              {selectedRow ? `Row ${selectedRow}` : "Select a row"}
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
            {rowDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {getRowNumbers().map((row) => (
                  <div
                    key={row}
                    className={styles.dropdownItem}
                    onClick={() => handleRowSelect(row)}
                  >
                    Row {row}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Column Selection */}
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>Select Column</div>
          <div
            className={styles.selectContainer}
            onClick={() =>
              selectedZone && setColumnDropdownOpen(!columnDropdownOpen)
            }
          >
            <div className={styles.selectText}>
              {selectedColumn ? `Column ${selectedColumn}` : "Select a column"}
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
            {columnDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {getColumnLabels().map((column) => (
                  <div
                    key={column}
                    className={styles.dropdownItem}
                    onClick={() => handleColumnSelect(column)}
                  >
                    Column {column}
                  </div>
                ))}
              </div>
            )}
          </div>
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
