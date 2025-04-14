import React, { useState } from "react";
import styles from "./DutyCalculator.module.css";

const DutyCalculator = ({ onBack }) => {
  const [selectedCountry, setSelectedCountry] = useState("Kenya");
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [vehicleAge, setVehicleAge] = useState("");
  const [isHybrid, setIsHybrid] = useState(false);
  const [calculationResults, setCalculationResults] = useState({
    freightCost: 0,
    importDuty: 0,
    exciseTax: 0,
    passportExpense: 0,
    hybridRebate: 0,
    totalCost: 0,
  });
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = () => {
    // This is a simplified calculation logic
    // In a real application, this would be more complex based on actual duty rules
    const basePrice = parseFloat(vehiclePrice) || 0;
    const engine = parseFloat(engineSize) || 0;
    const age = parseFloat(vehicleAge) || 0;

    // Sample calculation logic (would be replaced with actual formulas)
    const freight = basePrice * 0.1;
    const duty = basePrice * 0.25;
    const excise = basePrice * 0.2 + (engine / 1000) * 100;
    const passport = 300;
    const rebate = isHybrid ? basePrice * 0.15 : 0;

    const total = basePrice + freight + duty + excise + passport - rebate;

    setCalculationResults({
      freightCost: freight.toFixed(2),
      importDuty: duty.toFixed(2),
      exciseTax: excise.toFixed(2),
      passportExpense: passport.toFixed(2),
      hybridRebate: rebate.toFixed(2),
      totalCost: total.toFixed(2),
    });

    setHasCalculated(true);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculatorCard}>
        <div className={styles.cardHeader}>Import Duty Calculator</div>
        <div className={styles.cardBody}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Select Country</label>
            <div className={styles.countrySelector}>
              <span>{selectedCountry}</span>
              <div className={styles.dropdownArrow}>
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 1H1L5 9L9 1Z" stroke="black"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>
              Vehicle Base Price (USD)
            </label>
            <input
              type="number"
              className={styles.inputField}
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(e.target.value)}
              placeholder="Enter vehicle price"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Engine Size (CC)</label>
            <input
              type="number"
              className={styles.inputField}
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
              placeholder="Enter engine size"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Vehicle Age (Years)</label>
            <input
              type="number"
              className={styles.inputField}
              value={vehicleAge}
              onChange={(e) => setVehicleAge(e.target.value)}
              placeholder="Enter vehicle age"
            />
          </div>

          <div className={styles.checkboxContainer}>
            <div
              className={`${styles.checkbox} ${isHybrid ? styles.checked : ""}`}
              onClick={() => setIsHybrid(!isHybrid)}
            >
              {isHybrid && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <label className={styles.checkboxLabel}>
              Hybrid Vehicle (Eligible for rebate in East Africa)
            </label>
          </div>

          <button className={styles.calculateButton} onClick={handleCalculate}>
            Calculate Total Cost
          </button>
        </div>

        <div className={styles.calculationSection}>
          <h3 className={styles.calculationTitle}>Calculation Breakdown</h3>

          <div className={styles.calculationGrid}>
            <div className={styles.calculationItem}>
              <span className={styles.itemLabel}>Freight Cost</span>
              <span className={styles.itemValue}>
                ${calculationResults.freightCost}
              </span>
            </div>

            <div className={styles.calculationItem}>
              <span className={styles.itemLabel}>Import Duty</span>
              <span className={styles.itemValue}>
                ${calculationResults.importDuty}
              </span>
            </div>

            <div className={styles.calculationItem}>
              <span className={styles.itemLabel}>Excise Tax</span>
              <span className={styles.itemValue}>
                ${calculationResults.exciseTax}
              </span>
            </div>

            <div className={styles.calculationItem}>
              <span className={styles.itemLabel}>Passport Expense</span>
              <span className={styles.itemValue}>
                ${calculationResults.passportExpense}
              </span>
            </div>

            <div className={styles.calculationItem}>
              <span className={styles.itemLabel}>Hybrid Rebate</span>
              <span className={styles.itemValue}>
                ${calculationResults.hybridRebate}
              </span>
            </div>

            <div className={styles.totalItem}>
              <span className={styles.totalLabel}>Total Cost</span>
              <span className={styles.totalValue}>
                ${calculationResults.totalCost}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutyCalculator;
