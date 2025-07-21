import react, { useState, useEffect } from "react";
import styles from "./General.module.css";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createFilterOptions } from "@mui/material/Autocomplete";
const API_URL = process.env.REACT_APP_API_URL;
const General = ({ data, handleGeneralDetails, currency, showroom }) => {
  const [GarageName, setGarageName] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const limitFilter = createFilterOptions({
    matchFrom: "start", // or 'any'
    stringify: (option) => option, // option is a string here
  });
  const [InventoryData, setInventoryData] = useState({
    garageId: "1",
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
    currentShowroom: showroom,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updateData = { ...data, [name]: value };
    setInventoryData(updateData);
    handleGeneralDetails(updateData);
  };

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
        const response = await fetch(`${API_URL}/AllMake/${showroom}`);
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
          `${API_URL}/SelectedModle/${InventoryData.make}/${showroom}`
        );
        const data = await response.json();
        setModel(data);
      } catch (error) {
        console.error("Error fetching model:", error);
      }
    };
    fetchModel();
  }, [InventoryData.make, showroom]);

  const handleMakeChange = (_, newValue) => {
    // fabricate an event‑shaped object
    handleInputChange({
      target: { name: "make", value: newValue },
    });
  };
  const handleModelChange = (_, newValue) => {
    // fabricate an event‑shaped object
    handleInputChange({
      target: { name: "model", value: newValue },
    });
  };

  //Coma Seperated Price
  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // remove commas
    if (!/^\d*$/.test(rawValue)) return; // allow only numbers

    const formattedValue = Number(rawValue).toLocaleString(); // add commas
    setInventoryData((prev) => ({ ...prev, buyingPrice: formattedValue }));
    handleGeneralDetails({ ...data, buyingPrice: formattedValue });
  };

  const isShowroom = () => {
    return GarageName.some(
      (g) =>
        g.id.toString() === showroom?.toString() && g.name === "Ocean Trading"
    );
  };

  return (
    <div>
      <div className={styles.InventoryDatacontainer}>
        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="garageId"
                className={styles.inputFields}
                value={data.garageId}
                onChange={handleInputChange}
                required
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
              value={data.vehicleType}
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
              value={data.stockNo}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <Autocomplete
                freeSolo
                options={make.map((o) => o.make)} // full list
                filterOptions={(options, params) => {
                  const filtered = limitFilter(options, params);
                  return filtered.slice(0, 5); // show max 5 in dropdown
                }}
                value={data.make}
                onChange={handleMakeChange}
                onInputChange={handleMakeChange}
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
                options={model.map((o) => o.model)} // full list
                filterOptions={(options, params) => {
                  const filtered = limitFilter(options, params);
                  return filtered.slice(0, 5); // show max 5 in dropdown
                }}
                value={data.model}
                onChange={handleModelChange}
                onInputChange={handleModelChange}
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
                value={data.year}
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
                value={data.varient}
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
              value={data.mileage}
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
                value={data.vinNo}
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
              value={data.engine}
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
              value={data.engineNo}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="status"
                className={styles.inputFields}
                value={data.status}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="In Stock">In Stock</option>
                <option value="Transferable">Transferable</option>
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
              value={data.interior}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="bodyType"
                className={styles.inputFields}
                value={data.bodyType}
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
              value={data.exterior}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.selectWrapper}>
              <select
                name="fuelType"
                className={styles.inputFields}
                value={data.fuelType}
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
              value={data.transmission}
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
              value={data.driveType}
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
              value={data.doors}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <input
              type="text"
              name="seats"
              placeholder="Seats*"
              className={styles.inputField}
              value={data.seats}
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
              value={data.modelCode}
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
                value={data.auctionGrade}
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
              value={data.registrationNo}
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
                value={data.height}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="width"
                placeholder="Width*"
                className={styles.inputFieldD}
                value={data.width}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="length"
                placeholder="Length*"
                className={styles.inputFieldD}
                value={data.length}
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
              value={data.steering}
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
              value={data.groundClearance}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <input
              type="text" // use text to allow commas
              name="buyingPrice"
              placeholder="Price"
              className={styles.inputField}
              value={data.buyingPrice}
              onChange={handlePriceChange}
            />
          </div>
          <div className={styles.inputColumn}>
            <div className={styles.currency}>{currency}</div>
          </div>
        </div>
        <div className={styles.textareaInput}></div>
      </div>
    </div>
  );
};

export default General;
