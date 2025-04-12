import React, { useState } from "react";
import styles from "./IncomingVehicleTransfers.module.css";
import VehicleReceivingPopup from "./VehicleReceivingPopup";

const IncomingVehicleTransfers = ({ onBack }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleConfirmClick = (vehicle) => {
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
        <div className={styles.inner}>
          <div className={styles.header}>Incoming Vehicle Transfers</div>
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>Transfer ID</div>
              <div className={styles.headerCell}>Vehicle</div>
              <div className={styles.headerCell}>From Showroom</div>
              <div className={styles.headerCell}>VIN</div>
              <div className={styles.headerCell}>Expected Date</div>
              <div className={styles.headerCell}>Status</div>
              <div className={`${styles.headerCell}`}>Actions</div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.cell}>TRF001</div>
              <div className={styles.cell}>
                <div className={styles.vehicleName}>Toyota Camry</div>
                <div className={styles.vehicleDetails}>2023 - Pearl White</div>
              </div>
              <div className={styles.cell}>Khushi Motors Kenya</div>
              <div className={styles.cell}>ABC123XYZ</div>
              <div className={styles.cell}>2024-01-20</div>
              <div className={styles.cell}>Pending Confirmation</div>
              <div className={`${styles.cell}`}>
                <button
                  className={styles.confirmButton}
                  onClick={() =>
                    handleConfirmClick({
                      transferId: "TRF001",
                      vehicleName: "Toyota Camry (2023)",
                      fromShowroom: "Khushi Motors Kenya",
                      vin: "ABC123XYZ",
                    })
                  }
                >
                  Confirm
                </button>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.cell}>TRF002</div>
              <div className={styles.cell}>
                <div className={styles.vehicleName}>Honda Civic</div>
                <div className={styles.vehicleDetails}>2023 - Cosmic Blue</div>
              </div>
              <div className={styles.cell}>Khushi Motors Express</div>
              <div className={styles.cell}>DEF456UVW</div>
              <div className={styles.cell}>2024-01-22</div>
              <div className={styles.cell}>Pending Confirmation</div>
              <div className={`${styles.cell}`}>
                <button
                  className={styles.confirmButton}
                  onClick={() =>
                    handleConfirmClick({
                      transferId: "TRF002",
                      vehicleName: "Honda Civic (2023)",
                      fromShowroom: "Khushi Motors Express",
                      vin: "DEF456UVW",
                    })
                  }
                >
                  Confirm
                </button>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.cell}>TRF003</div>
              <div className={styles.cell}>
                <div className={styles.vehicleName}>BMW X5</div>
                <div className={styles.vehicleDetails}>2023 - Mineral Grey</div>
              </div>
              <div className={styles.cell}>Khushi Motors Uganda</div>
              <div className={styles.cell}>GHI789RST</div>
              <div className={styles.cell}>2024-01-23</div>
              <div className={styles.cell}>Pending Confirmation</div>
              <div className={`${styles.cell}`}>
                <button
                  className={styles.confirmButton}
                  onClick={() =>
                    handleConfirmClick({
                      transferId: "TRF003",
                      vehicleName: "BMW X5 (2023)",
                      fromShowroom: "Khushi Motors Uganda",
                      vin: "GHI789RST",
                    })
                  }
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
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
