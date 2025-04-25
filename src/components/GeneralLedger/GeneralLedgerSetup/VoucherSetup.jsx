import React, { useState } from "react";
import styles from "./VoucherSetup.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import CreateCostProfitCenter from "./CreateCostProfitCenter";


const TableHeader=[
  {label:"Sr. No", key:"srNo"},
  {label:"Voucher Type", key:"voucherType"},
  {label:"Book Type", key:"bookType"},
  {label:"Status", key:"status"},
];

const TableData=[
  {
    id:1,
    srNo:"1",
    voucherType: "Bank Payment Voucher",
    bookType: "Bank Book",
    status:"Active",

  },
  {
    id:2,
    srNo:"2",
    voucherType: "Bank Payment Voucher",
    bookType: "Bank Book",
    status:"Active",

  },
  {
    id:3,
    srNo:"3",
    voucherType: "Bank Payment Voucher",
    bookType: "Bank Book",
    status:"Active",

  },
  {
    id:4,
    srNo:"4",
    voucherType: "Bank Payment Voucher",
    bookType: "Bank Book",
    status:"Active",

  },
 
]
const VoucherSetup = ({ onBack }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleAddNew = () => {
    setShowCreateForm(true);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
  };
if(showCreateForm){
    return(
        <CreateCostProfitCenter onBack={handleCancelCreate}/>
    )
}
  return (
    <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>Voucher Setup</div>
          </div>


       
        <TableComponent data={TableData} HeadData={TableHeader}/>
        </div>
    </div>


  );
};

export default VoucherSetup;
