import React, { useState } from "react";
import styles from "./SubsidiaryFileSetup.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import SubsidiaryFileEntry from "./SubsidiaryFileEntry";


const TableHeader=[
  {label:"Sr. No", key:"srNo"},
  {label:"A/C Description", key:"acDescription"},
  {label:"Prefix", key:"prefix"},
  {label:"Currency", key:"currency"},
  {label:"Account Code Digits", key:"accountCode"},
  {label:"Last Used Code", key:"lastUsedCode"},
];

const TableData=[
  {
    id:1,
    srNo:"1",
    acDescription: "Accounts Receivable",
    prefix: "AR",
    currency: "USD",
    accountCode:"6",
    lastUsedCode:"AR-000123",
  },
  {
    id:2,
    srNo:"2",
    acDescription: "Accounts Receivable",
    prefix: "AR",
    currency: "USD",
    accountCode:"6",
    lastUsedCode:"AR-000123",
  },
  {
    id:3,
    srNo:"3",
    acDescription: "Accounts Receivable",
    prefix: "AR",
    currency: "USD",
    accountCode:"6",
    lastUsedCode:"AR-000123",
  },
]
const SubsidiaryFileSetup = ({ onBack }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleAddNew = () => {
    setShowCreateForm(true);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
  };
if(showCreateForm){
    return(
        <SubsidiaryFileEntry onCancel={handleCancelCreate}/>
    )
}
  return (
    <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>Subsidiary File Setup</div>
            <div className={styles.headerActions}>
              <button className={styles.addButton} onClick={handleAddNew}>Add New File</button>
            </div>
          </div>

        </div>
        <TableComponent data={TableData} HeadData={TableHeader}/>

    </div>


  );
};

export default SubsidiaryFileSetup;
