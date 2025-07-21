import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./VoucherManagement.module.css";
import PattyCashVoucher from "./PattyVoucher/ViewPattyCashVoucher";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;

const VoucherManagement = () => {
  const [pattyCash, setPattyCash] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [voucherId, setVoucherId] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
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
  const [repairingVoucher, setRepairingVoucher] = useState(false);

  const filteredTasks = pattyCash.filter((task) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      task.voucher_no?.toLowerCase().includes(query) ||
      task.technician_name?.toLowerCase().includes(query) ||
      `${task.make} ${task.model}`.toLowerCase().includes(query) ||
      task.account_no?.toLowerCase().includes(query) ||
      task.payment_status?.toLowerCase().includes(query) ||
      task.stock_no?.toLowerCase().includes(query) ||
      task.total_paid?.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "" || task.payment_status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/GetPettyCashbyShowroom/${selectedShowrooms}`)
      .then((res) => {
        setPattyCash(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [selectedShowrooms]);

  const handleViewPattyVoucher = (id) => {
    setRepairingVoucher(true);
    setVoucherId(id);
  };
  const handleClose = () => {
    setRepairingVoucher(false);
  };
  const handleDeleteClick = (row) => {
    setSelectedRow(row);

    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedRow || !selectedRow.id) {
      toast.error("No Repair Task Selected to delete");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/deletePetty/${selectedRow.id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(
          result.message || "Error occue while deleting the Repair Task"
        );
        return;
      }
      setPattyCash((prev) =>
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
  const HandlePay = async (task) => {
    console.log(task);

    try {
      const response = await axios.put(`${API_URL}/handlePay/${task.id}`);
      console.log(response.data); // Success response
      alert("Payment handled successfully!");

      // Example: Refresh data / update UI after success
    } catch (error) {
      console.error("Error handling payment:", error);
      alert("Failed to handle payment. Please try again.");
    }
  };

  if (repairingVoucher) {
    return <PattyCashVoucher voucherId={voucherId} onBack={handleClose} />;
  }
  if (isDeletePopupOpen) {
    return (
      <ConfirmDeletePopup
        isOpen={isDeletePopupOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Delete Recipt"
        message="Are you sure you want to delete this recipt?"
      />
    );
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Patty Cash Voucher Management</div>
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
                    d="M16.6673 17.5H3.33398"
                    stroke="#344054"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span>Export PDF</span>
            </button>
            <select
              className={styles.actionButton}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
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
        <table className={styles.tableContainer}>
          <thead className={styles.tableHeader}>
            <th className={styles.tableCell}>Date</th>
            <th className={styles.tableCell}>Technician Name</th>
            <th className={styles.tableCell}>Car Name</th>
            <th className={styles.tableCell}>Stock No</th>
            <th className={styles.tableCell}>Voucher No</th>
            <th className={styles.tableCell}>Payment</th>
            <th className={styles.tableCell}>Status</th>
            <th className={styles.tableCell}>Actions</th>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr className={styles.tableRow} key={task.id}>
                <td className={styles.tableCell}>
                  {new Date(task.issue_date).toISOString().split("T")[0]}
                </td>

                <td className={styles.tableCell}>{task.technician_name}</td>
                <td className={styles.tableCell}>
                  {task.make} {task.model} {task.year}
                </td>
                <td className={styles.tableCell}>{task.stock_no}</td>
                <td className={styles.tableCell}>{task.voucher_no}</td>
                <td className={`${styles.tableCell}`}>{task.total_paid}</td>
                <td className={styles.tableCell}>{task.payment_status}</td>
                <td className={`${styles.tableCell} ${styles.actionsCell}`}>
                  <button
                    className={styles.actionbtn}
                    onClick={() => handleViewPattyVoucher(task.id)}
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
                  <button
                    className={styles.actionbtn}
                    onClick={() => handleDeleteClick(task)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.875 4.375L3.125 4.37501M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                        stroke="#344054"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  {task.payment_status === "Unpaid" && (
                    <button
                      className={styles.doneButton}
                      onClick={() => HandlePay(task)}
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VoucherManagement;
