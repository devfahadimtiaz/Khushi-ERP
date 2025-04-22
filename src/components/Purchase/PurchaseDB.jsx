import React from "react";
import styles from "./PurchaseDB.module.css";
import PurchaseIcon from "../../uploads/icons/purchasedOrder.png"
import GrnStatus from "../../uploads/icons/GRNstatus.png"
import InternalDemand from "../../uploads/icons/InternalDemand.png"
import VendorPayments from "../../uploads/icons/VendorPayments.png"
import Uparrow from "../../uploads/icons/uparrow.png"
import tick from "../../uploads/icons/tick.png"

const PurchaseDB = () => {
  return (
    <div className={styles.purchaseDB}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dashboardTitle}>Purchase Dashboard</div>
          <div className={styles.headerActions}>
            <button className={styles.exportButton}>Export Report</button>
          </div>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statsColumn}>
            <div className={styles.statsCard}>
              <div className={styles.statsContent}>
                <div className={styles.statsInfo}>
                  <div className={styles.statsLabel}>Purchase Orders</div>
                  <div className={styles.statsValue}>173</div>
                </div>
                <img
                  src={PurchaseIcon}
                  className={styles.statsIcon}
                  alt="Purchase Orders"
                />
              </div>
              <div className={styles.statsChange}>
                <div className={styles.statsPositive}>↑ 12.5%</div>
                <div className={styles.statsCompare}>vs last month</div>
              </div>
            </div>
          </div>
          <div className={styles.statsColumn}>
            <div className={styles.statsCard}>
              <div className={styles.statsContent}>
                <div className={styles.statsInfo}>
                  <div className={styles.statsLabel}>GRN Status</div>
                  <div className={styles.statsValue}>34</div>
                </div>
                <img
                  src={GrnStatus}
                  className={styles.statsIcon}
                  alt="GRN Status"
                />
              </div>
              <div className={styles.statsChange}>
                <div className={styles.statsPositive}>↑ 8.3%</div>
                <div className={styles.statsCompare}>vs last month</div>
              </div>
            </div>
          </div>
          <div className={styles.statsColumn}>
            <div className={styles.statsCard}>
              <div className={styles.statsContent}>
                <div className={styles.statsInfo}>
                  <div className={styles.statsLabel}>Internal Demand</div>
                  <div className={styles.statsValue}>67</div>
                </div>
                <img
                  src={InternalDemand}
                  className={styles.statsIcon}
                  alt="Internal Demand"
                />
              </div>
              <div className={styles.statsChange}>
                <div className={styles.statsNegative}>↓ 4.2%</div>
                <div className={styles.statsCompare}>vs last month</div>
              </div>
            </div>
          </div>
          <div className={styles.statsColumn}>
            <div className={styles.statsCard}>
              <div className={styles.statsContent}>
                <div className={styles.statsInfo}>
                  <div className={styles.statsLabel}>Vendor Payments</div>
                  <div className={styles.statsValue}>234.5</div>
                </div>
                <img
                  src={VendorPayments}
                  className={styles.statsIcon}
                  alt="Vendor Payments"
                />
              </div>
              <div className={styles.statsChange}>
                <div className={styles.statsPositive}>↑ 15.8%</div>
                <div className={styles.statsCompare}>vs last month</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentRow}>
          <div className={styles.wideColumn}>
            <div className={styles.requisitionsCard}>
              <div className={styles.requisitionsHeader}>
                <div className={styles.sectionTitle}>Purchase Requisitions</div>
                <div className={styles.requisitionsActions}>
                  <div className={styles.totalCount}>
                    <div className={styles.totalLabel}>Total:</div>
                    <div className={styles.totalValue}>132</div>
                  </div>
                  <button className={styles.newRequisitionButton}>
                    New Requisition
                  </button>
                </div>
              </div>
              <div className={styles.requisitionsStats}>
                <div className={styles.requisitionStat}>
                  <div className={styles.requisitionStatLabel}>Draft</div>
                  <div className={styles.requisitionStatValue}>15</div>
                </div>
                <div className={styles.requisitionStat}>
                  <div className={styles.requisitionStatLabel}>
                    Pending Approval
                  </div>
                  <div className={styles.requisitionStatValue}>28</div>
                </div>
                <div className={styles.requisitionStat}>
                  <div className={styles.requisitionStatLabel}>Approved</div>
                  <div className={styles.requisitionStatValue}>89</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.narrowColumn}>
            <div className={styles.transferCard}>
              <div className={styles.sectionTitle}>Internal Stock Transfer</div>
              <div className={styles.transferStat}>
                <div className={styles.transferStatInfo}>
                  <div className={styles.transferStatLabel}>In Progress</div>
                  <div className={styles.transferStatValue}>34</div>
                </div>
                <img
                  src={Uparrow}
                  className={styles.transferIcon}
                  alt="In Progress"
                />
              </div>
              <div className={styles.transferStat}>
                <div className={styles.transferStatInfo}>
                  <div className={styles.transferStatLabel}>Completed</div>
                  <div className={styles.transferStatValue}>156</div>
                </div>
                <img
                  src={tick}
                  className={styles.transferIcon}
                  alt="Completed"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentRow}>
          <div className={styles.halfColumn}>
            <div className={styles.ordersCard}>
              <div className={styles.cardHeader}>
                <div className={styles.sectionTitle}>
                  Recent Purchase Orders
                </div>
                <div className={styles.viewAllLink}>View All</div>
              </div>
              <div className={styles.orderItem}>
                <div className={styles.orderInfo}>
                  <div className={styles.orderNumber}>PO-06789</div>
                  <div className={styles.vendorName}>Vendor 59</div>
                </div>
                <div className={styles.orderStatus}>
                  <div className={styles.statusPending}>Pending</div>
                  <div className={styles.orderAmount}>9761.53</div>
                </div>
              </div>
              <div className={styles.orderItem}>
                <div className={styles.orderInfo}>
                  <div className={styles.orderNumber}>PO-05200</div>
                  <div className={styles.vendorName}>Vendor 17</div>
                </div>
                <div className={styles.orderStatus}>
                  <div className={styles.statusApproved}>Approved</div>
                  <div className={styles.orderAmount}>6984.16</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.halfColumn}>
            <div className={styles.paymentsCard}>
              <div className={styles.cardHeader}>
                <div className={styles.sectionTitle}>Vendor Payment Status</div>
                <div className={styles.viewAllLink}>View All</div>
              </div>
              <div className={styles.paymentItem}>
                <div className={styles.paymentInfo}>
                  <div className={styles.invoiceNumber}>INV-01255</div>
                  <div className={styles.dueDate}>Due 4/28/2025</div>
                </div>
                <div className={styles.paymentStatus}>
                  <div className={styles.statusPaid}>Paid</div>
                  <div className={styles.paymentAmount}>7524.16</div>
                </div>
              </div>
              <div className={styles.paymentItem}>
                <div className={styles.paymentInfo}>
                  <div className={styles.invoiceNumber}>INV-02100</div>
                  <div className={styles.dueDate}>Due 5/1/2025</div>
                </div>
                <div className={styles.paymentStatus}>
                  <div className={styles.statusPending}>Pending</div>
                  <div className={styles.paymentAmount}>6599.86</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDB;
