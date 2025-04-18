import React, { useState } from "react";
import styles from "./RepairVoucherPopup.module.css";

const RepairVoucherPopup = ({ onClose, taskData }) => {
  const [items, setItems] = useState([{ item: "", remarks: "", amount: "" }]);
  const [formData, setFormData] = useState({
    staffFullName: taskData?.staffName || "",
    vendorName: taskData?.vendorName || "",
    voucherNo: taskData?.voucherNo || "",
    accountNo: "",
    referenceNo: "",
    prepaidBy: "",
    checkedBy: "",
    approvedBy: "",
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

  const handleSaveVoucher = () => {
    // Here you would typically save the data to your backend
    console.log("Saving voucher:", {
      ...formData,
      items,
      total: calculateTotal(),
    });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.popupCard}>
          <div className={styles.popupHeader}>
            <div className={styles.title}>Repair Voucher</div>
            <div className={styles.closeButton} onClick={onClose}>
              ×
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Staff Full Name</label>
              <input
                type="text"
                className={styles.textInput}
                name="staffFullName"
                value={formData.staffFullName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formColumn}>
              <label className={styles.fieldLabel}>Vendor Name</label>
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

          <div className={styles.fullWidthField}>
            <label className={styles.fieldLabel}>Reference No</label>
            <input
              type="text"
              className={styles.textInput}
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleInputChange}
            />
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
