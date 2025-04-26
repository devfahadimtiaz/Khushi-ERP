import React, { useState } from "react";
import styles from "./ExpenseTracker.module.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleAddExpense = () => {
    if (!amount || !date) return;

    const newExpense = {
      amount: parseFloat(amount),
      date,
      notes,
    };

    setExpenses([...expenses, newExpense]);
    setAmount("");
    setDate("");
    setNotes("");
  };

  const calculateTotal = () => {
    return expenses
      .reduce((total, expense) => total + expense.amount, 0)
      .toFixed(2);
  };

  return (
    
      <div className={styles.content}>


        <div className={styles.formCard}>
          <div className={styles.cardTitle}>Add New Expense</div>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <div className={styles.label}>Expense Type</div>
              <div className={styles.selectWrapper}>
                <div className={styles.selectArrow}>
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 1H1L5 9L9 1Z" stroke="black"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>Amount</div>
              <input
                type="text"
                placeholder="Enter amount"
                className={styles.input}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>Date</div>
              <input
                type="date"
                className={styles.input}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>Notes</div>
              <input
                type="text"
                placeholder="Add notes"
                className={styles.input}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formActions}>
            <button className={styles.addCustomButton}>
              + Add Custom Expense Type
            </button>
            <button
              className={styles.addExpenseButton}
              onClick={handleAddExpense}
            >
              Add Expense
            </button>
          </div>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Type</div>
            <div className={styles.tableHeaderCell}>Amount</div>
            <div className={styles.tableHeaderCell}>Date</div>
            <div className={styles.tableHeaderCell}>Notes</div>
          </div>

          {expenses.map((expense, index) => (
            <div className={styles.tableRow} key={index}>
              <div className={styles.tableCell}>{expense.type}</div>
              <div className={styles.tableCell}>
                ${expense.amount.toFixed(2)}
              </div>
              <div className={styles.tableCell}>{expense.date}</div>
              <div className={styles.tableCell}>{expense.notes}</div>
            </div>
          ))}

          <div className={styles.tableSummary}>
            <div className={styles.totalExpenses}>
              <span className={styles.totalLabel}>Total Expenses:</span>
              <span className={styles.totalAmount}>${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default ExpenseTracker;
