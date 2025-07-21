import React, { use, useEffect, useState } from "react";
import styles from "./LogBookTransfers.module.css";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../assets/Resources/Tables/TableComponent";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ConfirmDeletePopup from "../../assets/Resources/Popups/ConfirmDeletePopup";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;
const LogBookTransfers = () => {
  const navigate = useNavigate();
  const [logbook, setLogbook] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const TableHeader = [
    {
      label: "Stock No",
      key: "vehicle_stock_no",
    },
    { label: "Transfer Type", key: "transfer_type" },
    { label: "Paid By", key: "paid_by" },
    { label: "Buyer Name", key: "buyer_id" },
    { label: "Payment Type", key: "paymentType" },
    { label: "Amount", key: "amount" },
    { label: "Currency", key: "currency" },
  ];

  const fetchLogBook = async () => {
    try {
      const response = await fetch(`${API_URL}/getLogBook`);
      const data = await response.json();
      setLogbook(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchLogBook();
  }, []);

  const handleAddNew = () => {
    navigate("/LogBookReceiptNote");
  };
  const handleTransfer = () => {
    navigate("/TransferLogBook");
  };

  const handleEdit = (id) => {
    setSelectedRow(id);
    console.log(id);
  };
  const handleDelete = (id) => {
    setSelectedRow(id);
    setIsDeletePopupOpen(true);
  };
  const handleView = (id) => {
    console.log(id);
  };
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };
  const hadnleConfirmDelete = async () => {
    console.log(selectedRow);
    if (!selectedRow) {
      toast.error("No Logbook is Selected");
    }
    try {
      const response = await fetch(
        `${API_URL}/deleteLogBook/${selectedRow.id}`,
        {
          method: "DELETE",
        }
      );
      const results = await response.json();
      if(response.ok){
        toast.success("Logbook Deleted Successfully");
        setIsDeletePopupOpen(false)
        fetchLogBook()
      }
      toast.error("Error in Deleting LogBook")
      
    } catch (error) {
      console.error(error);
    }
  };
  if (isDeletePopupOpen) {
    return (
      <ConfirmDeletePopup
        isOpen={isDeletePopupOpen}
        onClose={handleCancelDelete}
        onConfirm={hadnleConfirmDelete}
      />
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>LOG BOOK TRANSFERS</span>
        <div className={styles.actionButtons}>
          <button className={styles.actionButton} onClick={handleTransfer}>
            <span>Transfer</span>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <path
                  d="M10 3.33398V16.6673M16.6673 10.0007H3.33398"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <button className={styles.actionButton} onClick={handleAddNew}>
            <span>Add New</span>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <path
                  d="M10 3.33398V16.6673M16.6673 10.0007H3.33398"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <TableComponent
        data={logbook}
        HeadData={TableHeader}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default LogBookTransfers;
