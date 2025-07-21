import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import styles from "./InstallmentCalculator.module.css";

const InstallmentCalculator = ({
  vehiclePrice,
  handleInstallmentChange,
  installmentData,
}) => {
  const [installments, setInstallments] = useState([]);

  const [formData, setFormData] = useState({
    // Buyer details
    tenure: "",
    vehicleDownPayment: "",
    vehiclePendingPayment: "",
    vehicleInsurance: "",
    vehicleDownInsurance: "",
    vehiclePendingInsurance: "",
    vehicleTracker: "20000",
    brokerCommission: "",
    gracePeriod: "",
    installments: "",
    vehicleDownPaymentPercentage: "",
    vehicleDownInsurancePercentage: "",
    totalInstallmentPrice: "",
    totalInitialDeposit: "",
  });
  useEffect(() => {
    if (installmentData) {
      setFormData((prev) => ({ ...prev, ...installmentData }));
    }
  }, [installmentData]);

  useEffect(() => {
    const vehiclePriceNum = parseFloat(vehiclePrice || 0);
    const insuranceTotal = parseFloat(formData.vehicleInsurance || 0);
    const totalInstallmentPrice =
      vehiclePriceNum +
      insuranceTotal +
      parseFloat(formData.vehicleTracker || 0) +
      parseFloat(formData.brokerCommission || 0);

    setFormData((prev) => ({
      ...prev,
      totalInstallmentPrice: totalInstallmentPrice.toFixed(2),
    }));
  }, [
    vehiclePrice,
    formData.vehicleInsurance,
    formData.vehicleTracker,
    formData.brokerCommission,
  ]);

  useEffect(() => {
    const initialVehicleDownPayment = parseFloat(
      formData.vehicleDownPayment || 0
    );
    const initialVehicleInsuranceDownPayment = parseFloat(
      formData.vehicleDownInsurance || 0
    );
    const trackerAmount = parseFloat(formData.vehicleTracker || 0);
    const brokerCommission = parseFloat(formData.brokerCommission || 0);
    const totalInitialDeposit =
      initialVehicleDownPayment +
      initialVehicleInsuranceDownPayment +
      trackerAmount +
      brokerCommission;
    setFormData((prev) => ({
      ...prev,
      totalInitialDeposit: totalInitialDeposit.toFixed(2),
    }));
  }, [
    formData.vehicleDownPayment,
    formData.vehicleDownInsurance,
    formData.vehicleTracker,
    formData.brokerCommission,
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = { ...formData, [name]: value };

    const vehiclePriceNum = parseFloat(vehiclePrice || 0);
    const insuranceTotal = parseFloat(updatedForm.vehicleInsurance || 0);
    const downPercent = parseFloat(
      updatedForm.vehicleDownPaymentPercentage || 0
    );
    const insuranceDownPercent = parseFloat(
      updatedForm.vehicleDownInsurancePercentage || 0
    );

    const totalInstallmentPrice =
      vehiclePriceNum +
      insuranceTotal +
      parseFloat(updatedForm.vehicleTracker || 0) +
      parseFloat(updatedForm.brokerCommission || 0);
    updatedForm.totalInstallmentPrice = totalInstallmentPrice.toFixed(2);
    if (!isNaN(downPercent)) {
      const dpAmount = (vehiclePriceNum * downPercent) / 100;
      updatedForm.vehicleDownPayment = dpAmount.toFixed(2);
      updatedForm.vehiclePendingPayment = (vehiclePriceNum - dpAmount).toFixed(
        2
      );
    }

    if (!isNaN(insuranceDownPercent)) {
      const dpInsAmount = (insuranceTotal * insuranceDownPercent) / 100;
      updatedForm.vehicleDownInsurance = dpInsAmount.toFixed(2);
      updatedForm.vehiclePendingInsurance = (
        insuranceTotal - dpInsAmount
      ).toFixed(2);
    }

    setFormData(updatedForm);
    handleInstallmentChange(updatedForm);
  };

  const generateInstallments = () => {
    const totalMonths = parseInt(formData.tenure);
    const motorPerMonth =
      parseFloat(formData.vehiclePendingPayment) / totalMonths;
    const insurancePerMonth =
      parseFloat(formData.vehiclePendingInsurance) / totalMonths;
    const startDate = dayjs().add(formData.gracePeriod, "day");

    const schedule = [];
    schedule.push({
      srNo: 0,
      installmentNo: "Initial Deposit",
      dueDate: dayjs().format("YYYY-MM-DD"), // today's date
      motorVehicleAmount: parseFloat(formData.vehicleDownPayment || 0).toFixed(
        2
      ),
      insuranceAmount: parseFloat(formData.vehicleDownInsurance || 0).toFixed(
        2
      ),
      total: (
        parseFloat(formData.vehicleDownPayment || 0) +
        parseFloat(formData.vehicleDownInsurance || 0) +
        parseFloat(formData.vehicleTracker || 0) +
        parseFloat(formData.brokerCommission || 0)
      ).toFixed(2),
    });

    for (let i = 1; i <= totalMonths; i++) {
      const dueDate = startDate.add(i, "month").format("YYYY-MM-DD");
      const total = motorPerMonth + insurancePerMonth;
      schedule.push({
        srNo: i,
        installmentNo: `Installment ${i}`,
        dueDate,
        motorVehicleAmount: motorPerMonth.toFixed(2),
        insuranceAmount: insurancePerMonth.toFixed(2),
        total: total.toFixed(2),
      });
    }

    setInstallments(schedule);
    const updatedForm = { ...formData, installments: schedule };
    setFormData(updatedForm);
    handleInstallmentChange(updatedForm);
  };

  return (
    <>
      <div className={styles.formSection}>
        <div className={styles.sectionTitle}> Select Pricing Type</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Tenure</label>
            <input
              type="text"
              name="tenure"
              className={styles.input}
              placeholder="number of months"
              value={installmentData.tenure}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sectionTitle}> Vehicle Pricing</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Price</label>
            <input
              type="text"
              name="totalPrice"
              placeholder="Auto Fetch"
              className={styles.input}
              value={vehiclePrice}
              disabled
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Down Payment</label>
            <input
              type="text"
              name="vehicleDownPaymentPercentage"
              placeholder="Enter Down Payment"
              className={styles.input}
              value={installmentData.vehicleDownPaymentPercentage}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pending Payment</label>
            <input
              type="text"
              name="vehiclePendingPayment"
              placeholder="Auto Calculate"
              disabled
              className={styles.input}
              value={installmentData.vehiclePendingPayment}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sectionTitle}> Insurance Pricing</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Price</label>
            <input
              type="text"
              name="vehicleInsurance"
              placeholder="Enter Total Price"
              className={styles.input}
              value={installmentData.vehicleInsurance}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Down Payment</label>
            <input
              type="text"
              name="vehicleDownInsurancePercentage"
              placeholder="Enter Down Payment"
              className={styles.input}
              value={installmentData.vehicleDownInsurancePercentage}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pending Payment</label>
            <input
              type="text"
              name="vehiclePendingInsurance"
              placeholder="Auto Calculate"
              disabled
              className={styles.input}
              value={installmentData.vehiclePendingInsurance}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.sectionTitle}> Brocker</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Commission</label>
            <input
              type="text"
              name="brokerCommission"
              placeholder="Commission"
              className={styles.inputCommission}
              value={installmentData.brokerCommission}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sectionTitle}>Extra</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Grace Period</label>
            <input
              type="text"
              name="gracePeriod"
              placeholder="Enter Grace Period"
              className={styles.input}
              value={installmentData.gracePeriod}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <button
              className={styles.uploadActions}
              type="button"
              onClick={generateInstallments}
            >
              <span className={styles.captureText}>Make Installments</span>
            </button>
          </div>
        </div>
        <div className={styles.sectionTitle}>Summary</div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Initail Deposit</label>
            <input
              type="text"
              name="totalInitialDeposit"
              placeholder="Auto Calculate"
              className={styles.input}
              disabled
              value={formData.totalInitialDeposit}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Total Installment Price</label>
            <input
              type="text"
              name="totalInstallmentPrice"
              placeholder="Auto Calculate"
              className={styles.input}
              disabled
              value={formData.totalInstallmentPrice}
            />
          </div>
        </div>
        <div className={styles.sectionTitles}>Installment Schedule</div>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Sr No.</div>
          <div className={styles.tableHeaderCell}>Installment No.</div>
          <div className={styles.tableHeaderCell}>Due Date</div>
          <div className={styles.tableHeaderCell}>Motor Vehicle Amount</div>
          <div className={styles.tableHeaderCell}>Insurance Amount</div>
          <div className={styles.tableHeaderCell}>Total</div>
        </div>

        {/* Sample table rows with mock data */}
        {installments.map((row, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>{row.srNo}</div>
            <div className={styles.tableCell}>{row.installmentNo}</div>
            <div className={styles.tableCellCustomer}>{row.dueDate}</div>
            <div className={styles.tableCell}>{row.motorVehicleAmount}</div>
            <div className={styles.tableCell}>{row.insuranceAmount}</div>
            <div className={styles.tableCell}>{row.total}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default InstallmentCalculator;