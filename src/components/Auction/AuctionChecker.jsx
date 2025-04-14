import React, {useState} from "react";
import styles from "./AuctionChecker.module.css";
import AuctionCheckerCarColumn from "./Component/AuctionCheckerCarColumn";

const AuctionChecker = () => {
  const [price, setPrice] = useState(5000);
  const reset = ()=>{
    setPrice(0);
  }

  const cars=[
    {
          name:"Toyota Land Crusier",
          year: "2023",
          trim: "CT/ct200h",
          purchaseDate: "15 April 2023",
          auction: "USS",
          price: "60000",
          engine: "2400",
          inspect: "Jan 2024",
          odo: "2400",
          color: "Pearl White",
          score: "5.4BB",
          tm: "TM",
          ac: "AC",
          startPrice: "900,000",
          sold:"1,600,000"
  },
  {
    name:"Toyota Land Crusier",
          year: "2023",
          trim: "CT/ct200h",
          purchaseDate: "15 April 2023",
          auction: "USS",
          price: "60000",
          engine: "2400",
          inspect: "Jan 2024",
          odo: "2400",
          color: "Pearl White",
          score: "5.4BB",
          tm: "TM",
          ac: "AC",
          startPrice: "900,000",
          sold:"1,600,000"
  },
  {
    name:"Toyota Land Crusier",
          year: "2023",
          trim: "CT/ct200h",
          purchaseDate: "15 April 2023",
          auction: "USS",
          price: "60000",
          engine: "2400",
          inspect: "Jan 2024",
          odo: "2400",
          color: "Pearl White",
          score: "5.4BB",
          tm: "TM",
          ac: "AC",
          startPrice: "900,000",
          sold:"1,600,000"
  },
  {
    name:"Toyota Land Crusier",
    year: "2023",
    trim: "CT/ct200h",
    purchaseDate: "15 April 2023",
    auction: "USS",
    price: "60000",
    engine: "2400",
    inspect: "Jan 2024",
    odo: "2400",
    color: "Pearl White",
    score: "5.4BB",
    tm: "TM",
    ac: "AC",
    startPrice: "900,000",
    sold:"1,600,000"
  }
]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>Inventory/Auction Checker</div>
        <div className={styles.priceRangeContainer}>
          <div className={styles.priceRangeLabel}>Price: ${price}
      </div>
        
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: '100%' }}
      />
        </div>
        <button className={styles.resetButton}
        onClick={reset}>
          Reset All
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.resetIcon}
          >
            <path
              d="M16.8799 20.25C14.9599 20.25 13.1499 19.23 12.1699 17.58C11.6499 16.74 11.3799 15.76 11.3799 14.75C11.3799 11.72 13.8499 9.25 16.8799 9.25C19.9099 9.25 22.3799 11.72 22.3799 14.75C22.3799 15.76 22.0999 16.74 21.5799 17.59C20.6099 19.23 18.8099 20.25 16.8799 20.25Z"
              fill="black"
            ></path>
          </svg>
        </button>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.sortButtonsContainer}>
          <button className={styles.sortButton}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.filterIcon}
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="white"
              ></path>
            </svg>
            <span>Sort by Model Year</span>
            <div className={styles.arrowContainer}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowDown}
              >
                <path
                  d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowUp}
              >
                <path
                  d="M5.25 10.5L9 6.75L12.75 10.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
            </div>
          </button>
          <button className={styles.sortButton}>
            <span>Sort by Trim</span>
            <div className={styles.arrowContainer}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowDown}
              >
                <path
                  d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowUp}
              >
                <path
                  d="M5.25 10.5L9 6.75L12.75 10.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
            </div>
          </button>
          <button className={styles.sortButton}>
            <span>Sort by Price</span>
            <div className={styles.arrowContainer}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowDown}
              >
                <path
                  d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowUp}
              >
                <path
                  d="M12.75 10.5L9 6.75L5.25 10.5H12.75Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
            </div>
          </button>
          <button className={styles.sortButton}>
            <span>Sort by Trim</span>
            <div className={styles.arrowContainer}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowDown}
              >
                <path
                  d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowUp}
              >
                <path
                  d="M5.25 10.5L9 6.75L12.75 10.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
            </div>
          </button>
          <button className={styles.sortButton}>
            <span>Sort by Trim</span>
            <div className={styles.arrowContainer}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowDown}
              >
                <path
                  d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowUp}
              >
                <path
                  d="M5.25 10.5L9 6.75L12.75 10.5H5.25Z"
                  fill="white"
                  fillOpacity="0.5"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.checkboxCell}>
              <input type="checkbox" />
            </div>
            <div className={styles.headerCell}>Model/Year</div>
            <div className={styles.headerCell}>Trim</div>
            <div className={styles.headerCell}>Purchased Date/Auction</div>
            <div className={styles.headerCell}>Price/CC</div>
            <div className={styles.headerCell}>Inspect/ODO</div>
            <div className={styles.headerCell}>Color</div>
            <div className={styles.headerCell}>Score</div>
            <div className={styles.headerCell}>TM/AC</div>
            <div className={styles.headerCell}>Start Price</div>
            <div className={styles.headerCell}>Sold</div>
          </div>
         
          {cars.map((cars, index)=>(
            <AuctionCheckerCarColumn key={index} {...cars}/>
          ))}
        </div>
        <button className={styles.loadMoreButton}>Load More</button>
      </div>
      </div>
    </div>
  );
};

export default AuctionChecker;
