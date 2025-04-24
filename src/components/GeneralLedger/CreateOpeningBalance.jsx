import React from "react";
import styles from "./CreateOpeningBalance.module.css";

const CreateOpeningBalance = (onBack) => {
  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <div className={styles["create-opening-wrapper"]}>
          <div className={styles["create-opening"]}>
            <div className={styles["overlap-group"]}>
              <div className={styles["text-wrapper"]}>
                Create Opening Balance
              </div>

              <div className={styles.rectangle} />

              <div className={styles.overlap}>
                <div className={styles.div}>Financial Year</div>

                <div className={styles["overlap-2"]}>
                  

                  <input type="text" placeholder="Select Financial Year" className={styles["rectangle-2"]}/>
                </div>
              </div>

              <div className={styles["overlap-3"]}>
                <div className={styles.div}>Year Status</div>

                <div className={styles["overlap-2"]}>
                <input type="text" placeholder="Select Year Status" className={styles["rectangle-2"]}/>
                </div>
              </div>

              <div className={styles["overlap-4"]}>
                <div className={styles.div}>Chart of Account Code</div>

                <div className={styles["overlap-2"]}>
                <input type="text" placeholder="Select chart code" className={styles["rectangle-2"]}/>
                </div>
              </div>

              <div className={styles["overlap-5"]}>
                <div className={styles.div}>Opening Balance Cr</div>

                <div className={styles["overlap-2"]}>
                <input type="text" placeholder="Select Opening Balance" className={styles["rectangle-2"]}/>
                </div>
              </div>

              <div className={styles["div-wrapper"]}>
                <div className={styles["text-wrapper-3"]}>Save</div>
              </div>

              <div className={styles["overlap-6"]}>
                <button className={styles["text-wrapper-3"]} onClick={onBack}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateOpeningBalance;