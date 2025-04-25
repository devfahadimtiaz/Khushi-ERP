import React, { useState } from "react";
import styles from "./CashAccountDetails.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import CreateCostProfitCenter from "./CreateCostProfitCenter";
import AddCreditAccountDetails from "./AddCreditAccountDetails";

const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "Credit Account Name", key: "creditDetails" },
  { label: "Contact Name", key: "contactName" },

  { label: "Type", key: "type" },
]

const TableData = [
  {
    id: 1,
    srNo: "1",
    creditDetails: "ABSA",
    contactName: "John Smith",

    type: "Savings",
  },
  {
    id: 2,
    srNo: "2",
    creditDetails: "ABSA",
    contactName: "John Smith",

    type: "Savings",
  },
  {
    id: 3,
    srNo: "3",
    creditDetails: "ABSA",
    contactName: "John Smith",
    type: "Savings",
  },
];
const CreditAccountDetails = ({ onBack }) => {
  const [showInputDesign, setShowInputDesign] = useState(false);

  const handleAddNew = () => {
    setShowInputDesign(true);
  };

  const handleCancelCreate = () => {

    setShowInputDesign(false);
  };

  if (showInputDesign) {
    return <AddCreditAccountDetails onCancel={handleCancelCreate} />;
  }


  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Credit Account Details</div>
          <button
            className={styles.addAccountBtn}
            onClick={() => setShowInputDesign(true)}
          >
            Add New Credit Account
          </button>
        </div>

        <TableComponent data={TableData} HeadData={TableHeader} />
      </div>
    </div>
  );
};

export default CreditAccountDetails;
