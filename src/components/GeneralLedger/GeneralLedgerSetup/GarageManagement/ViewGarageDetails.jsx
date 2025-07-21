import React from "react";
import styles from "./ViewGarageDetails.module.css";

const API_UPLOADS = process.env.REACT_APP_API_UPLOADS

/**
 * ViewGarageDetails - A popup component for displaying garage details
 * @param {Object} props Component props
 * @param {boolean} props.isOpen Controls visibility of the popup
 * @param {Function} props.onClose Callback function when close is clicked
 * @param {Object} props.garageData The garage data to display
 */
const ViewGarageDetails = ({ isOpen, onClose, garageData }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup}>

          <div className={styles.contentCard}>
            <div className={styles.headerSection}>
              <img
                src={
                  `${API_UPLOADS}/BranchLogo/${garageData.logo}`
                }
                alt="Garage Logo"
                className={styles.garageLogo}
              />
              <div className={styles.headerInfo}>
                <div className={styles.garageName}>
                  {garageData?.name ||
                    "Khushi Motors Commercial Vehicle Branch"}
                </div>
                <div className={styles.locationInfo}>
                  <div className={styles.countryText}>
                    {garageData?.country || "Kenya"}
                  </div>
                  <div className={styles.divider}></div>
                  <div className={styles.currencyText}>
                    Currency: {garageData?.currency || "KES"}
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
                        <div className={styles.fieldLabel}>Garage Name</div>
                        <div className={styles.fieldValue}>
                          {garageData?.name ||
                            "Khushi Motors Commercial Vehicle Branch"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Country</div>
                        <div className={styles.fieldValue}>
                          {garageData?.country || "Kenya"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Currency</div>
                        <div className={styles.fieldValue}>
                          {garageData?.currency || "KES"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.sectionColumn}>
                  <div className={styles.infoSection}>
                    <div className={styles.sectionTitle}>
                      Contact Information
                    </div>
                    <div className={styles.fieldsContainer}>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Address</div>
                        <div className={styles.fieldValue}>
                          {garageData?.address ||
                            "123 Industrial Area, Mombasa Road, Nairobi, Kenya"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Phone Number</div>
                        <div className={styles.fieldValue}>
                          {garageData?.phone_number || "+254 700 123 456"}
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.fieldLabel}>Email</div>
                        <div className={styles.fieldValue}>
                          {garageData?.email || "info@khushimotors.co.ke"}
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
                    {garageData?.updated_at || "March 15, 2024"}
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

export default ViewGarageDetails;
