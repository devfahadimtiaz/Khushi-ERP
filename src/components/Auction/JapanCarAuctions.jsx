import React from "react";
import styles from "./JapanCarAuctions.module.css";
import AuctionCarGridView from "./Component/AuctionCarGridView";

const JapanCarAuctions = (onBack, onListView, onDutyCalculator) => { 
    const cars = [
      {
        name: "Toyota Corolla",
        year: "2018",
        bid: "450,000",
        engine: "1.5L",
        engineType: "Hybrid",
        fuel: "Petrol",
        transmission: "Automatic",
        grade: "4.5",
        endDate: "2025-04-16",
        odo: "58000",
        color: "White"
      },
      {
        name: "Honda Civic",
        year: "2020",
        bid: "520,000",
        engine: "1.8L",
        engineType: "Gasoline",
        fuel: "Petrol",
        transmission: "Manual",
        grade: "5",
        endDate: "2025-04-18",
        odo: "32000",
        color: "Black"
      }
    ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>Japan Car Auctions</h1>
            <div className={styles.actionButtons}>
              <button className={styles.listViewButton} onClick={onListView} >
                List View
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/5a4d16025f54cbc9e0bf54444ddcdff09837d00f?placeholderIfAbsent=true"
                  alt="List view icon"
                  className={styles.buttonIcon}
                />
              </button>
              <button className={styles.dutyButton} onClick={onDutyCalculator}>
                <span>Duty / Costing</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/90dd8069b6c989cc7d93f7c974d8acb65f6dfb55?placeholderIfAbsent=true"
                  alt="Duty costing icon"
                  className={styles.buttonIcon}
                />
              </button>
            </div>
          </div>
          
            {cars.map((cars, index)=>(
              <AuctionCarGridView key={index} {...cars}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JapanCarAuctions;
