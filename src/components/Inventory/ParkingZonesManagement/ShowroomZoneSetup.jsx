import React, { useState, useEffect } from "react";
import styles from "./ShowroomZoneSetup.module.css";
const API_URL = process.env.REACT_APP_API_URL;

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const ShowroomZoneSetup = () => {
  const [selectedShowroom, setSelectedShowroom] = useState("");
  const [numberOfZones, setNumberOfZones] = useState("");
  const [zones, setZones] = useState([]);
  const [garage, setGarage] = useState([]);
const [showroomZones, setShowroomZones] = useState([]);
  //Fetch Garage
  const fetchGarage = async () => {
    try {
      const response = await fetch(`${API_URL}/GarageList`);
      const data = await response.json();
      setGarage(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchShowroomZones = async () => {
  try {
    const response = await fetch(`${API_URL}/zones`);
    const data = await response.json();
    setShowroomZones(data); // Array of zones with showroomId
  } catch (error) {
    console.log("Error fetching zones: ", error);
  }
};
  useEffect(() => {
    fetchGarage();
    fetchShowroomZones();
  }, []);
  const getAvailableShowrooms = () => {
  const usedShowroomIds = showroomZones.map((zone) => zone.showroom_id);
  return garage.filter((showroom) => !usedShowroomIds.includes(showroom.id));
};

  const handleShowroomChange = (e) => {
    setSelectedShowroom(e.target.value);
    setNumberOfZones("");
    setZones([]);
  };

  const handleNumberOfZonesChange = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && Number(value) <= 26)) {
      setNumberOfZones(value);
      const newZones = Array.from({ length: Number(value) }, (_, i) => ({
        name: ALPHABETS[i],
        numberOfLines: "",
        lines: [],
      }));
      setZones(newZones);
    }
  };

  const handleNumberOfLinesChange = (zoneIndex, value) => {
    if (value === "" || (/^\d+$/.test(value) && Number(value) <= 50)) {
      setZones((prev) => {
        const updated = [...prev];
        updated[zoneIndex].numberOfLines = value;
        updated[zoneIndex].lines = Array.from(
          { length: Number(value) || 0 },
          () => ({
            slots: "",
          })
        );
        return updated;
      });
    }
  };

  const handleSlotsChange = (zoneIndex, lineIndex, value) => {
    if (value === "" || /^\d+$/.test(value)) {
      setZones((prev) => {
        const updated = [...prev];
        updated[zoneIndex].lines[lineIndex].slots = value;
        return updated;
      });
    }
  };
  const handleSave = async () => {
    const preparedData = {
      showroomId: selectedShowroom,
      zones: zones.map((zone, zoneIndex) => ({
        name: `Zone ${String.fromCharCode(65 + zoneIndex)}`,
        lines: zone.lines.map((line, lineIndex) => ({
          lineNumber: `${String.fromCharCode(65 + zoneIndex)}${lineIndex + 1}`,
          slots: Array.from(
            { length: parseInt(line.slots || 0) }, // ✅ use line.slots here
            (_, i) =>
              `${String.fromCharCode(65 + zoneIndex)}${lineIndex + 1}-${i + 1}`
          ),
        })),
      })),
    };
    console.log("Data : ", preparedData);
    try {
      const response = await fetch(`${API_URL}/showroom-zones`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(preparedData),
      });

      if (response.ok) {
        alert("Saved successfully!");
        handleReset();
      } else {
        console.error(await response.text());
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  const handleReset = () => {
    setSelectedShowroom("");
    setNumberOfZones("");
    setZones([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Showroom Zone Setup</div>
        </div>

        {/* Select Showroom */}
        <div className={styles.showroomCard}>
          <div className={styles.showroomTitle}>Select Showroom</div>
          <select
            className={styles.showroomDropdown}
            value={selectedShowroom}
            onChange={handleShowroomChange}
          >
            <option value="">Select Showroom</option>
            {getAvailableShowrooms().map((row) => (
              <option key={row.id} value={row.id}>
                {row.name}
              </option>
            ))}
            {/* Add more showroom options as needed */}
          </select>
        </div>

        {/* Enter Number of Zones */}
        {selectedShowroom && (
          <div className={styles.zonesCard}>
            <div className={styles.zonesTitle}>Number of Zones</div>
            <input
              type="text"
              className={styles.zonesInput}
              placeholder="Enter number of zones (1-26)"
              value={numberOfZones}
              onChange={handleNumberOfZonesChange}
            />
          </div>
        )}

        {/* Zone Configuration */}
        {zones.map((zone, zoneIndex) => (
          <div key={zone.name} className={styles.zoneCard}>
            <div className={styles.zoneTitle}>Zone {zone.name}</div>

            <div className={styles.zoneLinesLabel}>
              Number of Lines in Zone {zone.name}
            </div>
            <input
              type="text"
              className={styles.zoneLinesInput}
              placeholder="Enter number of lines"
              value={zone.numberOfLines}
              onChange={(e) =>
                handleNumberOfLinesChange(zoneIndex, e.target.value)
              }
            />

            {/* Parking slots per line */}
            {zone.lines.map((line, lineIndex) => (
              <div key={lineIndex} className={styles.parkingSlotContainer}>
                <div className={styles.slotLabel}>
                  Number of Parking Slots for Line {zone.name}
                  {lineIndex + 1}
                </div>
                <input
                  type="text"
                  className={styles.slotInput}
                  placeholder={`Enter slots for ${zone.name}${lineIndex + 1}`}
                  value={line.slots}
                  onChange={(e) =>
                    handleSlotsChange(zoneIndex, lineIndex, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        ))}

        {(zones.length > 0 || numberOfZones) &&
          ((
            <button className={styles.saveButton} onClick={handleSave}>
              Save
            </button>
          ) || (
            <button className={styles.resetButton} onClick={handleReset}>
              Reset
            </button>
          ))}
      </div>
    </div>
  );
};

export default ShowroomZoneSetup;
