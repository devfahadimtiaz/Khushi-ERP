import React, { useState } from "react";
import styles from "./SelectVehicleModel.module.css";

function SelectVehicleModel({ make, onBack }) {
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Sample vehicle data for the selected make
  const vehicleModels = [
    {
      id: 1,
      name: "Lexus LS",
      price: "Starting at $78,900",
      bids: 1277,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/36887051540ea982295a431fd2ba2483fb3fd5ff",
    },
    {
      id: 2,
      name: "Lexus RX",
      price: "Starting at $65,400",
      bids: 892,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/97a389549877e0cefe0d75a71053fa76e4590e66",
    },
    {
      id: 3,
      name: "Lexus IS",
      price: "Starting at $54,200",
      bids: 654,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/36887051540ea982295a431fd2ba2483fb3fd5ff",
    },
    {
      id: 4,
      name: "Lexus NX",
      price: "Starting at $49,800",
      bids: 445,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ccf506fb8965726994f849bdd7fa115b6b8b48d",
    },
    {
      id: 5,
      name: "Lexus CT",
      price: "Starting at $38,900",
      bids: 332,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/97a389549877e0cefe0d75a71053fa76e4590e66",
    },
    {
      id: 6,
      name: "Lexus RC",
      price: "Starting at $67,300",
      bids: 223,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/36887051540ea982295a431fd2ba2483fb3fd5ff",
    },
    {
      id: 7,
      name: "Lexus LX",
      price: "Starting at $89,700",
      bids: 198,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bb9b448da56b80ab6b9cf588a9d2fcca892e219",
    },
    {
      id: 8,
      name: "Lexus RC",
      price: "Starting at $94,500",
      bids: 167,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/36887051540ea982295a431fd2ba2483fb3fd5ff",
    },
    {
      id: 9,
      name: "Lexus UX",
      price: "Starting at $35,800",
      bids: 145,
      isPremium: true,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/97a389549877e0cefe0d75a71053fa76e4590e66",
    },
  ];

  const handleModelSelection = (modelId) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter((id) => id !== modelId));
    } else {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedModels([]);
    } else {
      setSelectedModels(vehicleModels.map((model) => model.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelect = () => {
    // Handle the selection of models
    console.log("Selected models:", selectedModels);
    // Additional logic for proceeding with selected models
  };

  return (
    <div className={styles.container}>
      <div
      className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onBack}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8337 10H4.16699"
              stroke="#475569"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0003 15.8332L4.16699 9.99983L10.0003 4.1665"
              stroke="#475569"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.makeTitle}>{make}</div>
      </div>

      <div className={styles.popularVehicles}>Popular Vehicles</div>

      <div className={styles.selectAllContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <div className={styles.selectAllText}>Select All</div>
      </div>

      <div className={styles.modelsList}>
        {vehicleModels.map((model) => (
          <div key={model.id} className={styles.modelItem}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={selectedModels.includes(model.id)}
              onChange={() => handleModelSelection(model.id)}
            />
            <div className={styles.modelImage}>
              <img src={model.image} alt={model.name} />
            </div>
            <div className={styles.modelDetails}>
              <div className={styles.modelName}>{model.name}</div>
              <div className={styles.modelPrice}>{model.price}</div>
              <div className={styles.premiumBadge}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L9.87868 5.12132L14 7L9.87868 8.87868L8 13L6.12132 8.87868L2 7L6.12132 5.12132L8 1Z"
                    fill="#FFB800"
                  />
                </svg>
                <span>Premium Listing</span>
              </div>
            </div>
            <div className={styles.modelStats}>
              <div className={styles.bidCount}>{model.bids} bids</div>
              <div className={styles.arrowIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14L13 2M13 2H5M13 2V10"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.endTime}>Ends in 2d 14h</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.selectedCount}>
          {selectedModels.length} Selected
        </div>
        <button className={styles.selectButton} onClick={handleSelect}>
          Select
        </button>
      </div>
      </div>
    </div>
  );
}

export default SelectVehicleModel;
