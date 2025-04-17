import React, { useState } from "react";
import styles from "./CreditSale.module.css";
import CraditVehicleDetails from "./CraditVehicleDetails";
import BuyerDetails from "./BuyerDetails";
import Nominee from "./NomineeDetails";
import Guarantor from "./Guarantor";
import TermsConditions from "./TermsConditions";
import Expense from "./CreditExpense";
import SaleSummary from "./SaleSummary";

const CreditSale = () => {
  const [activeTab, setActiveTab] = useState("vehicle-Details");
  const [showSaleSummary, setShowSaleSummary] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProcessSale = () => {
    setShowSaleSummary(true);
  };

  const handleBackFromSummary = () => {
    setShowSaleSummary(false);
  };

  const renderTab = () => {
    switch (activeTab) {
      case "vehicle-Details":
        return <CraditVehicleDetails />;
      case "buyer":
        return <BuyerDetails />;
      case "nominee":
        return <Nominee />;
      case "guarantor":
        return <Guarantor />;
      case "terms":
        return <TermsConditions />;
      case "expense":
        return <Expense />;
      default:
        return <CraditVehicleDetails />;
    }
  };

  return (
    <div className={styles.container}>
      {showSaleSummary ? (
        <SaleSummary onBack={handleBackFromSummary} />
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.title}>Credit Sales</div>
            <div className={styles.tabsContainer}>
              <div
                className={`${styles.tab} ${
                  activeTab === "vehicle-Details" ? styles.activeTab : ""
                }`}
                onClick={() => handleTabChange("vehicle-Details")}
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
                  activeTab === "nominee" ? styles.activeTab : ""
                }`}
                onClick={() => handleTabChange("nominee")}
              >
                Nominee
              </div>

              <div
                className={`${styles.tab} ${
                  activeTab === "terms" ? styles.activeTab : ""
                }`}
                onClick={() => handleTabChange("terms")}
              >
                Terms & Conditions
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
          <div className={styles.tabContent}>{renderTab()}</div>
          <div className={styles.actionButtons}>
            <button
              className={styles.processButton}
              onClick={handleProcessSale}
            >
              Process Sale
            </button>
            <button className={styles.cancelButton}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreditSale;
