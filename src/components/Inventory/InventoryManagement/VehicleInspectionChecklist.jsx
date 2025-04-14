import React, { useState } from "react";
import styles from "./VehicleInspectionChecklist.module.css";

const VehicleInspectionChecklist = () => {
  // State for each section's radio selections
  const [exteriorChecks, setExteriorChecks] = useState({
    overallAppearance: "",
    externalMirrorsRight: "",
    externalMirrorsLeft: "",
    powerWindows: "",
    headLightLenses: "",
    tailLightLenses: "",
    antenna: "",
    wipers: "",
    frontBumper: "",
    rearBumper: "",
    fogSportLights: "",
  });

  const [interiorChecks, setInteriorChecks] = useState({
    seats: "",
    safetyBelts: "",
    floorMats: "",
    radio: "",
    cdDvdPlayer: "",
    speakers: "",
    dashboard: "",
    gearShift: "",
    sunvisor: "",
    acControls: "",
  });

  const [engineChecks, setEngineChecks] = useState({
    wiringHarness: "",
    battery: "",
    engineOil: "",
    coolant: "",
    brakeFluid: "",
  });

  const [wheelChecks, setWheelChecks] = useState({
    condition: "",
    hubCaps: "",
    wheelCovers: "",
    alloyRims: "",
    spareWheel: "",
  });

  // Handle radio button change
  const handleRadioChange = (section, item, option) => {
    switch (section) {
      case "exterior":
        setExteriorChecks({
          ...exteriorChecks,
          [item]: option,
        });
        break;
      case "interior":
        setInteriorChecks({
          ...interiorChecks,
          [item]: option,
        });
        break;
      case "engine":
        setEngineChecks({
          ...engineChecks,
          [item]: option,
        });
        break;
      case "wheel":
        setWheelChecks({
          ...wheelChecks,
          [item]: option,
        });
        break;
      default:
        break;
    }
  };

  // Select all radio buttons in a section with the same value
  const selectAllInSection = (section, value) => {
    switch (section) {
      case "exterior":
        const updatedExterior = { ...exteriorChecks };
        Object.keys(updatedExterior).forEach((item) => {
          updatedExterior[item] = value;
        });
        setExteriorChecks(updatedExterior);
        break;
      case "interior":
        const updatedInterior = { ...interiorChecks };
        Object.keys(updatedInterior).forEach((item) => {
          updatedInterior[item] = value;
        });
        setInteriorChecks(updatedInterior);
        break;
      case "engine":
        const updatedEngine = { ...engineChecks };
        Object.keys(updatedEngine).forEach((item) => {
          updatedEngine[item] = value;
        });
        setEngineChecks(updatedEngine);
        break;
      case "wheel":
        const updatedWheel = { ...wheelChecks };
        Object.keys(updatedWheel).forEach((item) => {
          updatedWheel[item] = value;
        });
        setWheelChecks(updatedWheel);
        break;
      default:
        break;
    }
  };

  // Render a checklist item with radio buttons
  const renderChecklistItem = (section, item, label, stateObj) => {
    return (
      <div className={styles.checklistItem}>
        <span className={styles.itemLabel}>{label}</span>
        <div className={styles.optionsGroup}>
          <label className={styles.optionLabel}>
            <input
              type="radio"
              name={`${section}-${item}`}
              className={styles.radioInput}
              checked={stateObj[item] === "S"}
              onChange={() => handleRadioChange(section, item, "S")}
            />
            <span className={styles.optionText}>S</span>
          </label>
          <label className={styles.optionLabel}>
            <input
              type="radio"
              name={`${section}-${item}`}
              className={styles.radioInput}
              checked={stateObj[item] === "D"}
              onChange={() => handleRadioChange(section, item, "D")}
            />
            <span className={styles.optionText}>D</span>
          </label>
          <label className={styles.optionLabel}>
            <input
              type="radio"
              name={`${section}-${item}`}
              className={styles.radioInput}
              checked={stateObj[item] === "SC"}
              onChange={() => handleRadioChange(section, item, "SC")}
            />
            <span className={styles.optionText}>SC</span>
          </label>
          <label className={styles.optionLabel}>
            <input
              type="radio"
              name={`${section}-${item}`}
              className={styles.radioInput}
              checked={stateObj[item] === "M"}
              onChange={() => handleRadioChange(section, item, "M")}
            />
            <span className={styles.optionText}>M</span>
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
      />

      

      {/* Exterior Section */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Exterior</div>
          <div className={styles.selectAllControls}>
            <span>Select All:</span>
            <button
              className={styles.checkButton}
              onClick={() => selectAllInSection("exterior", "S")}
            >
              Check
            </button>
            <button
              className={styles.uncheckButton}
              onClick={() => selectAllInSection("exterior", "")}
            >
              Uncheck
            </button>
          </div>
        </div>
        <div className={styles.verifyDiv}>
        <div className={styles.checklistGrid}>
          {renderChecklistItem(
            "exterior",
            "overallAppearance",
            "Overall Appearance",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "externalMirrorsRight",
            "External Mirrors - Right",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "externalMirrorsLeft",
            "External Mirrors - Left",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "powerWindows",
            "Power Windows",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "headLightLenses",
            "Head Light Lenses",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "tailLightLenses",
            "Tail Light Lenses",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "antenna",
            "Antenna",
            exteriorChecks,
          )}
          {renderChecklistItem("exterior", "wipers", "Wipers", exteriorChecks)}
          {renderChecklistItem(
            "exterior",
            "frontBumper",
            "Front Bumper",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "rearBumper",
            "Rear Bumper",
            exteriorChecks,
          )}
          {renderChecklistItem(
            "exterior",
            "fogSportLights",
            "Fog/Sport Lights",
            exteriorChecks,
          )}
        </div>
        <div className={styles.gridImg}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/56faa18be056499edbd94ea3408b88a7c876c4a2?placeholderIfAbsent=true" alt="Car side view" className={styles.sectionImage} />
        </div>
      </div>
      </div>

      {/* Interior Section */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Interior</div>
          <div className={styles.selectAllControls}>
            <span>Select All:</span>
            <button
              className={styles.checkButton}
              onClick={() => selectAllInSection("interior", "S")}
            >
              Check
            </button>
            <button
              className={styles.uncheckButton}
              onClick={() => selectAllInSection("interior", "")}
            >
              Uncheck
            </button>
          </div>
        </div>
        <div className={styles.verifyDiv}>
        <div className={styles.checklistGrid}>
          {renderChecklistItem("interior", "seats", "Seats", interiorChecks)}
          {renderChecklistItem(
            "interior",
            "safetyBelts",
            "Safety Belts",
            interiorChecks,
          )}
          {renderChecklistItem(
            "interior",
            "floorMats",
            "Floor Mats",
            interiorChecks,
          )}
          {renderChecklistItem("interior", "radio", "Radio", interiorChecks)}
          {renderChecklistItem(
            "interior",
            "cdDvdPlayer",
            "CD/DVD Player",
            interiorChecks,
          )}
          {renderChecklistItem(
            "interior",
            "speakers",
            "Speakers",
            interiorChecks,
          )}
          {renderChecklistItem(
            "interior",
            "dashboard",
            "Dashboard",
            interiorChecks,
          )}
          {renderChecklistItem(
            "interior",
            "gearShift",
            "Gear Shift",
            interiorChecks,
          )}
          {renderChecklistItem(
            "interior",
            "sunvisor",
            "Sunvisor",
            interiorChecks,
          )}
          {renderChecklistItem(
            "interior",
            "acControls",
            "AC Controls",
            interiorChecks,
          )}
        </div>
        <div className={styles.gridImg}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11c0afb9a4407d0e43ad7846e97e43230d184277?placeholderIfAbsent=true"
          alt="Car interior view"
          className={styles.sectionImage}
        />
        </div>
      </div>
      </div>

      {/* Engine Compartment Section */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Engine Compartment</div>
          <div className={styles.selectAllControls}>
            <span>Select All:</span>
            <button
              className={styles.checkButton}
              onClick={() => selectAllInSection("engine", "S")}
            >
              Check
            </button>
            <button
              className={styles.uncheckButton}
              onClick={() => selectAllInSection("engine", "")}
            >
              Uncheck
            </button>
          </div>
        </div>
        <div className={styles.verifyDiv}>
        <div className={styles.checklistGrid}>
          {renderChecklistItem(
            "engine",
            "wiringHarness",
            "Wiring Harness",
            engineChecks,
          )}
          {renderChecklistItem("engine", "battery", "Battery", engineChecks)}
          {renderChecklistItem(
            "engine",
            "engineOil",
            "Engine Oil",
            engineChecks,
          )}
          {renderChecklistItem("engine", "coolant", "Coolant", engineChecks)}
          {renderChecklistItem(
            "engine",
            "brakeFluid",
            "Brake Fluid",
            engineChecks,
          )}
        </div>
        <div className={styles.gridImg}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c69a3bffc8b9f38e072cba677de5d410bbd2874?placeholderIfAbsent=true"
          alt="Engine compartment view"
          className={styles.sectionImage}
        />
        </div>
      </div>
      </div>

      {/* Wheels & Tyres Section */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Wheels &amp; Tyres</div>
          <div className={styles.selectAllControls}>
            <span>Select All:</span>
            <button
              className={styles.checkButton}
              onClick={() => selectAllInSection("wheel", "S")}
            >
              Check
            </button>
            <button
              className={styles.uncheckButton}
              onClick={() => selectAllInSection("wheel", "")}
            >
              Uncheck
            </button>
          </div>
        </div>
        <div className={styles.verifyDiv}>
        <div className={styles.checklistGrid}>
          {renderChecklistItem("wheel", "condition", "Condition", wheelChecks)}
          {renderChecklistItem("wheel", "hubCaps", "Hub Caps", wheelChecks)}
          {renderChecklistItem(
            "wheel",
            "wheelCovers",
            "Wheel Covers",
            wheelChecks,
          )}
          {renderChecklistItem("wheel", "alloyRims", "Alloy Rims", wheelChecks)}
          {renderChecklistItem(
            "wheel",
            "spareWheel",
            "Spare Wheel",
            wheelChecks,
          )}
        </div>
        <div className={styles.gridImg}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0718c5596691f33bd6233b8a01ee8d9bfd06e511?placeholderIfAbsent=true" alt="Wheels view" className={styles.sectionImage} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInspectionChecklist;
