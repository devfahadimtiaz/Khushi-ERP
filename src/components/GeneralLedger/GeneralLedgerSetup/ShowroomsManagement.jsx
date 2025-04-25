import React from "react";
import styles from "./ShowroomsManagement.module.css";
import TableComponent from "../../../Resources/Tables/TableComponent";


const TableHeader=[
  {label:"Sr. No", key:"srNo"},
  {label:"Showroom Name", key:"showroomName"},
  {label:"Location", key:"location"},
  {label:"Created Date", key:"createDate"},
  {label:"Status", key:"status"},
];

const TableData=[
  {
    id:1,
    srNo:"1",
    showroomName: "Khushi Motors Kenya",
    location: "Shibuya, Tokyo",
    createDate: "2024-01-01",
    status:"Active",
    
  },
  {
    id:2,
    srNo:"1",
    showroomName: "Khushi Motors Kenya",
    location: "Shibuya, Tokyo",
    createDate: "2024-01-01",
    status:"Active",
    
  },
  {
    id:3,
    srNo:"1",
    showroomName: "Khushi Motors Kenya",
    location: "Shibuya, Tokyo",
    createDate: "2024-01-01",
    status:"Active",
    
  }
]
const ShowroomsManagement = ({ onBack }) => {
  return (
    <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>Showrooms & Companies</div>
            <div className={styles.headerActions}>
              <button className={styles.addButton}>Add New Showroom</button>
           
            </div>
          </div>
          <div className={styles.contentPanel}>
            <div className={styles.filterHeader}>
              <div className={styles.filterLabel}>Search Showroom</div>
              <div className={styles.filterLabel}>Status</div>
            </div>
            <div className={styles.filterControls}>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Search" className={styles.searchPlaceholder}/>

                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/27e61d6043150f47f7285a20cec94c158f305530"
                  className={styles.searchIcon}
                  alt="Search"
                />
              </div>
              <select className={styles.statusSelect}>
                <option className={styles.selectPlaceholder}>Select status</option>
                <option className={styles.selectPlaceholder}>Active</option>
                <option className={styles.selectPlaceholder}>Under Maintenance </option>
                <option className={styles.selectPlaceholder}>Inactive
                </option>
              </select>
            </div>
          </div>
        
        </div>
<TableComponent data={TableData} HeadData={TableHeader}/>
    </div>
  );
};

export default ShowroomsManagement;
