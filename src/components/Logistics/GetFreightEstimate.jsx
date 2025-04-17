import React, { useState } from "react";
import styles from "./GetFreightEstimate.module.css";
import NavigationTabs from "./Component/NavigationTabs";

function GetFreightEstimate({ onBackTodashboard, onAllVehicles, navigateTo }) {
  const [formData, setFormData] = useState({
    portOfLoading: "",
    portOfDischarge: "",
    commodity: "",
    containerSize: "",
    shippingLine: "",
    numberOfContainers: "",
  });

  // Sample estimate data
  const [estimateData, setEstimateData] = useState([
    {
      id: 1,
      portOfLoading: "Tokyo",
      portOfDischarge: "Mombasa",
      commodity: "Vehicles",
      containerSize: "40ft",
      shippingLine: "Maersk",
      containers: 2,
    },
    {
      id: 2,
      portOfLoading: "Osaka",
      portOfDischarge: "Dar es Salaam",
      commodity: "Electronics",
      containerSize: "20ft",
      shippingLine: "MSC",
      containers: 1,
    },
    {
      id: 3,
      portOfLoading: "Yokohama",
      portOfDischarge: "Durban",
      commodity: "Machinery",
      containerSize: "40ft High Cube",
      shippingLine: "CMA CGM",
      containers: 3,
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or further processing here
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleColumn}>
            <div className={styles.pageHeader}>Get Freight Estimate</div>
              <div className={styles.tabsContainer}>
              <NavigationTabs active="FreightEstimate" navigateTo={navigateTo} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formContent}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Port of Loading*</label>
                  <div className={styles.selectWrapper}>
                    <select
                      className={styles.selectInput}
                      name="portOfLoading"
                      value={formData.portOfLoading}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Port</option>
                      <option value="tokyo">Tokyo</option>
                      <option value="osaka">Osaka</option>
                      <option value="yokohama">Yokohama</option>
                    </select>
                    
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Port of Discharge*</label>
                  <div className={styles.selectWrapper}>
                    <select
                      className={styles.selectInput}
                      name="portOfDischarge"
                      value={formData.portOfDischarge}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Port</option>
                      <option value="mombasa">Mombasa</option>
                      <option value="dar">Dar es Salaam</option>
                      <option value="durban">Durban</option>
                    </select>
                    
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Commodity</label>
                  <div className={styles.selectWrapper}>
                    <select
                      className={styles.selectInput}
                      name="commodity"
                      value={formData.commodity}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Commodity</option>
                      <option value="vehicles">Vehicles</option>
                      <option value="electronics">Electronics</option>
                      <option value="machinery">Machinery</option>
                    </select>
                    
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Container Size*</label>
                  <div className={styles.selectWrapper}>
                    <select
                      className={styles.selectInput}
                      name="containerSize"
                      value={formData.containerSize}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Size</option>
                      <option value="20ft">20ft</option>
                      <option value="40ft">40ft</option>
                      <option value="40hc">40ft High Cube</option>
                    </select>
                    
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Preferred Shipping Line
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      className={styles.selectInput}
                      name="shippingLine"
                      value={formData.shippingLine}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Shipping Line</option>
                      <option value="maersk">Maersk</option>
                      <option value="msc">MSC</option>
                      <option value="cma">CMA CGM</option>
                    </select>
                    
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Number of Containers*
                  </label>
                  <input
                    type="number"
                    className={styles.textInput}
                    placeholder="Enter number of containers"
                    name="numberOfContainers"
                    value={formData.numberOfContainers}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Get Estimate
              </button>
            </form>
          </div>

          <div className={styles.estimateListCard}>
            <h2 className={styles.estimateListTitle}>Estimate List</h2>
            <div className={styles.estimateTable}>
              <div className={styles.tableHeader}>
                <div className={styles.tableHeaderCell}>Port of Loading</div>
                <div className={styles.tableHeaderCell}>Port of Discharge</div>
                <div className={styles.tableHeaderCell}>Commodity</div>
                <div className={styles.tableHeaderCell}>Container Size</div>
                <div className={styles.tableHeaderCell}>Shipping Line</div>
                <div className={styles.tableHeaderCell}>Containers</div>
              </div>
              <div className={styles.tableBody}>
                {estimateData.map((estimate) => (
                  <div key={estimate.id} className={styles.tableRow}>
                    <div className={styles.tableCell}>
                      {estimate.portOfLoading}
                    </div>
                    <div className={styles.tableCell}>
                      {estimate.portOfDischarge}
                    </div>
                    <div className={styles.tableCell}>{estimate.commodity}</div>
                    <div className={styles.tableCell}>
                      {estimate.containerSize}
                    </div>
                    <div className={styles.tableCell}>
                      {estimate.shippingLine}
                    </div>
                    <div className={styles.tableCell}>
                      {estimate.containers}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetFreightEstimate;
