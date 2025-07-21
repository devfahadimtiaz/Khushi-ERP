import React, { useState, useEffect } from "react";
import styles from "./RepairTasksManagement.module.css";
import RepairVoucherPopup from "./RepairVoucherPopup";
import axios from "axios";
import RepairingVoucher from "./RepairingVoucher";
import ViewRepairingVoucher from "./RepairVoucherDetails/ViewRepairingVoucher";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import VehicleRepairDetails from "./VehicleRepairDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;

const RepairTasksManagement = () => {
  const [showVoucherPopup, setShowVoucherPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [reparingVehicle, setRepairingVehicle] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showRepairingVoucher, setShowRepairingVoucher] = useState(false);
  const [voucherVehicleId, setVoucherVehicleId] = useState(null);
  const [isViewRepairingVoucher, setIsViewRepairingVoucher] = useState(false);
  const [voucherId, setVoucherId] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [vehicleRepairDetails, setVehicleRepairDetails] = useState(null);
  const [editData, setEditData] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [selectedShowrooms, setSelectedShowrooms] = useState();
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  useEffect(() => {
    if (userInfo) {
      setSelectedShowrooms(userInfo.showroom);
    }
  }, [userInfo]);



  const filteredTasks = reparingVehicle.filter((task) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      task.voucher_no?.toLowerCase().includes(query) ||
      task.technician_name?.toLowerCase().includes(query) ||
      `${task.make} ${task.model}`.toLowerCase().includes(query) ||
      task.account_no?.toLowerCase().includes(query) ||
      task.repair_status?.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "" || task.repair_status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  useEffect(() => {
    axios
      .get(`${API_URL}/repairingbyshowrroom/${selectedShowrooms}`)
      .then((res) => {
        const dataWithIds = res.data.map((row, index) => ({
          ...row,
          id: row.gatepass_id || row.stock_no || index,
        }));
        setRepairingVehicle(dataWithIds);
      })
      .catch((err) => console.log(err));
  }, [selectedShowrooms]);

  const handleProcessClick = async (repairId) => {
    setShowRepairingVoucher(false); // Clear previous voucher
    const response = await fetch(
      `${API_URL}/repairing/${repairId}`
    );
    const data = await response.json();

    setSelectedTask({
      ...data.repair,
      issues: data.issues,
    });
    setShowVoucherPopup(true);
  };
  const handleVoucherSaved = (vehicleId) => {
    setShowVoucherPopup(false);
    setTimeout(() => {
      setVoucherVehicleId(vehicleId);
      setShowRepairingVoucher(true);
    }, 200); // small delay to allow popup to close
  };
  const handleViewRepairingVoucher = (id) => {
    setIsViewRepairingVoucher(true);
    setVoucherId(id);
  };

  const handleEdit=(row)=>{
    setEditData(row);
    setVehicleRepairDetails(true);
    
  }
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

  const handleDeleteClick = (row) => {
    setSelectedRow(row);

    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedRow || !selectedRow.repair_id) {
      toast.error("No Repair Task Selected to delete");
      return;
    }
    try {
      const response = await fetch(
        `${API_URL}/deleteRepair/${selectedRow.repair_id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Error occue while deleting the Repair Task");
        return;
      }
      setRepairingVehicle((prev) =>
        prev.filter((bankDetails) => bankDetails.id !== selectedRow.id)
      );
      toast.success("Repair Task deleted successfully");
      setIsDeletePopupOpen(false);
      setSelectedRow(null);
    } catch (error) {
      console.error(error);
      toast.error("An Error Occure while deleting the Repair Task");
    }
  };

  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };

  const handleClose = () => {
    setIsViewRepairingVoucher(false);
  };
  if (showRepairingVoucher) {
    return (
      <RepairingVoucher
        vehicleId={voucherVehicleId}
        voucherName="Petty Cash"
        onClose={() => setShowRepairingVoucher(false)}
      />
    );
  }
  if (isViewRepairingVoucher) {
    return <ViewRepairingVoucher voucherId={voucherId} onBack={handleClose} />;
  }
  if(isDeletePopupOpen){
    return <ConfirmDeletePopup isOpen={isDeletePopupOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          title="Delete Recipt"
          message="Are you sure you want to delete this recipt?"/> 
  }
  if(vehicleRepairDetails){
    return <VehicleRepairDetails
      onBack={() => setVehicleRepairDetails(false)}
      voucherId={editData}
    />;
  }
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
            <select
              className={styles.actionButton}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Voucher No</div>
            <div className={styles.tableHeaderCell}>Date</div>
            <div className={styles.tableHeaderCell}>Technician</div>
            <div className={styles.tableHeaderCell}>Car Name</div>
            <div className={styles.tableHeaderCell}>Account No</div>
            <div className={styles.tableHeaderCell}>Reference</div>
            <div className={styles.tableHeaderCell}>Status</div>
            <div className={styles.tableHeaderCell}>Time Required</div>
            <div className={styles.tableHeaderCellAction}>Actions</div>
          </div>

          {filteredTasks.map((task) => (
            <div key={task.id} className={styles.tableRow}>
              <div className={styles.tableCell}>{task.voucher_no}</div>
              <div className={styles.tableCell}>{new Date(task.repair_date).toISOString().split("T")[0]}</div>
              <div className={styles.tableCell}>{task.technician_name}</div>
              <div className={styles.tableCell}>
                {task.make} {task.model}
              </div>
              <div className={styles.tableCell}>{task.account_no}</div>
              <div className={styles.tableCell}>{task.reference}</div>
              <div className={styles.tableCell}>
                {renderStatusBadge(task.repair_status)}
              </div>

              <div className={styles.tableCell}>{task.time_required}</div>
              <div className={styles.actionsCell}>
                <div className={styles.actionIcons}>
                  <button
                    className={styles.actionbtn}
                    onClick={() => handleViewRepairingVoucher(task.repair_id)}
                  >
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
                  </button>
                  <button className={styles.actionbtn} onClick={() => handleEdit(task.repair_id)}>
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
                  </button>
                  <button className={styles.actionbtn} onClick={()=>handleDeleteClick(task)}>
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
                  </button>
                </div>
              
                {task.repair_status === "Pending" && (
                  <button
                    className={styles.doneButton}
                    onClick={() => handleProcessClick(task.repair_id)}
                  >
                    Process
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      {showVoucherPopup && !showRepairingVoucher && selectedTask && (
        <RepairVoucherPopup
          onClose={() => setShowVoucherPopup(false)}
          taskData={selectedTask}
          onVoucherSaved={handleVoucherSaved}
        />
      )}
      
    </>
  );
};

export default RepairTasksManagement;
