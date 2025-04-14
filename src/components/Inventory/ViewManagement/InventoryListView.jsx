import React, { useState } from "react";
import styles from "./InventoryListView.module.css";

const InventoryTable = ({ onBack, onNavigateToGridView }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample data - in a real application, this would come from props or an API
  const inventoryData = [
    {
      id: 1,
      make: "Toyota",
      model: "Yaris",
      odo: "22,600 km",
      year: "2023/4",
      chassis: "KSP210-0038***",
      engine: "5BA-KSP210",
      stock: "B24-108",
      cc: "1500cc",
      body: "Sedan",
      fuel: "Hybrid",
      transmission: "CVT/AT",
      drive: "LHS",
      doors: "5",
      seats: "5",
      code: "VG20",
      grade: "4.5BB",
      dimension: "4.91x1.80x1.45m",
      others: "CAT SR A/W TV L-SEAT/5SEAT B-CAM HEATER 4.5B",
    },
    {
      id: 2,
      make: "Toyota",
      model: "Yaris",
      odo: "22,600 km",
      year: "2023/4",
      chassis: "KSP210-0038***",
      engine: "5BA-KSP210",
      stock: "B24-108",
      cc: "1500cc",
      body: "Sedan",
      fuel: "Hybrid",
      transmission: "CVT/AT",
      drive: "LHS",
      doors: "5",
      seats: "5",
      code: "VG20",
      grade: "4.5BB",
      dimension: "4.91x1.80x1.45m",
      others: "CAT SR A/W TV L-SEAT/5SEAT B-CAM HEATER 4.5B",
    },
    {
      id: 3,
      make: "Toyota",
      model: "Yaris",
      odo: "22,600 km",
      year: "2023/4",
      chassis: "KSP210-0038***",
      engine: "5BA-KSP210",
      stock: "B24-108",
      cc: "1500cc",
      body: "Sedan",
      fuel: "Hybrid",
      transmission: "CVT/AT",
      drive: "LHS",
      doors: "5",
      seats: "5",
      code: "VG20",
      grade: "4.5BB",
      dimension: "4.91x1.80x1.45m",
      others: "CAT SR A/W TV L-SEAT/5SEAT B-CAM HEATER 4.5B",
    },
    {
      id: 4,
      make: "Toyota",
      model: "Yaris",
      odo: "22,600 km",
      year: "2023/4",
      chassis: "KSP210-0038***",
      engine: "5BA-KSP210",
      stock: "B24-108",
      cc: "1500cc",
      body: "Sedan",
      fuel: "Hybrid",
      transmission: "CVT/AT",
      drive: "LHS",
      doors: "5",
      seats: "5",
      code: "VG20",
      grade: "4.5BB",
      dimension: "4.91x1.80x1.45m",
      others: "CAT SR A/W TV L-SEAT/5SEAT B-CAM HEATER 4.5B",
    },
  ];

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSelectAll = () => {
    setSelectedItems(inventoryData.map((item) => item.id));
  };

  const handleUnselectAll = () => {
    setSelectedItems([]);
  };

  const handleDeleteSelected = () => {
    // In a real application, this would call an API to delete the selected items
    console.log("Deleting items:", selectedItems);
    setSelectedItems([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>Inventory Management</div>
          <div className={styles.actions}>
            <button className={styles.btnGreen}>Mark as sold</button>
            <button className={styles.btnGray} onClick={onNavigateToGridView}>
              Grid View
            </button>
            <button className={styles.btnGray}>PDF</button>
            <button className={styles.btnGray} onClick={handleSelectAll}>
              Select All
            </button>
            <button className={styles.btnGray} onClick={handleUnselectAll}>
              Unselect All
            </button>
            <button className={styles.btnRed} onClick={handleDeleteSelected}>
              Delete Selected
            </button>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>ID</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>ODO</th>
                  <th>Year</th>
                  <th>Chassis</th>
                  <th>Engine</th>
                  <th>Stock</th>
                  <th>CC</th>
                  <th>Body</th>
                  <th>Fuel</th>
                  <th>Trans.</th>
                  <th>Drive</th>
                  <th>Doors</th>
                  <th>Seats</th>
                  <th>Code</th>
                  <th>Grade</th>
                  <th>Dimension</th>
                  <th>Others</th>
                  <th className={styles.actionColumn}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className={styles.checkboxContainer}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </div>
                    </td>
                    <td>{item.make}</td>
                    <td>{item.model}</td>
                    <td>{item.odo}</td>
                    <td>{item.year}</td>
                    <td>{item.chassis}</td>
                    <td>{item.engine}</td>
                    <td>{item.stock}</td>
                    <td>{item.cc}</td>
                    <td>{item.body}</td>
                    <td>{item.fuel}</td>
                    <td>{item.transmission}</td>
                    <td>{item.drive}</td>
                    <td>{item.doors}</td>
                    <td>{item.seats}</td>
                    <td>{item.code}</td>
                    <td>{item.grade}</td>
                    <td>{item.dimension}</td>
                    <td>{item.others}</td>
                    <td>
                      <div className={styles.rowActions}>
                        <button className={styles.editBtn}>Edit</button>
                        <button className={styles.deleteBtn}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
