import React, { useState } from "react";
import styles from "./PurchasedOrder.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";
import AddPurchaseOrder from "./AddPurchaseOrder";

const TableHeader = [
  { label: "No", key: "no" },
  { label: "Purchased Order", key: "purchasedOrder" },
  { label: "Vendor Name", key: "vendorName" },
  { label: "Order Date", key: "orderDate" },
  { label: "Gross Value", key: "grossValue" },
  { label: "Payable Value", key: "payableValue" },
  { label: "Status", key: "status" },
];

const sampleData = [
  {
    id: 1,
    no: "01",
    purchasedOrder: "ABCC",
    vendorName: "XYZ",
    orderDate: "14/02/2025",
    grossValue: "12345",
    payableValue: "12345",
    status: "Available",
  },
  {
    id: 2,
    no: "02",
    purchasedOrder: "ABCC",
    vendorName: "XYZ",
    orderDate: "14/02/2025",
    grossValue: "12345",
    payableValue: "12345",
    status: "Available",
  },
  {
    id: 3,
    no: "03",
    purchasedOrder: "ABCC",
    vendorName: "XYZ",
    orderDate: "14/02/2025",
    grossValue: "12345",
    payableValue: "12345",
    status: "Available",
  },
  {
    id: 4,
    no: "04",
    purchasedOrder: "ABCC",
    vendorName: "XYZ",
    orderDate: "14/02/2025",
    grossValue: "12345",
    payableValue: "12345",
    status: "Available",
  },
];
const PurchasedOrder = ({ onBack }) => {
  const [showAddPurchaseOrder, setShowAddPurchaseOrder] = useState(false);

  const handleAddNew = () => {
    setShowAddPurchaseOrder(true);
  };

  const handleBack = () => {
    setShowAddPurchaseOrder(false);
  };

  if (showAddPurchaseOrder) {
    return <AddPurchaseOrder onBack={handleBack} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Purchased Order</span>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.addButton} onClick={handleAddNew}>
            <div className={styles.addIconWrapper}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.addIcon}
              >
                <path
                  d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                  fill="#ECECFE"
                ></path>
                <path
                  d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                  fill="#ECECFE"
                ></path>
              </svg>
            </div>
            <span>Add New</span>
          </button>
        </div>
      </div>
      <TableComponenet data={sampleData} HeadData={TableHeader} />
    </div>
  );
};

export default PurchasedOrder;
