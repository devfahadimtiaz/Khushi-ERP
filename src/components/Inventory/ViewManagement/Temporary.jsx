import React, { useState, useEffect } from "react";
import styles from "./VehicleInventorySearch.module.css";
import { PLACEHOLDER_IMAGES } from "../../assets/images/placeholder.js";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
const AI_Image = process.env.REACT_APP_API_IMAGE;

axios.defaults.withCredentials = true; // Set globally

const VehicleInventorySearch = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [sampleVehicles, setSampleVehicles] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);
  const navigate = useNavigate();
 const [selectedShowroom, setSelectedShowroom] = useState(null);
  const [showrooms, setShowroom] =useState([])
  


    useEffect(()=>{
      const fetchGarageList = async () => {
        try {
           const response = await fetch(`${API_URL}/GarageList`);
          const data = await response.json();
          setShowroom(data);
  
        } catch (error) {
          console.error("Error fetching garage list:", error);
        }
      }
      fetchGarageList();
    }, []);
  // Fetch vehicles
  useEffect(() => {
    axios
      .get(`${API_URL}/inventorylist`)
      .then((res) => setSampleVehicles(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch Min & Max Prices
  useEffect(() => {
  const fetchPrices = async () => {
    try {
      if (!selectedShowroom) return; // Don't fetch until a showroom is selected
      const res = await axios.get(`${API_URL}/MaxMinVehiclePrice/${selectedShowroom}`);
      const { min_price, max_price } = res.data;
      setMinValue(min_price || 0);
      setMaxValue(max_price || 100000);
      setPriceRange([min_price || 0, max_price || 100000]);
    } catch (error) {
      console.error("Error fetching max/min prices:", error);
    }
  };
  fetchPrices();
}, [selectedShowroom]);

  // Auth check (runs once on mount)
  useEffect(() => {
    axios
      .get(`${API_URL}/stock`)
      .then((res) => {
        if (!res.data.valid) navigate("/");
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleSearch = () => {
    const results = sampleVehicles.filter((vehicle) => {
      const matchesMake =
        !make || vehicle.make?.toLowerCase().includes(make.toLowerCase());
      const matchesModel =
        !model || vehicle.model?.toLowerCase().includes(model.toLowerCase());
      const matchesYear = !year || vehicle.year?.toString() === year;
      const matchesPrice =
        vehicle.total_price_after_expense >= priceRange[0] &&
        vehicle.total_price_after_expense <= priceRange[1];

      return matchesMake && matchesModel && matchesYear && matchesPrice;
    });

    setSearchResults(results);
    setHasSearched(true);
  };
  const toggleShowroom = (id) => {
  setSelectedShowroom(id);
};

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Vehicle Inventory Search</h1>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.searchForm}>
          <div className={styles.inputGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Make</label>
              <input
                type="text"
                placeholder="Enter vehicle make"
                className={styles.textInput}
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Model</label>
              <input
                type="text"
                placeholder="Enter vehicle model"
                className={styles.textInput}
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Year</label>
              <input
                type="text"
                placeholder="Enter year"
                className={styles.textInput}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.showroomFilters}>
            {showrooms.map((showroom) => (
  <div key={showroom.id} className={styles.checkboxGroup}>
    <input
      type="radio"
      name="showroom"
      id={`showroom-${showroom.id}`}
      checked={selectedShowroom === showroom.id}
      onChange={() => toggleShowroom(showroom.id)}
      className={styles.checkbox}
    />
    <label
      htmlFor={`showroom-${showroom.id}`}
      className={styles.checkboxLabel}
    >
      {showroom.name}
    </label>
  </div>
))}

          </div>

          <div className={styles.priceRangeContainer}>
            <div className={styles.inputLabel}>Price Range</div>
            <div className={styles.priceRangeControls}>
              <div className={styles.priceRangeGroup}>
                <div style={{ width: 300, margin: "2rem" }}>
                  <Typography gutterBottom>
                    Price Range: {priceRange[0]} - {priceRange[1]}
                  </Typography>
                  <Slider
                    value={priceRange}
                    onChange={(e, newValue) => setPriceRange(newValue)}
                    valueLabelDisplay="auto"
                    min={minValue}
                    max={maxValue}
                    step={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.searchButtonContainer}>
          <button className={styles.searchButton} onClick={handleSearch}>
            Search Inventory
          </button>
        </div>

        <div className={styles.resultsContainer}>
          {hasSearched ? (
            searchResults.length > 0 ? (
              <div className={styles.resultsGrid}>
                {searchResults.map((vehicle) => (
                  <div key={vehicle.id} className={styles.vehicleCard}>
                    <div className={styles.vehicleImageContainer}>
                      <img
                        src={`${AI_Image}${
                          vehicle.image || "/uploads/placeholder.jpg"
                        }`}
                        alt={vehicle.make}
                        style={{ width: "380px", height: "auto" }}
                      />
                    </div>
                    <div className={styles.vehicleDetails}>
                      <h3 className={styles.vehicleTitle}>
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      <div className={styles.vehiclePrice}>
                        {vehicle.currency} {vehicle.total_price_after_expense}
                      </div>
                      <div className={styles.vehicleSpecs}>
                        <div className={styles.vehicleSpec}>
                          <span className={styles.specLabel}>Mileage:</span>{" "}
                          {vehicle.mileage} mi
                        </div>
                        <div className={styles.vehicleSpec}>
                          <span className={styles.specLabel}>Color:</span>{" "}
                          {vehicle.exterior_color}
                        </div>
                        <div className={styles.vehicleSpec}>
                          <span className={styles.specLabel}>Fuel:</span>{" "}
                          {vehicle.fuel_type}
                        </div>
                        <div className={styles.vehicleSpec}>
                          <span className={styles.specLabel}>
                            Transmission:
                          </span>{" "}
                          {vehicle.transmission}
                        </div>
                      </div>
                      <button
                        className={styles.viewDetailsButton}
                        onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No vehicles found matching your search criteria.</p>
                <p>Try adjusting your filters for more results.</p>
              </div>
            )
          ) : (
            <div className={styles.initialState}>
              <p>
                Enter search criteria and click "Search Inventory" to find
                vehicles.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default VehicleInventorySearch;
