import React, {useState, useEffect} from "react";
import styles from "./AddStock.module.css";
import General from "./General";
import ExpenseTracker from "./ExpenseTracker";
import MediaUpload from "./MediaUpload";
import CameraaMenTask from "./CameraMenTask";
import DocumentUpload from "./DocumentUpload";
import DesignerTask from "./DesignerTask";
import VehicleInspectionChecklist from "./VehicleInspectionChecklist";
import Report from "./Report";
import StockDetail from "./StockDetail";
import axios from "axios";





const AddStock = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 const [InventoryData, setInventoryData] = useState({
  generalDetails:{},
  media:[],
  documents:[],
  photograph:[],
  reels:[],
  verification:[],
  expense:[],
  reports:[],
 });
 const updateInventory = (section, data) => {
  setInventoryData(prev => ({
    ...prev,
    [section]: data
  }));
};

const handleFinalSubmit = async () => {

  try{
    console.log('General Details:', InventoryData.generalDetails);
    const formData = new FormData();
    Object.entries(InventoryData.generalDetails).forEach(([key, value]) => {
      formData.append(key, value ?? '');
    });

    const response = await axios.post('http://localhost:8081/addInventory', formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    alert('Inventory saved successfully!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error("Error submitting data:", error);
  }

}
 const ButtonComponents = [
  {label:'General',component: <General data={InventoryData.generalDetails} onChange={(data)=>updateInventory('generalDetails', data)}/>},
  {label:'Media Library',component: <MediaUpload/>},
  {label:'Documents',component: <DocumentUpload/>},
  {label:'Photograph',component: <CameraaMenTask/>},
  {label:'Reels',component: <DesignerTask/>},
  {label:'Verification',component: <VehicleInspectionChecklist/>},
  {label:'Expense',component: <ExpenseTracker/>},
  {label:'Reports',component: <Report/>},
  {label:'Stock Detail',component: <StockDetail/>},

]
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
          <button className={styles.saveButton} onClick={handleFinalSubmit}>Save</button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
