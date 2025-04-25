import React, { useState } from "react";
import styles from "./BankDetails.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import CreateCostProfitCenter from "./CreateCostProfitCenter";
import InputDesign from "./AddBankDetails";

const TableHeader = [
  { label: "Sr. No", key: "srNo" },
  { label: "Bank Name", key: "bankName" },
  { label: "Contact Name", key: "contactName" },
  { label: "IBAN#", key: "iban" },
  { label: "Type", key: "type" },
];

const TableData = [
  {
    id: 1,
    srNo: "1",
    bankName: "ABSA",
    contactName: "John Smith",
    iban: "AE123456789",
    type: "Savings",
  },
  {
    id: 2,
    srNo: "2",
    bankName: "ABSA",
    contactName: "John Smith",
    iban: "AE123456789",
    type: "Savings",
  },
  {
    id: 3,
    srNo: "3",
    bankName: "ABSA",
    contactName: "John Smith",
    iban: "AE123456789",
    type: "Savings",
  },
];
const BankDetails = ({ onBack }) => {
  const [showInputDesign, setShowInputDesign] = useState(false);

  const handleAddNew = () => {
    setShowInputDesign(true);
  };

  const handleCancelCreate = () => {

    setShowInputDesign(false);
  };

  if (showInputDesign) {
    return <InputDesign onCancel={handleCancelCreate} />;
  }


  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Bank</div>
          <button
            className={styles.addAccountBtn}
            onClick={() => setShowInputDesign(true)}
          >
            Add New Bank
          </button>
        </div>

        <TableComponent data={TableData} HeadData={TableHeader} />
      </div>
    </div>
  );
};

export default BankDetails;
