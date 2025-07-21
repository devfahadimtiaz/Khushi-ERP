"use client";

import React, { useState, useEffect } from "react";
import styles from "./VehicleTransferManagement.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;
const VehicleTransferManagement = () => {
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
      const response = await axios.get(`${API_URL}/getVehicleTransfer/${selectedShowrooms}`);
      setTransfer(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVehicle(selectedShowrooms);
  }, [selectedShowrooms]);

  const updateTransferStatus = async (id, vehicleId) => {
    try {
      const response = await fetch(`${API_URL}/updateTransferStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        StatusChange(vehicleId);
        toast(data.message); // or handle success with UI updates
        window.location.reload();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const StatusChange = async (vehicleId) => {
    try {
      await axios.put(
        `${API_URL}/UpdateVehicleStatueTransferring/${vehicleId}`
      );
      toast.success("Vehicle Is in Transit");
      fetchVehicle();
    } catch (error) {
      console.log("Error in Backend", error);
    }
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
            <div className={styles.title}>Vehicle Transfer Management</div>
          </div>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.tableHeader}>
                <th className={styles.tableHeaderCell}>Transfer Id</th>
                <th className={styles.tableHeaderCell}>Stock No.</th>
                <th className={styles.tableHeaderCell}>name</th>
                <th className={styles.tableHeaderCell}>Transfer From</th>
                <th className={styles.tableHeaderCell}>Transfer To</th>
                <th className={styles.tableHeaderCell}>Shipping Company</th>
                <th className={styles.tableHeaderCell}>Location</th>
                <th className={styles.tableHeaderCell}>Delivery Date</th>
                <th className={styles.tableHeaderCell}>Status</th>
                <th className={styles.tableHeaderCell}>Action</th>
              </tr>

              {/* Sample table rows with mock data */}
              {Transfer.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{row.transfer_no}</td>
                  <td className={styles.tableCell}>{row.stock_no}</td>
                  <td className={styles.tableCell}>
                    {row.make} {row.model}
                  </td>
                  <td className={styles.tableCell}>
                    {row.origin_showroom_name}
                  </td>
                  <td className={styles.tableCell}>
                    {row.destination_showroom_name}
                  </td>
                  <td className={styles.tableCell}>{row.logistics_company}</td>
                  <td className={styles.tableCell}>{row.location}</td>
                  <td className={styles.tableCell}>
                    {" "}
                    {new Date(row.delivery_date).toISOString().split("T")[0]}
                  </td>
                  <td className={styles.tableCell}>{row.status}</td>
                  <td className={styles.tableCell}>
                    {row.status === "Pending" && (
                      <button
                        className={styles.addButton}
                        onClick={() =>
                          updateTransferStatus(row.id, row.vehicle_id)
                        }
                      >
                        Process
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
    </>
  );
};

export default VehicleTransferManagement;
