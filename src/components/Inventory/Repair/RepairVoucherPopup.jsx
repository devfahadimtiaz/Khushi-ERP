import React, { useState, useEffect } from "react";
import styles from "./RepairVoucherPopup.module.css";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL
const RepairVoucherPopup = ({ onClose, taskData, onVoucherSaved }) => {
  const [items, setItems] = useState(
    taskData?.issues?.map((issue) => ({
      item: issue.item,
      remarks: issue.details,
      amount: issue.amount,
    })) || [{ item: "", remarks: "", amount: "" }]
  );
  const [showRepairingVoucher, setShowRepairingVoucher] = useState(false);

  const [formData, setFormData] = useState({
    vehicleId: taskData.id || "",
    vendorName: taskData?.technician_name || "",
    voucherNo: taskData?.voucher_no || "",
    accountNo: taskData?.account_no || "",
    referenceNo: taskData?.reference || "",
    prepaidBy: "",
    checkedBy: "",
    approvedBy: "",
    repairid: taskData?.repair_id || "",
    totalPaid: "",
    remarks: "",
    status: "Paid"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { item: "", remarks: "", amount: "" }]);
  };
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const amount = parseFloat(item.amount) || 0;
      return total + amount;
    }, 0);
  };
  useEffect(() => {
    const total = calculateTotal();
    setFormData((prev) => ({ ...prev, totalPaid: total }));
  }, [items]);
  const handleSaveVoucher = async (e) => {
    e.preventDefault();
     const vehicleID= formData.vehicleId
    const total = calculateTotal();

    const updatedFormData = {
      ...formData,
      totalPaid: total,
    };
    console.log(vehicleID)

    try {
      const res = await axios.post(
        `${API_URL}/addPattyVoucher`,
        {
          ...updatedFormData,
          items: items,
        },
        {
          withCredentials: true,
        }
      );
       await fetch( `${API_URL}/updateVehicle/${vehicleID}`,{
        method: 'PATCH',
         headers:{
        "Content-Type": "application/json",
      },
      })

      console.log("Server Response:", res.data);
      setShowRepairingVoucher(true); // Optional: still keep local state
      onVoucherSaved(formData.vehicleId); // New prop to notify parent
    } catch (err) {
      console.error("Error saving voucher:", err.response?.data || err.message);
    }
  };
  if (showRepairingVoucher) {
    onClose(); // close the popup
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.popupCard}>
          <div className={styles.popupHeader}>
            <div className={styles.title}>Petty Cash Voucher</div>
            <div className={styles.closeButton} onClick={onClose}>
              ×
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Reference No</label>
              <input
                type="text"
                className={styles.textInput}
                name="referenceNo"
                value={formData.referenceNo}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Technician Name</label>
              <input
                type="text"
                className={styles.textInput}
                name="vendorName"
                value={formData.vendorName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Voucher No</label>
              <input
                type="text"
                className={styles.textInput}
                name="voucherNo"
                value={formData.voucherNo}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Account No</label>
              <input
                type="text"
                className={styles.textInput}
                name="accountNo"
                value={formData.accountNo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderItem}>Item</div>
            <div className={styles.tableHeaderItem}>Remarks</div>
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
                value={item.remarks}
                onChange={(e) =>
                  handleItemChange(index, "remarks", e.target.value)
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

          <div className={styles.addItemButton} onClick={addItem}>
            + Add Item
          </div>

          <div className={styles.totalContainer}>
            <div className={styles.totalLabel}>Total:</div>
            <div className={styles.totalAmount}>{calculateTotal()}</div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Prepaid By</label>
              <input
                type="text"
                className={styles.textInput}
                name="prepaidBy"
                value={formData.prepaidBy}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Checked By</label>
              <input
                type="text"
                className={styles.textInput}
                name="checkedBy"
                value={formData.checkedBy}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Approved By</label>
              <input
                type="text"
                className={styles.textInput}
                name="approvedBy"
                value={formData.approvedBy}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
            <button className={styles.saveButton} onClick={handleSaveVoucher}>
              Save Voucher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairVoucherPopup;
