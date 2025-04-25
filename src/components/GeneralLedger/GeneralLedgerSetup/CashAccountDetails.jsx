import React, { useState } from "react";
import styles from "./CashAccountDetails.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import CreateCostProfitCenter from "./CreateCostProfitCenter";
import AddCashAccountDetails from "./AddCashAccountDetails";

const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "Cash Account Name", key: "cashDetails" },
  { label: "Contact Name", key: "contactName" },

  { label: "Type", key: "type" },
]

const TableData = [
  {
    id: 1,
    srNo: "1",
    cashDetails: "ABSA",
    contactName: "John Smith",

    type: "Savings",
  },
  {
    id: 2,
    srNo: "2",
    cashDetails: "ABSA",
    contactName: "John Smith",

    type: "Savings",
  },
  {
    id: 3,
    srNo: "3",
    cashDetails: "ABSA",
    contactName: "John Smith",
    type: "Savings",
  },
];
const CashAccountDetails = ({ onBack }) => {
  const [showInputDesign, setShowInputDesign] = useState(false);

  const handleAddNew = () => {
    setShowInputDesign(true);
  };

  const handleCancelCreate = () => {

    setShowInputDesign(false);
  };

  if (showInputDesign) {
    return <AddCashAccountDetails onCancel={handleCancelCreate} />;
  }


  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Cash Account Details</div>
          <button
            className={styles.addAccountBtn}
            onClick={() => setShowInputDesign(true)}
          >
            Add New Cash Account
          </button>
        </div>

        <TableComponent data={TableData} HeadData={TableHeader} />
      </div>
    </div>
  );
};

export default CashAccountDetails;
