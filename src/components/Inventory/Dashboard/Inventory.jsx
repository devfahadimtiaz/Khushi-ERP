import React, { useState } from "react";
import styles from "./Inventory.module.css";
import LogoSlider from "./LogoSlider";
import StockOverview from "../../StockOverview";
import Tabels from "../../../Resources/Tables/Tabel";
import FilterSystem from "./FilterSystem";



function Inventory({ onBack, onNavigateToAddStock }) {

  const makerHeaders=["Sr","Make","Model","Year","Stock","Price","Status"]
  const makeData=[["1","Toyota","Crown","2021","Active","Price","Inv Comit"],["2","Toyota","Crown","2021","Active","Price","Inv Comit"],["3","Toyota","Crown","2021","Active","Price","Inv Comit"]]

  const statusHeader=["Sr", "Cameraman","Make/Model","Year","Stock","Upload","Status"]
  const statusData=[["1","camera","Toyota","2021","Active","10m Ago","Approved"],["2","Rahul","Toyota","2021","Active","10m Ago","Approved"],["3","Rahul","Toyota","2021","Active","10m Ago","Approved"],["4","Rahul","Toyota","2021","Active","10m Ago","Approved"]]
  
  const [openPopup,setOpenPopup] = useState(false)
  
  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.topActions}>
          <div className={styles.searchBox}>
            <div className={styles.searchText}>Search by maker or model...</div>
            <img alt="search" src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e7907c3f1b8461ec1d8d277f576e35f9e96b6e?placeholderIfAbsent=true" className={styles.searchIcon} />
          </div>
          <button
                   className={styles.addButton}
                   onClick={onNavigateToAddStock}
                 >
                   Add Vehicle
          </button>
          <button className={styles.filtersBtn} onClick={()=> setOpenPopup(true)}>Filters</button>
          <FilterSystem isOpen={openPopup}
            onClose={()=> setOpenPopup(false)}
          />
        </div>
        <div className={styles.viewSection}>
          <div className={styles.viewControls}>
            
            <div className={styles.viewAllContainer}>
              <div className={styles.viewAllImage}>
                <LogoSlider/>
              </div>
              <button className={styles.viewAllText}>View All Inventory</button>
            </div>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statsColumn}>
              <StockOverview/>
            </div>
            <div className={styles.statsColumnRecent}>
              <div className={styles.recentActivityCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>Recent Activity</div>
                  <div className={styles.viewAllLink}>View All</div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityDetails}>
                    
                    <div className={styles.activityInfo}>
                      <div className={styles.activityTitle}>Toyota Camry</div>
                      <div className={styles.activitySubtitle}>Stock: 12</div>
                    </div>
                    
                  </div>
                  <div className={styles.inStockStatus}>In Stock</div>
                </div>
                
                <div className={styles.activityItem}>
                  <div className={styles.activityDetails}>
                    
                    <div className={styles.activityInfo}>
                      <div className={styles.activityTitle}>Honda Civic</div>
                      <div className={styles.activitySubtitle}>Stock: 3</div>
                    </div>
                  </div>
                  <div className={styles.lowStockStatus}>Low Stock</div>
                </div>
                <div className={styles.activityItem}>
                  <div className={styles.activityDetails}>
                    
                    <div className={styles.activityInfo}>
                      <div className={styles.activityTitle}>BMW X5</div>
                      <div className={styles.activitySubtitle}>Stock: 8</div>
                      
                    </div>
                  </div>
                  <div className={styles.inStockStatus}>In Stock</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.companyTitle}>Khushi Motors Kenya</div>
          <div className={styles.companySubtitle}>Statistics</div>
          <div className={styles.statsCards}>
            <div className={styles.statsCard}>
              <div className={styles.statsCardLabel}>Total Vehicles</div>
              <div className={styles.statsCardValue}>2</div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statsCardLabel}>Low Stock</div>
              <div className={styles.statsCardValueRed}>1</div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statsCardLabel}>Out of Stock</div>
              <div className={styles.statsCardValueBlue}>0</div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statsCardLabel}>Total Value</div>
              <div className={styles.statsCardValueGreen}>$408,285</div>
            </div>
          </div>
          <div className={styles.inventoryTable}>
            <div className={styles.tableFilter}>
              <div className={styles.filterDropdown}>
                <div>All Makers</div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f8dccfdecc122af481de197ec5bec0d29f7f7b5?placeholderIfAbsent=true" className={styles.dropdownArrow} />
                
              </div>
              
              </div>
              <Tabels row='7' column='5' data={makeData} headers={makerHeaders}/>

          </div>
          <div className={styles.inventoryTable}>
            <div className={styles.statusTableHeader}>
              <div>Cars By Status</div>
              <Tabels row="7" column="5" data={statusData} headers={statusHeader}/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
