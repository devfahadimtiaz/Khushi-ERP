import react from 'react';
import styles from './AuctionCarGridView.module.css'

const AuctionCarGridView = ({name, year, bid, engine, engineType, fuel, transmission, grade, endDate, odo, color})=>{

    return(
         <div className={styles.carCard}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/a4a87f8975c49413829c2604755d7b9e23b5acc3?placeholderIfAbsent=true" alt="Car image" className={styles.carImage} />
                  <div className={styles.carDetails}>
                    <div className={styles.detailsLeft}>
                      <h2 className={styles.carName}>{name}</h2>
                      <p className={styles.carYear}>{year}</p>
                      <p className={styles.bidLabel}>Current Bid:</p>
                      <p className={styles.bidAmount}>¥{bid}</p>
                      <div className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/b48d266559bcfa42d050547642e2f9e74f901e36?placeholderIfAbsent=true" alt="Engine" className={styles.specIcon} />
                        <span className={styles.specText}>{engine} {engineType}</span>
                      </div>
                      <div className={styles.specItem}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/26125d2bfc5331513875ff4be9e148898e48293c?placeholderIfAbsent=true"
                          alt="Transmission"
                          className={styles.specIcon}
                        />
                        <span className={styles.specText}>{transmission}</span>
                      </div>
                    </div>
                    <div className={styles.detailsRight}>
                      <div className={styles.gradeContainer}>
                        <span className={styles.gradeLabel}>{grade} Grade</span>
                        <p className={styles.auctionEndLabel}>Auction Ends:</p>
                        <p className={styles.auctionEndDate}>{endDate}</p>
                      </div>
                      <div className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/07eda8074bfd475dc2fdcd77b2e285136df77232?placeholderIfAbsent=true" alt="Mileage" className={styles.specIcon} />
                        <span className={styles.specText}>{odo} km</span>
                      </div>
                      <div className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/2a0cf37b5967f01a95793b5acaf49f4ec26459c4?placeholderIfAbsent=true" alt="Color" className={styles.specIcon} />
                        <span className={styles.specText}>{color}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.viewDetailsButton}>View Details</button>
                    <button className={styles.cposButton}>C-POS</button>
                  </div>
                </div>
    );
};

export default AuctionCarGridView;