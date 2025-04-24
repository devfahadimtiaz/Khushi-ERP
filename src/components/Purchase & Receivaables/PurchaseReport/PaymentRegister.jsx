import React, { useState, useEffect } from "react";
import styles from "./PaymentRegister.module.css";
import TableComponenet from "../../../Resources/Tables/TableComponent";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TableHeader = [
  { label: "Date", key: "date" },
  { label: "Discription", key: "discription" },
  { label: "Category", key: "category" },
  { label: "Type", key: "type" },
  { label: "Amount", key: "amount" },
];
const TableData = [
  {
    id: 1,
    date: "2024-01-05",
    discription: "Office Rent",
    category: "Rent",
    type: "Expense",
    amount: "$2,500.00",
  },
  {
    id: 2,
    date: "2024-01-05",
    discription: "Office Rent",
    category: "Rent",
    type: "Expense",
    amount: "$2,500.00",
  },
  {
    id: 3,
    date: "2024-01-05",
    discription: "Office Rent",
    category: "Rent",
    type: "Expense",
    amount: "$2,500.00",
  },
  {
    id: 4,
    date: "2024-01-05",
    discription: "Office Rent",
    category: "Rent",
    type: "Expense",
    amount: "$2,500.00",
  },
];

function PaymentRegister({ onBack }) {
  const words = ["April 2025", "May 2025", "June 2025", "July 2025"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWord = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevWord = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.paymentRegister}>
        <div className={styles.mainContent}>
          <div className={styles.headerContainer}>
            <div className={styles.pageTitle}>Payment Register</div>
            <div className={styles.headerRight}>
              <div className={styles.balanceTag}>$5,150.00</div>
            </div>
          </div>
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <div className={styles.monthSelector}>
                <div className={styles.containers}>
                  <button onClick={prevWord} className={styles.arrow}>
                  <FaArrowLeft />
                  </button>
                  <div className={styles.word}>{words[currentIndex]}</div>
                  <button onClick={nextWord} className={styles.arrow}>
                  <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className={styles.actionButtons}>
                <select className={styles.filterDropdown}>
                  <option className={styles.filterText}>All</option>
                  <option className={styles.filterText}>Monthly</option>
                  <option className={styles.filterText}>Quatarly</option>
                  <option className={styles.filterText}>Yearly</option>
                </select>
                <button className={styles.exportButton}>Export</button>
              </div>
            </div>
            <div className={styles.summaryCards}>
              <div className={styles.summaryColumn}>
                <div className={styles.summaryCard}>
                  <div className={styles.cardLabel}>Total Income</div>
                  <div className={styles.incomeAmount}>$8,000.00</div>
                </div>
              </div>
              <div className={styles.summaryColumn}>
                <div className={styles.summaryCard}>
                  <div className={styles.cardLabel}>Total Expense</div>
                  <div className={styles.expenseAmount}>$2,850.00</div>
                </div>
              </div>
              <div className={styles.summaryColumn}>
                <div className={styles.summaryCard}>
                  <div className={styles.cardLabel}>Net Balance</div>
                  <div className={styles.incomeAmount}>$5,150.00</div>
                </div>
              </div>
            </div>
            <TableComponenet data={TableData} HeadData={TableHeader} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRegister;
