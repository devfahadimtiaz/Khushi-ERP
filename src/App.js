import React, { useState } from "react";
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
import SubsidiaryGeneralLedgerReport from "./components/GeneralLedger/GeneralLedgerReport/SubsidiaryGeneralLedger";
import ProfitAndLossStatement from "./components/GeneralLedger/GeneralLedgerReport/ProfitAndLossStatement";
import BalanceSheet from "./components/GeneralLedger/GeneralLedgerReport/BalanceSheet";
import BrandAssets from "./components/Branding/BrandAssets";
import ExpenseManagement from "./components/Purchase & Receivaables/Expense/ExpenseManagement";
import ExpenseSheet from "./components/Purchase & Receivaables/Expense/RecentExpensesTable";
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
  const navigateToAuctionListView = () => {
    setCurrentView("price-checker");
  };
  const navigateToDutyCalculator = () => {
    setCurrentView("duty-calculator");
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
      case "addSale":
        return <CashSale onBack={navigateToDashboard} />;
      case "bill-of-lading":
        return (
          <BillOfLadingExportDeclaration
            onBackTodashboard={navigateToDashboard}
          />
        );
      case "cashSaleList":
        return <CashSaleList onBack={navigateToDashboard} />;
      case "creditSale":
        return <CreditSale onBack={navigateToDashboard} />;
      case "creditSaleList":
        return <CreditSaleList onBack={navigateToDashboard} />;
      case "addPayment":
        return <AddPayment onCancel={navigateToDashboard} />;
      case "salesDashboard":
        return <SaleDashboard onBack={navigateToDashboard} />;
      case "marketTrend":
        return <MarketTrend onBack={navigateToDashboard} />;
      case "vehicleRepairDetails":
        return <VehicleRepairDetails onBack={navigateToDashboard} />;
      case "repairTaskManagement":
        return <RepairTasksManagement onBack={navigateToDashboard} />;
      case "voucherManagement":
        return <VoucherManagement onBack={navigateToDashboard} />;
      case "roadTestForm":
        return <RoadTestform onBack={navigateToDashboard} />;
      case "roadTestRecord":
        return <RoadTestRecords />;
      case "gatePass":
        return <GatePass onBack={navigateToDashboard} />;
      case "gatePassRecord":
        return <GatePassRecords onBack={navigateToDashboard} />;
      case "createopeningbalance":
        return <CreateOpeningBalance onBack={navigateToDashboard} />;
      case "GLDashboard":
        return <GeneralLedgerDashboard onBack={navigateToDashboard} />;
      case "showroomsManagement":
        return <ShowroomsManagement onBack={navigateToDashboard} />;
      case "salesTransections":
        return <SalesTransections onBack={navigateToDashboard} />;
      case "vehicleLogBook":
        return <LogBookTransfer onBack={navigateToDashboard} />;
      case "commission":
        return <CommissionList onBack={navigateToDashboard} />;
      case "purchaseDashboard":
        return <PurchaseDB onBack={navigateToDashboard} />;
      case "purchaseRequisition":
        return <PurchaseRequisition onBack={navigateToDashboard} />;
      case "quotationDocument":
        return <QoutationDocuments onBack={navigateToDashboard} />;
      case "tenderDocument":
        return <TenderDocument onBack={navigateToDashboard} />;
      case "comparativeStatement":
        return <ComparativeStatement onBack={navigateToDashboard} />;
      case "purchasedOrder":
        return <PurchaseOrder onBack={navigateToDashboard} />;
      case "generateGoodReceivedNote":
        return <GenerateGoodRecieveNotes onBack={navigateToDashboard} />;
      case "payment":
        return <Payment onBack={navigateToDashboard} />;
      case "transportation":
        return <Transportation onBack={navigateToDashboard} />;
      case "purchaseRetunRequest":
        return <PurchaseRetunRequest onBack={navigateToDashboard} />;
      case "purchaseDispatched":
        return <PurchaseDispatchNote onBack={navigateToDashboard} />;
      case "purchaseReturn":
        return <PurchaseReturnNote onBack={navigateToDashboard} />;
      case "payableConfiguration":
        return <PayableConfiguration onBack={navigateToDashboard} />;
      case "purchaseReturnVoucher":
        return <PurchasedReturnVoucher onBack={navigateToDashboard} />;
      case "purchasePayableReturnVoucher":
        return <PurchasePayableReturnVoucher onBack={navigateToDashboard} />;
      case "paymentVouchers":
        return <PaymentVouchers onBack={navigateToDashboard} />;
      case "advanceReturnVoucher":
        return <AdvanceReturnVoucher onBack={navigateToDashboard} />;
      case "purchaseOrderReport":
        return <PurchaseOrderList onBack={navigateToDashboard} />;
      case "purchaseShowRoomWise":
        return <PurchaseShowroomWise onBack={navigateToDashboard} />;
      case "paymentRegister":
        return <PaymentRegisterReport onBack={navigateToDashboard} />;
      case "payableAgingReport":
        return <PayableAgingReport onBack={navigateToDashboard} />;
      case "pendingPOItem":
        return <PendingPOReport onBack={navigateToDashboard} />;
      case "supplierContactList":
        return <SupplierContactList onBack={navigateToDashboard} />;
      case "unpaidSupplierBills":
        return <UnpaidSupplierBills onBack={navigateToDashboard} />;
      case "supplierWiseBillReports":
        return <SupplierWiseBillReports onBack={navigateToDashboard} />;
      case "showRoomManager":
        return <ShowRoomManager onBack={navigateToDashboard} />;
      case "costAndProfit":
        return <CostAndProfit onBack={navigateToDashboard} />;
      case "chartOfAccounts":
        return <ChartOfAccountsSetup onBack={navigateToDashboard} />;
      case "currencyManagement":
        return <CurrencyManagement onBack={navigateToDashboard} />;
      case "subsidiaryLedger":
        return <SubsidiaryLedger onBack={navigateToDashboard} />;
      case "voucherSetup":
        return <VoucherSetup onBack={navigateToDashboard} />;
      case "subsidiaryFileSetup":
        return <SubsidiaryFileSetup onBack={navigateToDashboard} />;
      case "bankDetails":
        return <BankDetails onBack={navigateToDashboard} />;
      case "cashAccountDetails":
        return <CashAccountDetails onBack={navigateToDashboard} />;
      case "creditAccountDetails":
        return <CreditAccountDetails onBack={navigateToDashboard} />;
      case "financialYearList":
        return <FinancialYearList onBack={navigateToDashboard} />;
      case "openingBalance":
        return <OpeningBalance onBack={navigateToDashboard} />;
      case "openingBalanceVouchers":
        return <OpeningBalanceVouchers onBack={navigateToDashboard} />;
      case "internalCashTransfer":
        return <InternalCashTransfer onBack={navigateToDashboard} />;
      case "accountListingReport":
        return <AccountListingReport onBack={navigateToDashboard} />;
      case "searchingVoucher":
        return <SearchingVoucher onBack={navigateToDashboard} />;
      case "generalLedgerReport":
        return <GeneralLedger onBack={navigateToDashboard} />;
      case "subsidiaryGeneralLedgerReport":
        return <SubsidiaryGeneralLedger onBack={navigateToDashboard} />;
      case "trialBalance":
        return <TrialBalance onBack={navigateToDashboard} />;
      case "profitandLossStatement":
        return <ProfitAndLossStatement onBack={navigateToDashboard} />;
      case "balanceSheet":
        return <BalanceSheet onBack={navigateToDashboard} />;
      case "branding":
        return <BrandAssets/>
      case "expenseManagement":
        return <ExpenseManagement/>
      case "expenseSheet":
        return <ExpenseSheet/>
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
