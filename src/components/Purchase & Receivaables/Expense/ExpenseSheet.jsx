import React from "react";
import styles from "./ExpenseSheet.module.css";

const ExpenseTable = ({ expenses = [] }) => {
  // Default data if none is provided
  const defaultExpenses = [
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

  const expenseData = expenses.length > 0 ? expenses : defaultExpenses;

  // Function to determine status badge class
  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return styles.statusCompleted;
      case "pending":
        return styles.statusPending;
      case "rejected":
        return styles.statusRejected;
      default:
        return styles.statusCompleted;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>Recent Expenses</div>
        <div className={styles.tableContent}>
          <div className={styles.tableColumns}>
            <div className={styles.columnDate}>
              <div className={styles.columnHeader}>Date</div>
              {expenseData.map((expense, index) => (
                <div key={`date-${index}`} className={styles.dateCell}>
                  {expense.date}
                </div>
              ))}
            </div>

            <div className={styles.columnDescription}>
              <div className={styles.columnHeader}>Description</div>
              {expenseData.map((expense, index) => (
                <div key={`desc-${index}`} className={styles.descriptionCell}>
                  {expense.description}
                </div>
              ))}
            </div>

            <div className={styles.columnCategory}>
              <div className={styles.columnHeader}>Category</div>
              {expenseData.map((expense, index) => (
                <div key={`cat-${index}`} className={styles.categoryCell}>
                  {expense.category}
                </div>
              ))}
            </div>

            <div className={styles.columnAmount}>
              <div className={styles.columnHeader}>Amount</div>
              {expenseData.map((expense, index) => (
                <div key={`amount-${index}`} className={styles.amountCell}>
                  {expense.amount}
                </div>
              ))}
            </div>

            <div className={styles.columnStatus}>
              <div className={styles.columnHeader}>Status</div>
              {expenseData.map((expense, index) => (
                <div
                  key={`status-${index}`}
                  className={`${styles.statusBadge} ${getStatusBadgeClass(expense.status)}`}
                >
                  {expense.status}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
