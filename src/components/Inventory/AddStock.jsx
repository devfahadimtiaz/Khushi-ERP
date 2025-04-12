import React, {useState} from "react";
import styles from "./AddStock.module.css";
import pic from "../../uploads/Pic.png"
import General from "./General";
import ExpenseTracker from "./ExpenseTracker";
import MediaUpload from "./MediaUpload";
import CameraaMenTask from "./CameraMenTask";
import DocumentUpload from "./DocumentUpload";
import DesignerTask from "./DesignerTask";
import VehicleInspectionChecklist from "./VehicleInspectionChecklist";
import Report from "./Report";



const ButtonComponents = [
  {label:'General',component: <General/>},
  {label:'Media Library',component: <MediaUpload/>},
  {label:'Documents',component: <DocumentUpload/>},
  {label:'Photograph',component: <CameraaMenTask/>},
  {label:'Reels',component: <DesignerTask/>},
  {label:'Verification',component: <VehicleInspectionChecklist/>},
  {label:'Expense',component: <ExpenseTracker/>},
  {label:'Reports',component: <Report/>},

]

const AddStock = () => {
 const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Add Stock</div>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabRow}>
          {ButtonComponents.map((item, index)=>(
            <button key={index} onClick={()=> setActiveIndex(index)} className={`${styles.tab} ${activeIndex === index ? styles.activeTab : ''}`} >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div>
      <div>{ButtonComponents[activeIndex].component}</div>
      </div>
      <div className={styles.footerContainer}>
        
        <div className={styles.buttonGroup}>
          <button className={styles.saveButton}>Save</button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
