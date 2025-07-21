import React, { useState, useEffect } from "react";
import styles from "./BankDetails.module.css";
import TableComponent from "../../../assets/Resources/Tables/TableComponent";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBankDetails from "./AddBankDetails";
import ViewBankDetails from "./ViewBankDetail";
const API_URL = process.env.REACT_APP_API_URL

const TableHeader = [
  { label: "No", key: "id" },
  { label: "Branch Name", key: "branch_name" },
  { label: "Bank Name", key: "bank_name" },
  { label: "Account Title ", key: "account_title" },
  { label: "Account Number", key: "account_number" },
  { label: "Address", key: "address" },
  { label: "Currency", key: "currency" },
  { label: "Status", key: "status" },
];

const BankDetails = ({ onBack }) => {
  const [editData, setEditData] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedBankData, setSelectedBankData] = useState(null);
  const [bankDetails, setBankDetails] = useState([]);
  const [showAddBank, setShowAddBank] = useState(false);

  const handleEdit = (row) => {
    console.log(row)
    setEditData(row);
    setShowAddBank(true);
  };
  const handleBack = () => {
    setShowAddBank(false);
    setEditData(null);
    fetchBankList();
  };

  const handleAddBank = () => {
    setShowAddBank(true);
  };
  const fetchBankList = async () => {
    try {
      const response = await fetch(`${API_URL}/bankdetails`);
      const data = await response.json();
      setBankDetails(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBankList();
  }, []);

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedRow || !selectedRow.id) {
      toast.error("No Bank Selected to delete");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8083/api/deleteBank/${selectedRow.id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Error occue while deleting the Bank");
        return;
      }
      setBankDetails((prev) =>
        prev.filter((bankDetails) => bankDetails.id !== selectedRow.id)
      );
      toast.success("Bank deleted successfully");
      setIsDeletePopupOpen(false);
      setSelectedRow(null);
    } catch (error) {
      console.error(error);
      toast.error("An Error Occure while deleting the Bank");
    }
  };

  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };
  const handleView = (row) => {
    setSelectedBankData(row);
    setIsViewPopupOpen(true);
  };
  const handleCloseViewPopup = () => {
    setIsViewPopupOpen(false);
    setSelectedBankData(null);
  };
  if (showAddBank) {
    return <AddBankDetails data={editData} onBack={handleBack} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Bank</div>
          <button className={styles.addAccountBtn} onClick={handleAddBank}>
            Add New Bank
          </button>
        </div>
        {bankDetails.length === 0 ? (
          <div className={styles.noData}>No garages available.</div>
        ) : (
          <TableComponent
            data={bankDetails}
            HeadData={TableHeader}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        )}
        <ConfirmDeletePopup
          isOpen={isDeletePopupOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          title="Delete Bank"
          message="Are you sure you want to delete this bank?"
        />
        <ViewBankDetails
          isOpen={isViewPopupOpen}
          onClose={handleCloseViewPopup}
          bankData={selectedBankData}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default BankDetails;
