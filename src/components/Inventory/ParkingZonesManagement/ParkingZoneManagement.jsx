import React, { useState, useEffect } from "react";
import styles from "./ParkingZoneManagement.module.css";
import AddParkingPopup from "./AddParkingPopup";
import EditParkingPopup from "./EditParkingPopup";
import CarTransferPopup from "./CarTransferPopup";
import RemoveCarPopup from "./RemoveCarPopup";
import EditZonePopup from "./EditZonePopup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const ParkingZoneManagement = ({ onBack }) => {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showTransferPopup, setShowTransferPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [showEditZonePopup, setShowEditZonePopup] = useState(false);
  const [activeZone, setActiveZone] = useState();
  const [searchStockNo, setSearchStockNo] = useState("");
  const [searchLocation, setSearchLocatoion] = useState("Search By Stock Number");
  const [phrases, setPhrases] = useState([]);
  const [selectedGarageId, setSelectedGarageId] = useState(null);
  const [zone, setZone] = useState([]);
  const [line, setLine] = useState([]);
  const [userInfo, setUserInfo] = useState()
    const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  useEffect(() => {
    if (userInfo && userInfo.showroom) {
      setSelectedGarageId([parseInt(userInfo.showroom)]);
    } else {
      setSelectedGarageId([]); // fallback
    }
  }, [userInfo]);

  const fetchGarage = async () => {
    try {
      const response = await fetch(`${API_URL}/GarageList`);
      const data = await response.json();

      setPhrases(data);
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    fetchGarage();
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/getZone/${selectedGarageId}`)
      .then((res) => res.json())
      .then((data) => {
        setZone(data);
      });
  }, [selectedGarageId]);

  useEffect(() => {
    fetch(`${API_URL}/getLineNumber/${activeZone}`)
      .then((res) => res.json())
      .then((data) => {
        setLine(data);
      });
  }, [activeZone]);

  // SLider of WOrds
  useEffect(() => {
  if (phrases.length > 0 && userInfo?.showroom) {
    const userShowroomId = parseInt(userInfo.showroom);
    const matchedIndex = phrases.findIndex((p) => p.id === userShowroomId);

    if (matchedIndex !== -1) {
      setIndex(matchedIndex);
      setSelectedGarageId(userShowroomId);
    } else {
      // fallback: default to first phrase
      setIndex(0);
      setSelectedGarageId(phrases[0].id);
    }
  }
}, [phrases, userInfo]);

  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? phrases.length - 1 : prevIndex - 1;
      setSelectedGarageId(phrases[newIndex]?.id);
      return newIndex;
    });
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % phrases.length;
      setSelectedGarageId(phrases[newIndex]?.id);
      return newIndex;
    });
  };

  // Update current parking data when active zone changes

  const handleZoneChange = (zoneId) => {
    setActiveZone(zoneId);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/getParkedVehicleByStockNo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stockNo: searchStockNo,
          garageId: selectedGarageId,
        }),
      });
      if (!response.ok) {
        console.log("Error in Backend");
      }
      const data = await response.json();

      const slot = data.slot;
      setSearchLocatoion(slot.slot_number);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setSearchStockNo("");
    setSearchLocatoion("");
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

  const handleSaveParking = () => {
    toast.success("Saving parking data:");
    // Here you would typically update your state or make an API call
    setShowAddPopup(false);
  };

  const handleSaveEditedParking = () => {
    toast.success("Saving edited parking data:");
    // Here you would typically update your state or make an API call
    setShowEditPopup(false);
  };
  const handleRemoveParking = () => {
    toast.success("Car is Removed from parking Slot");
    setShowRemovePopup(false);
  };
  const handleTransferParking = () => {
    toast.success("Cars Swap Successfully");
    setShowRemovePopup(false);
  };

  const handleEditZone = () => {
    setShowEditPopup(true);
  };

  const handleTransferCar = () => {
    setShowTransferPopup(true);
  };

  const handleRemoveCar = () => {
    setShowRemovePopup(true);
  };

  return (
    <div className={styles.parkingZoneContainer}>
      {showAddPopup && (
        <AddParkingPopup
          onClose={handleClosePopup}
          onSave={handleSaveParking}
          garageId={selectedGarageId}
        />
      )}
      {showEditPopup && (
        <EditParkingPopup
          onClose={handleClosePopup}
          onSave={handleSaveEditedParking}
          garageId={selectedGarageId}
        />
      )}
      {showTransferPopup && (
        <CarTransferPopup
          isOpen={showTransferPopup}
          onClose={handleClosePopup}
          onTransfer={handleTransferParking}
          garageId={selectedGarageId}
        />
      )}
      {showRemovePopup && (
        <RemoveCarPopup
          isOpen={showRemovePopup}
          onClose={handleClosePopup}
          onDelete={handleRemoveParking}
          garageId={selectedGarageId}
        />
      )}
      {showEditZonePopup && (
        <EditZonePopup isOpen={showEditZonePopup} onClose={handleClosePopup} />
      )}
      <div className={styles.marginContainer}>
        <div className={styles.header}>
          <div className={styles.sliderContainer}>
            {phrases.length > 0 ? (
              <>
                <div className={styles.title}>{phrases[index].name}</div>
                {userInfo ? "":
                <div className={styles.navButtons}>
                  
                  <button onClick={handlePrev} className={styles.navButton}>
                    Prev
                  </button>
                  <button onClick={handleNext} className={styles.navButton}>
                    Next
                  </button>
                </div>}
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className={styles.actionButtons}>
            {/*  <button
              className={styles.editZoneButton}
              onClick={() => setShowEditZonePopup(true)}
            >
              Edit Zones
            </button>*/}
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
              Swap
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
            value={searchStockNo}
            onChange={(e) => setSearchStockNo(e.target.value)}
          />
        </div>
        <div className={styles.searchActions}>
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
          <button className={styles.clearButton} onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className={styles.locationInfo}>
          <div className={styles.locationLabel}>Location of Car:</div>
          <input
            type="text"
            className={styles.searchBox}
            value={searchLocation}
            disabled
          />
        </div>

        <div className={styles.zoneButtons}>
          {zone.map((active) => (
            <button
              key={active.id}
              className={`${styles.zoneButton} ${
                activeZone === active.id ? styles.activeZone : ""
              }`}
              onClick={() => handleZoneChange(active.id)}
            >
              {active.name}
            </button>
          ))}
        </div>

        <div className={styles.parkingGrid}>
          {Array.isArray(line) && line.length > 0 ? (
            <>
              {/* Column Headers (Line Numbers) */}
              <div className={styles.gridRow}>
                <div className={styles.gridCell}></div>
                {line.map((l) => (
                  <div key={`header-${l.id}`} className={styles.gridHeaderCell}>
                    {l.line_number}
                  </div>
                ))}
              </div>

              {/* Calculate the maximum number of slots across all lines */}
              {(() => {
                const maxSlots = Math.max(...line.map((l) => l.slots.length));

                return Array.from({ length: maxSlots }).map((_, slotIndex) => (
                  <div key={`row-${slotIndex}`} className={styles.gridRow}>
                    <div className={styles.gridRowHeader}>{slotIndex + 1}</div>

                    {line.map((l) => {
                      const cell = l.slots[slotIndex];
                      return (
                        <div
                          key={`cell-${l.id}-${slotIndex}`}
                          className={`${styles.gridCell} ${
                            cell?.is_occupied
                              ? styles.occupiedSlot
                              : styles.emptySlot
                          }`}
                        >
                          {cell ? (
                            <>
                              {cell.vehicle_id ? (
                                <>
                                  {cell.vehicle_id && (
                                    <>
                                      <div className={styles.grid}>
                                        <div>({cell.slot_number})</div>
                                        <div>{cell.stock_no}</div>
                                      </div>
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  <div className={styles.grid}>
                                    <div>({cell.slot_number})</div>
                                    <div>Empty Space</div>
                                  </div>
                                </>
                              )}
                            </>
                          ) : (
                            <div className={styles.emptyCell}>--</div> // Empty placeholder if no slot
                          )}
                        </div>
                      );
                    })}
                  </div>
                ));
              })()}
            </>
          ) : (
            <div>Select Zone</div>
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
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ParkingZoneManagement;
