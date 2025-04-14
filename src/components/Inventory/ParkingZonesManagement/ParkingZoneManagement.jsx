import React, { useState, useEffect } from "react";
import styles from "./ParkingZoneManagement.module.css";
import AddParkingPopup from "./AddParkingPopup";
import EditParkingPopup from "./EditParkingPopup";
import CarTransferPopup from "./CarTransferPopup";
import RemoveCarPopup from "./RemoveCarPopup";
import EditZonePopup from "./EditZonePopup";

const ParkingZoneManagement = ({ onBack }) => {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showTransferPopup, setShowTransferPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [showEditZonePopup, setShowEditZonePopup] = useState(false);
  const [activeZone, setActiveZone] = useState("A");
  const [searchStockNo, setSearchStockNo] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentParkingData, setCurrentParkingData] = useState(null);
  const [selectedParkingSpace, setSelectedParkingSpace] = useState(null);

  // Zone-specific configurations
  const zoneConfigurations = {
    A: {
      rows: 14,
      columns: 5,
      columnLabels: ["A1", "A2", "A3", "A4", "A5"],
      spaces: Array(14)
        .fill()
        .map(() => Array(5).fill("Empty Space")),
    },
    B: {
      rows: 10,
      columns: 6,
      columnLabels: ["B1", "B2", "B3", "B4", "B5", "B6"],
      spaces: Array(10)
        .fill()
        .map(() => Array(6).fill("Empty Space")),
    },
    C: {
      rows: 12,
      columns: 4,
      columnLabels: ["C1", "C2", "C3", "C4"],
      spaces: Array(12)
        .fill()
        .map(() => Array(4).fill("Empty Space")),
    },
    D: {
      rows: 8,
      columns: 8,
      columnLabels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
      spaces: Array(8)
        .fill()
        .map(() => Array(8).fill("Empty Space")),
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
      spaces: Array(6)
        .fill()
        .map(() => Array(10).fill("Empty Space")),
    },
  };

  // Update current parking data when active zone changes
  useEffect(() => {
    setCurrentParkingData(zoneConfigurations[activeZone]);
  }, [activeZone]);

  const handleZoneChange = (zone) => {
    setActiveZone(zone);
  };

  const handleSearch = () => {
    console.log("Searching for:", { searchStockNo, searchName });
  };

  const handleClear = () => {
    setSearchStockNo("");
    setSearchName("");
  };

  const handleAddCar = () => {
    setShowAddPopup(true);
  };

  const handleClosePopup = () => {
    setShowAddPopup(false);
    setShowEditPopup(false);
    setShowTransferPopup(false);
    setShowRemovePopup(false);
    setShowEditZonePopup(false);
  };

  const handleSaveParking = (parkingData) => {
    console.log("Saving parking data:", parkingData);
    // Here you would typically update your state or make an API call
    setShowAddPopup(false);
  };

  const handleSaveEditedParking = (parkingData) => {
    console.log("Saving edited parking data:", parkingData);
    // Here you would typically update your state or make an API call
    setShowEditPopup(false);
  };

  const handleEditZone = () => {
    // For demo purposes, we'll create some sample data
    // In a real app, you would select the actual parking space to edit
    const sampleParkingData = {
      car: { id: 1, name: "Toyota Land Cruiser", stockNo: "TLC-001" },
      zone: activeZone,
      location: `${activeZone}2-12`,
      row: 12,
      column: `${activeZone}2`,
      status: "Available",
      notes: "Sample notes for this parking space",
    };

    setSelectedParkingSpace(sampleParkingData);
    setShowEditPopup(true);
  };

  const handleTransferCar = () => {
    setShowTransferPopup(true);
  };

  const handleCarTransfer = (transferData) => {
    console.log("Transferring car:", transferData);
    // Here you would typically update your state or make an API call
  };

  const handleRemoveCar = () => {
    // For demo purposes, we'll create some sample data for the car to be removed
    // In a real app, you would select the actual car to remove
    const sampleCarData = {
      id: 2,
      name: "Toyota Land Cruiser",
      stockNo: "TLC-002",
      zone: "B",
      spaceNumber: "4",
    };

    setSelectedParkingSpace({
      car: sampleCarData,
      zone: sampleCarData.zone,
      location: `${sampleCarData.zone}-${sampleCarData.spaceNumber}`,
    });

    setShowRemovePopup(true);
  };

  const handleConfirmRemove = (carDetails) => {
    console.log("Confirmed removing car:", carDetails);
    // Here you would typically update your state or make an API call
    // For example, remove the car from the parking space in your data structure
    // and update the UI to show the space as available
  };

  return (
    <div className={styles.parkingZoneContainer}>
      {showAddPopup && (
        <AddParkingPopup
          onClose={handleClosePopup}
          onSave={handleSaveParking}
        />
      )}
      {showEditPopup && (
        <EditParkingPopup
          onClose={handleClosePopup}
          onSave={handleSaveEditedParking}
          parkingData={selectedParkingSpace}
        />
      )}
      {showTransferPopup && (
        <CarTransferPopup
          isOpen={showTransferPopup}
          onClose={handleClosePopup}
          onTransfer={handleCarTransfer}
        />
      )}
      {showRemovePopup && (
        <RemoveCarPopup
          isOpen={showRemovePopup}
          onClose={handleClosePopup}
          onConfirm={handleConfirmRemove}
          selectedCar={selectedParkingSpace?.car}
        />
      )}
      {showEditZonePopup && (
        <EditZonePopup isOpen={showEditZonePopup} onClose={handleClosePopup} />
      )}
      <div className={styles.marginContainer}>
        <div className={styles.header}>
          <div className={styles.title}>Khushi Motors Mombasa</div>
          <div className={styles.actionButtons}>
            <button
              className={styles.editZoneButton}
              onClick={() => setShowEditZonePopup(true)}
            >
              Edit Zones
            </button>
            <button className={styles.addButton} onClick={handleAddCar}>
              Add
            </button>
            <button className={styles.editButton} onClick={handleEditZone}>
              Edit
            </button>
            <button
              className={styles.transferButton}
              onClick={handleTransferCar}
            >
              Transfer
            </button>
            <button className={styles.removeButton} onClick={handleRemoveCar}>
              Remove
            </button>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchBox}
            placeholder="Search by Stock no"
          />
          <input
            type="text"
            className={styles.searchBox}
            placeholder="Search by Car Name"
          />
        </div>

        <div className={styles.locationInfo}>
          <div className={styles.locationLabel}>Location of Car:</div>
          <div className={styles.searchBox} placeholder="Search by Car Name">
            A2-12
          </div>
        </div>
        <div className={styles.searchActions}>
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
          <button className={styles.clearButton} onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className={styles.zoneButtons}>
          <button
            className={`${styles.zoneButton} ${activeZone === "A" ? styles.activeZone : ""}`}
            onClick={() => handleZoneChange("A")}
          >
            Zone (A)
          </button>
          <button
            className={`${styles.zoneButton} ${activeZone === "B" ? styles.activeZone : ""}`}
            onClick={() => handleZoneChange("B")}
          >
            Zone (B)
          </button>
          <button
            className={`${styles.zoneButton} ${activeZone === "C" ? styles.activeZone : ""}`}
            onClick={() => handleZoneChange("C")}
          >
            Zone (C)
          </button>
          <button
            className={`${styles.zoneButton} ${activeZone === "D" ? styles.activeZone : ""}`}
            onClick={() => handleZoneChange("D")}
          >
            Zone (D)
          </button>
          <button
            className={`${styles.zoneButton} ${activeZone === "E" ? styles.activeZone : ""}`}
            onClick={() => handleZoneChange("E")}
          >
            Zone (E)
          </button>
        </div>
        

        <div className={styles.parkingGrid}>
          {currentParkingData && (
            <>
              <div className={styles.gridRow}>
                <div className={styles.gridCell}></div>
                {currentParkingData.columnLabels.map((label, index) => (
                  <div
                    key={`header-${index}`}
                    className={styles.gridHeaderCell}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {Array.from({ length: currentParkingData.rows }).map(
                (_, rowIndex) => (
                  <div key={`row-${rowIndex}`} className={styles.gridRow}>
                    <div className={styles.gridRowHeader}>{rowIndex + 1}</div>
                    {Array.from({ length: currentParkingData.columns }).map(
                      (_, colIndex) => (
                        <div
                          key={`cell-${rowIndex}-${colIndex}`}
                          className={styles.gridCell}
                        >
                          {currentParkingData.spaces[rowIndex][colIndex]}
                        </div>
                      ),
                    )}
                  </div>
                ),
              )}
            </>
          )}
        </div>

        <div className={styles.legendContainer}>
          <div className={styles.legendItem}>
            <div className={styles.legendUnallocated}></div>
            <div className={styles.legendText}>Unallocated Space</div>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendAllocated}></div>
            <div className={styles.legendText}>Allocated Space</div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ParkingZoneManagement;
