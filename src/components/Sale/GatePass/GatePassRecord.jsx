import React, { useState, useEffect, use } from "react";
import styles from "./GatePassRecord.module.css";
import axios from "axios";
import TableComponenet from "../../../assets/Resources/Tables/TableComponent";
import GatePass from "./GatePass";
import ViewGatePass from "./ViewGatePass";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;

const TableHeader = [
  { label: "Gate Pass Id", key: "gatepass_id" },
  { label: "Stock No", key: "stock_no" },
  { label: "Make", key: "make" },
  { label: "Model", key: "model" },
  { label: "Buyer Name", key: "name" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "national Id", key: "national_id" },
  { label: "Contact", key: "contact" },
];
function GatePassRecords() {
  const [gatePass, setGatePass] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedGatePassData, setSelectedGatePassData] = useState(null);
  const [showAddGatePass, setShowAddGatePass] = useState(false);
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

  const handleEdit = (row) => {
    console.log(row);
    setEditData(row);
    setShowAddGatePass(true);
  };
  const handleBack = () => {
    setShowAddGatePass(false);
    setEditData(null);
    fetchGatePassList();
  };

  const fetchGatePassList = async (selectedShowrooms) => {
    try {
      axios
        .get(`${API_URL}/getGatepass/${selectedShowrooms}`)
        .then((res) => {
          const dataWithIds = res.data.map((row, index) => ({
            ...row,
            id: row.gatepass_id || row.stock_no || index,
          }));
          setGatePass(dataWithIds);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error fetching gate pass records:", error);
    }
  };
  useEffect(() => {
    fetchGatePassList(selectedShowrooms);
  }, [selectedShowrooms]);

  const handleView = (row) => {
    setSelectedGatePassData(row);
    setIsViewPopupOpen(true);
  };
  const handleCloseViewPopup = () => {
    setIsViewPopupOpen(false);
    setSelectedGatePassData(null);
  };

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeletePopupOpen(true);
  };

  const hadnleConfirmDelete = async () => {
    if (!selectedRow || !selectedRow.gatepass_id) {
      toast.error("No Gate Pass Selected to delete");
      return;
    }
    try {
      const response = await fetch(
        `${API_URL}/deleteGatepass/${selectedRow.gatepass_id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(
          result.message || "Error occurred while deleting the Gate Pass"
        );
        return;
      }
      setGatePass((prev) =>
        prev.filter(
          (gatePass) => gatePass.gatepass_id !== selectedRow.gatepass_id
        )
      );
      await fetch(
        `${API_URL}/updateGatpassDeleteStatus/${selectedRow.sale_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Gate Pass deleted successfully");
      setIsDeletePopupOpen(false);
      setSelectedRow(null);
    } catch (error) {
      console.error(error);
      toast.error("An Error Occurred while deleting the Gate Pass");
    }
  };
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedRow(null);
  };

  if (isViewPopupOpen) {
    return (
      <ViewGatePass
        isOpen={isViewPopupOpen}
        onClose={handleCloseViewPopup}
        GatePassData={selectedGatePassData}
      />
    );
  }
  if (isDeletePopupOpen) {
    return (
      <ConfirmDeletePopup
        isOpen={isDeletePopupOpen}
        onClose={handleCancelDelete}
        onConfirm={hadnleConfirmDelete}
        title="Delete Gate Pass"
        message="Are you sure you want to delete this Gate Pass?"
      />
    );
  }
  if (showAddGatePass) {
    return <GatePass onBack={handleBack} data={editData} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Gate Pass Records</span>
      </div>

      <TableComponenet
        data={gatePass}
        HeadData={TableHeader}
        onView={handleView}
        onDelete={handleDeleteClick}
        onEdit={handleEdit}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default GatePassRecords;
