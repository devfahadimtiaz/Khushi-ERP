import React from "react";
import styles from "./SaleDashboard.module.css";

function SaleDashboard() {
  return (
    <div className={styles.saleDashboard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Sales Dashboard</div>
          <div className={styles.periodSelector}>
            <button className={styles.periodButton}>Weekly</button>
            <button className={styles.periodButtonActive}>Monthly</button>
            <button className={styles.periodButton}>Yearly</button>
          </div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.statsRow}>
            <div className={styles.statsColumn}>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>Total Sales</div>
                <div className={styles.statValue}>$2,450,000</div>
              </div>
            </div>
            <div className={styles.statsColumn}>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>Cars Sold</div>
                <div className={styles.statValue}>42</div>
              </div>
            </div>
            <div className={styles.statsColumn}>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>Average Price</div>
                <div className={styles.statValue}>$58,333</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chartsContainer}>
          <div className={styles.chartsRow}>
            <div className={styles.chartColumn}>
              <div className={styles.chartCard}>
                <div className={styles.chartTitle}>Sales Trend</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/1e7bbbce527ce03fe272f32f1e97b099a7ce40f8?placeholderIfAbsent=true"
                  className={styles.chartImage}
                  alt="Sales trend chart"
                />
              </div>
            </div>
            <div className={styles.chartColumn}>
              <div className={styles.topSellingCard}>
                <div className={styles.topSellingTitle}>Top Selling Models</div>
                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>Toyota Land Cruiser</div>
                    <div className={styles.modelSales}>156 units sold</div>
                  </div>
                  <div className={styles.modelTrend}>
                    <div className={styles.trendPositive}>+23%</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/749deffdb3e3aa9d62790d00ac9463f6f686216c?placeholderIfAbsent=true"
                      className={styles.trendIcon}
                      alt="Upward trend"
                    />
                  </div>
                </div>
                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>Honda Civic</div>
                    <div className={styles.modelSales}>142 units sold</div>
                  </div>
                  <div className={styles.modelTrend}>
                    <div className={styles.trendPositive}>+18%</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/749deffdb3e3aa9d62790d00ac9463f6f686216c?placeholderIfAbsent=true"
                      className={styles.trendIcon}
                      alt="Upward trend"
                    />
                  </div>
                </div>
                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>BMW X5</div>
                    <div className={styles.modelSales}>98 units sold</div>
                  </div>
                  <div className={styles.modelTrend}>
                    <div className={styles.trendPositive}>+15%</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/749deffdb3e3aa9d62790d00ac9463f6f686216c?placeholderIfAbsent=true"
                      className={styles.trendIcon}
                      alt="Upward trend"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleDashboard;
