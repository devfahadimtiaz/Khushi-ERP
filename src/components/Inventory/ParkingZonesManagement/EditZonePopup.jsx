import React, { useState } from "react";
import styles from "./EditZonePopup.module.css";

const EditZonePopup = ({ isOpen, onClose }) => {
  const [selectedShowroom, setSelectedShowroom] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [showroomDropdownOpen, setShowroomDropdownOpen] = useState(false);
  const [zoneDropdownOpen, setZoneDropdownOpen] = useState(false);

  // Sample data for showrooms and zones
  const showrooms = [
    "Khushi Motors Mombasa",
    "Khushi Motors Nairobi",
    "Khushi Motors Kisumu",
  ];
  const zones = ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"];

  // Sample row configuration data
  const rowConfigurations = [
    { row: 1, slots: 12 },
    { row: 2, slots: 12 },
    { row: 3, slots: 10 },
    { row: 4, slots: 10 },
    { row: 5, slots: 10 },
    { row: 6, slots: 10 },
  ];

  const handleShowroomSelect = (showroom) => {
    setSelectedShowroom(showroom);
    setShowroomDropdownOpen(false);
  };

  const handleZoneSelect = (zone) => {
    setSelectedZone(zone);
    setZoneDropdownOpen(false);
  };

  const handleAdd = () => {
    // Handle adding or saving zone configuration
    console.log("Saving zone configuration");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.header}>
          <div className={styles.title}>Showroom Zone Setup</div>
        </div>

        <div className={styles.selectionRow}>
          <div className={styles.selectionItem}>
            <div
              className={styles.dropdown}
              onClick={() => setShowroomDropdownOpen(!showroomDropdownOpen)}
            >
              <div className={styles.dropdownText}>
                {selectedShowroom || "Select Showroom"}
              </div>
              <div className={styles.dropdownIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 7.5L9.99996 13.3333L4.16663 7.5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              {showroomDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {showrooms.map((showroom, index) => (
                    <div
                      key={index}
                      className={styles.dropdownItem}
                      onClick={() => handleShowroomSelect(showroom)}
                    >
                      {showroom}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.selectionItem}>
            <div
              className={styles.dropdown}
              onClick={() => setZoneDropdownOpen(!zoneDropdownOpen)}
            >
              <div className={styles.dropdownText}>
                {selectedZone || "Select Zone"}
              </div>
              <div className={styles.dropdownIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 7.5L9.99996 13.3333L4.16663 7.5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              {zoneDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {zones.map((zone, index) => (
                    <div
                      key={index}
                      className={styles.dropdownItem}
                      onClick={() => handleZoneSelect(zone)}
                    >
                      {zone}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.configurationContainer}>
          <div className={styles.configurationTitle}>Row Configuration</div>
          <div className={styles.rowsContainer}>
            {rowConfigurations.map((config, index) => (
              <div key={index} className={styles.rowItem}>
                <div className={styles.rowLabel}>Row {config.row}</div>
                
                  <input type="text" className={styles.slotContainer} placeholder="Number of Slots"/>
              
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.addButton} onClick={handleAdd}>
            Add
          </button>
          <button className={styles.backButton} onClick={onClose}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditZonePopup;
