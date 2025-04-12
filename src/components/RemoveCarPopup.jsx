import React, { useState, useEffect } from "react";
import styles from "./RemoveCarPopup.module.css";

const RemoveCarPopup = ({ isOpen, onClose, onConfirm, selectedCar = null }) => {
  // State for dropdown visibility
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);

  // Sample parked cars data (in a real app, this would come from props or API)
  const [parkedCars, setParkedCars] = useState([
    {
      id: 1,
      name: "Toyota Camry",
      stockNo: "TC-001",
      zone: "A1",
      spaceNumber: "3",
    },
    {
      id: 2,
      name: "Honda Civic",
      stockNo: "HC-002",
      zone: "B2",
      spaceNumber: "7",
    },
    { id: 3, name: "BMW X5", stockNo: "BX-003", zone: "A", spaceNumber: "12" },
    {
      id: 4,
      name: "Mercedes C-Class",
      stockNo: "MC-004",
      zone: "C3",
      spaceNumber: "5",
    },
    {
      id: 5,
      name: "Ford Ranger",
      stockNo: "FR-005",
      zone: "D4",
      spaceNumber: "9",
    },
  ]);

  // State for selected car
  const [selectedParkedCar, setSelectedParkedCar] = useState(
    selectedCar || parkedCars[0],
  );

  // Update selected car if prop changes
  useEffect(() => {
    if (selectedCar) {
      setSelectedParkedCar(selectedCar);
    }
  }, [selectedCar]);

  const handleCarSelect = (car) => {
    setSelectedParkedCar(car);
    setCarDropdownOpen(false);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(selectedParkedCar);
    onClose();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.carSelector}`)) {
        setCarDropdownOpen(false);
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

        <div
          className={styles.carSelector}
          onClick={() => setCarDropdownOpen(!carDropdownOpen)}
        >
          <div className={styles.carName}>
            {selectedParkedCar ? selectedParkedCar.name : "Select a car"}
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/8f8dccfdecc122af481de197ec5bec0d29f7f7b5?placeholderIfAbsent=true"
            className={styles.dropdownIcon}
            alt="Dropdown icon"
          />
          {carDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {parkedCars.map((car) => (
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

        <div className={styles.sectionTitle}>Parking Details</div>

        <div className={styles.parkingDetailsContainer}>
          <div className={styles.detailLabels}>
            <div className={styles.detailLabel}>Zone:</div>
            <div className={styles.detailLabel}>Space Number:</div>
          </div>
          <div className={styles.detailValues}>
            <div className={styles.detailValue}>
              {selectedParkedCar ? selectedParkedCar.zone : ""}
            </div>
            <div className={styles.detailValue}>
              {selectedParkedCar ? selectedParkedCar.spaceNumber : ""}
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={handleConfirm}>
            Confirm Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveCarPopup;
