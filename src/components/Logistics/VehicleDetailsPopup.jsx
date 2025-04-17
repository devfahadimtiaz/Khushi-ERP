import React from "react";
import styles from "./VehicleDetailsPopup.module.css";

function VehicleDetailsPopup({ isOpen, onClose, vehicleData }) {
  if (!isOpen) return null;

  // Default data to use if vehicleData is not provided
  const defaultVehicle = {
    companyName: "Ocean Trading",
    auctionNo: "AUC-2023-12345",
    color: "Deep Blue",
    colorCode: "rgba(30, 64, 175, 1)",
    yardName: "Central Auto Yard",
    status: "In Stock",
    yardPosition: "Block A - Row 12 - Spot 34",
    shipperDetails: "ABC Shipping Co.",
    chassisNo: "JHMGD38458S022113",
    modelName: "Toyota Camry SE",
    portTo: "Dubai, UAE",
    customerStockNo: "CST-2023-789",
    images: ["https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true"],
  };

  // Use vehicleData if provided, otherwise use default data
  const vehicle = vehicleData || defaultVehicle;

  // Ensure images array exists and has at least 4 elements
  const safeImages = vehicle.images || ["https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true"];

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <div className={styles.stockDetailsView}>
          <div className={styles.rectangle}>
            <div className={styles.headerContainer}>
              <div className={styles.stockDetailsTitle}>Stock Details</div>
              <div className={styles.actionsContainer}>
                <button className={styles.downloadButton}>Download All</button>
                <button className={styles.closeButton} onClick={onClose}>
                  ✕
                </button>
              </div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.detailsGrid}>
                <div className={styles.column}>
                  <div className={styles.detailsSection}>
                    <div className={styles.detailLabel}>Company Name</div>
                    <div className={styles.detailValue}>
                      {vehicle.companyName}
                    </div>
                    <div className={styles.detailLabel}>Auction No.</div>
                    <div className={styles.detailValue}>
                      {vehicle.auctionNo}
                    </div>
                    <div className={styles.detailLabel}>Color</div>
                    <div className={styles.colorContainer}>
                      <div
                        className={styles.colorCircle}
                        style={{ backgroundColor: vehicle.colorCode }}
                      />
                      <div className={styles.detailValue}>{vehicle.color}</div>
                    </div>
                    <div className={styles.detailLabel}>Yard Name</div>
                    <div className={styles.detailValue}>{vehicle.yard}</div>
                    <div className={styles.detailLabel}>Status</div>
                    <div className={styles.statusBadge}>{vehicle.status}</div>
                    <div className={styles.detailLabel}>Yard Position</div>
                    <div className={styles.detailValue}>
                      {vehicle.yardIn}
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  <div className={styles.detailsSection}>
                    <div className={styles.detailLabel}>Shipper Details</div>
                    <div className={styles.detailValue}>
                      {vehicle.shipperDetails}
                    </div>
                    <div className={styles.detailLabel}>Chassis No.</div>
                    <div className={styles.detailValue}>
                      {vehicle.chassisNo}
                    </div>
                    <div className={styles.detailLabel}>Model Name</div>
                    <div className={styles.detailValue}>
                      {vehicle.model}
                    </div>
                    <div className={styles.detailLabel}>Port To</div>
                    <div className={styles.detailValue}>{vehicle.destination}</div>
                    <div className={styles.detailLabel}>Customer Stock No.</div>
                    <div className={styles.detailValue}>
                      {vehicle.customerStockNo}
                    </div>
                  </div>
                </div>
                <div className={styles.imagesColumn}>
                  <div className={styles.imagesContainer}>
                    <div className={styles.imagesTitle}>Vehicle Images</div>
                    <div className={styles.imagesGrid}>
                      <div className={styles.imageRow}>
                        <div className={styles.imageWrapper}>
                          <img
                            src={safeImages[0] || "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true"}
                            className={styles.vehicleImage}
                            alt="Vehicle"
                          />
                        </div>
                        <div className={styles.imageWrapper}>
                          <img
                            src={safeImages[1] || "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true"}
                            className={styles.vehicleImage}
                            alt="Vehicle"
                          />
                        </div>
                      </div>
                      <div className={styles.imageRow}>
                        <div className={styles.imageWrapper}>
                          <img
                            src={safeImages[2] || "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true"}
                            className={styles.vehicleImage}
                            alt="Vehicle"
                          />
                        </div>
                        <div className={styles.imageWrapper}>
                          <img
                            src={safeImages[3] || "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d6d766f247eaedcc760fde88c5287e8766aeec9?placeholderIfAbsent=true"}
                            className={styles.vehicleImage}
                            alt="Vehicle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetailsPopup;
