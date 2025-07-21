import React, { useState, useEffect } from "react";
import styles from "./EditGeneral.module.css";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useParams, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;
const EditGeneral = () => {
  const [GarageName, setGarageName] = useState([]);
  const params = useParams();
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const id = params.id;
  const navigate = useNavigate();
  const [showroom, setShowroom] = useState();
  const [vehicleData, setVehicleData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [InventoryData, setInventoryData] = useState({
    garageId: "",
    vehicleType: "",
    stockNo: "",
    make: "",
    model: "",
    year: "",
    varient: "",
    mileage: "",
    vinNo: "",
    engine: "",
    interior: "",
    exterior: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    driveType: "",
    doors: "",
    seats: "",
    modelCode: "",
    auctionGrade: "",
    registrationNo: "",
    height: "",
    width: "",
    length: "",
    steering: "",
    groundClearance: "",
    engineNo: "",
    status: "",
    buyingPrice: "",
    currentShowroom: "",
  });
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
    if (userInfo) {
      setShowroom(userInfo.showroom);
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchVehicle = async (id) => {
      try {
        const res = await axios.get(`${API_URL}/fetchGeneralDetails/${id}`);
        setVehicleData(res.data[0]);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
      }
    };
    fetchVehicle(id);
  }, [id]);

  useEffect(() => {
    if (!vehicleData) return;
    setInventoryData((prev) => ({
      ...prev,
      garageId: vehicleData.showroom_id || "",
      vehicleType: vehicleData.vehicle_type || "",
      stockNo: vehicleData.stock_no || "",
      make: vehicleData.make || "",
      model: vehicleData.model || "",
      year: vehicleData.year || "",
      varient: vehicleData.variant || "",
      mileage: vehicleData.mileage || "",
      vinNo: vehicleData.vin_no || "",
      engine: vehicleData.engine || "",
      interior: vehicleData.interior || "",
      exterior: vehicleData.exterior_color || "",
      bodyType: vehicleData.body_type || "",
      fuelType: vehicleData.fuel_type || "",
      transmission: vehicleData.transmission || "",
      driveType: vehicleData.drive_type || "",
      doors: vehicleData.doors || "",
      seats: vehicleData.seats || "",
      modelCode: vehicleData.model_code || "",
      auctionGrade: vehicleData.auction_grade || "",
      registrationNo: vehicleData.registration_no || "",
      height: vehicleData.height || "",
      width: vehicleData.width || "",
      length: vehicleData.length || "",
      steering: vehicleData.steering || "",
      groundClearance: vehicleData.ground_clearance || "",
      engineNo: vehicleData.engine_no || "",
      status: vehicleData.status || "",
      currentShowroom: vehicleData.currentShowroom ||""
    }));
  }, [vehicleData]);

  /* Fetch Garage Name from DB */
  useEffect(() => {
    const fetchGarage = async () => {
      try {
        const res = await axios.get(`${API_URL}/garage`);
        const FetchedGarage = res.data;
        setGarageName(FetchedGarage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGarage();
  }, []);

  //Fetch All Make
  useEffect(() => {
    const fetchMake = async () => {
      try {
        if (!showroom) return;
        const response = await fetch(`${API_URL}/AllMake`);
        const data = await response.json();
        setMake(data);
      } catch (error) {
        console.error("Error fetching make:", error);
      }
    };
    fetchMake();
  }, [showroom]);

  //Fetch Modle
  useEffect(() => {
    const fetchModel = async () => {
      try {
        if (!InventoryData.make) return;
        const response = await fetch(
          `${API_URL}/SelectedModle/${InventoryData.make}`
        );
        const data = await response.json();
        setModel(data);
      } catch (error) {
        console.error("Error fetching model:", error);
      }
    };
    fetchModel();
  }, [InventoryData.make, showroom]);


   const handleSubmission = async (e) => {
  e.preventDefault();

  try {
    // Optional validation
    if (!InventoryData.stockNo || !InventoryData.make || !InventoryData.model) {
      toast.error("Please fill required fields like Stock No, Make, and Model");
      return;
    }

    const response = await axios.post(
      `${API_URL}/UpdateGeneralDetails/${id}`, // Ensure `InventoryData.id` exists
      InventoryData
    );

    if (response.status === 200) {
      toast.success("Vehicle General Details updated successfully!");
       navigate("/Stock");
    } else {
      toast.error("Update failed!");
    }
  } catch (error) {
    console.error("Update error:", error);
    toast.error("Something went wrong while updating.");
  }
};


  const handleCancle = () => {
    navigate("/Stock");
  };

  const isShowroom = () => {
    return GarageName.some(
      (g) =>
        g.id.toString() === showroom?.toString() && g.name === "Ocean Trading"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.InventoryDatacontainer}>
        <div className={styles.header}>
          <div className={styles.title}>Update General Details</div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="garageId"
                className={styles.inputFields}
                value={InventoryData.garageId}
                onChange={handleInputChange}
                disabled
              >
                <option value="">Select Destination Showroom</option>

                {GarageName.length > 0 && isShowroom()
                  ? GarageName.map((garage) => (
                      <option key={garage.id} value={garage.id}>
                        {garage.name}
                      </option>
                    ))
                  : GarageName.filter(
                      (g) => g.id.toString() === showroom?.toString()
                    ).map((garage) => (
                      <option key={garage.id} value={garage.id}>
                        {garage.name}
                      </option>
                    ))}
              </select>
            </div>
          </div>
          <div className={styles.inputColumn}>
            <select
              name="vehicleType"
              className={styles.inputFields}
              value={InventoryData.vehicleType}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="Car">Car</option>
              <option vlaue="Commercial">Commercial</option>
              <option vlaue="Buss">Buss</option>
              <option value="Truck">Truck</option>
            </select>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="stockNo"
              placeholder="Stock No*"
              className={styles.inputField}
              value={InventoryData.stockNo}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <Autocomplete
                freeSolo
                options={make.map((o) => o.make || "")}
                value={InventoryData.make || ""}
                onChange={(_, newValue) =>
                  handleInputChange({
                    target: { name: "make", value: newValue || "" },
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Make"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <Autocomplete
                freeSolo
                options={model.map((o) => o.model || "")}
                value={InventoryData.model || ""}
                onChange={(_, newValue) =>
                  handleInputChange({
                    target: { name: "model", value: newValue || "" },
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Model"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <input
                type="text"
                name="year"
                placeholder="Select YOM*"
                className={styles.inputField}
                value={InventoryData.year}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <input
                type="text"
                name="varient"
                placeholder="Select Variant*"
                className={styles.inputField}
                value={InventoryData.varient}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="mileage"
              placeholder="Mileage*"
              className={styles.inputField}
              value={InventoryData.mileage}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <div className={styles.vinInputWrapper}>
              <input
                type="text"
                name="vinNo"
                placeholder="Vin no*"
                className={styles.inputField}
                value={InventoryData.vinNo}
                onChange={handleInputChange}
              />
              <button className={styles.decodeButton}>Decode</button>
            </div>
          </div>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="engine"
              placeholder="Engine*"
              className={styles.inputField}
              value={InventoryData.engine}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="engineNo"
              placeholder="Engine Number"
              className={styles.inputField}
              value={InventoryData.engineNo}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="status"
                className={styles.inputFields}
                value={InventoryData.status}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="In Stock">In Stock</option>
                <option value="Repairable">Repairable</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="interior"
              placeholder="Interior Color"
              className={styles.inputField}
              value={InventoryData.interior}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="bodyType"
                className={styles.inputFields}
                value={InventoryData.bodyType}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Body Type
                </option>
                <option value="Luxury">Luxury</option>
                <option vlaue="SUV">SUV</option>
                <option vlaue="Sedan">Sedan</option>
                <option vlaue="Hatchback">Hatchback</option>
                <option vlaue="PickUp">PickUp</option>
                <option vlaue="Commercial">Commercial</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="exterior"
              placeholder="Exterior Color"
              className={styles.inputField}
              value={InventoryData.exterior}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="fuelType"
                className={styles.inputFields}
                value={InventoryData.fuelType}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Fuel Type
                </option>
                <option value="Petrol">Petrol</option>
                <option vlaue="Diesel">Diesel</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <select
              name="transmission"
              className={styles.inputFields}
              value={InventoryData.transmission}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Transmission Type
              </option>
              <option value="Automatic">Automatic</option>
              <option vlaue="Manual">Manual</option>
              <option vlaue="Automatic & Manual">Automatic & Manual</option>
            </select>
          </div>
          <div className={styles.inputColumn}>
            <select
              name="driveType"
              className={styles.inputFields}
              value={InventoryData.driveType}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Drive Type
              </option>
              <option value="AWD">AWD</option>
              <option vlaue="FWD">FWD</option>
              <option vlaue="RWD">RWD</option>
              <option vlaue="4WD">4WD</option>
            </select>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="doors"
              placeholder="Doors*"
              className={styles.inputField}
              value={InventoryData.doors}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="seats"
              placeholder="Seats*"
              className={styles.inputField}
              value={InventoryData.seats}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="modelCode"
              placeholder="Model Code*"
              className={styles.inputField}
              value={InventoryData.modelCode}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <input
                type="text"
                name="auctionGrade"
                placeholder="Auction Grade*"
                className={styles.inputField}
                value={InventoryData.auctionGrade}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="registrationNo"
              placeholder="Registraion no*"
              className={styles.inputField}
              value={InventoryData.registrationNo}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.dimention}>
            <div className={styles.inputColumn}>
              <input
                type="number"
                name="height"
                placeholder="Height*"
                className={styles.inputFieldD}
                value={InventoryData.height}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="width"
                placeholder="Width*"
                className={styles.inputFieldD}
                value={InventoryData.width}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="length"
                placeholder="Length*"
                className={styles.inputFieldD}
                value={InventoryData.length}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <select
              name="steering"
              className={styles.inputFields}
              value={InventoryData.steering}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Streeing Type
              </option>
              <option value="Left">Left</option>
              <option vlaue="Right">Right</option>
            </select>
          </div>
          <div className={styles.inputColumn}>
            <input
              type="number"
              name="groundClearance"
              placeholder="Ground Clearance"
              className={styles.inputField}
              value={InventoryData.groundClearance}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancle}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSubmission}>
            Update
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default EditGeneral;
