import React from "react";
import styles from "./MonthlyExpenseTable.module.css";

const MonthlyExpenseTable = ({ data }) => {
  // Default data if none is provided
  const expenseData = data || [
    {
      category: "Utilization Expenses",
      color: "#ED7D31",
      values: [
        "Rs1,25,000.00",
        "Rs1,35,000.00",
        "Rs1,42,000.00",
        "Rs1,38,000.00",
        "Rs1,45,000.00",
        "Rs1,50,000.00",
        "Rs1,48,000.00",
        "Rs1,52,000.00",
        "Rs1,49,000.00",
        "Rs1,55,000.00",
        "Rs1,58,000.00",
        "Rs1,60,000.00",
      ],
      total: "Rs17,57,000.00",
    },
    {
      category: "Marketing Cost",
      color: "#70AD47",
      values: [
        "Rs45,000.00",
        "Rs48,000.00",
        "Rs52,000.00",
        "Rs49,000.00",
        "Rs51,000.00",
        "Rs54,000.00",
        "Rs53,000.00",
        "Rs55,000.00",
        "Rs56,000.00",
        "Rs58,000.00",
        "Rs57,000.00",
        "Rs59,000.00",
      ],
      total: "Rs6,37,000.00",
    },
    {
      category: "Software Cost",
      color: "#4318D1",
      values: [
        "Rs25,000.00",
        "Rs25,000.00",
        "Rs25,000.00",
        "Rs28,000.00",
        "Rs28,000.00",
        "Rs28,000.00",
        "Rs30,000.00",
        "Rs30,000.00",
        "Rs30,000.00",
        "Rs32,000.00",
        "Rs32,000.00",
        "Rs32,000.00",
      ],
      total: "Rs3,45,000.00",
    },
    {
      category: "Office Cost",
      color: "#FFC000",
      values: [
        "Rs75,000.00",
        "Rs75,000.00",
        "Rs78,000.00",
        "Rs78,000.00",
        "Rs80,000.00",
        "Rs80,000.00",
        "Rs82,000.00",
        "Rs82,000.00",
        "Rs85,000.00",
        "Rs85,000.00",
        "Rs88,000.00",
        "Rs88,000.00",
      ],
      total: "Rs9,76,000.00",
    },
    {
      category: "Sales Cost",
      color: "#A5A5A5",
      values: [
        "Rs95,000.00",
        "Rs98,000.00",
        "Rs1,02,000.00",
        "Rs1,05,000.00",
        "Rs1,08,000.00",
        "Rs1,12,000.00",
        "Rs1,15,000.00",
        "Rs1,18,000.00",
        "Rs1,22,000.00",
        "Rs1,25,000.00",
        "Rs1,28,000.00",
        "Rs1,32,000.00",
      ],
      total: "Rs13,60,000.00",
    },
  ];

  // Calculate monthly totals
  const monthlyTotals = expenseData[0].values.map((_, monthIndex) => {
    return expenseData
      .reduce((total, expense) => {
        const value = expense.values[monthIndex]
          .replace("Rs", "")
          .replace(/,/g, "");
        return total + parseFloat(value);
      }, 0)
      .toFixed(2);
  });

  // Format monthly totals
  const formattedMonthlyTotals = monthlyTotals.map((total) => {
    // Convert to Indian number format (e.g., 1,00,000.00)
    const parts = total.toString().split(".");
    const integerPart = parts[0];
    const formattedInteger = integerPart
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    return `Rs${formattedInteger}.00`;
  });

  // Calculate grand total
  const grandTotal = expenseData
    .reduce((total, expense) => {
      const value = expense.total.replace("Rs", "").replace(/,/g, "");
      return total + parseFloat(value);
    }, 0)
    .toFixed(2);

  // Format grand total
  const formattedGrandTotal = `Rs${grandTotal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}.00`;

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <div className={styles.headerRow}>
          <span className={styles.headerCellCategory}>Expense Category</span>
          {months.map((month, index) => (
            <span key={index} className={styles.headerCell}>
              {month}
            </span>
          ))}
          <span className={styles.headerCell}>YEAR</span>
        </div>

        <div className={styles.tableBody}>
          {expenseData.map((expense, rowIndex) => (
            <div key={rowIndex} className={styles.dataRow}>
              <div className={styles.categoryCell}>
                <span
                  className={styles.colorDot}
                  style={{ backgroundColor: expense.color }}
                />
                <span className={styles.categoryText}>{expense.category}</span>
              </div>

              {expense.values.map((value, cellIndex) => (
                <span key={cellIndex} className={styles.dataCell}>
                  {value}
                </span>
              ))}

              <span className={styles.totalCell}>{expense.total}</span>
            </div>
          ))}
        </div>

        <div className={styles.footerRow}>
          <span className={styles.footerCellLabel}>Monthly Total</span>
          {formattedMonthlyTotals.map((total, index) => (
            <span key={index} className={styles.footerCell}>
              {total}
            </span>
          ))}
          <span className={styles.grandTotalCell}>{formattedGrandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpenseTable;
