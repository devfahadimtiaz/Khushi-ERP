import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavToggle from "./components/Navbar/NavToggle";
import Dashboard from "./components/Dashboard";
import SubsidiaryGeneralLedger from "./components/GeneralLedger/GeneralLedgerReport/SubsidiaryGeneralLedger";
import TrialBalance from "./components/GeneralLedger/GeneralLedgerReport/TrialBalance";
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
import BillOfLadingExportDeclaration from "./components/Logistics/BillOfLadingExportDeclaration";
import CashSale from "./components/Sale/CashSale/AddVehicleCashSale";
import CashSaleList from "./components/Sale/CashSale/CarSalesList";
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
import ShowroomsManagement from "./components/GeneralLedger/GeneralLedgerSetup/ShowroomsManagement";
import SalesTransections from "./components/Sale/SalesTransections";
import LogBookTransfer from "./components/VehicleLogBook/LogBookTransfers";
import CommissionList from "./components/Sale/CashSale/CommissionList";
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
import ShowRoomManager from "./components/GeneralLedger/GeneralLedgerSetup/ShowroomsManagement";
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



function App() {
  const [data, setData] = useState([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev); // Toggle Navbar visibility
  };
  return (
    <Router>
      <AppContent data={data} isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </Router>
  );
}

function AppContent({data, isNavbarOpen, toggleNavbar }) {
  const location = useLocation(); // Now inside the Router context

  // Define routes where the Navbar should be hidden
  const hideNavbarRoutes = ["/SignIn", "/ModuleSelection"];

  return (
    <div className="App">
       {/* Conditionally render NavToggle and Navbar */}
       {!hideNavbarRoutes.includes(location.pathname) && (
        <>
          <NavToggle onClick={toggleNavbar} />
          <Navbar isOpen={isNavbarOpen} onClose={toggleNavbar} />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/ModuleSelection" />} />
        <Route path="/ModuleSelection" element={<ModuleSelection />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddGarage" element={<AddGarage />} />
        <Route path="/GarageList" element={<GarageList data={data} />} />
        <Route path="/InventoryDashboard" element={<Inventory />} />
        <Route path="/Stock" element={<InventoryListView />} />
        <Route path="/InventoryGridView" element={<InventoryGridView />} />
        <Route path="/AddStock" element={<AddStock />} />
        <Route path="/AuctionGridView" element={<AuctionGridView />} />
        <Route path="/AuctionPriceChecker" element={<AuctionPriceChecker />} />
        <Route path="/DutyCalculator" element={<DutyCalculator />} />
        <Route path="/ShippingDashboard" element={<LogisticsDashboard />} />
        <Route path="/AddCashSale" element={<CashSale />} />
        <Route path="/CashSaleList" element={<CashSaleList />} />
        <Route path="/AddCreditSale" element={<CreditSale />} />
        <Route path="/CreditSaleList" element={<CreditSaleList />} />
        <Route path="/AddPayment" element={<AddPayment />} />
        <Route path="/SaleDashboard" element={<SaleDashboard />} />
        <Route path="/MarketTrend" element={<MarketTrend />} />
        <Route path="/VehicleRepairDetails" element={<VehicleRepairDetails />} />
        <Route path="/RepairTasksManagement" element={<RepairTasksManagement />} />
        <Route path="/VoucherManagement" element={<VoucherManagement />} />
        <Route path="/RoadTestform" element={<RoadTestform />} />
        <Route path="/RoadTestRecords" element={<RoadTestRecords />} />
        <Route path="/GatePass" element={<GatePass />} />
        <Route path="/GatePassRecord" element={<GatePassRecords />} />
        <Route path="/Createopeningbalance" element={<CreateOpeningBalance />} />
        <Route path="/GLDashboard" element={<GeneralLedgerDashboard />} />
        <Route path="/SubsidiaryGeneralLedger" element={<SubsidiaryGeneralLedger/>} />
        <Route path="/TrialBalance" element={<TrialBalance/>} />
        <Route path="/VehicleTransferManagement" element={<VehicleTransferManagement/>} />
        <Route path="/IncomingVehicleTransfers" element={<IncomingVehicleTransfers/>} />
        <Route path="/ShowroomsManagement" element={<ShowroomsManagement/>} />
        <Route path="/ParkingZoneManagement" element={<ParkingZoneManagement/>} />
        <Route path="/AuctionHouse" element={<AuctionHouse/>} />
        <Route path="/BillOfLadingExportDeclaration" element={<BillOfLadingExportDeclaration/>} />
        <Route path="/SalesTransections" element={<SalesTransections/>} />
        <Route path="/LogBookTransfer" element={<LogBookTransfer/>} />
        <Route path="/CommissionList" element={<CommissionList/>} />
        <Route path="/PurchaseDB" element={<PurchaseDB/>} />
        <Route path="/PurchaseRequisition" element={<PurchaseRequisition/>} />
        <Route path="/QoutationDocuments" element={<QoutationDocuments/>} />
        <Route path="/TenderDocument" element={<TenderDocument/>} />
        <Route path="/ComparativeStatement" element={<ComparativeStatement/>} />
        <Route path="/PurchaseOrder" element={<PurchaseOrder/>} />
        <Route path="/GenerateGoodRecieveNotes" element={<GenerateGoodRecieveNotes/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Transportation" element={<Transportation/>} />
        <Route path="/PurchaseRetunRequest" element={<PurchaseRetunRequest/>} />
        <Route path="/PurchaseDispatchNote" element={<PurchaseDispatchNote/>} />
        <Route path="/PayableConfiguration" element={<PayableConfiguration/>} />
        <Route path="/PurchasedReturnVoucher" element={<PurchasedReturnVoucher/>} />
        <Route path="/PurchasePayableReturnVoucher" element={<PurchasePayableReturnVoucher/>} />
        <Route path="/PaymentVouchers" element={<PaymentVouchers/>} />
        <Route path="/AdvanceReturnVoucher" element={<AdvanceReturnVoucher/>} />
        <Route path="/PurchaseOrderList" element={<PurchaseOrderList/>} />
        <Route path="/PurchaseShowroomWise" element={<PurchaseShowroomWise/>} />
        <Route path="/PaymentRegisterReport" element={<PaymentRegisterReport/>} />
        <Route path="/PayableAgingReport" element={<PayableAgingReport/>} />
        <Route path="/PurchaseReturnNote" element={<PurchaseReturnNote/>} />
        <Route path="/PendingPOReport" element={<PendingPOReport/>} />
        <Route path="/SupplierContactList" element={<SupplierContactList/>} />
        <Route path="/UnpaidSupplierBills" element={<UnpaidSupplierBills/>} />
        <Route path="/SupplierWiseBillReports" element={<SupplierWiseBillReports/>} />
        <Route path="/ShowRoomManager" element={<ShowRoomManager/>} />
        <Route path="/CostAndProfit" element={<CostAndProfit/>} />
        <Route path="/ChartOfAccountsSetup" element={<ChartOfAccountsSetup/>} />
        <Route path="/CurrencyManagement" element={<CurrencyManagement/>} />
        <Route path="/SubsidiaryLedger" element={<SubsidiaryLedger/>} />
        <Route path="/VoucherSetup" element={<VoucherSetup/>} />
        <Route path="/SubsidiaryFileSetup" element={<SubsidiaryFileSetup/>} />
        <Route path="/BankDetails" element={<BankDetails/>} />
        <Route path="/CashAccountDetails" element={<CashAccountDetails/>} />
        <Route path="/CreditAccountDetails" element={<CreditAccountDetails/>} />
        <Route path="/FinancialYearList" element={<FinancialYearList/>} />
        <Route path="/OpeningBalance" element={<OpeningBalance/>} />
        <Route path="/OpeningBalanceVouchers" element={<OpeningBalanceVouchers/>} />
        <Route path="/InternalCashTransfer" element={<InternalCashTransfer/>} />
        <Route path="/AccountListingReport" element={<AccountListingReport/>} />
        <Route path="/SearchingVoucher" element={<SearchingVoucher/>} />
        <Route path="/GeneralLedger" element={<GeneralLedger/>} />
        <Route path="/ProfitAndLossStatement" element={<ProfitAndLossStatement/>} />
        <Route path="/BalanceSheet" element={<BalanceSheet/>} />
        <Route path="/BrandAssets" element={<BrandAssets/>} />
        <Route path="/ExpenseManagement" element={<ExpenseManagement/>} />
        <Route path="/ExpenseSheet" element={<ExpenseSheet/>} />
        <Route path="/OnWayToYard" element={<OnWayToYard/>} />
        <Route path="/InYard" element={<InYard/>} />
        <Route path="/LoadingPlanning" element={<LoadingPlanning/>} />
        <Route path="/Arriving" element={<Arriving/>} />
        <Route path="/Shipped" element={<Shipped/>} />
        <Route path="/VehiclesLoaded" element={<VehiclesLoaded/>} />
        <Route path="/QuotationTemplate" element={<QuotationTemplate/>} />
        <Route path="/InputScreenForPerformaQuotation" element={<InputScreenForPerformaQuotation/>} />

        

      </Routes>
    </div>
  );
}

export default App;