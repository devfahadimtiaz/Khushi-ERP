import { useState, useRef, useEffect } from "react";
import { Car } from "lucide-react";
import styles from "./Sidebar.module.css";
import { ReactComponent as BookIcon } from "../../uploads/icons/book.svg";
import { ReactComponent as PurchaseIcon } from "../../uploads/icons/purchase.svg";
import { ReactComponent as LedgerIcon } from "../../uploads/icons/ledger.svg";
import { ReactComponent as QuotationIcon } from "../../uploads/icons/quotation.svg";
import axios from "axios";
import SidebarMenuItem from "./SideBarMenuItem";
import { filterMenuByAccess } from "./filterMenuByAccess";
const API_URL = process.env.REACT_APP_API_URL;

const Sidebar = ({ collapsed, onToggle }) => {
  const [openSubmenus, setOpenSubmenus] = useState([]);
  const timeoutRef = useRef(null);
  const submenuClickedRef = useRef(false);
  const [userInfo, setUserInfo] = useState([]);
  const [visibleMenuItems, setVisibleMenuItems] = useState([]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data); // assuming `setUserInfo` expects { username, name, role, id, ... }
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    onToggle(false); // Expand sidebar
  };

  const handleMouseLeave = () => {
    if (submenuClickedRef.current) {
      submenuClickedRef.current = false;
      return;
    }

    timeoutRef.current = setTimeout(() => {
      onToggle(true); // Collapse sidebar
    }, 300);
  };

  const menuItems = [
    {
      id: "dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 10.8333H9.16667V2.5H2.5V10.8333ZM2.5 17.5H9.16667V12.5H2.5V17.5ZM10.8333 17.5H17.5V9.16667H10.8333V17.5ZM10.8333 2.5V7.5H17.5V2.5H10.8333Z"
            fill="#64748B"
          ></path>
        </svg>
      ),
      label: "Main Dashboard",
      route: "/dashboard",
      module: "dashboard",
      subModule: "mainDashboard",
      type: "view",
    },
    {
      id: "generalLedger",
      icon: <LedgerIcon style={{ width: "22px", height: "22px" }} />,
      label: "General Ledger",
      module: "generalLedger",
      subModule: "generalLedger",
      type: "all",
      subItems: [
        {
          id: "GLDashboard",
          label: "Dashboard",
          route: "/GLDashboard",
          module: "dashboard",
          subModule: "GLDashboard",
          type: "view",
        },
        {
          id: "GLSetup",
          label: "GL Setup",
          subItems: [
            {
              id: "showRoomManager",
              label: "Showroom Manager",
              route: "/GarageManagement",
              module: "generalLedger",
              subModule: "showroomManager",
              type: "view",
            },
            {
              id: "costAndProfit",
              label: "Cost And Profit Center",
              route: "/CostAndProfit",
              module: "generalLedger",
              subModule: "costAndProfit",
              type: "view",
            },
            {
              id: "chartOfAccounts",
              label: "Chart Of Accounts",
              route: "/ChartOfAccountsSetup",
              module: "generalLedger",
              subModule: "chartOfAccount",
              type: "view",
            },
            {
              id: "currencyManagement",
              label: "Currency Management",
              route: "/CurrencyManagement",
              module: "generalLedger",
              subModule: "currencyManagement",
              type: "view",
            },
            {
              id: "subsidiaryLedger",
              label: "Subsidiary Ledger",
              route: "/SubsidiaryLedger",
              module: "generalLedger",
              subModule: "subsidiaryLedger",
              type: "view",
            },
            {
              id: "voucherSetup",
              label: "Voucher Setup",
              route: "/VoucherSetup",
              module: "generalLedger",
              subModule: "voucherSetup",
              type: "view",
            },
            {
              id: "subsidiaryFileSetup",
              label: "Subsidiary File Setup",
              route: "/SubsidiaryFileSetup",
              module: "generalLedger",
              subModule: "subsidiaryFileSetup",
              type: "view",
            },
            {
              id: "bankDetails",
              label: "Bank Details",
              route: "/BankDetails",
              module: "generalLedger",
              subModule: "bankDetails",
              type: "view",
            },
            {
              id: "cashAccountDetails",
              label: "Cash Account Details",
              route: "/CashAccountDetails",
              module: "generalLedger",
              subModule: "cashAccountDetails",
              type: "view",
            },
            {
              id: "creditAccountDetails",
              label: "Credit Account Details",
              route: "/CreditAccountDetails",
              module: "generalLedger",
              subModule: "creditAccountDetails",
              type: "view",
            },
          ],
        },
        {
          id: "GLTransection",
          label: "GL Transection",
          subItems: [
            {
              id: "financialYearList",
              label: "Financial Year List",
              route: "/FinancialYearList",
              module: "generalLedger",
              subModule: "financialYearList",
              type: "view",
            },
            {
              id: "openingBalance",
              label: "Opening Balance",
              route: "/OpeningBalance",
              module: "generalLedger",
              subModule: "openingBalance",
              type: "view",
            },
            {
              id: "openingBalanceVouchers",
              label: "Opening Balance Vouchers",
              route: "/OpeningBalanceVouchers",
              module: "generalLedger",
              subModule: "openingBalanceVoucher",
              type: "view",
            },
            {
              id: "internalCashTransfer",
              label: "Internal Cash Transfer",
              route: "/InternalCashTransfer",
              module: "generalLedger",
              subModule: "internalCashTransfer",
              type: "view",
            },
          ],
        },
        {
          id: "glreport",
          label: "GL Report",
          subItems: [
            {
              id: "accountListingReport",
              label: "Account Listing Report",
              route: "/AccountListingReport",
              module: "generalLedger",
              subModule: "accountListingReport",
              type: "view",
            },
            {
              id: "searchingVoucher",
              label: "Searching Voucher",
              route: "/SearchingVoucher",
              module: "generalLedger",
              subModule: "accountListingReport",
              type: "view",
            },
            {
              id: "generalLedgerReport",
              label: "General Ledger",
              route: "/GeneralLedger",
              module: "generalLedger",
              subModule: "generalLedger",
              type: "view",
            },
            {
              id: "subsidiaryGeneralLedgerReport",
              label: "Subsidiary General Ledger",
              route: "/SubsidiaryGeneralLedger",
              module: "generalLedger",
              subModule: "subsidiaryGeneralLedger",
              type: "view",
            },
            {
              id: "trialBalance",
              label: "Trial Balance",
              route: "/TrialBalance",
              module: "generalLedger",
              subModule: "trialBalance",
              type: "view",
            },
            {
              id: "profitandLossStatement",
              label: "Profit and Loss Statement",
              route: "/ProfitAndLossStatement",
              module: "generalLedger",
              subModule: "profitAndLoss",
              type: "view",
            },
            {
              id: "balanceSheet",
              label: "Balance Sheet",
              route: "/BalanceSheet",
              module: "generalLedger",
              subModule: "balanceSheet",
              type: "view",
            },
          ],
        },
      ],
    },
    {
      id: "inventory",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6666 1.66669H3.33329C2.49996 1.66669 1.66663 2.41669 1.66663 3.33335V5.84169C1.66663 6.44169 2.02496 6.95835 2.49996 7.25002V16.6667C2.49996 17.5834 3.41663 18.3334 4.16663 18.3334H15.8333C16.5833 18.3334 17.5 17.5834 17.5 16.6667V7.25002C17.975 6.95835 18.3333 6.44169 18.3333 5.84169V3.33335C18.3333 2.41669 17.5 1.66669 16.6666 1.66669ZM12.5 11.6667H7.49996V10H12.5V11.6667Z"
            fill="#64748B"
          ></path>
        </svg>
      ),

      label: "Inventory",
      module: "inventory",
      subModule: "inventory",
      type: "all",
      subItems: [
        {
          id: "inventory-dashboard",
          label: "Inventory Dashboard",
          route: "/InventoryDashboard",
          module: "dashboard",
          subModule: "inventoryDashboard",
          type: "view",
        },
        {
          id: "searchVehicle",
          label: "Search Vehicle",
          route: "/searchVehicle",
          module: "inventory",
          subModule: "searchVehcile",
          type: "view",
        },
        {
          id: "inventorydetails",
          label: "Inventory",
          subItems: [
            {
              id: "stock",
              label: "Inventory List View",
              route: "/Stock",
              module: "inventory",
              subModule: "listView",
              type: "view",
            },
            {
              id: "inventory-grid",
              label: "Inventory Grid View",
              route: "/InventoryGridView",
              module: "inventory",
              subModule: "searchVehcile",
              type: "view",
            },
            {
              id: "add-stock",
              label: "Add Stock",
              route: "/AddStock",
              module: "inventory",
              subModule: "gridView",
              type: "view",
            },
           /* {
              
              id: "zone-setup",
              label: "Zone Setup",
              route: "/ShowroomZoneSetup",
              module: "inventory",
              subModule: "zoneSetup",
              type: "view",
            },*/
            {
              id: "parking-zone-management",
              label: "Parking Zone Management",
              route: "/ParkingZoneManagement",
              module: "inventory",
              subModule: "parkingZoneManagement",
              type: "view",
            },
          ],
        },

        {
          id: "vehicle-transfer",
          label: "Vehicle Transfer",
          subItems: [
            {
              id: "vehicle-transfer-to",
              label: "Vehicle Transfer To",
              route: "/VehicleTransferTo",
              module: "inventory",
              subModule: "vehicleTransferTo",
              type: "view",
            },
            {
              id: "vehicle-transfer",
              label: "Vehicle Transfer Management",
              route: "/VehicleTransferManagement",
              module: "inventory",
              subModule: "vehicleTransferManagement",
              type: "view",
            },
            {
              id: "incoming-vehicle-transfers",
              label: "Incoming Vehicle",
              route: "/IncomingVehicleTransfers",
              module: "inventory",
              subModule: "incomingVehicle",
              type: "view",
            },
          ],
        },

        {
          id: "vehicleRepairDetails",
          label: "Vehicle Repair Details",
          subItems: [
            {
              id: "vehicleRepairDetails",
              label: "Vehicle Repair Details",
              route: "/VehicleRepairDetails",
              module: "inventory",
              subModule: "searchVehcile",
              type: "view",
            },
            {
              id: "repairTaskManagement",
              label: "Repair Task Management",
              route: "/RepairTasksManagement",
              module: "inventory",
              subModule: "vehicleRepairManagement",
              type: "view",
            },
            {
              id: "voucherManagement",
              label: "Repair Voucher Management",
              route: "/VoucherManagement",
              module: "inventory",
              subModule: "repairVoucherManagement",
              type: "view",
            },
          ],
        },
        {
          id: "roadTest",
          label: "Road Test",
          subItems: [
            {
              id: "roadTestForm",
              label: "Road Test Form",
              route: "/RoadTestform",
              module: "inventory",
              subModule: "roadTestForm",
              type: "view",
            },
            {
              id: "roadTestRecord",
              label: "Road Test Record",
              route: "/RoadTestRecords",
              module: "inventory",
              subModule: "roadTestRecord",
              type: "view",
            },
          ],
        },
      ],
    },
    {
      id: "sales",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM10 14.1667H5V12.5H10V14.1667ZM13.3333 10.8333H5V9.16667H13.3333V10.8333ZM13.3333 7.5H5V5.83333H13.3333V7.5Z"
            fill="#64748B"
          ></path>
        </svg>
      ),
      label: "Sales",
      module: "sales",
      subModule: "sales",
      type: "all",
      subItems: [
        {
          id: "salesDashboard",
          label: "Sales Dashboard",
          route: "/SaleDashboard",
          module: "dashboard",
          subModule: "salesDashboard",
          type: "view",
        },
        {
          id: "saleTransection",
          label: "Sales Transection",
          subItems: [
            {
              id: "saledeed",
              label: "Sale Deed",
              route: "/AddSaleDeed",
              module: "sales",
              subModule: "saleDead",
              type: "view",
            },
            {
              id: "cashSaleList",
              label: "Cash Sale List",
              route: "/CashSaleList",
              module: "sales",
              subModule: "cashSaleList",
              type: "view",
            },
            {
              id: "creditSaleList",
              label: "Credit Sale List",
              route: "/CreditSaleList",
              module: "sales",
              subModule: "creditSaleList",
              type: "view",
            },
          ],
        },

        {
          id: "commission",
          label: "Commissions",
          route: "/CommissionList",
          module: "sales",
          subModule: "commission",
          type: "view",
        },
        {
          id: "gatePass",
          label: "Gate Pass",
          subItems: [
            {
              id: "gatePass",
              label: "Gate Pass Form",
              route: "/GatePass",
              module: "sales",
              subModule: "gatepassForm",
              type: "view",
            },
            {
              id: "gatePassRecord",
              label: "Gate Pass Record",
              route: "/GatePassRecord",
              module: "sales",
              subModule: "gatepassRecord",
              type: "view",
            },
          ],
        },

        {
          id: "marketTrend",
          label: "Market Trend Analysis",
          route: "/MarketTrend",
          module: "sales",
          subModule: "marketTrendAnalysis",
          type: "view",
        },
      ],
    },
    {
      id: "purchases",
      icon: <PurchaseIcon style={{ width: "22px", height: "22px" }} />,
      label: "Purchase & Expenditure",
      module: "purchase",
      subModule: "purchase",
      type: "all",
      subItems: [
        {
          id: "purchaseDashboard",
          label: "Purchased Dashboard",
          route: "/PurchaseDB",
          module: "dashboard",
          subModule: "purchasedDashboard",
          type: "view",
        },
        {
          id: "purchase",
          label: "Purchase ",
          subItems: [
            {
              id: "purchaseRequisition",
              label: "Purchase Requisition",
              route: "/PurchaseRequisition",
              module: "purchase",
              subModule: "purchaseRequisition",
              type: "view",
            },
            {
              id: "quotationDocument",
              label: "Quotation Document",
              route: "/QoutationDocuments",
              module: "purchase",
              subModule: "quotationDocument",
              type: "view",
            },
            {
              id: "tenderDocument",
              label: "Tender Document",
              route: "/TenderDocument",
              module: "purchase",
              subModule: "tenderDocument",
              type: "view",
            },
            {
              id: "comparativeStatement",
              label: "Comparative Statement",
              route: "/ComparativeStatement",
              module: "purchase",
              subModule: "comparativeStatement",
              type: "view",
            },
            {
              id: "purchasedOrder",
              label: "Purchased Order",
              route: "/PurchaseOrder",
              module: "purchase",
              subModule: "purchaseOrder",
              type: "view",
            },
            {
              id: "generateGoodReceivedNote",
              label: "Generate Good Received Note",
              route: "/GenerateGoodRecieveNotes",
              module: "purchase",
              subModule: "goodRecievedNote",
              type: "view",
            },
            {
              id: "payment",
              label: "Payment",
              route: "/Payment",
              module: "purchase",
              subModule: "payment",
              type: "view",
            },
            {
              id: "transportation",
              label: "Transportation",
              route: "/Transportation",
              module: "purchase",
              subModule: "transportation",
              type: "view",
            },
          ],
        },
        {
          id: "expense",
          label: "Expense ",
          subItems: [
            {
              id: "expenseManagement",
              label: "Expense Management",
              route: "/ExpenseManagement",
              module: "purchase",
              subModule: "expenseManagement",
              type: "view",
            },
            {
              id: "expenseSheet",
              label: "Expense Sheet",
              route: "/ExpenseSheet",
              module: "purchase",
              subModule: "expenseSheet",
              type: "view",
            },
          ],
        },
        {
          id: "purchaseReturn",
          label: "Purchase Return",
          subItems: [
            {
              id: "purchaseRetunRequest",
              label: "Purchase Retun Request",
              route: "/PurchaseRetunRequest",
              module: "purchase",
              subModule: "purchaseReturnRequest",
              type: "view",
            },
            {
              id: "purchaseDispatched",
              label: "Purchase Dispatched Note",
              route: "/PurchaseDispatchNote",
              module: "purchase",
              subModule: "purchasedDispatchedNote",
              type: "view",
            },
            {
              id: "purchaseReturn",
              label: "Purchase Return Note",
              route: "/PurchaseReturnNote",
              module: "purchase",
              subModule: "purchasedReturnNote",
              type: "view",
            },
          ],
        },
        {
          id: "purchaseIntegrartion",
          label: "Purchase Integration",
          subItems: [
            {
              id: "payableConfiguration",
              label: "Payable Configuration",
              route: "/PayableConfiguration",
              module: "purchase",
              subModule: "payableConfiguration",
              type: "view",
            },
          ],
        },
        {
          id: "purchaseVoucher",
          label: "Purchase Vouchers",
          subItems: [
            {
              id: "purchaseReturnVoucher",
              label: "Purchase Return Voucher",
              route: "/PurchasedReturnVoucher",
              module: "purchase",
              subModule: "purchasedReturnVOucher",
              type: "view",
            },
            {
              id: "purchasePayableReturnVoucher",
              label: "Purchase & Payable Return Voucher",
              route: "/PurchasePayableReturnVoucher",
              module: "purchase",
              subModule: "purchasedAndPayableReturnVoucher",
              type: "view",
            },
            {
              id: "paymentVouchers",
              label: "Payment Vouchers",
              route: "/PaymentVouchers",
              module: "purchase",
              subModule: "paymentVoucher",
              type: "view",
            },
            {
              id: "advanceReturnVoucher",
              label: "Advance Return Voucher",
              route: "/AdvanceReturnVoucher",
              module: "purchase",
              subModule: "advanceReturnVoucher",
              type: "view",
            },
          ],
        },
        {
          id: "purchaseReport",
          label: "Purchase Report",
          subItems: [
            {
              id: "purchaseOrderReport",
              label: "Purchase Order Report",
              route: "/PurchaseOrderList",
              module: "purchase",
              subModule: "purchasedOrderReport",
              type: "view",
            },
            {
              id: "purchaseShowRoomWise",
              label: "Purchase Showroom Wise Report",
              route: "/PurchaseShowroomWise",
              module: "purchase",
              subModule: "purchaseShowroomWiseReport",
              type: "view",
            },
            {
              id: "paymentRegister",
              label: "Payment Register Report",
              route: "/PaymentRegisterReport",
              module: "purchase",
              subModule: "paymentRegisterReport",
              type: "view",
            },
            {
              id: "payableAgingReport",
              label: "Payable Aging Report",
              route: "/PayableAgingReport",
              module: "purchase",
              subModule: "payableAgingReport",
              type: "view",
            },
            {
              id: "pendingPOItem",
              label: "Pending PO Items",
              route: "/PendingPOReport",
              module: "purchase",
              subModule: "pendingPOItems",
              type: "view",
            },
            {
              id: "supplierContactList",
              label: "Supplier Contact List",
              route: "/SupplierContactList",
              module: "purchase",
              subModule: "supplierContactList",
              type: "view",
            },
            {
              id: "unpaidSupplierBills",
              label: "Unpaid Supplier Bill",
              route: "/UnpaidSupplierBills",
              module: "purchase",
              subModule: "unpaidSupplierBill",
              type: "view",
            },
            {
              id: "supplierWiseBillReports",
              label: "Supplier Wise Bill Report",
              route: "/SupplierWiseBillReports",
              module: "purchase",
              subModule: "supplierWiseBillReports",
              type: "view",
            },
          ],
        },
      ],
    },
    {
      id: "logbook",
      icon: <BookIcon style={{ width: "22px", height: "22px" }} />,
      label: "Log Book",
      module: "inventory",
      subModule: "logBook",
      type: "view",
      subItems: [
        {
          id: "vehicleLogBook",
          label: "Vehicle Log Book",
          route: "/LogBookTransfer",
          module: "inventory",
          subModule: "logBook",
          type: "view",
        },
      ],
    },
    {
      id: "logistics",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 6.66668H14.1667V3.33334H2.50004C1.58337 3.33334 0.833374 4.08334 0.833374 5.00001V14.1667H2.50004C2.50004 15.55 3.61671 16.6667 5.00004 16.6667C6.38337 16.6667 7.50004 15.55 7.50004 14.1667H12.5C12.5 15.55 13.6167 16.6667 15 16.6667C16.3834 16.6667 17.5 15.55 17.5 14.1667H19.1667V10L16.6667 6.66668ZM5.00004 15.4167C4.30837 15.4167 3.75004 14.8583 3.75004 14.1667C3.75004 13.475 4.30837 12.9167 5.00004 12.9167C5.69171 12.9167 6.25004 13.475 6.25004 14.1667C6.25004 14.8583 5.69171 15.4167 5.00004 15.4167ZM16.25 7.91668L17.8834 10H14.1667V7.91668H16.25ZM15 15.4167C14.3084 15.4167 13.75 14.8583 13.75 14.1667C13.75 13.475 14.3084 12.9167 15 12.9167C15.6917 12.9167 16.25 13.475 16.25 14.1667C16.25 14.8583 15.6917 15.4167 15 15.4167Z"
            fill="#64748B"
          ></path>
        </svg>
      ),
      label: "Logistics",
      module: "logistics",
      subModule: "logistics",
      type: "all",
      subItems: [
        {
          id: "shipping-dashboard",
          label: "Dashboard",
          route: "/ShippingDashboard",
          module: "dashboard",
          subModule: "logisticsDashboard",
          type: "view",
        },
        {
          id: "wayToYard",
          label: "Way To Yard",
          route: "/OnWayToYard",
          module: "logistics",
          subModule: "wayToYard",
          type: "view",
        },
        {
          id: "inYard",
          label: "In Yard",
          route: "/InYard",
          module: "logistics",
          subModule: "inYard",
          type: "view",
        },
        {
          id: "loadPlaning",
          label: "Load Plaining",
          route: "/LoadingPlanning",
          module: "logistics",
          subModule: "loadPlaining",
          type: "view",
        },
        {
          id: "arriving",
          label: "Arriving",
          route: "/Arriving",
          module: "logistics",
          subModule: "arriving",
          type: "view",
        },
        {
          id: "shipped",
          label: "Shipped",
          route: "/Shipped",
          module: "logistics",
          subModule: "arriving",
          type: "view",
        },
        {
          id: "vehicleLoaded",
          label: "Vehicle Loaded",
          route: "/VehiclesLoaded",
          module: "logistics",
          subModule: "vehicleLoaded",
          type: "view",
        },
      ],
    },
    {
      id: "auction",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99996 1.66666C5.39996 1.66666 1.66663 5.39999 1.66663 9.99999C1.66663 14.6 5.39996 18.3333 9.99996 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99999C18.3333 5.39999 14.6 1.66666 9.99996 1.66666ZM11.175 15.075V16.6667H8.94996V15.0583C7.52496 14.7583 6.31663 13.8417 6.22496 12.225H7.85829C7.94163 13.1 8.54163 13.7833 10.0666 13.7833C11.7 13.7833 12.0666 12.9667 12.0666 12.4583C12.0666 11.7667 11.7 11.1167 9.84163 10.675C7.77496 10.175 6.35829 9.32499 6.35829 7.61666C6.35829 6.18332 7.51663 5.24999 8.94996 4.94166V3.33332H11.175V4.95832C12.725 5.33332 13.5 6.50832 13.55 7.78332H11.9166C11.875 6.85832 11.3833 6.22499 10.0666 6.22499C8.81663 6.22499 8.06663 6.79166 8.06663 7.59166C8.06663 8.29166 8.60829 8.74999 10.2916 9.18332C11.975 9.61666 13.775 10.3417 13.775 12.4417C13.7666 13.9667 12.625 14.8 11.175 15.075Z"
            fill="#64748B"
          ></path>
        </svg>
      ),
      label: "Auction Access",
      module: "auction",
      subModule: "auction",
      type: "all",
      subItems: [
        {
          id: "auction-house",
          label: "Auction House",
          route: "/AuctionHouse",
          module: "auction",
          subModule: "auctionHouse",
          type: "view",
        },
        {
          id: "auction-grid",
          label: "Auction Grid View",
          route: "/AuctionGridView",
          module: "auction",
          subModule: "auctionGridView",
          type: "view",
        },
        {
          id: "price-checker",
          label: "Price Checker",
          route: "/AuctionPriceChecker",
          module: "auction",
          subModule: "priceChecker",
          type: "view",
        },
        {
          id: "duty-calculator",
          label: "Duty Calculator",
          route: "/DutyCalculator",
          module: "auction",
          subModule: "dutyChecker",
          type: "view",
        },
      ],
    },
    {
      id: "branding",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.24996 4.66666L8.33329 5.83332L7.33329 3.74999L8.33329 1.66666L6.24996 2.66666L4.16663 1.66666L5.16663 3.74999L4.16663 5.83332L6.24996 4.66666ZM16.25 12.8333L14.1666 11.6667L15.1666 13.75L14.1666 15.8333L16.25 14.8333L18.3333 15.8333L17.3333 13.75L18.3333 11.6667L16.25 12.8333ZM18.3333 1.66666L16.25 2.66666L14.1666 1.66666L15.1666 3.74999L14.1666 5.83332L16.25 4.83332L18.3333 5.83332L17.3333 3.74999L18.3333 1.66666ZM12.0833 8.83332L10.8333 6.66666L11.8333 8.74999L10.8333 10.8333L12.9166 9.83332L15 10.8333L14 8.74999L15 6.66666L12.0833 8.83332Z"
            fill="#64748B"
          ></path>
        </svg>
      ),
      label: "Branding",
      route: "/BrandAssets",
      module: "branding",
      subModule: "branding",
      type: "view",
    },
    {
      id: "quotations",
      icon: <QuotationIcon style={{ width: "22px", height: "22px" }} />,
      label: "Quotation",
      route: "/InputScreenForPerformaQuotation",
      module: "quotation",
      subModule: "quotationDocuments",
      type: "view",
    },
    {
      id: "userDetails",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 9.99998C11.8417 9.99998 13.3334 8.50831 13.3334 6.66665C13.3334 4.82498 11.8417 3.33331 10 3.33331C8.15837 3.33331 6.66671 4.82498 6.66671 6.66665C6.66671 8.50831 8.15837 9.99998 10 9.99998ZM10 11.6666C7.77504 11.6666 3.33337 12.7833 3.33337 15V16.6666H16.6667V15C16.6667 12.7833 12.225 11.6666 10 11.6666Z"
            fill="#64748B"
          ></path>
        </svg>
      ),
      label: "User Details",
      module: "users",
      subModule: "users",
      type: "all",
      subItems: [
        {
          id: "usermanagement",
          label: "User Management",
          route: "/UserManagement",
          module: "users",
          subModule: "userManagement",
          type: "view",
        },
        {
          id: "rolesmanagement",
          label: "Role Management",
          route: "/RolesManagement",
          module: "users",
          subModule: "roleManagement",
          type: "view",
        },
      ],
    },
  ];
  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const processMenu = async () => {
      const filtered = await filterMenuByAccess(menuItems); // use your full structure here
      setVisibleMenuItems(filtered);
    };
    processMenu();
  }, []);

  return (
    <div
      className={`${styles.sidebar} ${
        collapsed ? styles.collapsed : styles.expanded
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.sidebarContent}>
        <div className={styles.logoSection}>
          {!collapsed ? (
            <div className={styles.brand}>
              <div className={styles.logo}>
                <Car className={styles.logoIcon} size={24} />
              </div>
              <div>
                <h1 className={styles.title}>{userInfo.name}</h1>
                <p className={styles.subtitle}>{userInfo.role}</p>
              </div>
            </div>
          ) : (
            <div className={styles.logoCollapsed}>
              <div className={styles.logo}>
                <Car className={styles.logoIcon} size={24} />
              </div>
            </div>
          )}
        </div>

        <nav className={styles.nav}>
          {visibleMenuItems.map((item) => (
            <SidebarMenuItem
              key={item.id}
              item={item}
              collapsed={collapsed}
              toggleSubmenu={toggleSubmenu}
              openSubmenus={openSubmenus}
              onToggle={onToggle}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
