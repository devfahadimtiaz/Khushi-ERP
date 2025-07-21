import React, { useState } from "react";
import styles from "./CarFilterForm.module.css";

const CarFilterForm = () => {
  // Sample data for dropdowns
  const carMakes = [
    "Toyota",
    "Honda",
    "Ford",
    "BMW",
    "Mercedes",
    "Audi",
    "Volkswagen",
    "Nissan",
    "Hyundai",
    "Kia",
  ];
  const carModels = {
    Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
    Ford: ["F-150", "Mustang", "Explorer", "Escape", "Focus"],
    BMW: ["3 Series", "5 Series", "X3", "X5", "7 Series"],
    Mercedes: ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
    Audi: ["A3", "A4", "A6", "Q5", "Q7"],
    Volkswagen: ["Golf", "Passat", "Tiguan", "Atlas", "Jetta"],
    Nissan: ["Altima", "Maxima", "Rogue", "Pathfinder", "Sentra"],
    Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona"],
    Kia: ["Forte", "Optima", "Sportage", "Sorento", "Soul"],
  };
  const bodyTypes = [
    "Sedan",
    "SUV",
    "Truck",
    "Coupe",
    "Hatchback",
    "Convertible",
    "Wagon",
    "Van",
    "Minivan",
  ];
  const engineTypes = [
    "4-Cylinder",
    "6-Cylinder",
    "8-Cylinder",
    "Hybrid",
    "Electric",
    "Diesel",
    "Turbo",
  ];
  const fuelTypes = [
    "Gasoline",
    "Diesel",
    "Electric",
    "Hybrid",
    "Plug-in Hybrid",
    "Hydrogen",
  ];
  const transmissions = [
    "Automatic",
    "Manual",
    "CVT",
    "Dual-Clutch",
    "Semi-Automatic",
  ];
  const colors = [
    "Black",
    "White",
    "Silver",
    "Gray",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Brown",
    "Orange",
  ];
  const driveTypes = ["FWD", "RWD", "AWD", "4WD"];
  const doorOptions = ["2", "3", "4", "5"];
  const seatOptions = ["2", "4", "5", "6", "7", "8", "9+"];
  const conditions = ["New", "Used", "Certified Pre-Owned"];

  // State for form values
  const [selectedMake, setSelectedMake] = useState("");
  const [formValues, setFormValues] = useState({
    make: "",
    model: "",
    bodyType: "",
    engineType: "",
    fuelType: "",
    transmission: "",
    color: "",
    driveType: "",
    doors: "",
    seats: "",
    condition: "",
    minPrice: "",
    maxPrice: "",
    fromYear: "",
    toYear: "",
    minMileage: "",
    maxMileage: "",
    features: {
      leatherSeats: false,
      sunroof: false,
      navigation: false,
      bluetooth: false,
      backupCamera: false,
      parkingSensors: false,
      heatedSeats: false,
      climateControl: false,
      cruiseControl: false,
      keylessEntry: false,
    },
  });

  // Handle select changes
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (name === "make") {
      setSelectedMake(value);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (feature) => {
    setFormValues({
      ...formValues,
      features: {
        ...formValues.features,
        [feature]: !formValues.features[feature],
      },
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filter values:", formValues);
    // Add your filter logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {/* First row of filters */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="make">
                Make
              </label>
              <div className={styles.selectWrapper}>
<select
                  id="make"
                  name="make"
                  className={styles.selectField}
                  value={formValues.make}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Make</option>
                  {carMakes.map((make, index) => (
                    <op                tion key={index} value={make}>
                      {make}
                    </op>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="model">
                Model
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="model"
                  name="model"
                  className={styles.selectField}
                  value={formValues.model}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Model</option>
                  {selectedMake &&
                    carModels((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="bodyType">
                Body Type
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="bodyType"
                  name="bodyType"
                  className={styles.selectField}
                  value={formValues.bodyType}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Body Type</option>
                  {bodyTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="engineType">
                Engine Type
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="engineType"
                  name="engineType"
                  className={styles.selectField}
                  value={formValues.engineType}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Engine Type</option>
                  {engineTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Second row of filters */}
          <div className={styles.formGrid}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="fuelType">
                Fuel Type
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="fuelType"
                  name="fuelType"
                  className={styles.selectField}
                  value={formValues.fuelType}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Fuel Type</option>
                  {fuelTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="transmission">
                Transmission
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="transmission"
                  name="transmission"
                  className={styles.selectField}
                  value={formValues.transmission}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Transmission</option>
                  {transmissions.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="color">
                Color
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="color"
                  name="color"
                  className={styles.selectField}
                  value={formValues.color}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Color</option>
                  {colors.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="driveType">
                Drive Type
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="driveType"
                  name="driveType"
                  className={styles.selectField}
                  value={formValues.driveType}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Drive Type</option>
                  {driveTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Third row of filters */}
          <div className={styles.formGrid}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Price Range</label>
              <div className={styles.rangeInputs}>
                <input
                  type="text"
                  name="minPrice"
                  placeholder="Min Price"
                  className={styles.rangeInput}
                  value={formValues.minPrice}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="maxPrice"
                  placeholder="Max Price"
                  className={styles.rangeInput}
                  value={formValues.maxPrice}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Year Range</label>
              <div className={styles.rangeInputs}>
                <input
                  type="text"
                  name="fromYear"
                  placeholder="From Year"
                  className={styles.rangeInput}
                  value={formValues.fromYear}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="toYear"
                  placeholder="To Year"
                  className={styles.rangeInput}
                  value={formValues.toYear}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Mileage Range</label>
              <div className={styles.rangeInputs}>
                <input
                  type="text"
                  name="minMileage"
                  placeholder="Min Mileage"
                  className={styles.rangeInput}
                  value={formValues.minMileage}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="maxMileage"
                  placeholder="Max Mileage"
                  className={styles.rangeInput}
                  value={formValues.maxMileage}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="doors">
                Doors
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="doors"
                  name="doors"
                  className={styles.selectField}
                  value={formValues.doors}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Doors</option>
                  {doorOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Fourth row of filters */}
          <div className={styles.formGrid}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="seats">
                Seats
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="seats"
                  name="seats"
                  className={styles.selectField}
                  value={formValues.seats}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Seats</option>
                  {seatOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel} htmlFor="condition">
                Condition
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="condition"
                  name="condition"
                  className={styles.selectField}
                  value={formValues.condition}
                  onChange={handleSelectChange}
                >
                  <option value="">Select Condition</option>
                  {conditions.map((condition, index) => (
                    <option key={index} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className={styles.featuresSection}>
            <label className={styles.featuresLabel}>Features</label>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="leatherSeats"
                  className={styles.checkboxInput}
                  checked={formValues.features.leatherSeats}
                  onChange={() => handleCheckboxChange("leatherSeats")}
                />
                <label htmlFor="leatherSeats" className={styles.featureText}>
                  Leather Seats
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="sunroof"
                  className={styles.checkboxInput}
                  checked={formValues.features.sunroof}
                  onChange={() => handleCheckboxChange("sunroof")}
                />
                <label htmlFor="sunroof" className={styles.featureText}>
                  Sunroof
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="navigation"
                  className={styles.checkboxInput}
                  checked={formValues.features.navigation}
                  onChange={() => handleCheckboxChange("navigation")}
                />
                <label htmlFor="navigation" className={styles.featureText}>
                  Navigation
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="bluetooth"
                  className={styles.checkboxInput}
                  checked={formValues.features.bluetooth}
                  onChange={() => handleCheckboxChange("bluetooth")}
                />
                <label htmlFor="bluetooth" className={styles.featureText}>
                  Bluetooth
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="backupCamera"
                  className={styles.checkboxInput}
                  checked={formValues.features.backupCamera}
                  onChange={() => handleCheckboxChange("backupCamera")}
                />
                <label htmlFor="backupCamera" className={styles.featureText}>
                  Backup Camera
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="parkingSensors"
                  className={styles.checkboxInput}
                  checked={formValues.features.parkingSensors}
                  onChange={() => handleCheckboxChange("parkingSensors")}
                />
                <label htmlFor="parkingSensors" className={styles.featureText}>
                  Parking Sensors
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="heatedSeats"
                  className={styles.checkboxInput}
                  checked={formValues.features.heatedSeats}
                  onChange={() => handleCheckboxChange("heatedSeats")}
                />
                <label htmlFor="heatedSeats" className={styles.featureText}>
                  Heated Seats
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="climateControl"
                  className={styles.checkboxInput}
                  checked={formValues.features.climateControl}
                  onChange={() => handleCheckboxChange("climateControl")}
                />
                <label htmlFor="climateControl" className={styles.featureText}>
                  Climate Control
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="cruiseControl"
                  className={styles.checkboxInput}
                  checked={formValues.features.cruiseControl}
                  onChange={() => handleCheckboxChange("cruiseControl")}
                />
                <label htmlFor="cruiseControl" className={styles.featureText}>
                  Cruise Control
                </label>
              </div>
              <div className={styles.featureItem}>
                <input
                  type="checkbox"
                  id="keylessEntry"
                  className={styles.checkboxInput}
                  checked={formValues.features.keylessEntry}
                  onChange={() => handleCheckboxChange("keylessEntry")}
                />
                <label htmlFor="keylessEntry" className={styles.featureText}>
                  Keyless Entry
                </label>
              </div>
            </div>
          </div>

          {/* Button section */}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.applyButton}>
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarFilterForm;
