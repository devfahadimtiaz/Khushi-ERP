import React, { useState, useEffect } from "react";
import styles from "./IncomingVehicleTransfers.module.css";
import VehicleReceivingPopup from "./VehicleReceivingPopup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;

const IncomingVehicleTransfers = ({ onBack }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [inTransit, setInTransit] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [selectedShowrooms, setSelectedShowrooms] = useState();

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
      setSelectedShowrooms(userInfo.showroom);
    }
  }, [userInfo]);

  const fetchInTransit = async (selectedShowrooms) => {
    try {
      const response = await axios.get(`${API_URL}/getTransitVehicle/${selectedShowrooms}`);
      setInTransit(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchInTransit(selectedShowrooms);
  }, [selectedShowrooms]);

  const updatetransitStatus = async (transferId, vehicleId, destinationId) => {
    try {
      // 1️⃣ First: Update vehicleTransfer to Delivered
      await axios.put(`${API_URL}/updateTransitStatus/${transferId}`);

      // 2️⃣ Second: Update vehicle status to In Stock
      await axios.put(`${API_URL}/UpdateVehicleTOInStock/${vehicleId}`);

      //Update Showroom
      await axios.put(`${API_URL}/UpdateVehicleShowroom`, {
        vehicleId: vehicleId,
        showroomId: destinationId,
      });

      toast.success("Transfer completed successfully!");
      fetchInTransit();
    } catch (error) {
      console.error(error);
      alert("Error while completing transfer.");
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedVehicle(null);
  };
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.header}>Incoming Vehicle Transfers</div>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.tableHeader}>
                <th className={styles.tableHeaderCell}>Transfer Id</th>
                <th className={styles.tableHeaderCell}>Vehicle</th>
                <th className={styles.tableHeaderCell}>Transfer From</th>
                <th className={styles.tableHeaderCell}>VIN</th>
                <th className={styles.tableHeaderCell}>Expected Date</th>
                <th className={styles.tableHeaderCell}>Status</th>
                <th className={styles.tableHeaderCell}>Action</th>
              </tr>

              {/* Sample table rows with mock data */}
              {inTransit.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{row.transfer_no}</td>
                  <td className={styles.tableCell}>
                    {row.make} {row.model}
                  </td>
                  <td className={styles.tableCell}>
                    {row.origin_showroom_name}
                  </td>
                  <td className={styles.tableCell}>{row.vin_no}</td>
                  <td className={styles.tableCell}>
                    {" "}
                    {new Date(row.delivery_date).toISOString().split("T")[0]}
                  </td>
                  <td className={styles.tableCell}>{row.status}</td>
                  <td className={styles.tableCell}>
                    {row.status === "In Transit" && (
                      <button
                        className={styles.addButton}
                        onClick={() =>
                          updatetransitStatus(
                            row.id,
                            row.vehicle_id,
                            row.destination_showroom_id
                          )
                        }
                      >
                        Recieved
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      <VehicleReceivingPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        vehicleData={selectedVehicle}
      />
    </>
  );
};

export default IncomingVehicleTransfers;
