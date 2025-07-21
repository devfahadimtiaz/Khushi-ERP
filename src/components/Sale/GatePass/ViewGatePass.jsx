import React, { useEffect, useState } from "react";
import styles from "./ViewGatePass.module.css";
import { PLACEHOLDER_IMAGES } from "../../../assets/images/placeholder";

/**
 * ViewGarageDetails - A popup component for displaying garage details
 * @param {Object} props Component props
 * @param {boolean} props.isOpen Controls visibility of the popup
 * @param {Function} props.onClose Callback function when close is clicked
 * @param {Object} props.GatePassData The garage data to display
 */
const ViewGatePass = ({ isOpen, onClose, GatePassData }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    const fetchedDate = GatePassData?.created_at;
    setDate(new Date(fetchedDate).toISOString().split("T")[0])
  }, []);
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup}>
          <div className={styles.contentCard}>
            <div className={styles.headerSection}>
              <div className={styles.headerInfo}>
                <div className={styles.garageName}>
                  Gate Pass #
                  {GatePassData?.id ||
                    "Khushi Motors Commercial Vehicle Branch"}
                </div>
                <div className={styles.locationInfo}>
                  <div className={styles.countryText}>
                    {GatePassData?.stock_no || "Kenya"}
                  </div>
                  <div className={styles.divider}></div>
                  <div className={styles.currencyText}>
                    {GatePassData?.make} {GatePassData?.model}{" "}
                    {GatePassData?.year}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contentBody}>
              <div className={styles.sectionsContainer}>
                <div className={styles.sectionColumn}>
                  <div className={styles.infoSection}>
                    <div className={styles.sectionTitle}>Basic Information</div>
                    <div className={styles.fieldsContainer}>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}> Name</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.name ||
                            "Khushi Motors Commercial Vehicle Branch"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>City</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.city || "Kenya"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>State</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.state || "KES"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>National Id</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.national_id || "KES"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}> Contact</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.contact || "KES"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.sectionColumn}>
                  <div className={styles.infoSection}>
                    <div className={styles.sectionTitle}>
                      <div className={styles.sectionTitle}>
                        Vehicle Information
                      </div>
                    </div>
                    <div className={styles.fieldsContainer}>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Stock No</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.stock_no ||
                            "123 Industrial Area, Mombasa Road, Nairobi, Kenya"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Make</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.make || "+254 700 123 456"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Model</div>
                        <div className={styles.fieldValue}>
                          {GatePassData?.model || "info@khushimotors.co.ke"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.footer}>
                <button className={styles.backButton} onClick={onClose}>
                  Close
                </button>
                <div className={styles.lastUpdated}>
                  <span className={styles.lastUpdatedLabel}>Last updated:</span>
                  <span className={styles.lastUpdatedDate}>
                    {date || "March 15, 2024"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGatePass;
