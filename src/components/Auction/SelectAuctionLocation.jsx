import React, { useState } from "react";
import styles from "./SelectAuctionLocation.module.css";
import SelectVehicleMake from "./SelectVehicleMake";

function SelectAuctionLocation({ onBack }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMake, setSelectedMake] = useState(false);



  const handleContinue = () =>{
      setSelectedMake(true);
  };

  const handleBackToLocations=()=>{
    setSelectedMake(false);
  };


  

  const toggleLocationSelection = (locationName) => {
    if (selectedLocations.includes(locationName)) {
      setSelectedLocations(
        selectedLocations.filter((name) => name !== locationName),
      );
    } else {
      setSelectedLocations([...selectedLocations, locationName]);
    }
  };

  const locationData = [
    {
      name: "All USS",
      vehiclesAvailable: "12500",
      nextAuction: "4/9/2025, 10:00 AM",
    },
    {
      name: "Sapporo",
      vehiclesAvailable: "3200",
      nextAuction: "4/9/2025, 10:30 AM",
    },
    {
      name: "Tohoku",
      vehiclesAvailable: "4100",
      nextAuction: "4/9/2025, 12:00 AM",
    },
    {
      name: "Gunma",
      vehiclesAvailable: "2800",
      nextAuction: "4/9/2025, 9:00 AM",
    },
    {
      name: "Tokyo",
      vehiclesAvailable: "8900",
      nextAuction: "4/9/2025, 11:30 AM",
    },
    {
      name: "JAA",
      vehiclesAvailable: "5600",
      nextAuction: "4/9/2025, 10:00 AM",
    },
    {
      name: "Saitama",
      vehiclesAvailable: "4700",
      nextAuction: "4/9/2025, 10:30 AM",
    },
    {
      name: "Yokohama",
      vehiclesAvailable: "6300",
      nextAuction: "4/9/2025, 10:00 AM",
    },
    {
      name: "Niigata",
      vehiclesAvailable: "2100",
      nextAuction: "4/9/2025, 10:00 AM",
    },
    {
      name: "Hokuriku",
      vehiclesAvailable: "1900",
      nextAuction: "4/9/2025, 12:00 AM",
    },
    {
      name: "Shizuoka",
      vehiclesAvailable: "3400",
      nextAuction: "4/9/2025, 11:30 AM",
    },
    {
      name: "Nagoya",
      vehiclesAvailable: "7200",
      nextAuction: "4/9/2025, 10:00 AM",
    },
    {
      name: "R-Nagoya",
      vehiclesAvailable: "4500",
      nextAuction: "4/9/2025, 11:00 AM",
    },
    {
      name: "Osaka",
      vehiclesAvailable: "8100",
      nextAuction: "4/9/2025, 11:30 AM",
    },
    {
      name: "Kobe",
      vehiclesAvailable: "5900",
      nextAuction: "4/9/2025, 9:00 AM",
    },
    {
      name: "HAA Kobe",
      vehiclesAvailable: "4200",
      nextAuction: "4/9/2025, 11:00 AM",
    },
    {
      name: "Okayama",
      vehiclesAvailable: "2600",
      nextAuction: "4/9/2025, 12:00 AM",
    },
    {
      name: "Fukuoka",
      vehiclesAvailable: "5100",
      nextAuction: "4/9/2025, 11:30 AM",
    },
    {
      name: "Kyushu",
      vehiclesAvailable: "4800",
      nextAuction: "4/9/2025, 10:30 AM",
    },
    {
      name: "JU Hiroshima",
      vehiclesAvailable: "3100",
      nextAuction: "4/9/2025, 9:00 AM",
    },
    {
      name: "Zip Tokyo",
      vehiclesAvailable: "6700",
      nextAuction: "4/9/2025, 10:30 AM",
    },
    {
      name: "JU Aichi",
      vehiclesAvailable: "4300",
      nextAuction: "4/9/2025, 11:30 AM",
    },
    {
      name: "Bay Auc",
      vehiclesAvailable: "5500",
      nextAuction: "4/9/2025, 12:00 AM",
    },
  ];

  const filteredLocations = locationData.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const ClockIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_204_2361)">
        <path
          d="M10 4V10L13 13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
          stroke="#7E92A2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_204_2361">
          <rect width="20" height="20" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );

  if (selectedMake) {
    return <SelectVehicleMake onBack={handleBackToLocations} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.titleWithBackButton}>
            <button className={styles.backButton} onClick={onBack}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="#092C4C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h1 className={styles.pageTitle}>Select Auction Location</h1>
          </div>
          <input
            type="text"
            placeholder="Search locations..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.locationsList}>
          {filteredLocations.map((location, index) => (
            <div key={index} className={styles.locationCard}>
              <div className={styles.cardHeader}>
                <div className={styles.locationName}>{location.name}</div>
                <div className={styles.vehicleCount}>
                  {location.vehiclesAvailable} vehicles available
                </div>
                <input type="radio"
                name="location"
                  className={`${styles.checkbox} ${selectedLocations.includes(location.name) ? styles.checked : ""}`}
                  
                />
              </div>
              <div className={styles.auctionSchedule}>
                <div className={styles.iconWrapper}>
                  <ClockIcon />
                </div>
                <div className={styles.scheduleDetails}>
                  <div className={styles.scheduleLabel}>Next Auction</div>
                  <div className={styles.scheduleDate}>
                    {location.nextAuction}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.continueButton} `}
            onClick={handleContinue}
            
          >
            Continue to Selected Auction
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectAuctionLocation;
