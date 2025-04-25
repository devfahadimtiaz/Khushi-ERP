import React, { useState } from "react";
import styles from "./FinancialYearList.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";
import AddFinancialYearList from "./AddFinancialYearList";


const TableHeader=[
  {label:"Sr. No", key:"srNo"},
  {label:"Description", key:"description"},
  {label:"Start Date", key:"startDate"},
  {label:"End Date", key:"endDate"},
  {label:"Status", key:"status"},
];

const TableData=[
  {
    id:1,
    srNo:"1",
    description: "Financial Year 2023-24",
    startDate: "2023-04-01",
    endDate: "2024-03-31",
    status:"Active",

  },
  {
    id:2,
    srNo:"2",
    description: "Financial Year 2023-24",
    startDate: "2023-04-01",
    endDate: "2024-03-31",
    status:"Active",

  },
  {
    id:3,
    srNo:"3",
    description: "Financial Year 2023-24",
    startDate: "2023-04-01",
    endDate: "2024-03-31",
    status:"Active",

  },
 
]
const FinancialYearList = ({ onBack }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleAddNew = () => {
    setShowCreateForm(true);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
  };
if(showCreateForm){
    return(
        <AddFinancialYearList onCancel={handleCancelCreate}/>
    )
}
  return (
    <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>Financial Year List</div>
            <button
            className={styles.addAccountBtn}
            onClick={() => setShowCreateForm(true)}
          >
            Add Financial Year
          </button>
          </div>


       
        <TableComponent data={TableData} HeadData={TableHeader}/>
        </div>
    </div>


  );
};

export default FinancialYearList;
