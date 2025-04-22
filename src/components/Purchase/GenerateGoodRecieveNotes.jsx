import React, {useState} from "react";
import styles from "./GenerateGoodRecieveNotes.module.css";
import TableComponenet from "../../Resources/Tables/TableComponent";

const TableHeader = [
    { label: "No", key: "no" },
    { label: "GRN#", key: "grn" },
    { label: "PO#", key: "po" },
    { label: "PO Date", key: "poDate" },
    { label: "Status", key: "status" },
  ];

const sampleData = [
  {
    id:1,
    no: "01",
    grn: "GRN 123",
    po: "PO123",
    poDate: "14/04/2025",
    status: "Available",
  },
  {
    id:2,
    no: "02",
    grn: "GRN 123",
    po: "PO123",
    poDate: "14/04/2025",
    status: "Available",
  },
  {
    id:3,
    no: "03",
    grn: "GRN 123",
    po: "PO123",
    poDate: "14/04/2025",
    status: "Available",
  },

];
const GenerateGoodRecieveNotes = ({ onBack }) => {


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Generate Good Recieve Notes</span>
        </div>

    
      </div>
    <TableComponenet
    data={sampleData}
    HeadData={TableHeader}/>
      
    </div>
  );
};

export default GenerateGoodRecieveNotes;
