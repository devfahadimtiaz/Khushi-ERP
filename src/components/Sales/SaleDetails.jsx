import React, { useState } from "react";
import styles from "./SaleDetails.module.css";
import VehicleDetails from "./VehicleDetails";
import BuyerDetails from "./CustomerDetails"; // 👈 Add this
import ExpenseDetails from "./ExpenseForm"; // 👈 Add this
import ReceiptDetails from "./ReceiptDetails"; // 👈 Add this

function SaleDetails({ onCancel }) {
  const [activeTab, setActiveTab] = useState("vehicleDetails");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProcessSale = () => {
    setShowReceipt(true);
  };

  const handleBackFromReceipt = () => {
    setShowReceipt(false);
  };

  const renderTab = () => {
    switch (activeTab) {
      case "vehicleDetails":
        return <VehicleDetails />;
      case "buyer":
        return <BuyerDetails />;
      case "expense":
        return <ExpenseDetails />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {showReceipt ? (
        <ReceiptDetails onBack={handleBackFromReceipt} />
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.headerSection}>
                <div className={styles.columnLeft}>
                  <div className={styles.title}>New Sale</div>
                  <div className={styles.cashSaleLabel}>Cash Sale</div>
                </div>
                <div className={styles.columnRight}>
                  <div className={styles.tabsContainer}>
                    <div
                      className={`${styles.tab} ${
                        activeTab === "vehicleDetails" ? styles.activeTab : ""
                      }`}
                      onClick={() => handleTabChange("vehicleDetails")}
                    >
                      Vehicle Details
                    </div>
                    <div
                      className={`${styles.tab} ${
                        activeTab === "buyer" ? styles.activeTab : ""
                      }`}
                      onClick={() => handleTabChange("buyer")}
                    >
                      Buyer Details
                    </div>
                    <div
                      className={`${styles.tab} ${
                        activeTab === "expense" ? styles.activeTab : ""
                      }`}
                      onClick={() => handleTabChange("expense")}
                    >
                      Expense
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tabContent}>{renderTab()}</div>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button
              className={styles.processButton}
              onClick={handleProcessSale}
            >
              Process Sale
            </button>
            <button className={styles.cancelButton} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SaleDetails;
