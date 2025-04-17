import React, { useState } from "react";
import styles from "./CreateTruckingOrder.module.css";

function CreateTruckingOrder({
  onBackToDashboard,
  onGetEstimates,
  onViewOrders,
}) {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    deliveryLocation: "",
    posNumber: "",
    posHolderName: "",
    chassisNumber: "",
    vehicleModel: "",
    auctionNumber: "",
    vehicleCondition: "",
    portTo: "",
    finalDestination: "",
    documents: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files[0],
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
            <h1 className={styles.title}>Trucking</h1>
            <div className={styles.tabsContainer}>
              <button className={styles.tab} onClick={onBackToDashboard}>
                Dashboard
              </button>
              <button className={styles.tab}>All Vehicles</button>
              <button className={styles.tabActive}>Trucking</button>
              <button className={styles.tab}>Freight</button>
              <button className={styles.tab}>All Shipments</button>
              <button className={styles.tab}>Invoices</button>
              <button className={styles.tab}>BL & ED</button>
            </div>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.actionButton} onClick={onGetEstimates}>
            Get Estimates
          </button>
          <button className={styles.actionButtonActive}>Create order</button>
          <button className={styles.actionButton} onClick={onViewOrders}>
            View Orders
          </button>
        </div>

        <form className={styles.formCard} onSubmit={handleSubmit}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Create New Order</h2>
            <div className={styles.iconContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9512133560cee60269a53f0018cba260647c6572?placeholderIfAbsent=true"
                alt="Icon"
                className={styles.icon}
              />
              <div className={styles.redBox} />
            </div>
          </div>

          <label className={styles.formLabel}>Pickup Location</label>
          <select className={styles.selectInput}>
            <option className={styles.inputText}>Select pickup location</option>
            <option className={styles.inputText}>Option 1</option> 
            <option className={styles.inputText}>Option 2</option>
            <option className={styles.inputText}>Option 3</option>
          </select>

          <label className={styles.formLabel}>Delivery Location</label>
           <select className={styles.selectInput}>
            <option className={styles.inputText}>Select Delivery location</option>
            <option className={styles.inputText}>Option 1</option> 
            <option className={styles.inputText}>Option 2</option>
            <option className={styles.inputText}>Option 3</option>
          </select>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>POS No</label>
              <input
                type="text"
                name="posNumber"
                placeholder="Enter POS number"
                className={styles.textInput}
                value={formData.posNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>POS Holder Name</label>
              <input
                type="text"
                name="posHolderName"
                placeholder="Enter POS holder name"
                className={styles.textInput}
                value={formData.posHolderName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>Chassis No</label>
              <input
                type="text"
                name="chassisNumber"
                placeholder="Enter chassis number"
                className={styles.textInput}
                value={formData.chassisNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>Vehicle Model</label>
              <select className={styles.selectInput}>
            <option className={styles.inputText}>Select Vehicle Model</option>
            <option className={styles.inputText}>Option 1</option> 
            <option className={styles.inputText}>Option 2</option>
            <option className={styles.inputText}>Option 3</option>
          </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>Auction No</label>
              <input
                type="text"
                name="auctionNumber"
                placeholder="Enter auction number"
                className={styles.textInput}
                value={formData.auctionNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>Vehicle Condition</label>
              <select className={styles.selectInput}>
            <option className={styles.inputText}>Select Vehicle Condition</option>
            <option className={styles.inputText}>Option 1</option> 
            <option className={styles.inputText}>Option 2</option>
            <option className={styles.inputText}>Option 3</option>
          </select>
            </div>
          </div>

         

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>Port To</label>
              <select className={styles.selectInput}>
            <option className={styles.inputText}>Select Port To</option>
            <option className={styles.inputText}>Option 1</option> 
            <option className={styles.inputText}>Option 2</option>
            <option className={styles.inputText}>Option 3</option>
          </select>
            </div>
            <div className={styles.formColumn}>
              <label className={styles.formLabel}>Final Destination</label>
              <select className={styles.selectInput}>
            <option className={styles.inputText}>Select Final Destination</option>
            <option className={styles.inputText}>Option 1</option> 
            <option className={styles.inputText}>Option 2</option>
            <option className={styles.inputText}>Option 3</option>
          </select>
            </div>
          </div>

          <label className={styles.formLabel}>Upload Documents</label>
          <label className={styles.fileUpload}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/9d1eed0beb33cd8eb27164bad923351cd637382c?placeholderIfAbsent=true"
              alt="Upload"
              className={styles.uploadIcon}
            />
            <span className={styles.fileText}>
              {formData.documents ? formData.documents.name : "Choose file"}
            </span>
            <input
              type="file"
              name="documents"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            Create Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTruckingOrder;
