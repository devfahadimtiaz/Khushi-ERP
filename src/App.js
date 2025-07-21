import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/Navbar/Sidebar";
import VehicleInventorySearch from "./components/Inventory/VehicleInventorySearch";

import { PermissionProvider } from "./context/PermissionContext";
import Dashboard from "./components/Dashboard";
import SubsidiaryGeneralLedger from "./components/GeneralLedger/GeneralLedgerReport/SubsidiaryGeneralLedger";
import TrialBalance from "./components/GeneralLedger/GeneralLedgerReport/TrialBalance";
import AddGarage from "./components/Inventory/GarageManagement/AddGarage";
import ModuleSelection from "./components/ModuleSelection";
import SignIn from "./components/SignIn";
import Inventory from "./components/Inventory/Dashboard/Inventory";
import InventoryListView from "./components/Inventory/ViewManagement/InventoryListView";
import InventoryGridView from "./components/Inventory/ViewManagement/InventoryGridView";
import AddStock from "./components/Inventory/InventoryManagement/AddStock";
import VehicleTransferTo from "./components/Inventory/TransferManagement/VehicleTransferTo";
import VehicleTransferManagement from "./components/Inventory/TransferManagement/VehicleTransferManagement";
import IncomingVehicleTransfers from "./components/Inventory/TransferManagement/IncomingVehicleTransfers";
import ParkingZoneManagement from "./components/Inventory/ParkingZonesManagement/ParkingZoneManagement";
import AuctionHouse from "./components/Auction/SelectAuctionHouse";
import AuctionGridView from "./components/Auction/JapanCarAuctions";
import AuctionPriceChecker from "./components/Auction/AuctionChecker";
import DutyCalculator from "./components/Auction/DutyCalculator";
import LogisticsDashboard from "./components/Logistics/ShippingDashboard";
import CashSaleList from "./components/Sale/CreditSale/CarSalesList";
import CreditSale from "./components/Sale/CreditSale/AddVehicleSale";
import CreditSaleList from "./components/Sale/CreditSale/CreditList";
import AddPayment from "./components/Sale/CreditSale/AddPayment";
import SaleDashboard from "./components/Sale/SaleDashboard";
import MarketTrend from "./components/Sale/MarketTrendAnalysis";
import VehicleRepairDetails from "./components/Inventory/Repair/VehicleRepairDetails";
import RepairTasksManagement from "./components/Inventory/Repair/RepairTasksManagement";
import VoucherManagement from "./components/Inventory/Repair/VoucherManagement";
import RoadTestform from "./components/Inventory/RoadTest/RoadTestForm";
import RoadTestRecords from "./components/Inventory/RoadTest/RoadTestRecords";
import GatePass from "./components/Sale/GatePass/GatePass";
import GatePassRecords from "./components/Sale/GatePass/GatePassRecord";
import CreateOpeningBalance from "./components/GeneralLedger/GeneralLedgerSetup/CreateOpeningBalance";
import GeneralLedgerDashboard from "./components/GeneralLedger/GeneralLedgerDashboard";
import SalesTransections from "./components/Sale/SalesTransections";
import LogBookTransfer from "./components/VehicleLogBook/LogBookTransfers";
import CommissionList from "./components/Sale/CreditSale/CommissionList";
import PurchaseDB from "./components/Purchase & Receivaables/PurchaseDB";
import PurchaseRequisition from "./components/Purchase & Receivaables/Purchase/PurchaseRequisition";
import QoutationDocuments from "./components/Purchase & Receivaables/Purchase/QuotationDocument";
import TenderDocument from "./components/Purchase & Receivaables/Purchase/TenderDocument";
import ComparativeStatement from "./components/Purchase & Receivaables/Purchase/ComparativeStatement";
import PurchaseOrder from "./components/Purchase & Receivaables/Purchase/PurchasedOrder";
import GenerateGoodRecieveNotes from "./components/Purchase & Receivaables/Purchase/GenerateGoodRecieveNotes";
import Payment from "./components/Purchase & Receivaables/Purchase/Payment";
import Transportation from "./components/Purchase & Receivaables/Purchase/Transportation";
import PurchaseRetunRequest from "./components/Purchase & Receivaables/PurchaseReturn/PurchaseReturnRequest";
import PurchaseDispatchNote from "./components/Purchase & Receivaables/PurchaseReturn/PurchasedDispatchedNote";
import PurchaseReturnNote from "./components/Purchase & Receivaables/PurchaseReturn/PurchaseReturnNote";
import PayableConfiguration from "./components/Purchase & Receivaables/PurchaseIntegration/PayableConfiguration";
import PurchasedReturnVoucher from "./components/Purchase & Receivaables/PurchaseVoucher/PurchaseReturnVouchers";
import PurchasePayableReturnVoucher from "./components/Purchase & Receivaables/PurchaseVoucher/PurchasePayableReturnVoucher";
import PaymentVouchers from "./components/Purchase & Receivaables/PurchaseVoucher/PaymentVouchers";
import AdvanceReturnVoucher from "./components/Purchase & Receivaables/PurchaseVoucher/AdvanceRetrnVouchers";
import PurchaseOrderList from "./components/Purchase & Receivaables/PurchaseReport/PurchaseOrderList";
import PurchaseShowroomWise from "./components/Purchase & Receivaables/PurchaseReport/PurchaseShowroomWise";
import PaymentRegisterReport from "./components/Purchase & Receivaables/PurchaseReport/PaymentRegister";
import PayableAgingReport from "./components/Purchase & Receivaables/PurchaseReport/PayableAgingReport";
import PendingPOReport from "./components/Purchase & Receivaables/PurchaseReport/PendingPOReport";
import SupplierContactList from "./components/Purchase & Receivaables/PurchaseReport/SupplierContactList";
import UnpaidSupplierBills from "./components/Purchase & Receivaables/PurchaseReport/UnpaidSupplierBills";
import SupplierWiseBillReports from "./components/Purchase & Receivaables/PurchaseReport/SupplierWiseBillReports";
import GarageManagement from "./components/GeneralLedger/GeneralLedgerSetup/GarageManagement/GarageList";
import CostAndProfit from "./components/GeneralLedger/GeneralLedgerSetup/CostAndProfitCalculator";
import ChartOfAccountsSetup from "./components/GeneralLedger/GeneralLedgerSetup/ChartOfAccountsSetup";
import CurrencyManagement from "./components/GeneralLedger/GeneralLedgerSetup/CurrencyManagement";
import SubsidiaryLedger from "./components/GeneralLedger/GeneralLedgerSetup/SubsidiaryLedger";
import VoucherSetup from "./components/GeneralLedger/GeneralLedgerSetup/VoucherSetup";
import SubsidiaryFileSetup from "./components/GeneralLedger/GeneralLedgerSetup/SubsidiaryFileSetup";
import BankDetails from "./components/GeneralLedger/GeneralLedgerSetup/BankDetails";
import CashAccountDetails from "./components/GeneralLedger/GeneralLedgerSetup/CashAccountDetails";
import CreditAccountDetails from "./components/GeneralLedger/GeneralLedgerSetup/CreditAccountDetails";
import FinancialYearList from "./components/GeneralLedger/GeneralLedgerTransection/FinancialYearList";
import OpeningBalance from "./components/GeneralLedger/GeneralLedgerTransection/OpeningBalance";
import OpeningBalanceVouchers from "./components/GeneralLedger/GeneralLedgerTransection/OpeningBalanceVouchers";
import InternalCashTransfer from "./components/GeneralLedger/GeneralLedgerTransection/InternalCashTransfer";
import AccountListingReport from "./components/GeneralLedger/GeneralLedgerReport/AccountListingReport";
import SearchingVoucher from "./components/GeneralLedger/GeneralLedgerReport/SearchingVoucher";
import GeneralLedger from "./components/GeneralLedger/GeneralLedgerReport/GeneralLedgerReport";
import ProfitAndLossStatement from "./components/GeneralLedger/GeneralLedgerReport/ProfitAndLossStatement";
import BalanceSheet from "./components/GeneralLedger/GeneralLedgerReport/BalanceSheet";
import BrandAssets from "./components/Branding/BrandAssets";
import ExpenseManagement from "./components/Purchase & Receivaables/Expense/ExpenseManagement";
import ExpenseSheet from "./components/Purchase & Receivaables/Expense/RecentExpensesTable";
import OnWayToYard from "./components/Logistics/OnWayToYard";
import InYard from "./components/Logistics/VehiclesInYard";
import LoadingPlanning from "./components/Logistics/LoadingPlanning";
import Arriving from "./components/Logistics/VehicleArrived";
import Shipped from "./components/Logistics/Shipped";
import VehiclesLoaded from "./components/Logistics/VehiclesLoaded";
import QuotationTemplate from "./components/Quotation/QuotationTemplate";
import InputScreenForPerformaQuotation from "./components/Quotation/InputScreenForPerformaQuotation";
import ShowroomZoneSetup from "./components/Inventory/ParkingZonesManagement/ShowroomZoneSetup";
import VehicleDetails from "./components/Inventory/ViewManagement/VehicleDetails";
import LogBookReceiptNote from "./components/VehicleLogBook/LogBookReceiptNote";
import TransferLogBook from "./components/VehicleLogBook/CreateLogBookTransfer";
import UserManagement from "./components/UserManagement/Users/UserManagement";
import AddUser from "./components/UserManagement/Users/AddNewUser";
import RolesManagement from "./components/UserManagement/Roles/RoleManagement";
import AddRole from "./components/UserManagement/Roles/AddNewRole";
import UserPermissionDetails from "./components/UserManagement/Permission/UserPermissionDetails";
import CashSaleAggrement from "./components/Sale/CreditSale/CashSaleAggrement";
import CreditSaleAgreement from "./components/Sale/CreditSale/CreditSaleAgreement";
import axios from "axios";
import AccessDenied from "./components/Unauthorize/AccessDenied";
import ProtectedRoutes from "./context/ProtectedRoutes";
import EditGeneralDetails from "./components/Inventory/UpdateInventory/EditGeneral";
import EditMediaUpload from "./components/Inventory/UpdateInventory/EditMediaUpload";
import EditDocumentUpload from "./components/Inventory/UpdateInventory/EditDocumentUpload";
const API_URL = process.env.REACT_APP_API_URL;
function App() {
  const [data, setData] = useState([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;

      if (data.valid) {
        setUserId(data.id); // Store user ID in state
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  //Fetch Permissions
  const FetchPermissions = async () => {
    try {
      const response = await fetch(`${API_URL}/GetPermissions/${userId}`);
      const data = await response.json();
      setPermissions(data.permissions); // Store permissions in state
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };
  useEffect(() => {
    if (userId) {
      FetchPermissions();
    }
  }, [userId]);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev); // Toggle Navbar visibility
  };
  return (
    <PermissionProvider permissions={permissions}>
      <Router>
        <AppContent
          data={data}
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
      </Router>
    </PermissionProvider>
  );
}

function AppContent({ data, isNavbarOpen, toggleNavbar }) {
  const location = useLocation(); // Now inside the Router context
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  // Define routes where the Navbar should be hidden
  const hideNavbarRoutes = ["/SignIn", "/ModuleSelection", "/AccessDenied"];

  return (
    <div className="App">
      {/* Conditionally render NavToggle and Navbar */}

      <div className="layout">
        {!hideNavbarRoutes.includes(location.pathname) && (
          <div className="no-print">
            <SideBar
              collapsed={sidebarCollapsed}
              onToggle={setSidebarCollapsed}
            />
          </div>
        )}
        <main className={`main-content ${sidebarCollapsed ? "" : "collapsed"}`}>
          {!hideNavbarRoutes.includes(location.pathname) && (
            <>
              <div className="no-print">
                <Header />
              </div>
            </>
          )}
          <Routes>
            <Route path="/" element={<Navigate to="/ModuleSelection" />} />
            <Route path="/ModuleSelection" element={<ModuleSelection />} />
            <Route
              path="/searchVehicle"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="searchVehcile"
                  permissionType="view"
                >
                  <VehicleInventorySearch />
                </ProtectedRoutes>
              }
            />
            <Route path="/SignIn" element={<SignIn />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="mainDashboard"
                  permissionType="view"
                >
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddGarage"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="showroomManager"
                  permissionType="edit"
                >
                  <AddGarage />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/InventoryDashboard"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="inventoryDashboard"
                  permissionType="view"
                >
                  <Inventory />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/Stock"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="listView"
                  permissionType="view"
                >
                  <InventoryListView />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/AddStock/:id"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="AddStock"
                  permissionType="view"
                >
                  <AddStock />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/InventoryGridView"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="gridView"
                  permissionType="view"
                >
                  <InventoryGridView />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddStock"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="AddStock"
                  permissionType="view"
                >
                  <AddStock />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AuctionGridView"
              element={
                <ProtectedRoutes
                  module="auction"
                  subModule="auctionGridView"
                  permissionType="view"
                >
                  <AuctionGridView />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AuctionPriceChecker"
              element={
                <ProtectedRoutes
                  module="auction"
                  subModule="priceChecker"
                  permissionType="view"
                >
                  <AuctionPriceChecker />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/DutyCalculator"
              element={
                <ProtectedRoutes
                  module="auction"
                  subModule="dutyChecker"
                  permissionType="view"
                >
                  <DutyCalculator />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ShippingDashboard"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="logisticsDashboard"
                  permissionType="view"
                >
                  <LogisticsDashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CashSaleList"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="cashSaleList"
                  permissionType="view"
                >
                  <CashSaleList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddSaleDeed"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="saleDead"
                  permissionType="view"
                >
                  <CreditSale />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CreditSaleList"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="creditSaleList"
                  permissionType="view"
                >
                  <CreditSaleList />
                </ProtectedRoutes>
              }
            />
            <Route path="/AddPayment" element={<AddPayment />} />
            <Route
              path="/SaleDashboard"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="salesDashboard"
                  permissionType="view"
                >
                  <SaleDashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/MarketTrend"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="marketTrendAnalysis"
                  permissionType="view"
                >
                  <MarketTrend />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/VehicleRepairDetails"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="vehicleRepairDetails"
                  permissionType="view"
                >
                  <VehicleRepairDetails />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/RepairTasksManagement"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="vehicleRepairManagement"
                  permissionType="view"
                >
                  <RepairTasksManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/VoucherManagement"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="repairVoucherManagement"
                  permissionType="view"
                >
                  <VoucherManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/RoadTestform"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="roadTestForm"
                  permissionType="view"
                >
                  <RoadTestform />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/RoadTestRecords"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="roadTestRecord"
                  permissionType="view"
                >
                  <RoadTestRecords />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/GatePass"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="gatepassForm"
                  permissionType="view"
                >
                  <GatePass />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/GatePassRecord"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="gatepassRecord"
                  permissionType="view"
                >
                  <GatePassRecords />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/Createopeningbalance"
              element={<CreateOpeningBalance />}
            />
            <Route
              path="/GLDashboard"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="GLDashboard"
                  permissionType="view"
                >
                  <GeneralLedgerDashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/SubsidiaryGeneralLedger"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="subsidiaryGeneralLedger"
                  permissionType="view"
                >
                  <SubsidiaryGeneralLedger />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/TrialBalance"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="trialBalance"
                  permissionType="view"
                >
                  <TrialBalance />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/VehicleTransferTo"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="vehicleTransferTo"
                  permissionType="view"
                >
                  <VehicleTransferTo />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/VehicleTransferManagement"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="vehicleTransferManagement"
                  permissionType="view"
                >
                  <VehicleTransferManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/IncomingVehicleTransfers"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="incomingVehicle"
                  permissionType="view"
                >
                  <IncomingVehicleTransfers />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/GarageManagement"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="showroomManager"
                  permissionType="view"
                >
                  <GarageManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ParkingZoneManagement"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="parkingZoneManagement"
                  permissionType="view"
                >
                  <ParkingZoneManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AuctionHouse"
              element={
                <ProtectedRoutes
                  module="auction"
                  subModule="auctionHouse"
                  permissionType="view"
                >
                  <AuctionHouse />
                </ProtectedRoutes>
              }
            />
            <Route path="/SalesTransections" element={<SalesTransections />} />
            <Route
              path="/LogBookTransfer"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="logBook"
                  permissionType="edit"
                >
                  <LogBookTransfer />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CommissionList"
              element={
                <ProtectedRoutes
                  module="sales"
                  subModule="commission"
                  permissionType="view"
                >
                  <CommissionList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseDB"
              element={
                <ProtectedRoutes
                  module="dashboard"
                  subModule="purchasedDashboard"
                  permissionType="view"
                >
                  <PurchaseDB />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseRequisition"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchaseRequisition"
                  permissionType="view"
                >
                  <PurchaseRequisition />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/QoutationDocuments"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="quotationDocument"
                  permissionType="view"
                >
                  <QoutationDocuments />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/TenderDocument"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="tenderDocument"
                  permissionType="view"
                >
                  <TenderDocument />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ComparativeStatement"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="comparativeStatement"
                  permissionType="view"
                >
                  <ComparativeStatement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseOrder"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchaseOrder"
                  permissionType="view"
                >
                  <PurchaseOrder />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/GenerateGoodRecieveNotes"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="goodRecievedNote"
                  permissionType="view"
                >
                  <GenerateGoodRecieveNotes />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/Payment"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="payment"
                  permissionType="view"
                >
                  <Payment />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/Transportation"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="transportation"
                  permissionType="view"
                >
                  <Transportation />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseRetunRequest"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchaseReturnRequest"
                  permissionType="view"
                >
                  <PurchaseRetunRequest />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseDispatchNote"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchasedDispatchedNote"
                  permissionType="view"
                >
                  <PurchaseDispatchNote />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PayableConfiguration"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="payableConfiguration"
                  permissionType="view"
                >
                  <PayableConfiguration />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchasedReturnVoucher"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchasedReturnVOucher"
                  permissionType="view"
                >
                  <PurchasedReturnVoucher />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchasePayableReturnVoucher"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchasedAndPayableReturnVoucher"
                  permissionType="view"
                >
                  <PurchasePayableReturnVoucher />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PaymentVouchers"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="paymentVoucher"
                  permissionType="view"
                >
                  <PaymentVouchers />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AdvanceReturnVoucher"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="advanceReturnVoucher"
                  permissionType="view"
                >
                  <AdvanceReturnVoucher />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseOrderList"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchasedOrderReport"
                  permissionType="view"
                >
                  <PurchaseOrderList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseShowroomWise"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchaseShowroomWiseReport"
                  permissionType="view"
                >
                  <PurchaseShowroomWise />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PaymentRegisterReport"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="paymentRegisterReport"
                  permissionType="view"
                >
                  <PaymentRegisterReport />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PayableAgingReport"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="payableAgingReport"
                  permissionType="view"
                >
                  <PayableAgingReport />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PurchaseReturnNote"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="purchasedReturnNote"
                  permissionType="view"
                >
                  <PurchaseReturnNote />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/PendingPOReport"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="pendingPOItems"
                  permissionType="view"
                >
                  <PendingPOReport />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/SupplierContactList"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="supplierContactList"
                  permissionType="view"
                >
                  <SupplierContactList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/UnpaidSupplierBills"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="unpaidSupplierBill"
                  permissionType="view"
                >
                  <UnpaidSupplierBills />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/SupplierWiseBillReports"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="supplierWiseBillReports"
                  permissionType="view"
                >
                  <SupplierWiseBillReports />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CostAndProfit"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="costAndProfit"
                  permissionType="view"
                >
                  <CostAndProfit />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ChartOfAccountsSetup"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="chartOfAccount"
                  permissionType="view"
                >
                  <ChartOfAccountsSetup />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CurrencyManagement"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="currencyManagement"
                  permissionType="view"
                >
                  <CurrencyManagement />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/SubsidiaryLedger"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="subsidiaryGeneralLedger"
                  permissionType="view"
                >
                  <SubsidiaryLedger />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/VoucherSetup"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="voucherSetup"
                  permissionType="view"
                >
                  <VoucherSetup />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/SubsidiaryFileSetup"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="subsidiaryFileSetup"
                  permissionType="view"
                >
                  <SubsidiaryFileSetup />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/BankDetails"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="bankDetails"
                  permissionType="view"
                >
                  <BankDetails />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CashAccountDetails"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="CashAccountDetails"
                  permissionType="view"
                >
                  <CashAccountDetails />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/CreditAccountDetails"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="CreditAccountDetails"
                  permissionType="view"
                >
                  <CreditAccountDetails />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/FinancialYearList"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="financialYearList"
                  permissionType="view"
                >
                  <FinancialYearList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/OpeningBalance"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="OpeningBalance"
                  permissionType="view"
                >
                  <OpeningBalance />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/OpeningBalanceVouchers"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="openingBalanceVoucher"
                  permissionType="view"
                >
                  <OpeningBalanceVouchers />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/InternalCashTransfer"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="internalCashTransfer"
                  permissionType="view"
                >
                  <InternalCashTransfer />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AccountListingReport"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="accountListingReport"
                  permissionType="view"
                >
                  <AccountListingReport />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/SearchingVoucher"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="searchingVoucher"
                  permissionType="view"
                >
                  <SearchingVoucher />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/GeneralLedger"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="generalLedger"
                  permissionType="view"
                >
                  <GeneralLedger />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ProfitAndLossStatement"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="profitAndLoss"
                  permissionType="view"
                >
                  <ProfitAndLossStatement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/BalanceSheet"
              element={
                <ProtectedRoutes
                  module="generalLedger"
                  subModule="balanceSheet"
                  permissionType="view"
                >
                  <BalanceSheet />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/BrandAssets"
              element={
                <ProtectedRoutes
                  module="branding"
                  subModule="branding"
                  permissionType="view"
                >
                  <BrandAssets />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ExpenseManagement"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="expenseManagement"
                  permissionType="view"
                >
                  <ExpenseManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ExpenseSheet"
              element={
                <ProtectedRoutes
                  module="purchase"
                  subModule="expenseManagement"
                  permissionType="view"
                >
                  <ExpenseSheet />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/OnWayToYard"
              element={
                <ProtectedRoutes
                  module="logistics"
                  subModule="wayToYard"
                  permissionType="view"
                >
                  <OnWayToYard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/InYard"
              element={
                <ProtectedRoutes
                  module="logistics"
                  subModule="inYard"
                  permissionType="view"
                >
                  <InYard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/LoadingPlanning"
              element={
                <ProtectedRoutes
                  module="logistics"
                  subModule="loadPlaining"
                  permissionType="view"
                >
                  <LoadingPlanning />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/Arriving"
              element={
                <ProtectedRoutes
                  module="logistics"
                  subModule="arriving"
                  permissionType="view"
                >
                  <Arriving />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/Shipped"
              element={
                <ProtectedRoutes
                  module="logistics"
                  subModule="shipped"
                  permissionType="view"
                >
                  <Shipped />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/VehiclesLoaded"
              element={
                <ProtectedRoutes
                  module="logistics"
                  subModule="vehicleLoaded"
                  permissionType="view"
                >
                  <VehiclesLoaded />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/QuotationTemplate"
              element={
                <ProtectedRoutes
                  module="quotation"
                  subModule="quotationDocuments"
                  permissionType="view"
                >
                  <QuotationTemplate />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/InputScreenForPerformaQuotation"
              element={
                <ProtectedRoutes
                  module="quotation"
                  subModule="quotationDocuments"
                  permissionType="view"
                >
                  <InputScreenForPerformaQuotation />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/ShowroomZoneSetup"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="zoneSetup"
                  permissionType="view"
                >
                  <ShowroomZoneSetup />
                </ProtectedRoutes>
              }
            />
            <Route path="/VehicleDetails/:id" element={<VehicleDetails />} />
            <Route
              path="/LogBookReceiptNote"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="logBook"
                  permissionType="edit"
                >
                  <LogBookReceiptNote />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/TransferLogBook"
              element={
                <ProtectedRoutes
                  module="inventory"
                  subModule="logBook"
                  permissionType="edit"
                >
                  <TransferLogBook />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/UserManagement"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="userManagement"
                  permissionType="view"
                >
                  <UserManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddUser"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="userManagement"
                  permissionType="edit"
                >
                  <AddUser />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddUser/:id"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="userManagement"
                  permissionType="edit"
                >
                  <AddUser />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/RolesManagement"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="roleManagement"
                  permissionType="view"
                >
                  <RolesManagement />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddRole"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="roleManagement"
                  permissionType="edit"
                >
                  <AddRole />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/AddRole/:id"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="roleManagement"
                  permissionType="edit"
                >
                  <AddRole />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/UserPermissionDetails/:id"
              element={
                <ProtectedRoutes
                  module="users"
                  subModule="permissionManagement"
                  permissionType="view"
                >
                  <UserPermissionDetails />
                </ProtectedRoutes>
              }
            />
            <Route path="/CashSaleAggrement" element={<CashSaleAggrement />} />
            <Route
              path="/CreditSaleAggrement"
              element={<CreditSaleAgreement />}
            />
            <Route
              path="/EditGeneralDetails/:id"
              element={<EditGeneralDetails />}
            />
            <Route path="/EditMediaUpload/:id" element={<EditMediaUpload />} />
            <Route path="/EditDocumentUploads/:id" element={<EditDocumentUpload/>}/>
            <Route path="/AccessDenied" element={<AccessDenied />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
