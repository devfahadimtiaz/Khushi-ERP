import React from "react";
import styles from "./StockDetail.module.css";

const StockDetail = ({ InventoryData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stockDetailWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.contentLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.infoContainer}>
                <h1 className={styles.sectionTitle}>Stock Details</h1>

                <h3 className={styles.infoLabel}>Vehicle Information</h3>
                <div className={styles.vehicleInfoRow}>
                  <div className={styles.vehicleName}>
                    {InventoryData.make} {InventoryData.model}{" "}
                    {InventoryData.year}
                  </div>
                  <div className={styles.vehicleColor}>
                    {InventoryData.exterior}
                  </div>
                </div>

                <h3 className={styles.infoLabel}>Stock Number</h3>
                <div className={styles.infoValue}>{InventoryData.stockNo}</div>

                <h3 className={styles.infoLabel}>Social Handler Name</h3>
                <div className={styles.infoValue}>@toyotacamry_xse24</div>

                <h3 className={styles.infoLabel}>Showroom Platform</h3>
                <div className={styles.checkboxRow}>
                  <div className={styles.checkbox}></div>
                  <div className={styles.checkboxLabel}>CarGurus</div>
                </div>

                <h3 className={styles.infoLabel}>Social Media Accounts</h3>
                <div className={styles.socialAccountsContainer}>
                  <div className={styles.socialAccountsList}>
                    <div className={styles.socialAccountRow}>
                      <div className={styles.socialIcon}>F</div>
                      <div className={styles.socialHandle}>KMK</div>
                    </div>
                    <div className={styles.socialAccountRow}>
                      <div className={styles.socialIcon}>I</div>
                      <div className={styles.socialHandle}>KMK</div>
                    </div>
                    <div className={styles.socialAccountRow}>
                      <div className={styles.socialIcon}>T</div>
                      <div className={styles.socialHandle}>KMK</div>
                    </div>
                  </div>
                  <div className={styles.viewProfileContainer}>
                    <div className={styles.viewProfileWrapper}>
                      <div className={styles.viewProfile}>View Profile</div>
                      <div className={styles.viewProfile}>View Profile</div>
                    </div>
                    <div className={styles.viewProfile}>View Profile</div>
                  </div>
                </div>

                <h3 className={styles.infoLabel}>Proof Check URLs</h3>
                <div className={styles.urlLink}>
                  https://cargurus.com/listing/toyota-camry-xse-2024
                </div>
                <div className={styles.urlLink}>
                  https://facebook.com/carstore_official/posts/123456
                </div>
                <div className={styles.urlLink}>
                  https://instagram.com/p/abc123xyz
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.imageGalleryContainer}>
                <img
                  src={
                    InventoryData.media.filter((file) =>
                      file.type.startsWith("image/")
                    )[0]
                      ? URL.createObjectURL(
                          InventoryData.media.filter((file) =>
                            file.type.startsWith("image/")
                          )[0]
                        )
                      : ""
                  }
                  className={styles.mainImage}
                  alt="Vehicle Images"
                />
                <div className={styles.thumbnailsContainer}>
                  <div className={styles.thumbnailsRow}>
                    {InventoryData.media
                      .filter((file) => file.type.startsWith("image/")) // filters only image files
                      .slice(0, 4)
                      .map((file, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(file)}
                          alt={`Thumbnail ${index + 1}`}
                          className={styles.thumbnailImage}
                          
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
