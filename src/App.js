import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavToggle from "./components/Navbar/NavToggle";
import Dashboard from "./components/Dashboard";
import AddGarage from "./components/Inventory/GarageManagement/AddGarage";
import GarageList from "./components/Inventory/GarageManagement/GarageList";
import ModuleSelection from "./components/ModuleSelection";
import SignIn from "./components/SignIn";
import Inventory from "./components/Inventory/Dashboard/Inventory";
import InventoryListView from "./components/Inventory/ViewManagement/InventoryListView";
import InventoryGridView from "./components/Inventory/ViewManagement/InventoryGridView";
import AddStock from "./components/Inventory/InventoryManagement/AddStock";
import VehicleTransferManagement from "./components/Inventory/TransferManagement/VehicleTransferManagement";
import IncomingVehicleTransfers from "./components/Inventory/TransferManagement/IncomingVehicleTransfers";
import ParkingZoneManagement from "./components/Inventory/ParkingZonesManagement/ParkingZoneManagement";
import AuctionHouse from "./components/Auction/SelectAuctionHouse";
import AuctionGridView from "./components/Auction/JapanCarAuctions";
import AuctionPriceChecker from "./components/Auction/AuctionChecker";
import DutyCalculator from "./components/Auction/DutyCalculator";
import LogisticsDashboard from "./components/Logistics/ShippingDashboard";
import OnWayToYard from "./components/Logistics/OnWayToYard";
import VehiclesInYard from "./components/Logistics/VehiclesInYard";
import LoadingPlanning from "./components/Logistics/LoadingPlanning";
import Shipped from "./components/Logistics/Shipped";
import VehiclesLoaded from "./components/Logistics/VehiclesLoaded";
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [currentView, setCurrentView] = useState("moduleSelection");

  const navigateToSignIn = () => {
    setCurrentView("signIn");
  };

  const navigateToModuleSelection = () => {
    setCurrentView("moduleSelection");
  };

  const navigateToDashboard = () => {
    setCurrentView("dashboard");
  };
  const navigateToInventoryDashboard = () => {
    setCurrentView("inventory-dashboard");
  };
  const navigateToInventoryListVies = () => {
    setCurrentView("stock");
  };

  const navigateToInventoryGridView = () => {
    setCurrentView("inventory-grid");
  };

  const navigateToInventoryAddStock = () => {
    setCurrentView("add-stock");
  };
  const navigateToAddGarage = () => {
    setCurrentView("add-garage");
  };
  const navigateToVehicleTransfer = () => {
    setCurrentView("vehicle-transfer");
  };
  const navigateToIncomingVehicleTransfers = () => {
    setCurrentView("incoming-vehicle-transfers");
  };
  const navigatetoParkingZoneManagement = () => {
    setCurrentView("parking-zone-management");
  };
  const navigateToActionHouse = () => {
    setCurrentView("auction-house");
  };
  const navigateToAuctionGridView = () => {
    setCurrentView("auction-grid");
  };
  const navigateToAuctionListView = () => {
    setCurrentView("price-checker");
  };
  const navigateToDutyCalculator = () => {
    setCurrentView("duty-calculator");
  };
  const navigateToOnWayToYard = () => {
    setCurrentView("on-way-to-yard");
  };

  const navigateToVehiclesInYard = () => {
    setCurrentView("vehicles-in-yard");
  };

  const navigateToLoadingPlanning = () => {
    setCurrentView("loading-planning");
  };

  const navigateToShipped = () => {
    setCurrentView("shipped");
  };

  const navigateToVehiclesLoaded = () => {
    setCurrentView("vehicles-loaded");
  };
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleNavigation = (viewId) => {
    setCurrentView(viewId);
    setNavOpen(false);
  };

  const renderView = () => {
    switch (currentView) {
      case "add-garage":
        return <AddGarage onBack={navigateToDashboard} />;
      case "garage":
        return (
          <GarageList
            onBack={navigateToDashboard}
            onAddGarage={navigateToAddGarage}
          />
        );
      case "dashboard":
        return <Dashboard onBack={navigateToSignIn} />;
      case "inventory-dashboard":
        return (
          <Inventory
            onBack={navigateToDashboard}
            onNavigateToAddStock={navigateToInventoryAddStock}
          />
        );
      case "stock":
        return (
          <InventoryListView
            onBack={navigateToDashboard}
            onNavigateToGridView={navigateToInventoryGridView}
          />
        );
      case "inventory-grid":
        return (
          <InventoryGridView
            onBack={navigateToDashboard}
            onNaigateToListView={navigateToInventoryListVies}
          />
        );
      case "signIn":
        return (
          <SignIn
            onBack={navigateToModuleSelection}
            onSignIn={navigateToDashboard}
          />
        );
      case "add-stock":
        return <AddStock onBack={navigateToDashboard} />;
      case "vehicle-transfer":
        return <VehicleTransferManagement onBack={navigateToDashboard} />;
      case "moduleSelection":
        return <ModuleSelection onContinue={navigateToSignIn} />;
      case "incoming-vehicle-transfers":
        return <IncomingVehicleTransfers onBack={navigateToDashboard} />;
      case "parking-zone-management":
        return <ParkingZoneManagement onBack={navigateToDashboard} />;
      case "auction-grid":
        return (
          <AuctionGridView
            onBack={navigateToDashboard}
            onListView={navigateToAuctionListView}
            onDutyCalculator={navigateToDutyCalculator}
          />
        );
      case "auction-house":
        return <AuctionHouse onBack={navigateToDashboard} />;
      case "price-checker":
        return <AuctionPriceChecker onBack={navigateToDashboard} />;
      case "duty-calculator":
        return <DutyCalculator onBack={navigateToDashboard} />;
      case "shipping-dashboard":
        return <LogisticsDashboard onBack={navigateToDashboard} />;
      case "on-way-to-yard":
        return <OnWayToYard onBack={navigateToDashboard} />;
      case "vehicles-in-yard":
        return <VehiclesInYard onBack={navigateToDashboard} />;
      case "loading-planning":
        return <LoadingPlanning onBack={navigateToDashboard} />;
      case "shipped":
        return <Shipped onBackTodashboard={navigateToDashboard} />;
      case "vehicles-loaded":
        return <VehiclesLoaded onBack={navigateToDashboard} />;
      default:
        return <Dashboard onBack={navigateToSignIn} />;
    }
  };

  return (
    <div className="App">
      {/* Hide nav only on moduleSelection and signIn screens */}
      {currentView !== "moduleSelection" && currentView !== "signIn" && (
        <>
          <NavToggle onClick={toggleNav} />
          <Navbar
            isOpen={navOpen}
            onClose={() => setNavOpen(false)}
            onNavigate={handleNavigation}
          />
        </>
      )}

      <main className="main-content">{renderView()}</main>
    </div>
  );
}

export default App;
