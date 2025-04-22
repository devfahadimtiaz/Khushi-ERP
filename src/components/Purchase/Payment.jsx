import React, {useState} from "react";
import styles from "./Payment.module.css";
import TableComponenet from "../../Resources/Tables/TableComponent";
import AddPayment from "./AddPayment";

const TableHeader = [

    { label: "Payment#", key: "payment" },
    { label: "Pay ID", key: "payId" },
    { label: "Vendor", key: "vendor" },
    { label: "Payment Date", key: "paymentDate" },
    { label: "Voucher", key: "voucher" },
    { label: "Invoice", key: "invoice" },
    { label: "PO#", key: "po" },
    { label: "PO Type", key: "poType" },
    { label: "Payable Amount", key: "payableAmount" },
    { label: "Paid Amount", key: "paidAmount" },
    { label: "Status", key: "status" },
  ];

const sampleData = [
  {
    id:1,
    payment: "01",
    payId: "ABC",
    vendor: "XYZ",
    paymentDate: "14/04/2025",
    voucher: "#123",
    invoice: "#ABC",
    po: "#123ABC",
    poType: "Cash Payment",
    payableAmount: "456123",
    paidAmount: "123456",
    status: "Available",
  },


];
const Payment = ({ onBack }) => {
  const [showAddPayment, setShowAddPayment] = useState(false);

  const handleAddNewClick = () => {
    setShowAddPayment(true);
  };

  const handleBackFromAddPayment = () => {
    setShowAddPayment(false);
  };
  if(showAddPayment){
    return(
        <AddPayment onBack={handleBackFromAddPayment}/>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Payments</span>
        </div>
        <div className={styles.headerRight}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button className={styles.addButton} onClick={handleAddNewClick}>
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
    <TableComponenet
    data={sampleData}
    HeadData={TableHeader}/>
    </div>
  );
};

export default Payment;