import React, { useState } from "react";
import styles from "./StockCard.module.css";
import SalesOverview from "./SalesOverview";

function StockCard({ logo, country, stats, showFlag }) {
  const [showSalesOverview, setShowSalesOverview] = useState(false);
  return (
    <div className={styles.stockCard}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${country} logo`} className={styles.logo} />
        <img src={showFlag} alt="Flag" className={styles.flag} />
      </div>

      {stats.map((stat, index) => (
        <div key={index} className={styles.statColumn}>
          <div className={styles.statTitle}>{stat.title}</div>
          <div className={styles.statValue}>{stat.value}</div>
        </div>
      ))}

      <div className={styles.ctaContainer}>
        <div
          className={styles.ctaButton}
          onClick={() => setShowSalesOverview(true)}
        >
          See Detail
        </div>
      </div>

      <SalesOverview
        isOpen={showSalesOverview}
        onClose={() => setShowSalesOverview(false)}
      />
    </div>
  );
}

export default StockCard;
