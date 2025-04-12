import React, { useState } from "react";
import styles from "./InventoryGridView.module.css";

const InventoryGridView = ({ onBack, onNaigateToListView}) => {
  const [selectedShowrooms, setSelectedShowrooms] = useState([]);

  // Sample car data - in a real application, this would come from props or an API
  const carData = [
    {
      id: 1,
      name: "Mercedes Benz E200",
      stockNo: "A23-429",
      price: "$35000M",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/414bb41e04167675a228b12400ee66bb0100e52b", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7"],
    },
    {
      id: 2,
      name: "BMW 3 Series",
      stockNo: "B45-129",
      price: "$42000M",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/414bb41e04167675a228b12400ee66bb0100e52b", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7"],
    },
    {
      id: 3,
      name: "Audi A4",
      stockNo: "C67-839",
      price: "$38000M",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/414bb41e04167675a228b12400ee66bb0100e52b", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7"],
    },
    {
      id: 4,
      name: "Lexus ES",
      stockNo: "D89-549",
      price: "$45000M",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/414bb41e04167675a228b12400ee66bb0100e52b", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7", "https://cdn.builder.io/api/v1/image/assets/TEMP/26ea268e66403723e23cf5650e3a55a7e90837e7"],
    },
  ];

  // Sample showroom data
  const showrooms = [
    { id: 1, name: "Khushi Motors Kenya" },
    { id: 2, name: "Khushi Motors Express" },
    { id: 3, name: "Khushi Motors UG" },
    { id: 4, name: "Khushi Motors TZ" },
  ];

  const toggleShowroom = (id) => {
    if (selectedShowrooms.includes(id)) {
      setSelectedShowrooms(
        selectedShowrooms.filter((showroomId) => showroomId !== id),
      );
    } else {
      setSelectedShowrooms([...selectedShowrooms, id]);
    }
  };

  const handleLastUpdate = (carId) => {
    console.log(`Last update for car ID: ${carId}`);
    // In a real application, this would call an API to update the car information
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>Inventory/Garage/Inventory Grid</div>
          <div className={styles.actions}>
            <button className={styles.btnsold}>Mark as Sold</button>
            <button className={styles.btnGray} onClick={onNaigateToListView}>
              <span>List View</span>
              
            </button>
            <div className={styles.profileImage}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/990c6d00dfc375c9832b69c12053c7fbbaebd110" alt="Profile" />
            </div>
          </div>
        </div>

        <div className={styles.filterButtons}>
          <button className={styles.filterBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
                fill="black"
              />
            </svg>
            <span>Sort By Model Year</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6L8 10L12 6" fill="black" />
            </svg>
          </button>
          <button className={styles.filterBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 15.4L8.23992 17.67L9.23992 13.39L5.91992 10.51L10.2999 10.13L11.9999 6.09998L13.7099 10.14L18.0899 10.52L14.7699 13.4L15.7699 17.68L11.9999 15.4Z"
                fill="black"
              />
            </svg>
            <span>Sort by Grade</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6L8 10L12 6" fill="black" />
            </svg>
          </button>
          <button className={styles.filterBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7V9H22V7L12 2ZM4 11V22H20V11H4ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"
                fill="black"
              />
            </svg>
            <span>Sort by Showroom</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6L8 10L12 6" fill="black" />
            </svg>
          </button>
          <button className={styles.filterBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_128_2144)">
                <path
                  d="M12.0004 16C10.3404 16 9.00043 14.66 9.00043 13C9.00043 11.34 10.3404 10 12.0004 10C13.6604 10 15.0004 11.34 15.0004 13C15.0004 14.66 13.6604 16 12.0004 16ZM20.0004 8.69V4H15.3104L12.0004 0.690002L8.69043 4H4.00043V8.69L0.69043 12L4.00043 15.31V20H8.69043L12.0004 23.31L15.3104 20H20.0004V15.31L23.3104 12L20.0004 8.69Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_128_2144">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Sort by ODO</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6L8 10L12 6" fill="black" />
            </svg>
          </button>
        </div>

        <div className={styles.showroomFilters}>
          {showrooms.map((showroom) => (
            <div key={showroom.id} className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id={`showroom-${showroom.id}`}
                checked={selectedShowrooms.includes(showroom.id)}
                onChange={() => toggleShowroom(showroom.id)}
                className={styles.checkbox}
              />
              <label
                htmlFor={`showroom-${showroom.id}`}
                className={styles.checkboxLabel}
              >
                {showroom.name}
              </label>
            </div>
          ))}
        </div>

        <div className={styles.carGrid}>
          {carData.map((car) => (
            <div key={car.id} className={styles.carCard}>
              <img
                src={car.images[0]}
                alt={car.name}
                className={styles.carMainImage}
              />
              <div className={styles.carDetails}>
                <div className={styles.carName}>{car.name}</div>
                <div className={styles.stockInfo}>
                  <div className={styles.stockLabel}>Stock no:</div>
                  <div className={styles.stockValue}>{car.stockNo}</div>
                </div>
                <div className={styles.priceTag}>{car.price}</div>
                <div className={styles.thumbnailGrid}>
                  {car.images.slice(1, 5).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className={styles.thumbnail}
                    />
                  ))}
                </div>
                <button
                  className={styles.updateButton}
                  onClick={() => handleLastUpdate(car.id)}
                >
                  Last Update Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryGridView;
