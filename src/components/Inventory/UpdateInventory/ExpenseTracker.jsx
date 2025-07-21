import React, { useState, useEffect, useCallback  } from "react";
import styles from "./ExpenseTracker.module.css";

// The component lets the user:
// 1. Pick an expense type (or enter a custom one via "Other").
// 2. Enter an amount in either YEN or KSH.
// 3. Provide the current USD rate (always required).
// 4. Provide the KSH rate **only** when the amount is in YEN – the field hides when amount‑currency is KSH.
// 5. Select date & description.
// It converts the figure to USD/KSH as appropriate and lists everything in a table with edit/delete actions.

function ExpenseTracker({
  price, // vehicle buying price (string with commas or number)
  currency, // local stock currency label, e.g. "KSH"
  expen, // lifted‑state setter for expenses (optional)
  setExpen,
  InventoryData,
  setInventoryData,
  existingExpense,
  showroomCurrency,
}) {
  /* ────────────────────────────────
      Local state
  ──────────────────────────────── */
  const [type, setType] = useState("");
  const [customType, setCustomType] = useState("");

  const [amountCurrency, setAmountCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [usdRate, setUsdRate] = useState("");
  const [kshRate, setKshRate] = useState("");

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(()=>{
    if(!existingExpense) return

    const mapped = existingExpense.map((item)=>{
      const amount = Number(item.amount);
      const usdRate= Number(item.usdRate);
      const convertedAmount = Number(item.convertedAmount);
      const currencyRate = Number(item.currencyRate);
      const usdConvertedRate = Number(item.usdConvertedAmount);
      const formatted = new Date(item.date).toISOString().split("T")[0];

      return {
        type: item.type,
        description: item.description,
        date: formatted,
        amount: amount,
        usdRate: usdRate,
        kshRate: currencyRate,
        convertedKsh: convertedAmount,
        currency: item.showroomCurrency,
        convertedUsd: usdConvertedRate,
        amountCurrency: item.amountCurrency,
      }
      

    })
    setExpenses(mapped)
    

  },[existingExpense])

  /* ────────────────────────────────
      Lift to parent whenever list changes
  ──────────────────────────────── */
  useEffect(() => {
    if (setExpen) setExpen(expenses);
  }, [expenses, setExpen]);

  useEffect(() => {
    
    setType("Buying Price");
    setAmount(price.toString());
    setAmountCurrency(showroomCurrency);
    const today = new Date();
    const formatted = today.toISOString().split("T")[0]; // "YYYY-MM-DD"
    setDate(formatted);
  }, []);

  /* ────────────────────────────────
      Prefill when editing
  ──────────────────────────────── */
  const startEdit = (idx) => {
    const e = expenses[idx];
    setType(
      ["Trucking", "Shipping", "Yard", "Custom Clearance"].includes(e.type)
        ? e.type
        : "Other"
    );
    if (!["Trucking", "Shipping", "Yard", "Custom Clearance"].includes(e.type))
      setCustomType(e.type);

    setAmountCurrency(e.amountCurrency);
    setAmount(e.amount);
    setUsdRate(e.usdRate);
    setKshRate(e.kshRate || "");

    setDate(e.date);
    setDescription(e.description);
    setEditIndex(idx);
  };

  /* ────────────────────────────────
      Conversion helpers
  ──────────────────────────────── */
  const toNumber = (v) => Number((v || "").toString().replace(/,/g, ""));

  const getConvertedVals = (rawAmount, amtCur, usdR, kshR) => {
    const amt = toNumber(rawAmount);
    if (!amt || !usdR || (amtCur === "YEN" && !kshR)) return { usd: 0, ksh: 0 };

    if (amtCur === "YEN") {
      return {
        usd: amt * toNumber(usdR),
        ksh: amt * toNumber(kshR),
      };
    }
    // amtCur === "KSH"
    return {
      usd: amt * toNumber(usdR), // user enters "1 KSH = X USD" (could be 0.0087 etc.)
      ksh: amt, // already in KSH
    };
  };

  /* ────────────────────────────────
      Add / Update handler
  ──────────────────────────────── */
  const handleSave = () => {
    const amtNum = toNumber(amount);
    if (
      !amtNum ||
      !amountCurrency ||
      !usdRate ||
      (amountCurrency === "YEN" && !kshRate) ||
      !date ||
      !type ||
      (type === "Other" && !customType)
    )
      return;

    const { usd, ksh } = getConvertedVals(
      amtNum,
      amountCurrency,
      usdRate,
      kshRate
    );

    const record = {
      type: type === "Other" ? customType : type,
      amount: amtNum,
      amountCurrency,
      usdRate: toNumber(usdRate),
      kshRate: amountCurrency === "YEN" ? toNumber(kshRate) : null,
      convertedUsd: usd,
      usd:"USD",
      convertedKsh: ksh,
      currency: currency,
      date,
      description,
    };

    setExpenses((prev) => {
      if (editIndex !== null) {
        const copy = [...prev];
        copy[editIndex] = record;
        return copy;
      }
      return [...prev, record];
    });
    resetForm();
  };

  const resetForm = () => {
    setType("");
    setCustomType("");
    setAmountCurrency("");
    setAmount("");
    setDescription("");
    setEditIndex(null);
  };

  const handleDelete = (idx) => {
    setExpenses((prev) => prev.filter((_, i) => i !== idx));
    if (idx === editIndex) resetForm();
  };

  /* ────────────────────────────────
      Push grand‑total up to inventory
  ──────────────────────────────── */
 const calcGrandTotal = useCallback(() => {
  const expenseTotal = expenses.reduce((t, e) => t + (e.convertedKsh || 0), 0);
  const buyPrice = typeof price === "number" ? price : toNumber(price);
  return expenseTotal.toFixed(2);
}, [expenses, price]);

const calcTotalUSD = useCallback(() => {
  return expenses.reduce((t, e) => t + (e.convertedUsd || 0), 0).toFixed(2);
}, [expenses]);

useEffect(() => {
  setInventoryData((prev) => ({
    ...prev,
    totalPriceAfterExpense: calcGrandTotal(),
    totalPriceinUSD: calcTotalUSD(),
  }));
}, [calcGrandTotal, calcTotalUSD, setInventoryData]);


  /* ────────────────────────────────
      Table row builder
  ──────────────────────────────── */
  const numFmt = (v) =>
    Number(v || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const formatWithCommas = (value) => {
    const num = value.toString().replace(/,/g, "");
    if (!num) return "";
    return Number(num).toLocaleString("en-US");
  };

  const unformatNumber = (value) => {
    return value.toString().replace(/,/g, "");
  };

  /* ────────────────────────────────
      Render
  ──────────────────────────────── */

  return (
    <div className={styles.content}>
      {/* ─────────── Form Card ─────────── */}
      <div className={styles.formCard}>
        <div className={styles.cardTitle}>
          {editIndex !== null ? "Edit Expense" : "Add New Expense"}
        </div>

        <div className={styles.formGrid}>
          {/* Expense Type */}
          <div className={styles.formGroup}>
            <div className={styles.label}>Expense Type</div>
            <select
              className={styles.input}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Expense Type</option>
              <option value="Buying Price" disabled>Buying Price</option>
              <option>Trucking</option>
              <option>Shipping</option>
              <option>Yard</option>
              <option>Custom Clearance</option>
              <option value="Other">Other</option>
            </select>
            {type === "Other" && (
              <input
                className={styles.input}
                style={{ marginTop: 8 }}
                placeholder="Custom type"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
              />
            )}
          </div>

          {/* Amount + currency */}
          <div className={styles.formGroup}>
            <div className={styles.label}>Amount</div>
            <div className={styles.formGroupAmount}>
              <input
                type="text"
                className={styles.inputAmount}
                placeholder="0.00"
                value={formatWithCommas(amount)}
                onChange={(e) => {
                  const raw = unformatNumber(e.target.value);
                  if (!isNaN(raw)) setAmount(raw);
                }}
              />

              <select
                className={styles.select}
                value={amountCurrency}
                onChange={(e) => setAmountCurrency(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="YEN">YEN</option>
                <option value={currency}>{currency}</option>

              </select>
            </div>
          </div>

          {/* USD Rate */}
          <div className={styles.formGroup}>
            <div className={styles.label}>USD Rate ({amountCurrency})</div>
            <input
              type="number"
              className={styles.inputAmount}
              placeholder="Rate to USD"
              value={usdRate}
              onChange={(e) => setUsdRate(e.target.value)}
            />
          </div>

          {/* KSH Rate (only for YEN) */}
          {amountCurrency === "YEN" && (
            <div className={styles.formGroup}>
              <div className={styles.label}>
                {currency} Rate (YEN → {currency})
              </div>
              <input
                type="number"
                className={styles.inputAmount}
                placeholder={`Rate To ${currency}`}
                value={kshRate}
                onChange={(e) => setKshRate(e.target.value)}
              />
            </div>
          )}

          {/* Date */}
          <div className={styles.formGroup}>
            <div className={styles.label}>Date</div>
            <input
              type="date"
              className={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className={styles.formGroup}>
            <div className={styles.label}>Description</div>
            <input
              className={styles.input}
              placeholder="Add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button className={styles.addExpenseButton} onClick={handleSave}>
            {editIndex !== null ? "Update Expense" : "Add Expense"}
          </button>
        </div>
      </div>

      {/* ─────────── Table Card ─────────── */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Type</div>
          <div className={styles.tableHeaderCell}>Amount</div>
          <div className={styles.tableHeaderCell}>
            Converted to {currency}
          </div>
          <div className={styles.tableHeaderCell}>Converted to USD</div>
          <div className={styles.tableHeaderCell}>Date</div>
          <div className={styles.tableHeaderCell}>Description</div>
          <div className={styles.tableHeaderCell}>Actions</div>
        </div>

        {expenses.map((e, idx) => (
          <div className={styles.tableRow} key={idx}>
            <div className={styles.tableCell}>{e.type}</div>
            <div className={styles.tableCell}>
              {e.amountCurrency} {numFmt(e.amount)}
            </div>
            <div className={styles.tableCell}>
              {e.currency} {numFmt(e.convertedKsh)} ({e.amountCurrency==="YEN"? e.kshRate: ""}){" "}
            </div>
            <div className={styles.tableCell}>
              USD {numFmt(e.convertedUsd)} ({e.usdRate})
            </div>
            <div className={styles.tableCell}>{e.date}</div>
            <div className={styles.tableCell}>{e.description}</div>
            <div className={styles.tableCell}>
              <button
                className={styles.editButton}
                onClick={() => startEdit(idx)}
              >
                Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(idx)}
                style={{ marginLeft: 8 }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className={styles.tableSummary}>
          <div className={styles.totalExpenses}>
            <span className={styles.totalLabel}>Total Expenses:</span>
            <span className={styles.totalAmount}>
              {currency} {numFmt(calcGrandTotal())} &nbsp; | &nbsp; USD{" "}
              {numFmt(calcTotalUSD())}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
