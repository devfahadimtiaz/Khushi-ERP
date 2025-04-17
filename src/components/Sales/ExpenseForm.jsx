import React from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.formCard}>
          {/* Vehicle Details Section */}
          <div className={styles.sectionContainer}>
          <div className={styles.sectionTitle}>Vehicle Details</div>
            <div className={styles.threeColumnLayout}>
              
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Total Price</div>
                  <input
                    type="text"
                    className={styles.inputFieldDisabled}
                    disabled
                  />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Commitment</div>
                  <input type="text" className={styles.inputField} />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Pending Payment</div>
                  <input
                    type="text"
                    className={styles.inputFieldDisabled}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionContainer}>
          <div className={styles.sectionTitle}>Insurance Details</div>
            <div className={styles.threeColumnLayout}>
              
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Total Price</div>
                  <input
                    type="text"
                    className={styles.inputField}
                    
                  />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Commitment</div>
                  <input type="text" className={styles.inputField} />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Pending Payment</div>
                  <input
                    type="text"
                    className={styles.inputFieldDisabled}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tracker Details Section */}
          <div className={styles.sectionContainer}>
          <div className={styles.sectionTitle}>Tracker Details</div>
            <div className={styles.threeColumnLayout}>
              
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Total Price</div>
                  <input
                    type="text"
                    className={styles.inputField}
                    
                  />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Commitment</div>
                  <input type="text" className={styles.inputField} />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.columnContentWithMargin}>
                  <div className={styles.fieldLabel}>Pending Payment</div>
                  <input
                    type="text"
                    className={styles.inputFieldDisabled}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Add Expense Button */}
          <button className={styles.addExpenseButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/6ae195a261d7a881b2d7e79c97d858ba45b47094?placeholderIfAbsent=true"
              className={styles.buttonIcon}
              alt=""
            />
            <span>Add Expense</span>
          </button>

          {/* Expense List Section */}
          <div className={styles.expenseListContainer}>
            <div className={styles.expenseListTitle}>Expense List</div>
            <div className={styles.expenseListHeader}>
              <div className={styles.headerItem}>Vehicle Total</div>
              <div className={styles.headerItem}>Vehicle Pending</div>
              <div className={styles.headerItem}>Insurance Total</div>
              <div className={styles.headerItem}>Insurance Pending</div>
              <div className={styles.headerItem}>Tracker Total</div>
              <div className={styles.headerItem}>Tracker Pending</div>
              <div className={styles.headerItem}>Actions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
