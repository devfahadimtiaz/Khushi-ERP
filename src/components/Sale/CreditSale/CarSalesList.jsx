import React, { useState, useEffect } from "react";
import styles from "./CarSalesList.module.css";
import axios from "axios";
import AddVehicleSale from "../CreditSale/AddVehicleSale";
import ConfirmDeletePopup from "../../../assets/Resources/Popups/ConfirmDeletePopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;
const CarSalesList = () => {
  const [sampleData, setSampleData] = useState([]);
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [editData, setEditData] = useState(null);
  const [showAddVehicleSale, setShowAddVehicleSale] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
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

  
  
  const handleDeleteClick = (row) => {
    setSelectedItems([row]);
    setIsDeletePopupOpen(true);
  };
  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
    setSelectedItems("");
  };
  const handleEdit = (row) => {
    setEditData(row);
    setShowAddVehicleSale(true); // Show the AddStock component when editing
  };
  const HandleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value === "") {
      setList(sampleData);
      return;
    }
    const results = sampleData.filter((items) =>
      items.stock_no.toLowerCase().includes(value)
    );
    setList(results);
  };
  const HandleChangeName = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value === "") {
      setList(sampleData);
      return;
    }
    const results = sampleData.filter((items) =>
      items.make.toLowerCase().includes(value)
    );
    setList(results);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/deleteSale/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Error occurred while deleting the Sale");
        return;
      }

      setList((prev) => prev.filter((item) => item.sale_id !== id));
      setSampleData((prev) => prev.filter((item) => item.sale_id !== id));
      toast.success(result.message);
      setIsDeletePopupOpen(false);
      selectedItems(null);
    } catch (error) {
      console.error(error);
      toast.error("Unexpected error occurred");
    }
  };

  const hanldePay = async (id) => {
    try {
      const response = await fetch(`${API_URL}/payCashSale/${id}`, {
        method: "GET",
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Error occurred while paying the Sale");
        return;
      }
      toast.success("Pay Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = (id) => {
    axios
      .get(`${API_URL}/GetCashSaleById/${id}`)
      .then((res) => {
        const data = res.data;
        console.log("Fetched Data:", data);
        const buyer = data.buyer?.[0] || {};
        const nominee = data.nominee?.[0] || {};
        const guarantor = data.guarantor?.[0] || {};
        const pricing = data.pricing?.[0] || {};
        const formattedDate = data.sale_date
          ? new Date(data.sale_date).toISOString().split("T")[0]
          : "";
        const fullFormData ={
          //Vehicle Data
          make: data.make || "",
          model: data.model || "",
          yearOfManufacture: data.year || "",
          chassisNumber: data.vin_no || "",
          stockNumberVehicle: data.stock_no || "",
          engineCC: data.engine || "",
          engineNo: data.engine_no || "",
          exterior_color: data.exterior_color || "",
          bodyType: data.body_type || "",
          registrationNumber: data.registration_no || "",
          price: data.price || "",
          //Sale Data
          saleDate: formattedDate || "",
          salesType: data.sales_type || "",
          paymentMethod: data.payment_method || "",
          status: data.status || "",

          //Buyer Data
          firstName: buyer.first_name || "",
          middleName: buyer.middle_name || "",
          lastName: buyer.last_name || "",
          nationalId: buyer.national_id_or_passport || "",
          kraPinNumber: buyer.kra_pin || "",
          occupation: buyer.occupation || "",
          state: buyer.state || "",
          streetNumber: buyer.street_number || "",
          city: buyer.city || "",
          zipCode: buyer.zip_code || "",
          poBox: buyer.po_box || "",
          gender: buyer.gender || "",
          emailBuyer: buyer.email || "",
          businessAddress: buyer.business_address || "",
          socialMedia: buyer.social_media || "",
          contactNumberBuyer: buyer.contact_number || "",
          residenceContactNumber: buyer.residence_contact_number || "",
          //Nominee Data
          nomineeFirstName: nominee.first_name || "",
          nomineeMiddleName: nominee.middle_name || "",
          nomineeLastName: nominee.last_name || "",
          nomineeRelationship: nominee.relationship || "",
          nomineeNationalId: nominee.national_id_or_passport || "",
          nomineeKraPinNumber: nominee.kra_pin || "",
          nomineeStreetAddress: nominee.street_number || "",
          nomineeState: nominee.state || "",
          nomineeCity: nominee.city || "",
          nomineeZipCode: nominee.zip_code || "",
          nomineePOBox: nominee.po_box || "",
          nomineeGender: nominee.gender || "",
          nomineeEmailAddress: nominee.email || "",
          nomineeSocialMediaAccounts: nominee.social_media || "",
          nomineeContactNumber: nominee.contact_number || "",
          nomineeSecondContactNumber: nominee.second_contact_number || "",
          nomineeResidenceContactNo: nominee.residence_contact_number || "",
          //Guarantor Data
          guarantorFirstName: guarantor.first_name || "",
          guarantorMiddleName: guarantor.middle_name || "",
          guarantorLastName: guarantor.last_name || "",
          guarantorNationalId: guarantor.national_id_or_passport || "",
          guarantorStreetAddress: guarantor.street_number || "",
          guarantorState: guarantor.state || "",
          guarantorCity: guarantor.city || "",
          guarantorZipCode: guarantor.zip_code || "",
          guarantorPOBox: guarantor.po_box || "",
          guarantorGender: guarantor.gender || "",
          guarantorEmailAddress: guarantor.email || "",
          guarantorSocialMediaAccounts: guarantor.social_media || "",

          // Pricing Data
          commitment: pricing.commitment_amount || "",
          pendingPayment: pricing.pending_payment || "",
          commission: pricing.commission || "",
          tracker: pricing.tracker_price || "",
          insurance: pricing.insurance_price || "",
          totalPrice: pricing.total_sale_price || "",
          // Garage Data
          garageName: data.name || "",
          garageCountry: data.country || "",
          garageCurrency: data.currency || "",
          garageaddress: data.address || "",
          garageBranchEmail: data.email || "",
          garageBranchPhoneNumber: data.phone_number || "",
          garageBranchHelpLineNumber: "",
        }
        navigate("/CashSaleAggrement", { state: fullFormData });
      })
      .catch((err) => {
        console.error("Error fetching view data:", err);
      });


   
    
  };


  useEffect(() => {
    const fetchData = async (selectedShowrooms) => {
      try {
        const res = await axios.get(`${API_URL}/salelist/${selectedShowrooms}`);
        const filterData = res.data;
        setSampleData(filterData);
        setList(filterData); // <- Add this line
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(selectedShowrooms);
  }, [selectedShowrooms]);

  const ViewIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M10 4.37C3.75 4.37 1.25 10 1.25 10C1.25 10 3.75 15.63 10 15.63C16.25 15.63 18.75 10 18.75 10C18.75 10 16.25 4.37 10 4.37Z"
        stroke="#344054"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
        stroke="#344054"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const EditIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M11.25 3.75L4.375 11.25V15H8.125L15.625 7.5M11.25 3.75L13.125 1.875L16.875 5.625L15 7.5L11.25 3.75Z"
        stroke="#4318D1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DeleteIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.iconSvg}
    >
      <path
        d="M16.875 4.375H3.125M8.125 8.125V13.125M11.875 8.125V13.125M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
        stroke="#CF2129"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  if (showAddVehicleSale) {
    return <AddVehicleSale data={editData} saleType={"cash"} />;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>All Cash Sales</div>
        <form>
          <div className={styles.searchSection}>
            <div className={styles.inputGroup}>
              <span className={styles.inputLabel}>Stock No.</span>
              <input
                type="text"
                placeholder="Search by Stock No."
                className={styles.inputField}
                onChange={HandleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <span className={styles.inputLabel}>Make</span>
              <input
                type="text"
                placeholder="Search by Make"
                className={styles.inputField}
                onChange={HandleChangeName}
              />
            </div>
          </div>
        </form>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Invoice Id</div>
            <div className={styles.tableHeaderCell}>Vehicle Details</div>
            <div className={styles.tableHeaderCell}>Payment Method</div>
            <div className={styles.tableHeaderCell}>Customer Type</div>
            <div className={styles.tableHeaderCell}>Date</div>
            <div className={styles.tableHeaderCell}>Sale Price</div>
            <div className={styles.tableHeaderCell}>Status</div>

            <div className={styles.tableHeaderCellCustomer}>Action</div>
          </div>

          {list && list.length > 0 ? (
            list.map((row, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.tableCell}>
                  {row.invoice_or_installment_id}
                </div>
                <div className={styles.tableCell}>
                  {row.stock_no} {row.make} {row.model} {row.year}
                </div>
                <div className={styles.tableCell}>{row.paymentMethod}</div>
                <div className={styles.tableCell}>{row.customer_type}</div>
                <div className={styles.tableCell}>
                  {row.sale_date ? row.sale_date.split("T")[0] : ""}
                </div>
                <div className={styles.tableCell}>{row.total_sale_price}</div>
                <div className={styles.tableCell}>{row.salesStatus}</div>
                <div className={styles.tableCellProfit}>
                  {row.salesStatus === "Pending" && (
                    <button
                      className={styles.paybutton}
                      onClick={() => hanldePay(row.sale_id)}
                    >
                      Pay
                    </button>
                  )}
                  <button
                    className={styles.actionButton}
                    onClick={() => handleView(row.sale_id)}
                  >
                    <ViewIcon />
                  </button>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleEdit(row.sale_id)}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className={styles.actionButton}
                    onClick={() =>
                      handleDeleteClick(row.sale_id, row.vehicle_id)
                    }
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.tableRow}>There is no data</div>
          )}
        </div>
      </div>
      <ConfirmDeletePopup
        isOpen={isDeletePopupOpen}
        onClose={handleCancelDelete}
        onConfirm={() => handleDelete(selectedItems[0])}
        title="Delete Sale"
        message="Are you sure you want to delete this Sale?"
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default CarSalesList;
