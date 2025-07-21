import React, { useState, useEffect } from "react";
import styles from "./VehicleInventorySearch.module.css";
import { PLACEHOLDER_IMAGES } from "../../assets/images/placeholder.js";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

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
  const [showrooms, setShowroom] = useState([]);
  const [carMake, setCarMake] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [carYear, setCarYear] = useState([]);
  const [formValues, setFormValues] = useState({
    make: "",
    model: "",
    year: "",
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
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
        console.log(data);
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
    if (userInfo) {
      setSelectedShowroom(userInfo.showroom);
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchGarageList = async () => {
      try {
        const response = await fetch(`${API_URL}/GarageList`);
        const data = await response.json();
        setShowroom(data);
      } catch (error) {
        console.error("Error fetching garage list:", error);
      }
    };
    fetchGarageList();
  }, []);
  // Fetch vehicles
  useEffect(() => {
    axios
      .get(`${API_URL}/inventorylist`)
      .then((res) => setSampleVehicles(res.data))
      .catch((err) => console.log(err));
  }, []);

  //input Handlers
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (name === "make") {
      setMake(value);
    }
  };

  // Fetch Min & Max Prices
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        if (!selectedShowroom) return; // Don't fetch until a showroom is selected
        const res = await axios.get(
          `${API_URL}/MaxMinVehiclePrice/${selectedShowroom}`
        );
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

  //Fetch DISTINCT MAKE
  useEffect(() => {
    const fetchMake = async () => {
      try {
        if (!selectedShowroom) return;
        const response = await fetch(`${API_URL}/AllMake/${selectedShowroom}`);
        const data = await response.json();
        console.log("Fetched makes:", data);
        setCarMake(data);
      } catch (error) {
        console.error("Error fetching make:", error);
      }
    };
    fetchMake();
  }, [selectedShowroom]);

  //Fetch Distinct Modle
  useEffect(() => {
    const fetchModel = async () => {
      try {
        if (!formValues.make) return;
        const response = await fetch(
          `${API_URL}/SelectedModle/${formValues.make}/${selectedShowroom}`
        );
        const data = await response.json();
        console.log("Fetched models:", data);
        setCarModel(data);
      } catch (error) {
        console.error("Error fetching model:", error);
      }
    };
    fetchModel();
  }, [formValues.make, selectedShowroom]);

  //Fetch Distinct Year
  useEffect(() => {
    const fetchYear = async () => {
      try {
        if (!formValues.make || !formValues.model) return;

        const response = await fetch(
          `${API_URL}/SelectYear/${formValues.make}/${formValues.model}/${selectedShowroom}`
        );
        const data = await response.json();
        console.log("FETCH Year ", data);
        setCarYear(data);
      } catch (error) {
        console.error("Error fetching year:", error);
      }
    };
    fetchYear();
  }, [formValues.make, formValues.model, selectedShowroom]);

 

  const handleSearch = () => {
    const results = sampleVehicles.filter((vehicle) => {
      const matchesShowroom = selectedShowroom
        ? vehicle.showroom_id === selectedShowroom
        : true;

      const matchesMake = formValues.make
        ? vehicle.make?.toLowerCase().trim() ===
          formValues.make.toLowerCase().trim()
        : true;

      const matchesModel = formValues.model
        ? vehicle.model?.toLowerCase().trim() ===
          formValues.model.toLowerCase().trim()
        : true;

      const matchesYear = formValues.year
        ? vehicle.year?.toString().trim() === formValues.year.toString().trim()
        : true;

      const matchesPrice =
        vehicle.total_price_after_expense >= priceRange[0] &&
        vehicle.total_price_after_expense <= priceRange[1];

      return (
        matchesShowroom &&
        matchesMake &&
        matchesModel &&
        matchesYear &&
        matchesPrice
      );
    });

    console.log("Number of results:", results.length);
    setSearchResults(results);
    setHasSearched(true);
  };

  const toggleShowroom = (id) => {
    setSelectedShowroom(id);
    setFormValues({
      ...formValues,
      make: "",
      model: "",
      year: "",
    });
    setCarModel([]);
    setCarYear([]);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Vehicle Inventory Search</h1>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.searchForm}>
          <div className={styles.showroomFilters}>
            {showrooms
              .filter((s) => !selectedShowroom || s.id === selectedShowroom) // ⬅️ NEW
              .map((showroom) => (
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
          <div className={styles.inputGrid}>
            <div className={styles.inputGroup}>
              <div className={styles.selectWrapper}>
                <Autocomplete
                  freeSolo
                  options={carMake.map((obj) => obj.make)}
                  value={formValues.make}
                  onChange={(event, newValue) => {
                    setFormValues({ ...formValues, make: newValue });
                    setMake(newValue);
                  }}
                  onInputChange={(event, newInputValue) => {
                    setFormValues({ ...formValues, make: newInputValue });
                    setMake(newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Make" variant="outlined" />
                  )}
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.selectWrapper}>
                <Autocomplete
                  freeSolo
                  options={carModel.map((obj) => obj.model)}
                  value={formValues.model}
                  onChange={(event, newValue) => {
                    setFormValues({ ...formValues, model: newValue });
                    setModel(newValue);
                  }}
                  onInput={(event, newValue) => {
                    setFormValues({ ...formValues, model: newValue });
                    setModel(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Model" variant="outlined" />
                  )}
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.selectWrapper}>
                <Autocomplete
                  freeSolo
                  options={carYear.map((obj) => obj.year)}
                  value={formValues.year}
                  onChange={(event, newValue) => {
                    setFormValues({ ...formValues, year: newValue });
                    setYear(newValue);
                  }}
                  onInput={(event, newValue) => {
                    setFormValues({ ...formValues, year: newValue });
                    setYear(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Year" variant="outlined" />
                  )}
                />
              </div>
            </div>
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
                        src={
                          vehicle.image
                            ? `${AI_Image}${vehicle.image}`
                            : PLACEHOLDER_IMAGES.vehicle
                        }
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
                        onClick={() =>
                          navigate(`/VehicleDetails/${vehicle.id}`)
                        }
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
