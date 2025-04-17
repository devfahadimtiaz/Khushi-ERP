import react from 'react';
import styles from "./VehicleDetails.module.css"


const VehicleDetails=()=>{
    return(
        <div className={styles.formContainer}>
                      <div className={styles.sectionTitle}>Vehicle Details</div>
                      <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Make</div>
                          <div className={styles.inputField}>Toyota</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Model</div>
                          <div className={styles.inputField}>Land Cruiser</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Year of Manufacture</div>
                          <div className={styles.inputField}>2024</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Chassis Number</div>
                          <div className={styles.inputField}>GSX1234567890</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Stock Number</div>
                          <div className={styles.inputField}>C24-345</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Engine CC</div>
                          <div className={styles.inputField}>3000 CC</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Body Type</div>
                          <div className={styles.inputField}>SUV</div>
                        </div>
                        <div className={styles.formGroup}>
                          <div className={styles.label}>Registration Number</div>
                          <div className={styles.inputField}>ABC-123</div>
                        </div>
                      </div>
                      </div>
    )

}

export default VehicleDetails;