import React, { useState, useRef } from "react";
import styles from "./InputScreenForPerformaQuotation.module.css";
import QuotationTemplate from "./QuotationTemplate";

const InputScreenForPerformaQuotation = () => {
  const [showQuotationTemplete,setShowQuotationTemplete]=useState(false);
  const handleGenerateButton=()=>{
    setShowQuotationTemplete(true);
  }
 if(showQuotationTemplete){
  return(
    <QuotationTemplate />
  )
 }
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headerSection}>
          <div className={styles.headerLeft}>
            <div className={styles.formTitle}>PROFORMA QUOTATION</div>
            <div className={styles.fromLabel}>FROM</div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.referenceWrapper}>
              <div className={styles.refLabel}>REF:</div>
              <input
                type="text"
                name="ref"
                id="ref"
                placeholder="KMK 90213"
                className={styles.refInput}
              />
            </div>
            <div className={styles.dateWrapper}>
              <div className={styles.dateLabel}>Date:</div>
              <input
                type="date"
                name="date"
                id="date"
                className={styles.dateInput}
              />
            </div>
          </div>
        </div>

        <div className={styles.contactSection}>
          <input
            type="text"
            id="salesRepName"
            name="salesRepName"
            placeholder="Sale Rep Name"
            className={styles.inputField}
          />
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Customer Name"
            className={styles.inputField}
          />
        </div>

        <div className={styles.contactInfoSection}>
          <input
            type="text"
            name="salesContactNumber"
            id="salesContactNumber"
            placeholder="Contact Number"
            className={styles.inputField}
          />
          <input
            type="text"
            name="customerContactNumber"
            id="customerContactNumber"
            placeholder="Contact Number"
            className={styles.inputField}
          />
        </div>

        <div className={styles.vehicleDescriptionSection}>
          <div className={styles.makeModelSection}>
            <div className={styles.sectionLabel}>Vehicle Description</div>
            <div className={styles.fieldLabel}>Make/Model</div>
            <input
              type="text"
              name="make"
              id="make"
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Model Year</div>
            <input
              type="text"
              name="year"
              name="year"
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
              id="make"
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Color</div>
            <input
              type="text"
              name="color"
              name="color"
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
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Milage</div>
            <input
              type="text"
              name="milage"
              name="milage"
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
              className={styles.inputBox}
            />
          </div>
          <div className={styles.modelYearSection}>
            <div className={styles.fieldLabel}>Seating Capacity</div>
            <input
              type="text"
              name="seats"
              id="seats"
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
              className={styles.inputBox}
            />
              
            </div>
            <div className={styles.imageColumn}>
            <input
              type="file"
              name="img2"
              id="img2"
              className={styles.inputBox}
            />
            </div>
            <div className={styles.imageColumn}>
            <input
              type="file"
              name="img3"
              id="img3"
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
              className={styles.inputBox}
            />
            </div>
            <div className={styles.imageColumn}>
            <input
              type="file"
              name="img5"
              id="img5"
              className={styles.inputBox}
            />
            </div>
            <div className={styles.imageColumn}>
            <input
              type="file"
              name="img6"
              id="img6"
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
                  <input type="number" id="basePrice" name="basePrice" placeholder="0.00" className={styles.costValue}/>
                  <div className={styles.currencyLabel}>JPY</div>
                </div>
                <div className={styles.costValueRow}>
                <input type="number" id="trucking" name="trucking" placeholder="0.00" className={styles.costValue}/>
                  <div className={styles.currencyLabel}>JPY</div>
                </div>
                <div className={styles.costValueRow}>
                <input type="number" id="shipping" name="shipping" placeholder="0.00" className={styles.costValue}/>
                  <div className={styles.currencyLabel}>JPY</div>
                </div>
                <div className={styles.costValueRow}>
                <input type="number" id="duty" name="duty" placeholder="0.00" className={styles.costValue}/>
                  <div className={styles.currencyLabel}>KSH</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalRow}>
            <div className={styles.totalLabel}>Total (Approx)</div>
            <div className={styles.totalValueContainer}>
              <div className={styles.totalCurrency}>KSH</div>
              <div className={styles.totalValue}>59500</div>
            </div>
          </div>
        </div>

        <button className={styles.addCustomCostButton} onClick={handleGenerateButton}>Generate Document</button>

      </div>
    </div>
  );
};

export default InputScreenForPerformaQuotation;
