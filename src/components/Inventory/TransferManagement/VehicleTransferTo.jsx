"use client";

import React, { useState, useEffect, use } from "react";
import styles from "./VehicleTransferManagement.module.css";
import VehicleTransferPopup from "./VehicleTransferPopup";
import axios from "axios";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;
const VehicleTransferManagement = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [Transfer, setTransfer] = useState([]);
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

  const fetchVehicle = async (selectedShowrooms) => {
    try {
      const response = await axios.get(`${API_URL}/GetTransferableVehicle/${selectedShowrooms}`);
      setTransfer(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVehicle(selectedShowrooms);
  }, [selectedShowrooms]);
  const handleToastMessage = (message) => {
    toast.success(message);
  };

  const handleOpenPopup = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsPopupOpen(true);
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
        <div className={styles.width}>
          <div className={styles.header}>
            <div className={styles.title}>Vehicle Transfer To</div>
          </div>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.tableHeader}>
                <th className={styles.tableHeaderCell}>Stock No.</th>
                <th className={styles.tableHeaderCell}>Make</th>
                <th className={styles.tableHeaderCell}>Modle</th>
                <th className={styles.tableHeaderCell}>YOM</th>
                <th className={styles.tableHeaderCell}>Chassis_no</th>
                <th className={styles.tableHeaderCell}>Origin Showroom</th>
                <th className={styles.tableHeaderCell}>Action</th>
              </tr>

              {/* Sample table rows with mock data */}
              {Transfer.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{row.stock_no}</td>
                  <td className={styles.tableCell}>{row.make}</td>
                  <td className={styles.tableCell}>{row.model}</td>
                  <td className={styles.tableCell}>{row.year}</td>
                  <td className={styles.tableCell}>{row.vin_no}</td>
                  <td className={styles.tableCell}>{row.showroomname}</td>

                  <td className={styles.tableCell}>
                    {row.status === "Transferable" && (
                      <button
                        className={styles.addButton}
                        onClick={() => handleOpenPopup(row)}
                      >
                        Transfer
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

      <VehicleTransferPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        vehicleData={selectedVehicle}
        message={handleToastMessage}
        fetchVehicle={fetchVehicle}
      />
    </>
  );
};

export default VehicleTransferManagement;
