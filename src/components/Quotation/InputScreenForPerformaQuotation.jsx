import React, { useState } from "react";
import styles from "./InputScreenForPerformaQuotation.module.css";
import QuotationTemplate from "./QuotationTemplate";

const InputScreenForPerformaQuotation = () => {
  const [formData, setFormData] = useState({
    ref: "",
    date: "",
    salesRepName: "",
    salesContactNumber: "",
    customerName: "",
    customerContactNumber: "",
    make: "",
    year: "",
    engine: "",
    color: "",
    transmission: "",
    milage: "",
    interior: "",
    seats: "",
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
    basePrice: "",
    trucking: "",
    shipping: "",
    duty: "",
    phone: "",
    email: "",
    website: "",
    branch: "",
    jpyToKsh:"",
    refs:"",
  });

  const jpyToKshRate = parseFloat(formData.jpyToKsh|| 0.91);;

  const basePriceJPY = parseFloat(formData.basePrice || 0);
  const truckingJPY = parseFloat(formData.trucking || 0);
  const shippingJPY = parseFloat(formData.shipping | 0);
  const dutyKSH = parseFloat(formData.duty || 0);

  const jpyToKsh = (basePriceJPY + truckingJPY + shippingJPY) * jpyToKshRate;
  const totalCostInKsh = jpyToKsh + dutyKSH;

  const branches = {
    Mombasa: {
      email: "sales@khushimotors.com",
      phone: "+254 714 888 111",
      website: "https://khushimotors.com/",
      salesRepName:"Waqas Ahmed",
      refs:"KMK"
    },
    Nairobi: {
      email: "sales.express@khushimotors.com",
      phone: "+254 705 000 001",
      website: "https://khushimotors.com/express",
      salesRepName:"Khurram Iqbal",
      refs:"KME"
    },
    Tanzania: {
      email: "sales.tanzania@khushimotors.com",
      phone: "+255 765 315 555",
      website: "https://khushimotors.com/tanzania",
      salesRepName:"Shahzad Anwar",
      refs:"KMT"
    },
    Uganda: {
      email: "sales.uganda@khushimotors.com",
      phone: "+256 708 305 555",
      website: "https://khushimotors.com/uganda",
      salesRepName:"Shahbaz Iqbal",
      refs:"KMU"
    },
    Pakistan: {
      email: "sales.pakistan@khushimotors.com",
      phone: "+92 325 570 0000",
      website: "https://khushimotors.com/pakistan",
      salesRepName:"Zeeshan Hussain",
      refs:"KMP"
    },
  };
  const handleBranchChange = (e) => {
    const selectedBranch = e.target.value;
    const branchDetails = branches[selectedBranch]; // from your branches object

    setFormData({
      ...formData,
      branch: selectedBranch,
      ...branchDetails, // updates email, phone, website
    });
  };
  const [showQuotationTemplete, setShowQuotationTemplete] = useState(false);
  const handleGenerateButton = () => {
    setShowQuotationTemplete(true);
  };
  if (showQuotationTemplete) {
    return <QuotationTemplate data={formData} total={totalCostInKsh} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headerSection}>
          <div className={styles.headerLeft}>
            <div className={styles.formTitle}>PROFORMA QUOTATION</div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.dateWrapper}>
              <div className={styles.refLabel}>REF:</div>
              <input
                type="text"
                name="ref"
                id="ref"
                placeholder="90213"
                value={formData.ref}
                required
                onChange={(e) =>
                  setFormData({ ...formData, ref: e.target.value })
                }
                className={styles.refInput}
              />
            </div>
            <div className={styles.dateWrapper}>
              <div className={styles.refLabel}>Date:</div>
              <input
                type="date"
                name="date"
                id="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className={styles.refInput}
              />
            </div>
            <div className={styles.dateWrapper}>
              <div className={styles.refLabel}>JPY To KSH Rate:</div>
              <input
                type="number"
                name="jpyToKsh"
                id="jpyToKsh"
                required
                value={formData.jpyToKsh}
                onChange={(e) =>
                  setFormData({ ...formData, jpyToKsh: e.target.value })
                }
                className={styles.refInput}
              />
            </div>
            <div className={styles.dateWrapper}>
            <label className={styles.refLabel}>Select Baranch:</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleBranchChange}
                className={styles.refInput}
              >
                <option value="">Select Branch</option>
                {Object.keys(branches).map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              
              </div>
                <div className={styles.dateWrapper}>
                  <label className={styles.refLabel}>Email:</label>
                  <input type="text" value={formData.email} className={styles.refInput} readOnly />
                </div>
                <div className={styles.dateWrapper}>
                  <label className={styles.refLabel}>Phone:</label>
                  <input type="text" value={formData.phone} className={styles.refInput} readOnly />
                </div>
                <div className={styles.dateWrapper}>
                  <label className={styles.refLabel}> Website:</label>
                  <input type="text" value={formData.website} className={styles.refInput} readOnly />
                </div>
          
          </div>
        </div>
        <div className={styles.vehicleDescriptionSections}>
          <div className={styles.makeModelSections}>
            <div className={styles.fieldLabel}>From</div>
            <input
              type="text"
              id="salesRepName"
              name="salesRepName"
              placeholder="Sale Rep Name"
              required
              readOnly
              value={formData.salesRepName}
              className={styles.inputField}
            />
            <input
              type="text"
              name="salesContactNumber"
              id="salesContactNumber"
              placeholder="Contact Number"
              required
              readOnly
              value={formData.phone}
              className={styles.inputField}
            />
          </div>
          <div className={styles.modelYearSections}>
            <div className={styles.fieldLabel}>To</div>
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Customer Name"
              required
              value={formData.customerName}
              onChange={(e) =>
                setFormData({ ...formData, customerName: e.target.value })
              }
              className={styles.inputField}
            />
            <input
              type="text"
              name="customerContactNumber"
              id="customerContactNumber"
              placeholder="Contact Number"
              required
              value={formData.customerContactNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  customerContactNumber: e.target.value,
                })
              }
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.vehicleDescriptionSection}>
          <div className={styles.makeModelSection}>
            <div className={styles.sectionLabel}>Vehicle Description</div>
            <div className={styles.fieldLabel}>Make/Model</div>
            <input
              type="text"
              name="make"
              id="make"
              required
              value={formData.make}
              onChange={(e) =>
                setFormData({ ...formData, make: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Model Year</div>
            <input
              type="text"
              name="year"
              id="year"
              value={formData.year}
              required
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
        </div>

        <div className={styles.vehicleDescriptionSections}>
          <div className={styles.makeModelSection}>
            <div className={styles.fieldLabel}>Engine</div>
            <input
              type="text"
              name="engine"
              id="engine"
              required
              value={formData.engine}
              onChange={(e) =>
                setFormData({ ...formData, engine: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Color</div>
            <input
              type="text"
              name="color"
              id="color"
              required
              value={formData.color}
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
        </div>

        <div className={styles.vehicleDescriptionSections}>
          <div className={styles.makeModelSection}>
            <div className={styles.fieldLabel}>Transmission</div>
            <input
              type="text"
              name="transmission"
              id="transmission"
              required
              value={formData.transmission}
              onChange={(e) =>
                setFormData({ ...formData, transmission: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Milage</div>
            <input
              type="text"
              name="milage"
              id="milage"
              required
              value={formData.milage}
              onChange={(e) =>
                setFormData({ ...formData, milage: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
        </div>

        <div className={styles.vehicleDescriptionSections}>
          <div className={styles.makeModelSection}>
            <div className={styles.fieldLabel}>Interior</div>
            <input
              type="text"
              name="interior"
              id="interior"
              required
              value={formData.interior}
              onChange={(e) =>
                setFormData({ ...formData, interior: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Seating Capacity</div>
            <input
              type="text"
              name="seats"
              id="seats"
              required
              value={formData.seats}
              onChange={(e) =>
                setFormData({ ...formData, seats: e.target.value })
              }
              className={styles.inputBox}
            />
          </div>
        </div>

        <div className={styles.imageGallerySection}>
          <div className={styles.imageRow}>
            <div className={styles.imageColumn}>
              <input
                type="file"
                name="img1"
                id="img1"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img1: e.target.files[0] })
                }
                className={styles.inputBox}
              />
            </div>
            <div className={styles.imageColumn}>
              <input
                type="file"
                name="img2"
                id="img2"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img2: e.target.files[0] })
                }
                className={styles.inputBox}
              />
            </div>
            <div className={styles.imageColumn}>
              <input
                type="file"
                name="img3"
                id="img3"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img3: e.target.files[0] })
                }
                className={styles.inputBox}
              />
            </div>
          </div>
        </div>

        <div className={styles.imageGallerySection}>
          <div className={styles.imageRow}>
            <div className={styles.imageColumn}>
              <input
                type="file"
                name="img4"
                id="img4"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img4: e.target.files[0] })
                }
                className={styles.inputBox}
              />
            </div>
            <div className={styles.imageColumn}>
              <input
                type="file"
                name="img5"
                id="img5"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img5: e.target.files[0] })
                }
                className={styles.inputBox}
              />
            </div>
            <div className={styles.imageColumn}>
              <input
                type="file"
                name="img6"
                id="img6"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img6: e.target.files[0] })
                }
                className={styles.inputBox}
              />
            </div>
          </div>
        </div>
        <div className={styles.costBreakdownTitle}>Cost Breakdown</div>

        <div className={styles.costBreakdownContainer}>
          <div className={styles.costBreakdownContent}>
            <div className={styles.costRow}>
              <div className={styles.costLabelColumn}>
                <div className={styles.costLabel}>Base Price FOB</div>
                <div className={styles.costLabel}>Trucking in Japan</div>
                <div className={styles.costLabel}>Shipping Cost</div>
                <div className={styles.costLabel}>Duty Clearance</div>
              </div>
              <div className={styles.costValueColumn}>
                <div className={styles.costValueRow}>
                  <input
                    type="number"
                    id="basePrice"
                    name="basePrice"
                    placeholder="0.00"
                    required
                    value={formData.basePrice}
                    onChange={(e) =>
                      setFormData({ ...formData, basePrice: e.target.value })
                    }
                    className={styles.costValue}
                  />
                  <div className={styles.currencyLabel}>JPY</div>
                </div>
                <div className={styles.costValueRow}>
                  <input
                    type="number"
                    id="trucking"
                    name="trucking"
                    placeholder="0.00"
                    required
                    value={formData.trucking}
                    onChange={(e) =>
                      setFormData({ ...formData, trucking: e.target.value })
                    }
                    className={styles.costValue}
                  />
                  <div className={styles.currencyLabel}>JPY</div>
                </div>
                <div className={styles.costValueRow}>
                  <input
                    type="number"
                    id="shipping"
                    name="shipping"
                    placeholder="0.00"
                    required
                    value={formData.shipping}
                    onChange={(e) =>
                      setFormData({ ...formData, shipping: e.target.value })
                    }
                    className={styles.costValue}
                  />
                  <div className={styles.currencyLabel}>JPY</div>
                </div>
                <div className={styles.costValueRow}>
                  <input
                    type="number"
                    id="duty"
                    name="duty"
                    placeholder="0.00"
                    required
                    value={formData.duty}
                    onChange={(e) =>
                      setFormData({ ...formData, duty: e.target.value })
                    }
                    className={styles.costValue}
                  />
                  <div className={styles.currencyLabel}>KSH</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalRow}>
            <div className={styles.totalLabel}>Total (Approx)</div>
            <div className={styles.totalValueContainer}>
              <div className={styles.totalCurrency}>KSH</div>
              <div className={styles.totalValue}>{totalCostInKsh}</div>
            </div>
          </div>
        </div>

        <button
          className={styles.addCustomCostButton}
          onClick={handleGenerateButton}
        >
          Generate Document
        </button>
      </div>
    </div>
  );
};

export default InputScreenForPerformaQuotation;
