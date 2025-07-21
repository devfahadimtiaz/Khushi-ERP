import React, { useEffect, useState } from "react";
import styles from "./VehicleRepairDetails.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RepairingVoucher from "./RepairingVoucher";
const API_URL = process.env.REACT_APP_API_URL;
function VehicleRepairDetails({ voucherId, onBack }) {
  const [items, setItems] = useState([{ item: "", details: "", amount: "" }]);
  const [repairableVehicle, setRepairableVehicle] = useState([]);
  const [showRepairingVoucher, setShowRepairingVoucher] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [selectedShowrooms, setSelectedShowrooms] = useState();
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  useEffect(() => {
    if (userInfo) {
      setSelectedShowrooms(userInfo.showroom);
    }
  }, [userInfo]);

  const [repairDetails, setRepairDetails] = useState({
    selectVehicle: "",
    vehicleId: "",
    make: "",
    model: "",
    trim: "",
    year: "",
    issue: [],
    technician: "",
    totalexpense: "",
    accountNo: "",
    refrenceNo: "",
    timeRequired: "",
    vaucherNo: "",
  });
  const navigate = useNavigate();
  const handleRepairingVoucher = () => {
    setShowRepairingVoucher(true);
  };
  useEffect(() => {
    const fetchRepairableVehicle = async (selectedShowrooms) => {
      try {
        const res = await axios.get(`${API_URL}/repairableCars/${selectedShowrooms}`);
        const data = res.data;
        setRepairableVehicle(data);
      } catch {
        console.log("Error");
      }
    };
    fetchRepairableVehicle(selectedShowrooms);
  }, [selectedShowrooms]);
  useEffect(() => {
    if (!voucherId) return;
    axios
      .get(`${API_URL}/GetRepairVoucherByVoucherId/${voucherId}`)
      .then(async (res) => {
        const data = res.data;
        setRepairDetails({
          vehicleId: data.vehicle_id,
          make: data.make,
          model: data.model,
          trim: data.vin_no,
          year: data.year,
          technician: data.technician_name,
          totalexpense: data.total_amount,
          accountNo: data.account_no,
          refrenceNo: data.reference,
          timeRequired: data.time_required,
          vaucherNo: data.voucher_no,
        });
        setItems(data.issues || []);
      });
  }, [voucherId]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const vehicleID = repairDetails.vehicleId;
    try {
      if (voucherId) {
        // Edit flow
        await axios.put(
          `${API_URL}/updateRepairVoucher/${voucherId}`,
          repairDetails,
          { withCredentials: true }
        );
        alert("Repair voucher updated successfully!");
      } else {
        // Add new repair
        await axios.post(`${API_URL}/addRepairableCars`, repairDetails, {
          withCredentials: true,
        });
        await fetch(`${API_URL}/updateVehicleStatuss/${vehicleID}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        });
        alert("Vehicle repair added");
      }

      handleRepairingVoucher();
    } catch (err) {
      console.log(err);
      alert("Failed to submit vehicle repair");
    }
  };

  const handleVehicle = (e) => {
    const selectedVehicleId = e.target.value;
    const selectVehicle = repairableVehicle.find(
      (g) => g?.id.toString() === selectedVehicleId
    );

    if (selectVehicle) {
      setRepairDetails((prev) => ({
        ...prev,
        selectVehicle: selectedVehicleId,
        vehicleId: selectVehicle.id,
        make: selectVehicle.make,
        model: selectVehicle.model,
        trim: selectVehicle.vin_no,
        year: selectVehicle.year,
      }));
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRepairDetails((prev) => ({ ...prev, [name]: value }));
  };
  const AddItem = () => {
    setItems([...items, { item: "", details: "", amount: "" }]);
  };
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const amount = parseFloat(item.amount) || 0;
      return total + amount;
    }, 0);
  };
  useEffect(() => {
    const total = items.reduce(
      (sum, item) => sum + (parseFloat(item.amount) || 0),
      0
    );

    setRepairDetails((prev) => ({
      ...prev,
      issue: items, // update issues
      totalexpense: total, // update total
    }));
  }, [items]);

  if (showRepairingVoucher) {
    return <RepairingVoucher vehicleId={repairDetails.vehicleId} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.formCard}>
          <form onSubmit={handleSubmission}>
            <div className={styles.headerContainer}>
              <h1 className={styles.title}>Vehicle Repair Details</h1>
              {onBack && (
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={onBack}
                >
                  ← Back
                </button>
              )}
              <button type="submit" className={styles.submitButton}>
                {voucherId ? "Edit" : "Submit"} Repair Request
              </button>
            </div>

            <div className={styles.formContent}>
              <div className={styles.formRow}>
                <div className={styles.column}>
                  <div className={styles.inputWrapper}>
                    {repairableVehicle.length > 0 &&
                      !voucherId && (
                        <div className={styles.fieldLabel}>Select Vehicle</div>
                      ) && (
                        <select
                          className={styles.textInput}
                          onChange={handleVehicle}
                          value={repairDetails.selectVehicle}
                        >
                          <option value="">Select Vehicle</option>
                          {repairableVehicle.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.stock_no} - {r.make} {r.model} {r.year}
                            </option>
                          ))}
                        </select>
                      )}

                    <div className={styles.fieldLabel}>Vehicle Make</div>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter vehicle make"
                      name="make"
                      value={repairDetails.make}
                      disabled
                      onChange={handleInput}
                    />
                    <div className={styles.fieldLabel}>Vehicle Model</div>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter vehicle model"
                      name="model"
                      value={repairDetails.model}
                      disabled
                      onChange={handleInput}
                    />

                    <div className={styles.fieldLabel}>Vehicle Trim</div>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter vehicle trim"
                      name="trim"
                      value={repairDetails.trim}
                      disabled
                      onChange={handleInput}
                    />

                    <div className={styles.fieldLabel}>Vehicle Year</div>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter vehicle year"
                      name="year"
                      value={repairDetails.year}
                      disabled
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className={styles.column}>
                  <div className={styles.rightColumnContent}>
                    <div className={styles.fieldLabel}>Assign Technician</div>
                    <select
                      className={styles.selectWrapper}
                      name="technician"
                      value={repairDetails.technician}
                      onChange={handleInput}
                    >
                      <option className={styles.selectText} value="" disabled>
                        Select a technician
                      </option>
                      <option
                        className={styles.selectText}
                        value="Technician A"
                      >
                        Technician A
                      </option>
                      <option
                        className={styles.selectText}
                        value="Technician B"
                      >
                        Technician B
                      </option>
                      <option
                        className={styles.selectText}
                        value="Technician C"
                      >
                        Technician C
                      </option>
                    </select>
                    <div className={styles.fieldLabel}>Account No</div>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter Account No"
                      name="accountNo"
                      value={repairDetails.accountNo}
                      onChange={handleInput}
                    />
                    <div className={styles.fieldLabel}>Refrence No</div>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter Refrence No"
                      name="refrenceNo"
                      value={repairDetails.refrenceNo}
                      onChange={handleInput}
                    />
                    <div className={styles.fieldLabel}>
                      Time Required (Days)
                    </div>
                    <input
                      type="number"
                      className={styles.textInput}
                      placeholder="Enter Time Required (DAYS)"
                      name="timeRequired"
                      value={repairDetails.timeRequired}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.fieldLabel}>Issue Description</div>
              <div className={styles.tableHeader}>
                <div className={styles.tableHeaderItem}>Item</div>
                <div className={styles.tableHeaderItem}>details</div>
                <div className={styles.tableHeaderItem}>Amount</div>
              </div>

              {items.map((item, index) => (
                <div className={styles.itemRow} key={index}>
                  <input
                    type="text"
                    className={styles.itemInput}
                    value={item.item}
                    onChange={(e) =>
                      handleItemChange(index, "item", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className={styles.remarksInput}
                    value={item.details}
                    onChange={(e) =>
                      handleItemChange(index, "details", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    className={styles.amountInput}
                    value={item.amount}
                    onChange={(e) =>
                      handleItemChange(index, "amount", e.target.value)
                    }
                  />
                </div>
              ))}

              <div className={styles.addItemButton} onClick={AddItem}>
                + Add Item
              </div>
              <div className={styles.totalContainer}>
                <div className={styles.totalLabel}>Total:</div>
                <div className={styles.totalAmount}>{calculateTotal()}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VehicleRepairDetails;
