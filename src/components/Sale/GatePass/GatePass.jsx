import React, { useState, useEffect } from "react";
import styles from "./GatePass.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;
const GatePass = ({ onBack, data }) => {
  const [gatePass, setGatePass] = useState({
    selectSale: "",
    fname: "",
    lname: "",
    city: "",
    state: "",
    address: "",
    nationalId: "",
    contact: "",
    make: "",
    model: "",
    color: "",
    stockNo: "",
  });
  const [sale, setSale] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setGatePass({
        selectSale: data.sale_id || "",
        fname: data.name || "",
        city: data.city || "",
        state: data.state || "",
        address: data.address || "",
        nationalId: data.national_id || "",
        contact: data.contact || "",
        make: data.make || "",
        model: data.model || "",
        color: data.exterior_color || "",
        stockNo: data.stock_no || "",
      });
    }
  }, [data]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await axios.get(`${API_URL}/saleDetails`);
        const data = res.data;
        setSale(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchSales();
  }, []);
  const handleSale = (e) => {
    const selectedId = e.target.value;
    const selectedSale = sale.find(
      (g) => g?.sale_id?.toString() === selectedId
    );

    if (selectedSale) {
      setGatePass((prev) => ({
        ...prev,
        selectSale: selectedId,
        make: selectedSale.make,
        model: selectedSale.model,
        color: selectedSale.exterior_color,
        stockNo: selectedSale.stock_no,
        fname: selectedSale.first_name,
        lname: selectedSale.last_name,
        city: selectedSale.city,
        state: selectedSale.state,
        nationalId: selectedSale.national_id_or_passport,
        contact: selectedSale.contact_number,
      }));
      console.log("✅ Selected Sale:", selectedSale);
    } else {
      console.log("❌ No Sale Selected");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGatePass({
      ...gatePass,
      [name]: value,
    });
  };
  const handleClear = () => {
    setGatePass({
      selectSale: "",
      name: "",
      city: "",
      state: "",
      address: "",
      contact: "",
      make: "",
      model: "",
      color: "",
      stockNo: "",
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const gatePassDataToSend = new FormData();
    gatePassDataToSend.append("selectSale", gatePass.selectSale);
    gatePassDataToSend.append("fname", gatePass.fname);
    gatePassDataToSend.append("lname", gatePass.lname);
    gatePassDataToSend.append("city", gatePass.city);
    gatePassDataToSend.append("state", gatePass.state);
    gatePassDataToSend.append("address", gatePass.address);
    gatePassDataToSend.append("nationalId", gatePass.nationalId);
    gatePassDataToSend.append("contact", gatePass.contact);
    const isEdit = Boolean(data && data.gatepass_id);
    const url = isEdit
      ? `${API_URL}/editGatePass/${data.gatepass_id}`
      : `${API_URL}/gatePass`;
    const method = isEdit ? "PUT" : "POST";

    const saleId = gatePass.selectSale;
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gatePass),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "An unExpected Error Occurred");
        return;
      }
      if (
        result.message === "Gatepass Added Successfully" ||
        result.message === "Gatepass Updated Successfully"
      ) {
        toast.success(result.message);
        await fetch(`${API_URL}/updateGatpassStatus/${saleId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        });

        navigate("/GatePassRecord");
      } else {
        toast.error(result.message || "An unexpected error occurred.");
      }
      alert(result.message);
      navigate("/GatePassRecord");
    } catch (err) {
      console.log(err);
      alert("Failed to Add Gatepass");
    }
  };

  return (
    <div className={styles.gatePass}>
      <div className={styles.container}>
        <form onSubmit={handleSubmission}>
          <div className={styles.formCard}>
            <div className={styles.formTitle}>{data? "Edit": "Add"} Gate Pass Form</div>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <div className={styles.fieldLabel}>Select Sale</div>
                {sale.length > 0 && (
                  <select
                    name="selectSale"
                    className={styles.inputField}
                    value={gatePass.selectSale}
                    onChange={handleSale}
                  >
                    <option value="">Select Sale</option>
                    {sale.map((s) => (
                      <option key={s.sale_id} value={s.sale_id}>
                        {s.stock_no} - {s.make} {s.model}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <div className={styles.fieldLabel}>Name</div>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Enter full name"
                  name="name"
                  value={gatePass.fname + " " + gatePass.lname}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formColumn}>
                <div className={styles.fieldLabel}>City</div>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Enter City"
                  name="city"
                  value={gatePass.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <div className={styles.fieldLabel}>State</div>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Enter State"
                  name="state"
                  value={gatePass.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formColumn}>
                <div className={styles.fieldLabel}>National Id</div>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Enter Address"
                  name="nationalId"
                  value={gatePass.nationalId}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.fieldLabel}>Contact</div>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Enter Contact"
              name="contact"
              value={gatePass.contact}
              onChange={handleInputChange}
            />

            <div className={styles.carDetailsSection}>
              <div className={styles.twoColumnLayout}>
                <div className={styles.leftColumn}>
                  <div className={styles.carDetailsTitle}>Car Details</div>
                  <div className={styles.fieldLabel}>Make</div>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Enter Make"
                    name="make"
                    value={gatePass.make}
                    onChange={handleInputChange}
                    disabled
                  />
                  <div className={styles.fieldLabel}>Color</div>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Enter Color"
                    name="color"
                    value={gatePass.color}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div className={styles.rightColumn}>
                  <div className={styles.fieldLabel}>Model</div>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Enter Model"
                    name="model"
                    value={gatePass.model}
                    onChange={handleInputChange}
                    disabled
                  />
                  <div className={styles.fieldLabel}>Stock No</div>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Enter Stock No"
                    name="stockNo"
                    value={gatePass.stockNo}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className={styles.termsBox}>
              By my signature below, I acknowledge and hereby agree to use the
              above vehicle for the purpose of a demonstration drive only. I
              further agree to return it by the agreed time stated above
            </div>

            <button type="submit" className={styles.submitButton}>
             {data? "Update": "Submit"}  Gate Pass Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GatePass;
