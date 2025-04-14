import React from "react";
import styles from "./GarageList.module.css"
import KEFlag from "../../../uploads/ke.png"
import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
function GarageList({onBack, onAddGarage}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.garageList}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Garage List</div>
        <button className={styles.addButton} onClick={onAddGarage}>
          <span className={styles.buttonText} >Add New</span>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                fill="white"
              ></path>
              <path
                d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>No</div>
          <div className={styles.headerCell}>Company Name</div>
          <div className={styles.headerCell}>Country</div>
          <div className={styles.headerCell}>Flag</div>
          <div className={styles.headerCell}>City</div>
          <div className={styles.headerCell}>Garage Name</div>
          <div className={styles.headerCellAction}>Action</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>01</div>
          <div className={styles.companyCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc4035c47344559ebba746d4b72073c3388e833" alt="" className={styles.companyLogo} />
            <span className={styles.companyName}>Khushi Motors</span>
          </div>
          <div className={styles.rowCell}>Kenya</div>
          <div className={styles.flagCell}>
            <img src={KEFlag} alt="" className={styles.flagImage} />
          </div>
          <div className={styles.rowCell}>Mombasa</div>
          <div className={styles.rowCell}>
            Khushi Motors Commercial Vehicle Branch
          </div>
          <div className={styles.actionCell}>
          
    <div
      className="hover-menu-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Trigger Icon */}
      <div className="trigger-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_128_1980)">
            <path d="M23.12 9.88c1.17 1.17 1.17 3.07 0 4.24-1.17 1.17-3.07 1.17-4.24 0-1.17-1.17-1.17-3.07 0-4.24 1.17-1.17 3.07-1.17 4.24 0Z" fill="#A0A3BD"/>
            <path d="M14.12 9.88c1.17 1.17 1.17 3.07 0 4.24-1.17 1.17-3.07 1.17-4.24 0-1.17-1.17-1.17-3.07 0-4.24 1.17-1.17 3.07-1.17 4.24 0Z" fill="#A0A3BD"/>
            <path d="M5.12 9.88c1.17 1.17 1.17 3.07 0 4.24-1.17 1.17-3.07 1.17-4.24 0-1.17-1.17-1.17-3.07 0-4.24 1.17-1.17 3.07-1.17 4.24 0Z" fill="#A0A3BD"/>
          </g>
          <defs>
            <clipPath id="clip0_128_1980">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Hover Icons */}
      {isHovered && (
        <div className="hover-icons">
          <button className="icon-button edit-icon">
            <FaEdit />
          </button>
          <button className="icon-button delete-icon">
            <FaTrash />
          </button>
        </div>
      )}
    </div> 
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>02</div>
          <div className={styles.companyCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc4035c47344559ebba746d4b72073c3388e833" alt="" className={styles.companyLogo} />
            <span className={styles.companyName}>Khushi Express</span>
          </div>
          <div className={styles.rowCell}>Kenya</div>
          <div className={styles.flagCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5457200d19c0e2c937032f51f997519c5b3905a" alt="" className={styles.flagImage} />
          </div>
          <div className={styles.rowCell}>Nairobi</div>
          <div className={styles.rowCell}>Khushi Express</div>
          <div className={styles.actionCell}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_128_1993)">
                  <path
                    d="M23.1213 9.87868C24.2929 11.0502 24.2929 12.9497 23.1213 14.1213C21.9497 15.2929 20.0502 15.2929 18.8787 14.1213C17.7071 12.9497 17.7071 11.0502 18.8787 9.87868C20.0502 8.70711 21.9497 8.70711 23.1213 9.87868Z"
                    fill="#A0A3BD"
                  ></path>
                  <path
                    d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868Z"
                    fill="#A0A3BD"
                  ></path>
                  <path
                    d="M5.12131 9.87868C6.29288 11.0502 6.29288 12.9497 5.12131 14.1213C3.94974 15.2929 2.05024 15.2929 0.878676 14.1213C-0.292892 12.9497 -0.292892 11.0502 0.878676 9.87868C2.05024 8.70711 3.94974 8.70711 5.12131 9.87868Z"
                    fill="#A0A3BD"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_128_1993">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>03</div>
          <div className={styles.companyCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc4035c47344559ebba746d4b72073c3388e833" alt="" className={styles.companyLogo} />
            <span className={styles.companyName}>Khushi Pak</span>
          </div>
          <div className={styles.rowCell}>Pakistan</div>
          <div className={styles.flagCell}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5457200d19c0e2c937032f51f997519c5b3905a" alt="" className={styles.flagImage} />
          </div>
          <div className={styles.rowCell}>Gujranwala</div>
          <div className={styles.rowCell}>Khushi Pakistan</div>
          <div className={styles.actionCell}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_128_2006)">
                  <path
                    d="M23.1213 9.87868C24.2929 11.0502 24.2929 12.9497 23.1213 14.1213C21.9497 15.2929 20.0502 15.2929 18.8787 14.1213C17.7071 12.9497 17.7071 11.0502 18.8787 9.87868C20.0502 8.70711 21.9497 8.70711 23.1213 9.87868Z"
                    fill="#A0A3BD"
                  ></path>
                  <path
                    d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868Z"
                    fill="#A0A3BD"
                  ></path>
                  <path
                    d="M5.12131 9.87868C6.29288 11.0502 6.29288 12.9497 5.12131 14.1213C3.94974 15.2929 2.05024 15.2929 0.878676 14.1213C-0.292892 12.9497 -0.292892 11.0502 0.878676 9.87868C2.05024 8.70711 3.94974 8.70711 5.12131 9.87868Z"
                    fill="#A0A3BD"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_128_2006">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        <button className={styles.paginationButtonDisabled}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 11.9999C7.99925 11.8683 8.02448 11.7379 8.07424 11.616C8.12401 11.4942 8.19733 11.3834 8.29002 11.2899L14.2901 5.28994C14.4784 5.10164 14.7338 4.99585 15.0001 4.99585C15.2664 4.99585 15.5218 5.10164 15.7101 5.28994C15.8984 5.47824 16.0042 5.73364 16.0042 5.99994C16.0042 6.26624 15.8984 6.52164 15.7101 6.70994L10.41 11.9999L15.7001 17.2899C15.8639 17.4812 15.9495 17.7273 15.9398 17.979C15.93 18.2307 15.8257 18.4694 15.6476 18.6475C15.4695 18.8256 15.2308 18.9299 14.9791 18.9396C14.7274 18.9494 14.4814 18.8638 14.2901 18.6999L8.29002 12.6999C8.10527 12.5137 8.00112 12.2623 8.00002 11.9999Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <button className={styles.paginationButtonActive}>1</button>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
        <button className={styles.paginationButtonNav}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0002 12.0001C16.0009 12.1317 15.9757 12.2621 15.9259 12.384C15.8762 12.5058 15.8028 12.6166 15.7102 12.7101L9.71018 18.7101C9.52188 18.8984 9.26649 19.0042 9.00018 19.0042C8.73388 19.0042 8.47849 18.8984 8.29018 18.7101C8.10188 18.5218 7.99609 18.2664 7.99609 18.0001C7.99609 17.7338 8.10188 17.4784 8.29018 17.2901L13.5902 12.0001L8.30018 6.71005C8.13635 6.51875 8.05075 6.27268 8.06047 6.021C8.07019 5.76933 8.17452 5.53059 8.35262 5.35249C8.53071 5.1744 8.76945 5.07007 9.02113 5.06035C9.27281 5.05062 9.51888 5.13623 9.71018 5.30006L15.7102 11.3001C15.8949 11.4863 15.999 11.7377 16.0002 12.0001Z"
              fill="#A0A3BD"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
}

export default GarageList;
