import React, { useState, useEffect } from "react";
import styles from "./VehicleTransferPopup.module.css";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const VehicleTransferPopup = ({ isOpen, onClose, vehicleData, message, fetchVehicle }) => {
  const [formData, setFormData] = useState({
    originShowroom: "",
    vehicleId:"",
    targetShowroom: "",
    location: "",
    status:"Pending",
    logisticsCompany: "",
    deliveryDate: "",
  });
  const [garage, SetGarage] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Fetch Showroom
  const fetchShowroom = async () => {
    try {
      const response = await axios.get(`${API_URL}/GarageList`);
      const data = response.data;
      SetGarage(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchShowroom();
  }, []);


  useEffect(() => {
    if (vehicleData) {
      console.log("Vehicle Data : ", vehicleData)
      setFormData((prev) => ({
        ...prev,
        originShowroom: vehicleData.currentShowroom || "",
        vehicleId: vehicleData.id || "",
        targetShowroom: vehicleData.showroom_id|| ""
      }));
    }
  }, [vehicleData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.targetShowroom || !formData.location || !formData.deliveryDate || !formData.logisticsCompany) {
    alert("Please fill in all required fields.");
    return;
  }
  if (isSubmitting) return;
  setIsSubmitting(true);
  try {
    const response = await axios.post(`${API_URL}/insertTransfer`, formData);
    StatusChange(formData.vehicleId);
    message("Transfer A Vehicle Is Created");
    fetchVehicle()
    onClose();
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Error in Transferring Vehicle");
  } finally {
    setIsSubmitting(false);
  }
};
const StatusChange= async(vehicleId)=>{
  try{
    await axios.put(`${API_URL}/UpdateVehicleStatueTransferInProcess/${vehicleId}`)

  }
  catch(error)
  {
    console.log("Error in Backend", error)
  }
}



  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>Transfer Vehicle</div>
          <div onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.closeIcon}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>

        <div className={styles.vehicleInfoContainer}>
          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>Vehicle</div>
              <div className={styles.infoValue}>
                {vehicleData?.make || "Toyota Camry"} {vehicleData?.model} {vehicleData?.year}
              </div>
            </div>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>VIN</div>
              <div className={styles.infoValue}>
                {vehicleData?.vin_no || "ABC123XYZ"}
              </div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>Color</div>
              <div className={styles.infoValue}>
                {vehicleData?.exterior_color || "Pearl White"}
              </div>
            </div>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>Price</div>
              <div className={styles.infoValue}>
                {vehicleData?.total_price_after_expense || "$35,000"}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Target Showroom</div>
            {vehicleData.showroomname === "Ocean Trading" &&(
            <select
              className={styles.inputField}
              name="targetShowroom"
              value={formData.targetShowroom || ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Showroom
              </option>
              {garage.filter((s)=> s.id === vehicleData.showroom_id)
              .map(
                (row, index) =>
                  vehicleData.currentShowroom !== row.id && (
                    <option key={index} value={row.id}>
                      {row.name}
                    </option>
                  )
              )}
            </select>
            )}
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Location</div>
            <select
              className={styles.inputField}
              name="location"
              value={formData.location|| ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Location
              </option>
              {garage
                .filter((item) => item.id == formData.targetShowroom)
                .map((item) => (
                  <option key={item.id} value={item.address}>
                    {item.address}
                  </option>
                ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Expected Delivery Date</div>
            <input
              type="date"
              className={styles.inputField}
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Logistics Company</div>
            <select
              className={styles.inputField}
              name="logisticsCompany"
              value={formData.logisticsCompany}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Logistics Company
              </option>
              <option value="Auto Logistics Company" >
                Auto Logistics Company
              </option>
              <option value="Logistics Company 2" >
                Logistics Company 2
              </option>
            </select>
          </div>
          

          <div className={styles.buttonContainer}>
            
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.confirmButton}>
              Confirm Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleTransferPopup;
