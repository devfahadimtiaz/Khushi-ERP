import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../uploads/KM-LOGO.png";
import pic from "../../uploads/Pic.png";
import { ReactComponent as BookIcon } from "../../uploads/icons/book.svg"
import {ReactComponent as PurchaseIcon} from "../../uploads/icons/purchase.svg"
function Navbar({ isOpen, onClose, onNavigate }) {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // Menu data with submenus
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
      subItems: [
        { id: "createopeningbalance", label: "Create Opening Balance" },
        { id: "reports", label: "Reports" },
        { id: "metrics", label: "Key Metrics" },
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
      subItems: [
        { id: "inventory-dashboard", label: "Inventory Dashboard" },
        { id: "garage", label: "Garage List" },
        { id: "stock", label: "Inventory List View" },
        { id: "inventory-grid", label: "Inventory Grid View" },
        { id: "add-stock", label: "Add Stock" },
        { id: "vehicle-transfer", label: "Vehicle Transfer" },
        { id: "incoming-vehicle-transfers", label: "Incoming Vehicle" },
        { id: "parking-zone-management", label: "Parking Zone Management" },
        { id: "vehicleRepairDetails", label: "Vehicle Repair Details" },
        { id: "repairTaskManagement", label: "Repair Task Management" },
        { id: "voucherManagement", label: "Repair Voucher Management" },
        { id: "roadTestForm", label: "Road Test Form" },
        { id: "roadTestRecord", label: "Road Test Record" },
        
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
      subItems: [
        { id: "salesDashboard", label: "Sales Dashboard" },
        { id: "cashSaleList", label: "Cash Sale List" },
        { id: "addSale", label: "Add Cash Sale" },
        { id: "creditSaleList", label: "Credit Sale List" },
        { id: "creditSale", label: "Add Credit Sale" },
        { id: "commission", label: "Commission" },
        { id: "gatePass", label: "Gate Pass" },
        { id: "gatePassRecord", label: "Gate Pass Record" },
        { id: "marketTrend", label: "Market Trend Analysis" },
        { id: "openingBalance", label: "Opening Balance" },
        { id: "salesTransections", label: "Sales Transections" },
        
      ],
    },
    {
      id: "purchases",
      icon: <PurchaseIcon style={{ width: '22px', height: '22px' }}/>,
      label: "Purchase",
      subItems: [
        { id: "purchaseDashboard", label: "Purchased Dashboard" },
      ],
    },
    {
      id: "logbook",
      icon: <BookIcon style={{ width: '22px', height: '22px' }}/>,
      label: "Log Book",
      subItems: [
        { id: "vehicleLogBook", label: "Vehicle Log Book" },
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
      subItems: [
        { id: "shipping-dashboard", label: "Dashboard" },
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
      subItems: [
        { id: "auction-house", label: "Auction House" },
        { id: "auction-grid", label: "Auction Grid View" },
        { id: "price-checker", label: "Price Checker" },
        { id: "duty-calculator", label: "Duty Calculator" },
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
      subItems: [
        { id: "logos", label: "Logos" },
        { id: "colors", label: "Colors" },
        { id: "templates", label: "Templates" },
      ],
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
      subItems: [
        { id: "profile", label: "Profile" },
        { id: "settings", label: "Settings" },
        { id: "preferences", label: "Preferences" },
      ],
    },
  ];

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      <div className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <img src={pic} />
            <rect width="32" height="32" rx="8" fill="#3B82F6" />
          </div>
          <div className={styles.companyInfo}>
            <div className={styles.companyName}>Mr Tamor</div>
            <div className={styles.companyTagline}>Khushi Motors</div>
          </div>
        </div>

        <div className={styles.menuDivider}></div>

        {menuItems.map((item) => (
          <div key={item.id} className={styles.menuGroup}>
            <div
              className={styles.navItem}
              onClick={() => toggleSubmenu(item.id)}
            >
              <div className={styles.iconContainer}>{item.icon}</div>
              <div className={styles.navText}>{item.label}</div>
              <div className={styles.expandIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={expandedMenus[item.id] ? styles.expanded : ""}
                >
                  <path d="M7 10L12 15L17 10H7Z" fill="#64748B" />
                </svg>
              </div>
            </div>

            {item.subItems && (
              <div
                className={`${styles.submenu} ${expandedMenus[item.id] ? styles.expanded : ""}`}
              >
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={styles.submenuItem}
                    onClick={() => onNavigate && onNavigate(subItem.id)}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
