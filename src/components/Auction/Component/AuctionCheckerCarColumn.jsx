import React from "react";
import styles from './AuctionCheckerCarColumn.module.css'

const AuctionCheckerCarColumn=({name, year, trim, purchaseDate, auction, price, engine, inspect, odo, color, score, tm, ac, startPrice, sold})=>{
    return (
        <div className={styles.tableRow}>
                    <div className={styles.checkboxCell}>
                      <input type="checkbox" />
                    </div>
                    <div className={styles.dataCell}>{name}</div>
                    <div className={styles.dataCell}>{trim}</div>
                    <div className={styles.dataCell}>
                      <div>{purchaseDate}</div>
                      <div>{auction}</div>
                    </div>
                    <div className={styles.dataCell}>
                      <div>{price}</div>
                      <div>{engine}cc</div>
                    </div>
                    <div className={styles.dataCell}>
                      <div>{inspect}</div>
                      <div>{odo} km</div>
                    </div>
                    <div className={styles.dataCell}>
                      <div className={styles.colorSwatch}>{color}</div>
                    </div>
                    <div className={styles.dataCell}>
                      <div className={styles.scoreTag}>{score}</div>
                    </div>
                    <div className={styles.dataCell}>{tm}/{ac}</div>
                    <div className={styles.dataCell}>{startPrice}</div>
                    <div className={styles.dataCell}>{sold}</div>
                  </div>
    )
}
export default AuctionCheckerCarColumn