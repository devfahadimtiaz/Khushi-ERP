import React, { useState } from "react";
import styles from "./RepairTasksManagement.module.css";
import RepairVoucherPopup from "./RepairVoucherPopup";

const RepairTasksManagement = () => {
  const [showVoucherPopup, setShowVoucherPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Sample data for the repair tasks
  const repairTasks = [
    {
      id: 1,
      date: "2024-01-15",
      staffName: "Michael Chen",
      staffAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true",
      vendorName: "AutoPro Services",
      carName: "Toyota Camry",
      stockNo: "STK-2024-001",
      voucherNo: "RPR-2401-001",
      status: "In Progress",
      timeRequired: "3 days",
    },
    {
      id: 2,
      date: "2024-01-14",
      staffName: "Sarah Johnson",
      staffAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true",
      vendorName: "Elite Repairs",
      carName: "Honda Civic",
      stockNo: "STK-2024-002",
      voucherNo: "RPR-2401-002",
      status: "Pending",
      timeRequired: "5 days",
    },
    {
      id: 3,
      date: "2024-01-13",
      staffName: "David Miller",
      staffAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true",
      vendorName: "QuickFix Pro",
      carName: "Ford Mustang",
      stockNo: "STK-2024-003",
      voucherNo: "RPR-2401-003",
      status: "Completed",
      timeRequired: "2 days",
    },
    {
      id: 4,
      date: "2024-01-12",
      staffName: "Emma Wilson",
      staffAvatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50aaa6fe9ba06a4fd909114ef5dddf79e5950597?placeholderIfAbsent=true",
      vendorName: "Master Mechanics",
      carName: "BMW 3 Series",
      stockNo: "STK-2024-004",
      voucherNo: "RPR-2401-004",
      status: "In Progress",
      timeRequired: "4 days",
    },
  ];

  // Function to render the status badge with appropriate styling
  const renderStatusBadge = (status) => {
    let statusClass = "";

    switch (status) {
      case "In Progress":
        statusClass = styles.statusInProgress;
        break;
      case "Pending":
        statusClass = styles.statusPending;
        break;
      case "Completed":
        statusClass = styles.statusCompleted;
        break;
      default:
        statusClass = "";
    }

    return (
      <div className={`${styles.statusBadge} ${statusClass}`}>{status}</div>
    );
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Repair Tasks Management</div>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 9.16663V14.1666L10 11.6666L12.5 14.1666V9.16663"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 3.33337V11.6667"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16.6663 17.5H3.33301"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className={styles.buttonText}>Export PDF</div>
            </button>
            <select className={styles.actionButton}>
              <option className={styles.buttonText}>Status</option>
              <option className={styles.buttonText}>In Progress</option>
              <option className={styles.buttonText}>Pending</option>
              <option className={styles.buttonText}>Complete</option>
            </select>
          </div>
        </div>
        <div className={styles.searchBar}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.5 17.5L13.875 13.875"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className={styles.searchPlaceholder}
            placeholder="Search tasks..."
          />
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Date</div>
            <div className={styles.tableHeaderCell}>Staff Name</div>
            <div className={styles.tableHeaderCell}>Vendor Name</div>
            <div className={styles.tableHeaderCell}>Car Name</div>
            <div className={styles.tableHeaderCell}>Stock No</div>
            <div className={styles.tableHeaderCell}>Voucher No</div>
            <div className={styles.tableHeaderCell}>Status</div>
            <div className={styles.tableHeaderCell}>Time Required</div>
            <div className={styles.tableHeaderCell}>Actions</div>
          </div>

          {repairTasks.map((task) => (
            <div key={task.id} className={styles.tableRow}>
              <div className={styles.tableCell}>{task.date}</div>
              <div className={styles.staffCell}>
                <img src={task.staffAvatar} alt="" className={styles.avatar} />
                <span>{task.staffName}</span>
              </div>
              <div className={styles.tableCell}>{task.vendorName}</div>
              <div className={styles.tableCell}>{task.carName}</div>
              <div className={styles.tableCell}>{task.stockNo}</div>
              <div className={styles.tableCell}>{task.voucherNo}</div>
              <div className={styles.statusCell}>
                {renderStatusBadge(task.status)}
              </div>
              <div className={styles.tableCell}>{task.timeRequired}</div>
              <div className={styles.actionsCell}>
                <div className={styles.actionIcons}>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.875 4.375L3.125 4.37501"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.125 8.125V13.125"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.875 8.125V13.125"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <button
                  className={styles.doneButton}
                  onClick={() => {
                    setSelectedTask(task);
                    setShowVoucherPopup(true);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showVoucherPopup && (
        <RepairVoucherPopup
          onClose={() => setShowVoucherPopup(false)}
          taskData={selectedTask}
        />
      )}
    </>
  );
};

export default RepairTasksManagement;
