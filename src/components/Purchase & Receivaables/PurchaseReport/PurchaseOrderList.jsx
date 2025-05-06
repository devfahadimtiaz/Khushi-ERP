import React from "react";
import styles from "./PurchaseOrderList.module.css";

function PurchaseOrderList() {
  return (
    <div className={styles.container}>
      <div className={styles.purchaseOrderList}>
        <div className={styles.background} />
        <div className={styles.headerContainer} />
        <div className={styles.pageTitle}>Purchase order list</div>
        <div className={styles.profileCircle} />

        {/* Date From Section */}
        <div className={styles.dateFromLabel}>Date from</div>
        <input type="date" className={styles.dateFromInput} />
        


        {/* Date To Section */}
        <div className={styles.dateToLabel}>Date to</div>
        <input type="date"  className={styles.dateToInput} />
       

        {/* Item Section */}
        <div className={styles.itemLabel}>Item</div>
        <select className={styles.itemInput}>
        <option className={styles.itemPlaceholder}>Select item</option>
        <option className={styles.itemPlaceholder}>Item 1</option>
        <option className={styles.itemPlaceholder}>Item 2</option>
        <option className={styles.itemPlaceholder}>Item 3</option>
        </select>
        {/* Status Section */}
        <div className={styles.statusLabel}>Status</div>
        <select className={styles.statusInput} >
        
        <option className={styles.statusPlaceholder}>Select status</option>
        <option className={styles.statusPlaceholder}>Active</option>
        <option className={styles.statusPlaceholder}>Inactive</option>
        <option className={styles.statusPlaceholder}>Complete</option>
        </select>
        {/* Action Buttons */}
        <button className={styles.resetButton} />
        <div className={styles.resetText}>Reset</div>
        <button className={styles.printButton} />
        <div className={styles.printText}>Print</div>
      </div>
    </div>
  );
}

export default PurchaseOrderList;
