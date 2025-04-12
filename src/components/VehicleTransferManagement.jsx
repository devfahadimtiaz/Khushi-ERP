"use client";
import React, { useState } from "react";
import styles from "./VehicleTransferManagement.module.css";
import VehicleTransferPopup from "./VehicleTransferPopup";

const VehicleTransferManagement = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

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
            <div className={styles.title}>Vehicle Transfer Management</div>
            <button className={styles.addButton}>
              <div className={styles.buttonText}>Add New Transfer</div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.plusIcon}
                >
                  <path
                    d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                    fill="#ECECFE"
                  ></path>
                  <path
                    d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                    fill="#ECECFE"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>Vehicle</div>
              <div className={styles.headerCell}>VIN</div>
              <div className={styles.headerCell}>Model</div>
              <div className={styles.headerCell}>Current Showroom</div>
              <div className={styles.headerCell}>Status</div>
              <div className={styles.headerCell}>Actions</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Toyota Camry</div>
              <div className={styles.tableCell}>ABC123XYZ</div>
              <div className={styles.tableCell}>2023</div>
              <div className={styles.tableCell}>Ocean Trading</div>
              <div className={styles.tableCell}>Available</div>
              <button
                className={styles.actionCell}
                onClick={() =>
                  handleOpenPopup({
                    name: "Toyota Camry",
                    vin: "ABC123XYZ",
                    model: "2023",
                    showroom: "Ocean Trading",
                    status: "Available",
                    color: "Pearl White",
                    price: "$35,000",
                  })
                }
              >
                Transfer
              </button>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Honda Civic</div>
              <div className={styles.tableCell}>DEF456UVW</div>
              <div className={styles.tableCell}>2023</div>
              <div className={styles.tableCell}>Main Branch</div>
              <div className={styles.tableCell}>Available</div>
              <button
                className={styles.actionCell}
                onClick={() =>
                  handleOpenPopup({
                    name: "Honda Civic",
                    vin: "DEF456UVW",
                    model: "2023",
                    showroom: "Main Branch",
                    status: "Available",
                    color: "Cosmic Blue",
                    price: "$28,500",
                  })
                }
              >
                Transfer
              </button>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>BMW X5</div>
              <div className={styles.tableCell}>GHI789RST</div>
              <div className={styles.tableCell}>2023</div>
              <div className={styles.tableCell}>Tanzania</div>
              <div className={styles.tableCell}>Available</div>
              <button
                className={styles.actionCell}
                onClick={() =>
                  handleOpenPopup({
                    name: "BMW X5",
                    vin: "GHI789RST",
                    model: "2023",
                    showroom: "Tanzania",
                    status: "Available",
                    color: "Jet Black",
                    price: "$62,000",
                  })
                }
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
      </div>

      <VehicleTransferPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        vehicleData={selectedVehicle}
      />
    </>
  );
};

export default VehicleTransferManagement;
