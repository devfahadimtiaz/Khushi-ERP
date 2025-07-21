import React, { useEffect, useState } from "react";
import styles from "./LogBookReceiptNote.module.css";
import RegistrationCertificatePopup from "./RegistrationCertificatePopup";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_API_URL;

const LogBookReceiptNote = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [assignTo, setAssignTo] = useState("");
  const [paidBy, setPaidBy] = useState("Khushimotors");
  const [currency, setCurrency] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [buyer, setBuyer] = useState({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    nationalId: "",
    kraPinNumber: "",
    occupation: "",
    state: "",
    streetNumber: "",
    city: "",
    zipCode: "",
    poBox: "",
    businessAddress: "",
    gender: "",
    emailBuyer: "",
    socialMedia: "",
    contactNumberBuyer: "",
    residenceContactNumber: "",
    documents: "",
    capturedImage: "",
  });
  const fetchCars = async () => {
    try {
      const res = await fetch(`${API_URL}/getLogBookVehicles`);
      const data = await res.json();
      setVehicles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);

  const FetchBuyer = async (selectedVehicle) => {
    if (selectedVehicle === "") return;
    try {
      const res = await fetch(`${API_URL}/getBuyer/${selectedVehicle}`);
      const data = await res.json();

      setBuyer((prev) => ({
        ...prev,
        id: data.id,
        firstName: data.first_name,
        middleName: data.middle_name,
        lastName: data.last_name,
        gender: data.gender,
        nationalId: data.national_id_or_passport,
        kraPinNumber: data.kra_pin,
        occupation: data.occupation,
        state: data.state,
        streetNumber: data.street_number,
        city: data.city,
        zipCode: data.zip_code,
        poBox: data.po_box,
        businessAddress: data.business_address,
        emailBuyer: data.email,
        socialMedia: data.social_media,
        contactNumberBuyer: data.contact_number,
        residenceContactNumber: data.residence_contact_number,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  //get Currency
  const getCurrency = async (selectedVehicle) => {
    if (selectedVehicle === "") return;
    try {
      const res = await fetch(`${API_URL}/getCurrency/${selectedVehicle}`);
      const data = await res.json();
      setCurrency(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedVehicle === "" && assignTo === "Buyer")
      return console.log("Buyer Not Called yet");
    FetchBuyer(selectedVehicle);
    getCurrency(selectedVehicle);
  }, [selectedVehicle, assignTo]);

  const onBack = () => {
    navigate("/LogBookTransfer");
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  //Save Data To Database
 const handleSubmit = async () => {
  if (selectedVehicle === "" || assignTo === "") {
    toast.error("Please select vehicle and transfer type");
    return;
  }

  let documentUrl = "";
  try {
    if (file) {
      documentUrl = await handleFile(file); // 👈 file is a single File, this will get URL
    }
  } catch (error) {
    alert("Error uploading document: " + error.message);
    return;
  }

  const payload = {
    transferType: assignTo,
    paidBy,
    buyerId: buyer.id || null,
    vehicleStockNo: selectedVehicle,
    documentUrl, // 👈 Use the URL we just got from handleFile
    paymentType,
    amount,
    currency: currency.currency,
  };


  try {
    const res = await fetch(`${API_URL}/insertLogBook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      await fetch(`${API_URL}/updateStatusVehicle/${selectedVehicle}`,{
        method:"PATCH"
      })
      toast.success("LogBook Added");
      navigate("/LogBookTransfer"); // 👈 Navigate if you want
    } else {
      const data = await res.json();
      toast.error(data.message || "Failed to add LogBook");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

const handleFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file[0]);
  try {
    const res = await fetch(`${API_URL}/UploadLogBookDocument`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (res.ok) {
      return data.fileUrl; // 👈 This URL goes into payload.documentUrl
    } else {
      throw new Error(data.message || "File upload failed");
    }
  } catch (error) {
    toast.error("Error uploading file");
    console.error(error);
    throw error; // 👈 Important to propagate the error to handleSubmit
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton} onClick={onBack}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#092C4C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className={styles.title}>VEHICLE LOG BOOK RECEIPT NOTE</h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Select Vehicle</label>
          <Autocomplete
            freeSolo
            options={vehicles}
            getOptionLabel={(option) =>
              typeof option === "string"
                ? option
                : `${option.stock_no} - ${option.make} ${option.model} ${option.year} (${option.status})`
            }
            value={selectedVehicle || ""} // string (stock_no or typed text)
            onChange={(e, newValue) => {
              if (typeof newValue === "string") {
                setSelectedVehicle(newValue);
              } else if (newValue) {
                setSelectedVehicle(newValue.stock_no);
              } else {
                setSelectedVehicle("");
              }
            }}
            onInputChange={(e, newInputValue) => {
              setSelectedVehicle(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select" variant="outlined" />
            )}
          />
        </div>
        <div className={styles.checkboxSection}>
          <div className={styles.selectType}>
            <label className={styles.label}>Select Transfer Type</label>

            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="Khushi Motors"
                checked={assignTo === "Khushi Motors"}
                onChange={(e) => setAssignTo(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}></span>
              Khushi Motors
            </label>

            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="Buyer"
                checked={assignTo === "Buyer"}
                onChange={(e) => setAssignTo(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}></span>
              Buyer
            </label>
          </div>
          {assignTo === "Buyer" && (
            <div className={styles.selectType}>
              <label className={styles.label}>Paid by:</label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="paid"
                  value="KhushiMotors"
                  checked={paidBy === "KhushiMotors"}
                  onChange={(e) => setPaidBy(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>
                Khushi Motors
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="paid"
                  value="Buyer"
                  checked={paidBy === "Buyer"}
                  onChange={(e) => setPaidBy(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>
                Buyer
              </label>
            </div>
          )}
        </div>
        {assignTo === "Buyer" && (
          <>
            <h2 className={styles.sectionTitle}>BUYER PARTICULARS</h2>

            <div className={styles.buyerInfoGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>FN</label>
                <input
                  type="text"
                  name="firstName"
                  value={buyer.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>ML</label>
                <input
                  type="text"
                  name="middleName"
                  value={buyer.middleName}
                  onChange={handleInputChange}
                  placeholder="Middle Name"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>LN</label>
                <input
                  type="text"
                  name="lastName"
                  value={buyer.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.buyerInfoGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>ID</label>
                <input
                  type="text"
                  name="nationalId"
                  value={buyer.nationalId}
                  onChange={handleInputChange}
                  placeholder="National Id/Password"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>SA</label>
                <input
                  type="text"
                  name="streetNumber"
                  value={buyer.streetNumber}
                  onChange={handleInputChange}
                  placeholder="Street Address"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>SM</label>
                <input
                  type="text"
                  name="state"
                  value={buyer.state}
                  onChange={handleInputChange}
                  placeholder="State Name"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.buyerInfoGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>C</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={buyer.city}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>ZC</label>
                <input
                  type="text"
                  name="zipCode"
                  value={buyer.zipCode}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>PO</label>
                <input
                  type="text"
                  name="poBox"
                  value={buyer.poBox}
                  onChange={handleInputChange}
                  placeholder="P.O Box"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.buyerInfoGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>CN</label>
                <input
                  type="text"
                  name="contactNumberBuyer"
                  value={buyer.contactNumberBuyer}
                  onChange={handleInputChange}
                  placeholder="Contact Name"
                  className={styles.input}
                />
              </div>
            </div>
          </>
        )}
        <div className={styles.regitrationSection}>
          <label className={styles.label}>Upload Document</label>
          <button className={styles.uploadButton} onClick={togglePopup}>
            Upload Registration Certificate
          </button>
        </div>

        <div className={styles.paymentSection}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Currency</label>
            <input
              type="text"
              placeholder="KSH/Dollar"
              disabled
              value={currency.currency}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Type of Payment</label>
            <input
              type="text"
              placeholder="Cash/Card/Check"
              name="paymentType"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Amount Received By</label>
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount Recieved"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.footerActions}>
          <button className={styles.uploadDocsButton} onClick={handleSubmit}>
            Save
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {showPopup && (
        <RegistrationCertificatePopup onClose={togglePopup} setFile={setFile} />
      )}
    </div>
  );
};

export default LogBookReceiptNote;
