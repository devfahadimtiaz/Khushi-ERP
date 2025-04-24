import React from "react";
import styles from "./GeneralLedgerDashboard.module.css";

const GeneralLedgerDashboard = ({ onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>General Ledger</div>
            <select className={styles.periodSelector}>
              <option className={styles.periodText}>This Month</option>
              <option className={styles.periodText}>Last Month</option>
              <option className={styles.periodText}>Quatarly</option>
              <option className={styles.periodText}>Yearly</option>
            </select>
          </div>

          <div className={styles.statsCards}>
            <div className={styles.statsColumn}>
              <div className={styles.statsCard}>
                <div className={styles.statTitle}>Total Assets</div>
                <div className={styles.statValuePositive}>$5,000,000.00</div>
                <div className={styles.statComparison}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/3c24ee8ff3deac27c9f1fabc4a4234916f2ba933?placeholderIfAbsent=true"
                    className={styles.trendIcon}
                    alt="Trend up"
                  />
                  <div className={styles.comparisonText}>
                    12.5% vs last period
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.statsColumn}>
              <div className={styles.statsCard}>
                <div className={styles.statTitle}>Total Liabilities</div>
                <div className={styles.statValueNegative}>$2,400,000.00</div>
                <div className={styles.statComparison}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/bf0d450deb30a10f418442a6b0250f7c9faebbfa?placeholderIfAbsent=true"
                    className={styles.trendIcon}
                    alt="Trend down"
                  />
                  <div className={styles.comparisonText}>
                    8.3% vs last period
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.statsColumn}>
              <div className={styles.statsCard}>
                <div className={styles.statTitle}>Net Income</div>
                <div className={styles.statValueSuccess}>$1,800,000.00</div>
                <div className={styles.statComparison}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/3c24ee8ff3deac27c9f1fabc4a4234916f2ba933?placeholderIfAbsent=true"
                    className={styles.trendIcon}
                    alt="Trend up"
                  />
                  <div className={styles.comparisonText}>
                    15.2% vs last period
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.leftColumn}>
              <div className={styles.accountsPanel}>
                <div className={styles.accountsHeader}>
                  <div className={styles.accountsColumn}>
                    <div className={styles.accountsTitle}>
                      Chart of Accounts
                    </div>
                    <div className={styles.accountCategory}>
                      <div className={styles.categoryIndicatorPrimary}></div>
                      <div>
                        <div className={styles.categoryName}>Assets</div>
                        <div className={styles.accountCode}>Account: 1000</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.accountsColumn}>
                    <button className={styles.addAccountBtn}>Add Account</button>
                    <div className={styles.totalAmount}>$2,500,000.00</div>
                  </div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Vehicle Inventory</div>
                    <div className={styles.transactionCount}>
                      45 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$1,800,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Parts Inventory</div>
                    <div className={styles.transactionCount}>
                      128 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$450,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div className={styles.accountItemFlex}>
                    <div className={styles.accountName}>Equipment</div>
                    <div className={styles.transactionCount}>
                      12 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$250,000.00</div>
                </div>

                <div className={styles.accountCategory}>
                  <div className={styles.categoryIndicatorDanger}></div>
                  <div>
                    <div className={styles.categoryName}>Liabilities</div>
                    <div className={styles.accountCode}>Account: 2000</div>
                  </div>
                  <div className={styles.categoryTotal}>$1,200,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Accounts Payable</div>
                    <div className={styles.transactionCount}>
                      89 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$680,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div className={styles.accountItemFlex}>
                    <div className={styles.accountName}>Vehicle Loans</div>
                    <div className={styles.transactionCount}>
                      24 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$520,000.00</div>
                </div>

                <div className={styles.accountCategory}>
                  <div className={styles.categoryIndicatorSuccess}></div>
                  <div>
                    <div className={styles.categoryName}>Revenue</div>
                    <div className={styles.accountCode}>Account: 3000</div>
                  </div>
                  <div className={styles.categoryTotal}>$3,800,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div className={styles.accountItemFlex}>
                    <div className={styles.accountName}>Vehicle Sales</div>
                    <div className={styles.transactionCount}>
                      156 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$3,200,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Service Revenue</div>
                    <div className={styles.transactionCount}>
                      445 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$420,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Parts Sales</div>
                    <div className={styles.transactionCount}>
                      892 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$180,000.00</div>
                </div>

                <div className={styles.accountCategory}>
                  <div className={styles.categoryIndicatorWarning}></div>
                  <div>
                    <div className={styles.categoryName}>Expenses</div>
                    <div className={styles.accountCode}>Account: 4000</div>
                  </div>
                  <div className={styles.categoryTotal}>$2,900,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Cost of Goods Sold</div>
                    <div className={styles.transactionCount}>
                      234 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$2,400,000.00</div>
                </div>

                <div className={styles.accountItem}>
                  <div>
                    <div className={styles.accountName}>Operating Expenses</div>
                    <div className={styles.transactionCount}>
                      567 transactions
                    </div>
                  </div>
                  <div className={styles.accountValue}>$500,000.00</div>
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.transactionsPanel}>
                <div className={styles.transactionsHeader}>
                  <div className={styles.transactionsHeaderLeft}>
                    <div className={styles.transactionsTitle}>
                      Recent Transactions
                    </div>
                    <div className={styles.transactionsColumnHeaders}>
                      <div>Date</div>
                      <div>Reference</div>
                      <div>Description</div>
                    </div>
                  </div>

                  <div className={styles.transactionsHeaderRight}>
                    <div className={styles.debitHeader}>Debit</div>
                    <div>
                      <button className={styles.viewAllBtn}>View All</button>
                      <div className={styles.creditHeader}>Credit</div>
                    </div>
                  </div>
                </div>

                <div className={styles.transactionRow}>
                  <div className={styles.transactionDetails}>
                    <div className={styles.transactionDate}>2024-01-15</div>
                    <div className={styles.transactionRef}>INV-2024-001</div>
                    <div>
                      <div className={styles.transactionDesc}>
                        Toyota Camry Sale
                      </div>
                      <div className={styles.transactionCategory}>
                        Vehicle Sales
                      </div>
                    </div>
                  </div>

                  <div className={styles.transactionAmounts}>
                    <div className={styles.transactionDebit}>-</div>
                    <div className={styles.transactionCredit}>$35,000.00</div>
                  </div>
                </div>

                <div className={styles.transactionGroup}>
                  <div className={styles.transactionGroupLeft}>
                    <div className={styles.transactionRow}>
                      <div className={styles.transactionDate}>2024-01-14</div>
                      <div className={styles.transactionRef}>PO-2024-045</div>
                      <div>
                        <div className={styles.transactionDesc}>
                          Brake Parts Stock
                        </div>
                        <div className={styles.transactionCategory}>
                          Parts Inventory
                        </div>
                      </div>
                    </div>

                    <div className={styles.transactionRow}>
                      <div className={styles.transactionDate}>2024-01-14</div>
                      <div className={styles.transactionRef}>SRV-2024-089</div>
                      <div>
                        <div className={styles.transactionDesc}>
                          Vehicle Maintenance
                        </div>
                        <div className={styles.transactionCategory}>
                          Service Revenue
                        </div>
                      </div>
                    </div>

                    <div className={styles.transactionRow}>
                      <div className={styles.transactionDate}>2024-01-13</div>
                      <div className={styles.transactionRef}>EXP-2024-112</div>
                      <div>
                        <div className={styles.transactionDesc}>
                          Workshop Equipment
                        </div>
                        <div className={styles.transactionCategory}>
                          Operating Expenses
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.transactionGroupRight}>
                    <div className={styles.transactionAmountRow}>
                      <div className={styles.transactionDebitNegative}>
                        $12,500.00
                      </div>
                      <div className={styles.transactionDebit}>-</div>
                    </div>

                    <div className={styles.transactionAmountRow}>
                      <div className={styles.transactionDebit}>-</div>
                      <div className={styles.transactionCredit}>$850.00</div>
                    </div>

                    <div className={styles.transactionAmountRow}>
                      <div className={styles.transactionDebitNegative}>
                        $5,600.00
                      </div>
                      <div className={styles.transactionDebit}>-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLedgerDashboard;
