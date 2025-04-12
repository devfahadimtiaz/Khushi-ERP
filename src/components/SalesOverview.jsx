import React, { useEffect } from "react";
import styles from "./SalesOverview.module.css";

function SalesOverview({ isOpen, onClose }) {
  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.offCanvasOverlay}>
      <div className={styles.offCanvasMenu}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.headerTitle}>Sales Overview</div>
              <div className={styles.headerSubtitle}>
                Track your dealership performance
              </div>
            </div>
            <div className={styles.headerActions}>
              <div className={styles.periodSelector}>
                <span>This Month</span>
                <div>
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.625 3.75L4.5 5.625L6.375 3.75H2.625Z"
                      fill="#979699"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={styles.exportButton}>Export Report</div>
            </div>
          </div>

          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className={styles.recentSalesCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>Recent Sales</div>
                  <div className={styles.sortContainer}>
                    <span>Sort by:</span>
                    <div className={styles.sortSelector}>
                      <span>Most Recent</span>
                      <div>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.625 3.75L4.5 5.625L6.375 3.75H2.625Z"
                            fill="#979699"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.tableContainer}>
                  <div className={styles.tableHeader}>
                    <div>Vehicle</div>
                    <div>Date</div>
                    <div>Price</div>
                    <div>Status</div>
                  </div>

                  <div className={styles.tableBody}>
                    <div className={styles.tableRow}>
                      <div className={styles.vehicleCell}>
                        <div className={styles.vehicleImage} />
                        <span>Premium Sedan</span>
                      </div>
                      <div className={styles.dateCell}>Mar 14, 2024</div>
                      <div className={styles.priceCell}>$102,500</div>
                      <div className={styles.statusCell}>
                        <div
                          className={`${styles.statusBadge} ${styles.statusCompleted}`}
                        >
                          Completed
                        </div>
                      </div>
                    </div>

                    <div className={styles.tableRow}>
                      <div className={styles.vehicleCell}>
                        <div className={styles.vehicleImage} />
                        <span>Luxury SUV</span>
                      </div>
                      <div className={styles.dateCell}>Mar 13, 2024</div>
                      <div className={styles.priceCell}>$98,750</div>
                      <div className={styles.statusCell}>
                        <div
                          className={`${styles.statusBadge} ${styles.statusProcessing}`}
                        >
                          Processing
                        </div>
                      </div>
                    </div>

                    <div className={styles.tableRow}>
                      <div className={styles.vehicleCell}>
                        <div className={styles.vehicleImage} />
                        <span>Electric Crossover</span>
                      </div>
                      <div className={styles.dateCell}>Mar 13, 2024</div>
                      <div className={styles.priceCell}>$87,900</div>
                      <div className={styles.statusCell}>
                        <div
                          className={`${styles.statusBadge} ${styles.statusCompleted}`}
                        >
                          Completed
                        </div>
                      </div>
                    </div>

                    <div className={styles.tableRow}>
                      <div className={styles.vehicleCell}>
                        <div className={styles.vehicleImage} />
                        <span>Sports Coupe</span>
                      </div>
                      <div className={styles.dateCell}>Mar 12, 2024</div>
                      <div className={styles.priceCell}>$156,000</div>
                      <div className={styles.statusCell}>
                        <div
                          className={`${styles.statusBadge} ${styles.statusCompleted}`}
                        >
                          Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sideContent}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Cars Sold</div>
                  <div className={styles.statTrend}>+12%</div>
                </div>
                <div className={styles.statValue}>300</div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Total Revenue</div>
                  <div className={styles.statTrend}>+8%</div>
                </div>
                <div className={styles.statValue}>$1.2M</div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Avg. Sale Price</div>
                  <div className={styles.statTrend}>+5%</div>
                </div>
                <div className={styles.statValue}>$92K</div>
              </div>

              <div className={`${styles.statCard} ${styles.targetCard}`}>
                <div className={styles.statHeader}>
                  <div className={styles.statLabel}>Monthly Target</div>
                  <div className={styles.periodSelector}>
                    <span>This Month</span>
                    <div>
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.625 3.75L4.5 5.625L6.375 3.75H2.625Z"
                          fill="#979699"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.statValue}>$28K</div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.analyticsSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>Sales Analytics</div>
                <div className={styles.sectionSubtitle}>
                  Comprehensive sales performance and history
                </div>
              </div>
              <div className={styles.sectionActions}>
                <div className={styles.periodFilter}>
                  <span>Last 6 Months</span>
                  <div>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.625 3.75L4.5 5.625L6.375 3.75H2.625Z"
                        fill="#979699"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.downloadButton}>Download Report</div>
              </div>
            </div>

            <div className={styles.analyticsLayout}>
              <div className={styles.salesOverviewCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>Sales Overview</div>
                  <div className={styles.viewToggle}>
                    <div className={styles.toggleOption}>Monthly</div>
                    <div className={styles.toggleOption}>Yearly</div>
                  </div>
                </div>

                <div className={styles.overviewStats}>
                  <div className={styles.overviewStat}>
                    <div className={styles.statMetric}>Total Revenue</div>
                    <div className={styles.statLargeValue}>$24.5M</div>
                  </div>

                  <div className={styles.overviewStat}>
                    <div className={styles.statMetric}>Average Price</div>
                    <div className={styles.statLargeValue}>104,700</div>
                  </div>
                </div>

                <div className={styles.trendSection}>
                  <div className={styles.trendTitle}>Monthly Sales Trend</div>
                  <div className={styles.trendBrands}>
                    <span>Land Rovers</span>
                    <br />
                    <span>Toyota</span>
                  </div>
                </div>
              </div>

              <div className={styles.transactionsCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>Recent Transactions</div>
                  <div className={styles.sortContainer}>
                    <span>Sort by:</span>
                    <div className={styles.sortSelector}>
                      <span>Most Recent</span>
                      <div>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.625 3.75L4.5 5.625L6.375 3.75H2.625Z"
                            fill="#979699"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.transactionsTable}>
                  <div className={styles.transactionsHeader}>
                    <div>Date</div>
                    <div>Customer</div>
                    <div>Variant</div>
                    <div>Location</div>
                    <div>Price</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.showroomSection}>
              <div className={styles.showroomTitle}>
                Top Performing Showroom
              </div>
              <div className={styles.showroomCard}>
                <div className={styles.showroomHeader}>
                  <div>Date</div>
                  <div>Customer</div>
                  <div>Variant</div>
                  <div>Location</div>
                  <div>Price</div>
                  <div>Sold Units</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesOverview;
