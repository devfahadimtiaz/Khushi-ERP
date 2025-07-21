import React, { useEffect, useState } from "react";
import styles from "./RoadTestForm.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL
function RoadTestForm({data, onBack, message}) {
  const [vehicle, setVehicle] = useState([]);
  const [formData, setFormData] = useState({
    vehicleId: "",
    name: "",
    city: "",
    state: "",
    address: "",
    license: "",
    contact: "",
    make: "",
    model: "",
    color: "",
    stockNo: "",
    salesPerson: "",
    vehicleCheckout: false,
  });
useEffect(()=>{
  if(data){
    setFormData({
      vehicleId: data.vehicle_id,
      name: data.name,
      city: data.city,
      state: data.state,
      address: data.address,
      license: data.driving_license_no,
      contact: data.contact,
      salesPerson: data.sales_person,
      vehicleCheckout: data.vehicle_checkout,
    })
  }
},[data])
  const fetchVehicle = async () => {
    try {
      const res = await fetch(`${API_URL}/vehicleInStock`);
      const data = await res.json();
      setVehicle(data);
    } catch (error) {
      console.log("Error in Backend");
    }
  };
  useEffect(() => {
    fetchVehicle();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleVehicleChange = (e) => {
    const selectedVehicleId = e.target.value;
    const selectedVehicle = vehicle.find(
      (v) => v.id === parseInt(selectedVehicleId)
    );

    if (selectedVehicle) {
      setFormData((prevState) => ({
        ...prevState,
        vehicleId: selectedVehicleId,
        make: selectedVehicle.make,
        model: selectedVehicle.model,
        color: selectedVehicle.exterior_color,
        stockNo: selectedVehicle.stock_no, // Assuming your DB has stock_no
      }));
    } else {
      // Reset if none selected
      setFormData((prevState) => ({
        ...prevState,
        vehicleId: "",
        make: "",
        model: "",
        color: "",
        stockNo: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEdit = Boolean(data && data.id);
    const url = isEdit? `${API_URL}/editRoadtest/${data.id}`: `${API_URL}/addRoadTestForm`
    const method = isEdit ? "PUT": "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          city: formData.city,
          state: formData.state,
          address: formData.address,
          license: formData.license, // ✅ matches your backend field: license
          contact: formData.contact,
          salesPerson: formData.salesPerson,
          vehicleCheckout: formData.vehicleCheckout, // ✅ allow frontend to control true/false
          vehicleId: formData.vehicleId,
        }),
      });

      const data = await response.json();
      if(!response.ok){
        toast.error(data.message|| "AN Unexpected Error Occurred");
        return;
      }
      if(data.message === "Road test Data Added"|| data.message ==="Road Test Updated Successfully"){
        message(data.message)
         onBack();
          setFormData({
          vehicleId: "",
          name: "",
          city: "",
          state: "",
          address: "",
          license: "",
          contact: "",
          make: "",
          model: "",
          color: "",
          stockNo: "",
          salesPerson: "",
          vehicleCheckout: false,
        });
      }
   else {
        alert("Failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>{data? "Edit Road Test Form":"Road Test Form"}</h2>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                className={styles.inputField}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                className={styles.inputField}
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                className={styles.inputField}
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                className={styles.inputField}
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Driving License No</label>
              <input
                type="text"
                name="license"
                placeholder="Enter license number"
                className={styles.inputField}
                value={formData.license}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Contact</label>
              <input
                type="text"
                name="contact"
                placeholder="Enter contact number"
                className={styles.inputField}
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.carDetailsSection}>
            <h3 className={styles.sectionTitle}>Car Details</h3>
            <select
              className={styles.selectField}
              name="vehicleId"
              value={formData.vehicleId}
              onChange={handleVehicleChange}
            >
              <option value="">Select Vehicle</option>
              {vehicle.map((row) => (
                <option key={row.id} value={row.id}>
                  {row.make} {row.model} {row.stock_no}
                </option>
              ))}
            </select>
            <div className={styles.twoColumnGrid}>
              <div className={styles.leftColumn}>
                <div className={styles.modelSection}>
                  <label className={styles.inputLabel}>Make</label>
                  <input
                    type="text"
                    name="make"
                    placeholder="Enter make"
                    className={styles.inputField}
                    value={formData.make}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.modelSection}>
                  <label className={styles.inputLabel}>Model</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Enter model"
                    className={styles.inputField}
                    value={formData.model}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Color</label>
              <input
                type="text"
                name="color"
                placeholder="Enter color"
                className={styles.inputField}
                value={formData.color}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Stock No</label>
              <input
                type="text"
                name="stockNo"
                placeholder="Enter stock number"
                className={styles.inputField}
                value={formData.stockNo}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Sales Person</label>
              <input
                type="text"
                name="salesPerson"
                placeholder="Enter sales person name"
                className={styles.inputField}
                value={formData.salesPerson}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.inputLabel}>Vehicle Checkout</label>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="vehicleCheckout"
                  className={styles.checkbox}
                  checked={formData.vehicleCheckout}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.disclaimer}>
            By my signature below, I acknowledge and hereby agree to use the
            above vehicle for the purpose of a demonstration drive only. I
            further agree to return it by the agreed time stated above
          </div>

          <button type="submit" className={styles.submitButton}>
            {data? "Edit":"Submit"} Road Test Form
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default RoadTestForm;
