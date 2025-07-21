import React, { useState, useEffect } from "react";
import styles from "./AddVehicleSale.module.css";
import BuyerDetails from "./BuyerDetails";
import NomineeDetails from "./NomineeDetails";
import GuarantorDetails from "./GuarantorDetails";
import InstallmentCalculator from "./InstallmentCalculator";
import Pricing from "./Pricing";
import axios from "axios";
import CreditReceiptDetails from "./CreditSaleAgreement";
import CashSaleAggrement from "./CashSaleAggrement";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const API_URL = process.env.REACT_APP_API_URL;

const AddVehicleSale = ({ data, saleType }) => {
  const [activeTab, setActiveTab] = useState("buyer");
  const [stockNo, setStockNo] = useState("");
  const [car, setCar] = useState([]);
  const [error, setError] = useState("");
  const [showCreditReceiptDetails, setShowCreditReceiptDetails] =
    useState(false);
  const [showCashRecieftDetails, setShowCashReceiptDetails] = useState(false);
  const [garage, setGarage] = useState([]);
  const [cars, setCars] = useState([]);
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

  const handleCreditReceiptDetails = () => {
    setShowCreditReceiptDetails(true);
  };
  const handleCashReceiptDetails = () => {
    setShowCashReceiptDetails(true);
  };

  useEffect(() => {
    const fetchGarage = async () => {
      try {
        const res = await axios.get(`${API_URL}/garage`);
        const fetchedGarage = res.data;
        setGarage(fetchedGarage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGarage();
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`${API_URL}/GetSaleableVehicleSale/${selectedShowrooms}`);
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCars(selectedShowrooms);
  }, [selectedShowrooms]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${API_URL}/searchVehicle/${stockNo}`);
      const fetchedCar = res.data;
      setCar(fetchedCar);
      handleClear();
      setFormData((prev) => ({
        ...prev,
        vehicleId: fetchedCar.id,
        fetchStockNo: fetchedCar.stock_no,
        make: fetchedCar.make,
        model: fetchedCar.model,
        yearOfManufacture: fetchedCar.year,
        chassisNumber: fetchedCar.vin_no,
        engineCC: fetchedCar.engine,
        bodyType: fetchedCar.body_type,
        registrationNumber: fetchedCar.registration_no,
        stockNumberVehicle: fetchedCar.mileage,
        engineNo: fetchedCar.engine_no,
        exterior_color: fetchedCar.exterior_color,
        price: fetchedCar.price,
        totalPriceAfterExpense: fetchedCar.total_price_after_expense,
        selectShowroom: fetchedCar.showroom_id,
      }));

      setError("");
    } catch (err) {
      setCar(null);
      setError(err.response?.data?.message || "Error occurred");
    }
  };
  useEffect(() => {
    if (error) {
      console.error("Fetch Error:", error);
    }
  }, [error]);
  // State for form fields could be added here if needed
  const [formData, setFormData] = useState({
    //Garage Data
    garageId: "",
    garageName: "",
    garageCountry: "",
    garageCurrency: "",
    garageaddress: "",
    garageBranchEmail: "",
    garageBranchPhoneNumber: "",
    garageBranchHelpLineNumber: "",
    selectShowroom: "",
    //Sale Data
    vehicleId: "",
    stockNumber: "",
    salesType: "",
    customerCategory: "",
    customerName: "",
    contactNumber: "",
    emailAddress: "",
    paymentMethod: "",
    saleDate: "",
    status: "",
    invoiceId: "",
    address: "",
    price: "",
    totalPriceAfterExpense: "",
    // Vehicle details
    fetchStockNo: "",
    make: "",
    model: "",
    yearOfManufacture: "",
    chassisNumber: "",
    stockNumberVehicle: "",
    engineCC: "",
    engineNo: "",
    exterior_color: "",
    bodyType: "",
    registrationNumber: "",
    // Buyer details
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

    // Pricing Data
    commitment: "",
    pendingPayment: "",
    commission: "",
    tracker: "",
    insurance: "",
    totalPrice: "",

    //NOMINEE Data,
    nomineeFirstName: "",
    nomineeMiddleName: "",
    nomineeLastName: "",
    nomineeRelationship: "",
    nomineeNationalId: "",
    nomineeKraPinNumber: "",
    nomineeStreetAddress: "",
    nomineeState: "",
    nomineeCity: "",
    nomineeZipCode: "",
    nomineePOBox: "",
    nomineeGender: "",
    nomineeEmailAddress: "",
    nomineeSocialMediaAccounts: "",
    nomineeContactNumber: "",
    nomineeSecondContactNumber: "",
    nomineeResidenceContactNo: "",
    nomineeUploads: "",
    nomineeCaptureImage: "",

    //Guarantor Data
    guarantorFirstName: "",
    guarantorMiddleName: "",
    guarantorLastName: "",
    guarantorNationalId: "",
    guarantorStreetAddress: "",
    guarantorState: "",
    guarantorCity: "",
    guarantorZipCode: "",
    guarantorPOBox: "",
    guarantorGender: "",
    guarantorEmailAddress: "",
    guarantorSocialMediaAccounts: "",
    guarantorUploads: "",

    //Installment Details
    tenure: "",
    vehicleDownPayment: "",
    vehiclePendingPayment: "",
    vehicleInsurance: "",
    vehicleDownInsurance: "",
    vehiclePendingInsurance: "",
    vehicleTracker: "20000",
    brokerCommission: "",
    gracePeriod: "",
    vehicleDownPaymentPercentage: "",
    vehicleDownInsurancePercentage: "",
    totalInstallmentPrice: "",
    totalInitialDeposit: "",
    installments: [],
    bankDetails: [],
  });

  const handleClear = () => {
    setFormData((prevFormData) => ({}));
  };

  const handleGarage = (e) => {
    const selectedId = e.target.value;

    const selectedGarage = garage.find((g) => g.id.toString() === selectedId);

    if (selectedGarage) {
      setFormData((prev) => ({
        ...prev,
        selectShowroom: selectedId,
        garageId: selectedGarage.id,
        garageName: selectedGarage.name,
        garageCountry: selectedGarage.country,
        garageCurrency: selectedGarage.currency,
        garageaddress: selectedGarage.address,
        garageBranchEmail: selectedGarage.branch_email,
        garageBranchPhoneNumber: selectedGarage.phone_number,
        garageBranchHelpLineNumber: selectedGarage.branch_helpline_number,
      }));
      console.log("Selected Garage:", formData);
    } else {
      console.warn("Garage not found for ID:", selectedId);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "stockNumber") {
      setStockNo(e.target.value);
    }
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Form Data:", formData);
  };
  const handleNomineeDataChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      nomineeFirstName: data.nomineeFirstName,
      nomineeMiddleName: data.nomineeMiddleName,
      nomineeLastName: data.nomineeLastName,
      nomineeNationalId: data.nomineeNationalId,
      nomineeStreetAddress: data.nomineeStreetAddress,
      nomineeState: data.nomineeState,
      nomineeCity: data.nomineeCity,
      nomineeZipCode: data.nomineeZipCode,
      nomineePOBox: data.nomineePOBox,
      nomineeRelationship: data.nomineeRelationship,
      nomineeContactNumber: data.nomineeContactNumber,
      nomineeEmailAddress: data.nomineeEmailAddress,
      nomineeKraPinNumber: data.nomineeKraPinNumber,
      nomineeGender: data.nomineeGender,
      nomineeSocialMediaAccounts: data.nomineeSocialMediaAccounts,
      nomineeSecondContactNumber: data.nomineeSecondContactNumber,
      nomineeResidenceContactNo: data.nomineeResidenceContactNo,
      nomineeUploads: data.nomineeUploads,
    }));
  };

  const handleGuarantorDataChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      guarantorFirstName: data.guarantorFirstName,
      guarantorMiddleName: data.guarantorMiddleName,
      guarantorLastName: data.guarantorLastName,
      guarantorNationalId: data.guarantorNationalId,
      guarantorStreetAddress: data.guarantorStreetAddress,
      guarantorState: data.guarantorState,
      guarantorCity: data.guarantorCity,
      guarantorZipCode: data.guarantorZipCode,
      guarantorPOBox: data.guarantorPOBox,
      guarantorGender: data.guarantorGender,
      guarantorEmailAddress: data.guarantorEmailAddress,
      guarantorSocialMediaAccounts: data.guarantorSocialMediaAccounts,
      guarantorUploads: data.guarantorUploads,
    }));
  };

  const handleBuyerDataChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      gender: data.gender,
      nationalId: data.nationalId,
      kraPinNumber: data.kraPinNumber,
      occupation: data.occupation,
      state: data.state,
      streetNumber: data.streetNumber,
      city: data.city,
      zipCode: data.zipCode,
      poBox: data.poBox,
      businessAddress: data.businessAddress,
      emailBuyer: data.emailBuyer,
      socialMedia: data.socialMedia,
      contactNumberBuyer: data.contactNumberBuyer,
      residenceContactNumber: data.residenceContactNumber,
      capturedImage: data.capturedImage,
    }));
  };
  const handlePricingDataChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      totalprice: data.totalprice,
      commitment: data.commitment,
      pendingPayment: data.pendingPayment,
      commission: data.commission,
      tracker: data.tracker,
      insurance: data.insurance,
      totalPrice: data.totalPrice,
    }));
  };
  const handleInstallmentChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tenure: data.tenure,
      vehicleDownPayment: data.vehicleDownPayment,
      vehiclePendingPayment: data.vehiclePendingPayment,
      vehicleInsurance: data.vehicleInsurance,
      vehicleDownInsurance: data.vehicleDownInsurance,
      vehiclePendingInsurance: data.vehiclePendingInsurance,
      vehicleTracker: data.vehicleTracker,
      brokerCommission: data.brokerCommission,
      gracePeriod: data.gracePeriod,
      installments: data.installments,
      vehicleDownPaymentPercentage: data.vehicleDownPaymentPercentage,
      vehicleDownInsurancePercentage: data.vehicleDownInsurancePercentage,
      totalInstallmentPrice: data.totalInstallmentPrice,
      totalInitialDeposit: data.totalInitialDeposit,
    }));
  };
  useEffect(() => {
    if (formData.garageId) {
      axios
        .get(`${API_URL}/bankDetails/${formData.garageId}`)
        .then((res) => {
          setFormData((prev) => ({
            ...prev,
            bankDetails: res.data,
          }));
        })
        .catch((err) => console.error(err));
    }
  }, [formData.garageId]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (formData.salesType === "Cash") {
        if (data) {
          // 🟡 Edit Cash Sale
          res = await axios.patch(`${API_URL}/editCashSale/${data}`, formData, {
            withCredentials: true,
          });
        } else {
          // 🟢 Add Cash Sale
          res = await axios.post(`${API_URL}/saledeed`, formData, {
            withCredentials: true,
          });
        }

        handleCashReceiptDetails();
      } else if (formData.salesType === "Credit") {
        if (data) {
          res = await axios.patch(
            `${API_URL}/editCreditSale/${data}`,
            formData,
            { withCredentials: true }
          );
        } else {
          // 🟢 Add Credit Sale
          res = await axios.post(`${API_URL}/creditSaleDeed`, formData, {
            withCredentials: true,
          });
        }

        handleCreditReceiptDetails();
      } else {
        alert("Invalid sale type selected.");
        return;
      }

      const stockNo = formData.fetchStockNo || formData.stockNumber;
      if (!stockNo) {
        console.error("Stock number is missing!");
        return;
      }

      // Update vehicle status after sale
      await fetch(`${API_URL}/updateVehicleStatus/${stockNo}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(res.data.message);
    } catch (error) {
      console.error("Sale submission failed:", error);
      alert("Failed to submit sale deed.");
    }
  };

  useEffect(() => {
    if (saleType === "cash") {
      axios
        .get(`${API_URL}/GetCashSaleById/${data}`)
        .then((res) => {
          const data = res.data;
          console.log("Fetched Cash Data:", data);
          const buyer = data.buyer?.[0] || {};
          const nominee = data.nominee?.[0] || {};
          const guarantor = data.guarantor?.[0] || {};
          const pricing = data.pricing?.[0] || {};
          const formattedDate = data.sale_date
            ? new Date(data.sale_date).toISOString().split("T")[0]
            : "";

          setFormData((prev) => ({
            ...prev,
            //Vehicle Data
            make: data.make || "",
            model: data.model || "",
            yearOfManufacture: data.year || "",
            chassisNumber: data.vin_no || "",
            fetchStockNo: data.stock_no || "",
            engineCC: data.engine || "",
            engineNo: data.engine_no || "",
            exterior_color: data.exterior_color || "",
            bodyType: data.body_type || "",
            registrationNumber: data.registration_no || "",
            price: data.price || "",
            priceAfterExpense: data.total_price_after_expense || "",
            //Sale Data
            saleDate: formattedDate || "",
            salesType: data.sale_type || "",
            paymentMethod: data.paymentMethod || "",
            status: data.status || "",
            invoiceId: data.invoice_or_installment_id || "",
            customerCategory: data.customer_type || "",

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
            totalPriceAfterExpense: data.total_price_after_expense || "",
            // Garage Data
            garageName: data.name || "",
            garageCountry: data.country || "",
            garageCurrency: data.currency || "",
            garageaddress: data.address || "",
            garageBranchEmail: data.email || "",
            garageBranchPhoneNumber: data.phone_number || "",
            garageBranchHelpLineNumber: "",
            selectShowroom: data.showroom_id || "",
          }));
        })
        .catch((err) => {
          console.error("Error fetching view data:", err);
        });
    }
    if (saleType === "credit") {
      axios
        .get(`${API_URL}/GetCreditSaleById/${data}`)
        .then((res) => {
          const data = res.data;
          console.log("Fetched Credit Data:", data);
          const buyer = data.buyer?.[0] || {};
          const nominee = data.nominee?.[0] || {};
          const guarantor = data.guarantor?.[0] || {};
          const installmentDetails = data.installmentDetails || {};
          const installmentsPlan = data.installmentPlan?.[0] || {};
          const formattedDate = data.sale_date
            ? new Date(data.sale_date).toISOString().split("T")[0]
            : "";

          setFormData((prev) => ({
            ...prev,
            //Vehicle Data
            make: data.make || "",
            model: data.model || "",
            yearOfManufacture: data.year || "",
            chassisNumber: data.vin_no || "",
            fetchStockNo: data.stock_no || "",
            engineCC: data.engine || "",
            engineNo: data.engine_no || "",
            exterior_color: data.exterior_color || "",
            bodyType: data.body_type || "",
            registrationNumber: data.registration_no || "",
            price: data.price || "",
            priceAfterExpense: data.total_price_after_expense || "",
            //Sale Data
            saleDate: formattedDate || "",
            salesType: data.sale_type || "",
            paymentMethod: data.paymentMethod || "",
            status: data.status || "",
            invoiceId: data.invoice_or_installment_id || "",

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

            // Installment Data
            tenure: installmentsPlan.tenure || "",
            vehicleDownPayment: installmentsPlan.down_payment || "",
            vehiclePendingPayment: installmentsPlan.pending_payment || "",
            vehicleInsurance: installmentsPlan.insurance_total || "",
            vehicleDownInsurance: installmentsPlan.down_insurance || "",
            vehiclePendingInsurance: installmentsPlan.pending_insurance || "",
            vehicleTracker: "20000",
            brokerCommission: installmentsPlan.broker_commission || "",
            gracePeriod: installmentsPlan.grace_period || "",
            vehicleDownPaymentPercentage:
              installmentsPlan.down_payment_percentage || "",
            vehicleDownInsurancePercentage:
              installmentsPlan.down_insurance_percentage || "",
            totalInstallmentPrice: installmentsPlan.total || "",
            totalInitialDeposit: installmentsPlan.total_initial_deposit || "",
            installments: installmentDetails,
            // Garage Data
            garageName: data.name || "",
            garageCountry: data.country || "",
            garageCurrency: data.currency || "",
            garageaddress: data.address || "",
            garageBranchEmail: data.email || "",
            garageBranchPhoneNumber: data.phone_number || "",
            garageBranchHelpLineNumber: "",
            selectShowroom: data.showroom_id || "",
          }));
        })
        .catch((err) => {
          console.error("Error fetching view data:", err);
        });
    }
  }, [data]);

  const handleCancel = () => {
    // Handle cancel logic here
    console.log("Form cancelled");
  };

  return (
    <div className={styles.container}>
      {showCreditReceiptDetails ? (
        <CreditReceiptDetails data={formData} />
      ) : showCashRecieftDetails ? (
        <CashSaleAggrement data={formData} />
      ) : (
        <>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
          />
          <div className={styles.header}>
            {data ? "Edit Vehicle Sale" : "Add Vehicle Sale"}
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formSection}>
              {!data && (
                <>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Stock Number</label>
                      <div className={styles.inputWithIcon}>
                        <Autocomplete
                          freeSolo
                          options={cars}
                          getOptionLabel={(option) =>
                            typeof option === "string"
                              ? option
                              : `${option.stock_no} - ${option.make} ${option.model} ${option.year}`
                          }
                          value={stockNo || ""} // string (stock_no or typed text)
                          onChange={(e, newValue) => {
                            if (typeof newValue === "string") {
                              setStockNo(newValue);
                            } else if (newValue) {
                              setStockNo(newValue.stock_no);
                            } else {
                              setStockNo("");
                            }
                          }}
                          onInputChange={(e, newInputValue) => {
                            setStockNo(newInputValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select"
                              variant="outlined"
                            />
                          )}
                        />

                        <button
                          type="button"
                          className={styles.searchButton}
                          onClick={handleSearch}
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.5 17.6768L12.5 12.6768M14.1667 8.51009C14.1667 9.27614 14.0158 10.0347 13.7226 10.7424C13.4295 11.4501 12.9998 12.0932 12.4581 12.6349C11.9164 13.1766 11.2734 13.6062 10.5657 13.8994C9.85792 14.1925 9.09938 14.3434 8.33333 14.3434C7.56729 14.3434 6.80875 14.1925 6.10101 13.8994C5.39328 13.6062 4.75022 13.1766 4.20854 12.6349C3.66687 12.0932 3.23719 11.4501 2.94404 10.7424C2.65088 10.0347 2.5 9.27614 2.5 8.51009C2.5 6.96299 3.11458 5.47926 4.20854 4.3853C5.30251 3.29134 6.78624 2.67676 8.33333 2.67676C9.88043 2.67676 11.3642 3.29134 12.4581 4.3853C13.5521 5.47926 14.1667 6.96299 14.1667 8.51009Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Sales Type</label>
                      <select
                        name="salesType"
                        className={styles.select}
                        value={formData.salesType}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Select Sales Type
                        </option>
                        <option value="Cash">Cash</option>
                        <option value="Credit">Credit</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Select Showroom</label>
                  {garage.length > 0 && (
                    <select
                      name="selectShowroom"
                      className={styles.select}
                      value={formData.selectShowroom}
                      onChange={handleGarage}
                      disabled
                    >
                      <option value="">Select Category</option>
                      {garage.map((garg) => (
                        <option key={garg.id} value={garg.id}>
                          {garg.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Customer Category</label>
                  <select
                    name="customerCategory"
                    className={styles.select}
                    value={formData.customerCategory}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Individual">Individual</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Payment Method</label>
                  <select
                    name="paymentMethod"
                    className={styles.select}
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""> Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="M-Pesa">M-Pesa</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Sale Date</label>
                  <div className={styles.dateInput}>
                    <input
                      type="date"
                      name="saleDate"
                      className={styles.input}
                      value={formData.saleDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  {data && (
                    <>
                      <label className={styles.label}>Status</label>
                      <select
                        name="status"
                        className={styles.select}
                        value={formData.status}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Select Status
                        </option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.sectionTitle}>Vehicle Details</div>

            <div className={styles.formSection}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Fetch from Stock no</label>
                  <input
                    type="text"
                    name="fetchStockNo"
                    placeholder="Fetch from Stock no"
                    className={styles.input}
                    value={formData.fetchStockNo}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Color</label>
                  <input
                    type="text"
                    name="exterior_color"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.exterior_color}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Make</label>
                  <input
                    type="text"
                    name="make"
                    placeholder="Fetch from Make"
                    className={styles.input}
                    value={formData.make}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Model</label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.model}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Year of Manufacture</label>
                  <input
                    type="text"
                    name="yearOfManufacture"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.yearOfManufacture}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Chassis Number</label>
                  <input
                    type="text"
                    name="chassisNumber"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.chassisNumber}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Engine No</label>
                  <input
                    type="text"
                    name="engineNo"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.engineNo}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Engine CC</label>
                  <input
                    type="text"
                    name="engineCC"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.engineCC}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Body Type</label>
                  <input
                    type="text"
                    name="bodyType"
                    className={styles.input}
                    value={formData.bodyType}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Registration Number</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Fetchedx"
                    className={styles.input}
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div>
              {/* Tabs */}
              <div className={styles.tabsContainer}>
                <button
                  type="button"
                  className={
                    activeTab === "buyer" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("buyer")}
                >
                  Buyer Details
                </button>

                <button
                  type="button"
                  className={
                    activeTab === "nominee" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("nominee")}
                >
                  Nominee
                </button>

                <button
                  type="button"
                  className={
                    activeTab === "guarantor" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("guarantor")}
                >
                  Guarantor
                </button>

                {formData.salesType === "Cash" && (
                  <button
                    type="button"
                    className={
                      activeTab === "pricing" ? styles.tabActive : styles.tab
                    }
                    onClick={() => setActiveTab("pricing")}
                  >
                    Pricing
                  </button>
                )}
                {formData.salesType === "Credit" && (
                  <button
                    type="button"
                    className={
                      activeTab === "installment"
                        ? styles.tabActive
                        : styles.tab
                    }
                    onClick={() => setActiveTab("installment")}
                  >
                    Installment
                  </button>
                )}
                <button
                  type="button"
                  className={
                    activeTab === "agreement" ? styles.tabActive : styles.tab
                  }
                  onClick={() => setActiveTab("agreement")}
                >
                  Agreement
                </button>
              </div>

              {/* Conditional Rendering */}
              <div className="tab-content">
                {activeTab === "buyer" && (
                  <BuyerDetails
                    handleBuyerDataChange={handleBuyerDataChange}
                    buyerData={formData}
                  />
                )}
                {activeTab === "nominee" && (
                  <NomineeDetails
                    handleNomineeDataChange={handleNomineeDataChange}
                    nomineeData={formData}
                  />
                )}
                {activeTab === "guarantor" && (
                  <GuarantorDetails
                    handleGuarantorDataChange={handleGuarantorDataChange}
                    guarantorData={formData}
                  />
                )}
                {activeTab === "installment" && (
                  <InstallmentCalculator
                    vehiclePrice={formData.totalPriceAfterExpense}
                    handleInstallmentChange={handleInstallmentChange}
                    installmentData={formData}
                  />
                )}
                {activeTab === "pricing" && (
                  <Pricing
                    handlePricingDataChange={handlePricingDataChange}
                    PricingData={formData}
                    price={formData.totalPriceAfterExpense}
                  />
                )}
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className={styles.saveButton}>
                {data ? "Update" : "Add"} Sale
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddVehicleSale;
