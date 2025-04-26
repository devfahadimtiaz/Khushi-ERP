import React, { useState } from "react";
import styles from "./ExpenseManagement.module.css";
import AddExpensePopup from "./AddExpensePopup";
import RecentExpensesTable from "./RecentExpensesTable";

const expenseData = [
  {
    date: "2024-01-15",
    description: "Office Supplies",
    category: "Office",
    amount: "$299.99",
    status: "Completed",
  },
  {
    date: "2024-01-14",
    description: "Client Lunch Meeting",
    category: "Meals",
    amount: "$84.50",
    status: "Pending",
  },
  {
    date: "2024-01-13",
    description: "Software License",
    category: "Technology",
    amount: "$599.00",
    status: "Completed",
  },
  {
    date: "2024-01-12",
    description: "Travel Expenses",
    category: "Travel",
    amount: "$450.75",
    status: "Rejected",
  },
  {
    date: "2024-01-11",
    description: "Marketing Campaign",
    category: "Marketing",
    amount: "$1250.00",
    status: "Completed",
  },
];
function ExpenseManagement() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Expense Management</span>
        <button className={styles.addButton} onClick={handleOpenPopup}>
          Add New Expense
        </button>
      </div>
      <AddExpensePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <div className={styles.contentWrapper}>
        <div className={styles.overviewCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitles}>Expense Overview</span>
            <div>
              <input type="month" className={styles.select} />
            </div>
          </div>
          <div className={styles.categoryList}>
            <div className={styles.categoryItem}>
              <span className={`${styles.categoryDot} ${styles.orangeDot}`} />
              <span className={styles.expenseName}>Utilization Expenses</span>
              <span>Rs0.00</span>
            </div>
            <div className={styles.categoryItem}>
              <span className={`${styles.categoryDot} ${styles.greenDot}`} />
              <span>Marketing Cost</span>
              <span>Rs0.00</span>
            </div>
            <div className={styles.categoryItem}>
              <span className={`${styles.categoryDot} ${styles.blueDot}`} />
              <span>Software Cost</span>
              <span>Rs0.00</span>
            </div>
            <div className={styles.categoryItem}>
              <span className={`${styles.categoryDot} ${styles.yellowDot}`} />
              <span>Office Cost</span>
              <span>Rs0.00</span>
            </div>
            <div className={styles.categoryItem}>
              <span className={`${styles.categoryDot} ${styles.grayDot}`} />
              <span>Sales Cost</span>
              <span>Rs0.00</span>
            </div>
          </div>
        </div>
        <div className={styles.expensesCard}>
          <RecentExpensesTable expenses={expenseData} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseManagement;
