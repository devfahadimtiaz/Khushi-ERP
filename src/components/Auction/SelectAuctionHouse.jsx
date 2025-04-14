import React, { useState } from "react";
import styles from "./SelectAuctionHouse.module.css";
import SelectAuctionLocation from "./SelectAuctionLocation";


function SelectAuctionHouse({ onBack, onContinue }) {
  const [selectedAuctions, setSelectedAuctions] = useState([]);
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [AuctionLocation,setAuctionLocation] = useState(false);

  const handleAuctionLocation =(auction)=>{
    setAuctionLocation(auction);
  }

  const HandleContinue =()=>{
    setAuctionLocation(true);
  }

  const handleBackToAuctionHouse = ()=>{
    setAuctionLocation(false);
  }
  const toggleAuctionSelection = (auctionId) => {
    if (selectedAuctions.includes(auctionId)) {
      setSelectedAuctions(selectedAuctions.filter((id) => id !== auctionId));
    } else {
      setSelectedAuctions([...selectedAuctions, auctionId]);
    }
  };

  const handleSelectLocations = (locations) => {
    setSelectedLocations(locations);
    console.log("Selected locations:", locations);
  };

  if(AuctionLocation){
    return(
      <SelectAuctionLocation onBack={handleBackToAuctionHouse} />
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.headerContainer}>
          <h1 className={styles.pageTitle}>Select Auction Houses</h1>
        </div>

        {/* USS Auction House Card */}
        <div className={styles.auctionCard}>
          <div className={styles.cardHeader}>
            <div className={styles.companyInfo}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/d8485bc4eb50d966ba4de70d690a54e86a31cfc1?placeholderIfAbsent=true"
                className={styles.companyLogo}
                alt="USS logo"
              />
              <div className={styles.companyDetails}>
                <h2 className={styles.companyName}>USS</h2>
                <p className={styles.locationCount}>
                  19 locations across Japan
                </p>
              </div>
            </div>
            <input
              type="radio"
              name="auction"
              className={`${styles.checkbox} ${
                selectedAuctions.includes("uss") ? styles.checked : ""
              }`}
              onClick={() => toggleAuctionSelection("uss")}
            />
          </div>
          <p className={styles.companyDescription}>
            Used car auction with over 120,000 vehicles monthly
          </p>
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Total Cars</span>
              <span className={styles.statValue}>120,000+</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Locations</span>
              <span className={styles.statValue}>19</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Success Rate</span>
              <span className={styles.statValue}>98%</span>
            </div>
          </div>
          <div className={styles.auctionSchedule}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/d2c561bef090f2a17091b101f2b6a49aea538db5?placeholderIfAbsent=true"
              className={styles.calendarIcon}
              alt="Calendar icon"
            />
            <div className={styles.scheduleDetails}>
              <span className={styles.scheduleLabel}>Next Auction</span>
              <span className={styles.scheduleDate}>
                2/10/2024, 10:00:00 AM
              </span>
            </div>
          </div>
        </div>

        {/* Iauc Auction House Card */}
        <div className={styles.auctionCard}>
          <div className={styles.cardHeader}>
            <div className={styles.companyInfo}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/59c3277ea9e2dcb403f235e4981a377942061146?placeholderIfAbsent=true"
                className={styles.companyLogo}
                alt="Iauc logo"
              />
              <div className={styles.companyDetails}>
                <h2 className={styles.companyName}>Iauc</h2>
                <p className={styles.locationCount}>
                  12 locations across Japan
                </p>
              </div>
            </div>
            <input
              type="radio"
              name="auction"
              className={`${styles.checkbox} ${
                selectedAuctions.includes("iauc") ? styles.checked : ""
              }`}
              onClick={() => toggleAuctionSelection("iauc")}
            />
          </div>
          <p className={styles.companyDescription}>
            Specialized in premium and luxury vehicles
          </p>
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Total Cars</span>
              <span className={styles.statValue}>80,000+</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Locations</span>
              <span className={styles.statValue}>12</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Success Rate</span>
              <span className={styles.statValue}>96%</span>
            </div>
          </div>
          <div className={styles.auctionSchedule}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/1a0d35e4a742231731512fb53cfd0db8716ef371?placeholderIfAbsent=true"
              className={styles.calendarIcon}
              alt="Calendar icon"
            />
            <div className={styles.scheduleDetails}>
              <span className={styles.scheduleLabel}>Next Auction</span>
              <span className={styles.scheduleDate}>2/11/2024, 2:00:00 PM</span>
            </div>
          </div>
        </div>

        {/* TC Web Auction House Card */}
        <div className={styles.auctionCard}>
          <div className={styles.cardHeader}>
            <div className={styles.companyInfo}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d531f2b641e6dc9af70b277845b5ea04d775670?placeholderIfAbsent=true"
                className={styles.companyLogo}
                alt="TC Web logo"
              />
              <div className={styles.companyDetails}>
                <h2 className={styles.companyName}>TC Web</h2>
                <p className={styles.locationCount}>
                  15 locations across Japan
                </p>
              </div>
            </div>
            <input
              type="radio"
              name="auction"
              className={`${styles.checkbox} ${
                selectedAuctions.includes("tcweb") ? styles.checked : ""
              }`}
              onClick={() => toggleAuctionSelection("tcweb")}
            />
          </div>
          <p className={styles.companyDescription}>
            Leading commercial vehicle auction platform
          </p>
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Total Cars</span>
              <span className={styles.statValue}>90,000+</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Locations</span>
              <span className={styles.statValue}>15</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Success Rate</span>
              <span className={styles.statValue}>97%</span>
            </div>
          </div>
          <div className={styles.auctionSchedule}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/6a9e12fa5ac552917c845541ae5d9707e51a75d5?placeholderIfAbsent=true"
              className={styles.calendarIcon}
              alt="Calendar icon"
            />
            <div className={styles.scheduleDetails}>
              <span className={styles.scheduleLabel}>Next Auction</span>
              <span className={styles.scheduleDate}>2/9/2024, 9:00:00 AM</span>
            </div>
          </div>
        </div>

        <button className={styles.continueButton} onClick={HandleContinue}>
          Continue to Selected Auctions
        </button>
      </div>
    </div>
  );
}

export default SelectAuctionHouse;
