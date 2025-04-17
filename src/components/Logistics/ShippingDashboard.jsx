import React, { useState } from "react";
import styles from "./ShippingDashboard.module.css";
import alertIcon from "../../uploads/icons/alert-icon.svg";
import invoiceIcon from "../../uploads/icons/invoice-icon.svg";
import storageIcon from "../../uploads/icons/storage-icon.svg";
import VehicleTrackingTable from "./Component/VehicleTrackingTable";
import OnWayToYard from "./OnWayToYard";
import InYard from "./VehiclesInYard";
import LoadingPlanning from "./LoadingPlanning";
import Shipped from "./Shipped";
import Vehicles from "./VehiclesLoaded";
import VehiclesArrived from "./VehicleArrived";
import AllVehicles from "./AllVehicles";
import GetTruckingPrice from "./GetTruckingPrice";
import GetFreightEstimate from "./GetFreightEstimate";
import MyShipments from "./MyShipments";
import Invoices from "./Invoices";
import BillOfLadingExportDeclaration from "./BillOfLadingExportDeclaration";
import NavigationTabs from "./Component/NavigationTabs"
import VehicleArrived from "./VehicleArrived";
import VehiclesLoaded from "./VehiclesLoaded";
import CreateTruckingOrder from "./CreateTruckingOrder"

const headers = [
  "Make",
  "Model",
  "Year",
  "Origin Destination",
  "Arrived Destination",
  "Yard",
  "ETA",
];

const vehicles = [
  {
    col1: "Toyota",
    col2: "Camry",
    col3: "2023",
    col4: "Los Angeles, CA",
    col5: "2023-12-01",
    col6: "A1",
    col7: "12/15",
  },
  {
    col1: "Honda",
    col2: "Civic",
    col3: "2022",
    col4: "Seattle, WA",
    col5: "2023-12-02",
    col6: "B2",
    col7: "12/16",
  },
  {
    col1: "Ford",
    col2: "F-150",
    col3: "2023",
    col4: "Detroit, MI",
    col5: "2023-12-03",
    col6: "C3",
    col7: "12/17",
  },
  {
    col1: "BMW",
    col2: "X5",
    col3: "2022",
    col4: "Miami, FL",
    col5: "2023-12-04",
    col6: "D4",
    col7: "12/18",
  },
];

const headersYard = [
  "Yard",
  "Allocation",
  "1-30",
  "31-45",
  "46-60",
  "Over 60",
  "Total",
];

const dataYard = [
  {
    col1: "Hakata",
    col2: "NA",
    col3: "27",
    col4: "6",
    col5: "6(64,000)",
    col6: "2",
    col7: "50",
  },
  {
    col1: "Hakata",
    col2: "NA",
    col3: "27",
    col4: "6",
    col5: "6(64,000)",
    col6: "2",
    col7: "50",
  },
  {
    col1: "Hakata",
    col2: "NA",
    col3: "27",
    col4: "6",
    col5: "6(64,000)",
    col6: "2",
    col7: "50",
  },
];

function ShippingDashboard() {

  const [activeScreen, setActiveScreen] = useState("Dashboard");

  const navigateTo = (screen) => {
    setActiveScreen(screen);
  };

  const sharedProps = { navigateTo };

  switch (activeScreen) {
    case "OnWayToYard": return <OnWayToYard {...sharedProps} />;
    case "InYard": return <InYard {...sharedProps} />;
    case "LoadingPlanning": return <LoadingPlanning {...sharedProps} />;
    case "Shipped": return <Shipped {...sharedProps} />;
    case "Vehicles": return <Vehicles {...sharedProps} />;
    case "VehiclesArrived": return <VehiclesArrived {...sharedProps} />;
    case "AllVehicles": return <AllVehicles {...sharedProps} />;
    case "TruckingPrice": return <GetTruckingPrice navigateTo={setActiveScreen}/>;
    case "FreightEstimate": return <GetFreightEstimate {...sharedProps} />;
    case "MyShipments": return <MyShipments {...sharedProps} />;
    case "Invoices": return <Invoices {...sharedProps} />;
    case "BillOfLading": return <BillOfLadingExportDeclaration {...sharedProps} />;
    case "WayToYard": return <OnWayToYard onBack={() => navigateTo("Dashboard")} />;
    case "loadingPlanned": return <LoadingPlanning onBack={() => navigateTo("Dashboard")} />;
    case "arriving": return <VehicleArrived onBack={() => navigateTo("Dashboard")} />;
    case "shipped": return <Shipped onBack={() => navigateTo("Dashboard")} />;
    case "VehicleLoaded": return <VehiclesLoaded onBack={() => navigateTo("Dashboard")} />;
    case "inYard": return <InYard onBack={() => navigateTo("Dashboard")} />;
    case "CreateTruckingOrder":
  return (
    <CreateTruckingOrder
      onBackToDashboard={() => setActiveScreen("Dashboard")}
      onGetEstimates={() => setActiveScreen("TruckingPrice")}
      onViewOrders={() => setActiveScreen("ViewTruckingOrders")}
      onAllVehicles={()=> setActiveScreen("AllVehicles")}


    />
  );
    default:
      return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerSection}>
            <div className={styles.titleColumn}>
              <div className={styles.titleWrapper}>
                <h1 className={styles.dashboardTitle}>Shipping Dashboard</h1>
                <div className={styles.tabsContainer}>
                <NavigationTabs active="Dashboard" navigateTo={navigateTo} />
                </div>
              </div>
            </div>
            <div className={styles.searchColumn}>
              <div className={styles.searchWrapper}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search Chassis"
                />
                <div className={styles.storageAlert}>
                  <img
                    src={storageIcon}
                    alt="Storage"
                    className={styles.alertIcon}
                  />
                  <div className={styles.alertContent}>
                    <span>Storage: ¥</span>
                    <span>2400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statusCardsContainer}>
          <button className={styles.statusCard}  onClick={() => navigateTo("WayToYard")}>
            <div className={styles.statusNumber}>1</div>
            <div className={styles.statusLabel}>Way to Yard</div>
          </button>
          <button className={styles.statusCard} onClick={() => navigateTo("inYard")}>
            <div className={styles.statusNumber}>1</div>
            <div className={styles.statusLabel}>In Yard</div>
          </button>
          <button className={styles.statusCard} onClick={() => navigateTo("loadingPlanned")}>
            <div className={styles.statusNumber}>1</div>
            <div className={styles.statusLabel}>Loading Planned</div>
          </button>
          <button className={styles.statusCard} onClick={() => navigateTo("arriving")}>
            <div className={styles.statusNumber}>1</div>
            <div className={styles.statusLabel}>Arriving</div>
          </button>
          <button className={styles.statusCard} onClick={() => navigateTo("shipped")}>
            <div className={styles.statusNumber}>1</div>
            <div className={styles.statusLabel}>Shipped</div>
          </button>
          <button className={styles.statusCard} onClick={() => navigateTo("VehicleLoaded")}>
            <div className={styles.statusNumber}>1</div>
            <div className={styles.statusLabel}>Vehicles Loaded</div>
          </button>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainColumn}>
            <div className={styles.daysTableGrid}>
              <VehicleTrackingTable vehicles={vehicles} headers={headers} />
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.daysTableGrid}>
                <VehicleTrackingTable
                  vehicles={dataYard}
                  headers={headersYard}
                />
              </div>
            </div>
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.notificationsCard}>
              <h2 className={styles.sidebarCardTitle}>Notifications</h2>
              <div className={styles.notificationItem}>
                <img
                  src={alertIcon}
                  alt="Alert"
                  className={styles.notificationIcon}
                />
                <div className={styles.notificationContent}>
                  <div className={styles.notificationTitle}>
                    Storage Charge Alert
                  </div>
                  <div className={styles.notificationText}>
                    Vehicle JT458 exceeded 30 days
                  </div>
                </div>
              </div>
              <div className={styles.notificationItem}>
                <img
                  src={invoiceIcon}
                  alt="Invoice"
                  className={styles.notificationIcon}
                />
                <div className={styles.notificationContent}>
                  <div className={styles.notificationTitle}>Invoice Due</div>
                  <div className={styles.notificationText}>
                    Invoice #2024-001 due in 2 days
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.invoicesCard}>
              <h2 className={styles.sidebarCardTitle}>Invoices</h2>
              <div className={styles.invoiceItem}>
                <img
                  src={alertIcon}
                  alt="Alert"
                  className={styles.invoiceIcon}
                />
                <div className={styles.invoiceContent}>
                  <div className={styles.invoiceTitle}>Total Reciveable</div>
                  <div className={styles.invoiceAmount}>
                    <span className={styles.currencySymbol}>¥</span>
                    <span className={styles.amountValue}> 20,206,701</span>
                  </div>
                </div>
              </div>
              <div className={styles.invoiceItem}>
                <img
                  src={alertIcon}
                  alt="Alert"
                  className={styles.invoiceIcon}
                />
                <div className={styles.invoiceContent}>
                  <div className={styles.invoiceTitle}>Overdue</div>
                  <div className={styles.invoiceAmount}>
                    <span className={styles.currencySymbol}>¥</span>
                    <span className={styles.amountValue}> 7,509,848</span>
                  </div>
                </div>
              </div>
              <div className={styles.invoiceItem}>
                <img
                  src={alertIcon}
                  alt="Alert"
                  className={styles.invoiceIcon}
                />
                <div className={styles.invoiceContent}>
                  <div className={styles.invoiceTitle}>Due next 7 days</div>
                  <div className={styles.invoiceAmount}>
                    <span className={styles.currencySymbol}>¥</span>
                    <span className={styles.amountValue}> 1,535,491</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}
export default ShippingDashboard;