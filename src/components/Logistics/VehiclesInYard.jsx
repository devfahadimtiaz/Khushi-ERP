import React, { useState } from "react";
import styles from "./VehiclesInYard.module.css";

const VehiclesInYard = ({ onBack, onBackTodashboard }) => {
  // Sample data for the vehicles
  const vehicles = [
    {
      chassisNumber: "ABC123XYZ",
      model: "Toyota Camry",
      yardName: "Central Yard",
      dateIn: "2024-01-15",
      destination: "Mombasa",
      status: "In Storage",
    },
    {
      chassisNumber: "DEF456UVW",
      model: "Honda Civic",
      yardName: "North Yard",
      dateIn: "2024-02-01",
      destination: "Kampala",
      status: "Processing",
    },
    {
      chassisNumber: "GHI789RST",
      model: "Ford F-150",
      yardName: "South Yard",
      dateIn: "2024-01-28",
      destination: "Pakistan",
      status: "Ready",
    },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    chassisNumber: "",
    model: "",
    yardName: "",
    destination: "",
    fromDate: "",
    toDate: "",
  });

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  // Handle search button click
  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching with filters:", filters);
  };

  // Handle export as PDF
  const handleExportPDF = () => {
    console.log("Exporting as PDF");
  };

  // Handle export as Excel
  const handleExportExcel = () => {
    console.log("Exporting as Excel");
  };

  // Render status badge with appropriate styling
  const renderStatusBadge = (status) => {
    let statusClass;

    switch (status) {
      case "In Storage":
        statusClass = styles.statusInStorage;
        break;
      case "Processing":
        statusClass = styles.statusProcessing;
        break;
      case "Ready":
        statusClass = styles.statusReady;
        break;
      default:
        statusClass = "";
    }

    return (
      <div className={`${styles.statusBadge} ${statusClass}`}>{status}</div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageWrapper}>
        <div className={styles.filterCard}>
          <div className={styles.cardHeader}>
            <div className={styles.headerchild}>
              <button className={styles.backButton} onClick={onBackTodashboard}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="#092C4C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={styles.headerTitle}>Vehicle in Yard
              </div>
            </div>
            <div className={styles.exportButtons}>
              <button
                className={styles.exportPdfButton}
                onClick={handleExportPDF}
              >
                Export as PDF
              </button>
              <button
                className={styles.exportExcelButton}
                onClick={handleExportExcel}
              >
                Export as Excel
              </button>
            </div>
          </div>

          <div className={styles.filterLabels}>
            <div className={styles.filterLabel}>Chassis Number</div>
            <div className={styles.filterLabel}>Model</div>
            <div className={styles.filterLabel}>Yard Name</div>
          </div>

          <div className={styles.filterInputs}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Enter chassis number"
              value={filters.chassisNumber}
              onChange={(e) =>
                handleFilterChange("chassisNumber", e.target.value)
              }
            />

            <select className={styles.selectField}>
              <option className={styles.selectText} disabled>
                Select Modal
              </option>
              <option className={styles.selectText}>Toyota</option>
              <option className={styles.selectText}>Lamborghini</option>
              <option className={styles.selectText}>BMW</option>
              <option className={styles.selectText}>Mercedes</option>
            </select>

            <select className={styles.selectField}>
              <option className={styles.selectText} disabled>
                Select Yard
              </option>
              <option className={styles.selectText}>Central Yard</option>
              <option className={styles.selectText}>North Yard</option>
              <option className={styles.selectText}>South Yard</option>
            </select>
          </div>

          <div className={styles.filterLabels}>
            <div className={styles.filterLabel}>Destination</div>
            <div className={styles.filterLabel}>From Date</div>
            <div className={styles.filterLabel}>To Date</div>
          </div>

          <div className={styles.filterInputs}>
            <select className={styles.selectField}>
              <option className={styles.selectText} disabled>
                Destination
              </option>
              <option className={styles.selectText}>Mombasa</option>
              <option className={styles.selectText}>Kampala</option>
              <option className={styles.selectText}>Gujranwala</option>
            </select>

            <input
              type="date"
              className={styles.inputField}
              placeholder="Enter chassis number"
            />

            <input
              type="date"
              className={styles.inputField}
              placeholder="Enter chassis number"
            />
          </div>

          <button className={styles.searchButton} onClick={handleSearch}>
            Search Vehicles
          </button>
        </div>

        <div className={styles.resultsCard}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Chassis Number</div>
            <div className={styles.headerCell}>Model</div>
            <div className={styles.headerCell}>Yard Name</div>
            <div className={styles.headerCell}>Date In</div>
            <div className={styles.headerCell}>Destination</div>
            <div className={styles.headerCell}>Status</div>
          </div>

          <div className={styles.tableBody}>
            {vehicles.map((vehicle, index) => (
              <div className={styles.tableRow} key={index}>
                <div className={styles.chassisCell}>
                  <input type="checkbox" className={styles.checkbox} />
                  <div>{vehicle.chassisNumber}</div>
                </div>
                <div className={styles.dataCell}>{vehicle.model}</div>
                <div className={styles.dataCell}>{vehicle.yardName}</div>
                <div className={styles.dataCell}>{vehicle.dateIn}</div>
                <div className={styles.dataCell}>{vehicle.destination}</div>
                <div className={styles.statusCell}>
                  {renderStatusBadge(vehicle.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesInYard;
