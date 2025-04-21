import React from "react";
import styles from "./StockDetail.module.css";

const StockDetail = () => {
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
                    Toyota Camry 2024 XSE
                  </div>
                  <div className={styles.vehicleColor}>Pearl White</div>
                </div>

                <h3 className={styles.infoLabel}>Stock Number</h3>
                <div className={styles.infoValue}>ST4789</div>

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
                  src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/f084e8482adbc6ea75461014cc2702a1463afe79?placeholderIfAbsent=true"
                  className={styles.mainImage}
                  alt="Toyota Camry main view"
                />
                <div className={styles.thumbnailsContainer}>
                  <div className={styles.thumbnailsRow}>
                    <div className={styles.thumbnailColumn}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/b8b24e51897812240221c4d225066917a4f145a4?placeholderIfAbsent=true"
                        className={styles.thumbnailImage}
                        alt="Toyota Camry thumbnail 1"
                      />
                    </div>
                    <div className={styles.thumbnailColumn}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/e984043ebd721a106e17312f8cc79df110d304bf?placeholderIfAbsent=true"
                        className={styles.thumbnailImage}
                        alt="Toyota Camry thumbnail 2"
                      />
                    </div>
                    <div className={styles.thumbnailColumn}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/3baf1dad36c34c477fc12fa9352abd860ec94ec4?placeholderIfAbsent=true"
                        className={styles.thumbnailImage}
                        alt="Toyota Camry thumbnail 3"
                      />
                    </div>
                    <div className={styles.thumbnailColumn}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/4ad820e63db86088e6d29694f76933c4399d19ff?placeholderIfAbsent=true"
                        className={styles.thumbnailImage}
                        alt="Toyota Camry thumbnail 4"
                      />
                    </div>
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
