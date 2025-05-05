import React, { useState, useRef, useEffect } from "react";
import styles from "./Dashboard.module.css";
import StockCard from "./StockCard";
import logo from "../uploads/KM-LOGO.png";
import khushiKenya from "../uploads/ke.png";
import khushiUganda from "../uploads/ug.png";
import khushiTanzania from "../uploads/tz.png";
import ocean from "../uploads/ocean.png";
import ot from "../uploads/ot.png";
import DoughnutChart from "../Resources/Charts/DoughnutChart";
import BarChart from "../Resources/Charts/BarChart";
import DoughnutChartWithLabel from "../Resources/Charts/DoughnutChartWithLabel";
import { CanvasJSChart } from "canvasjs-react-charts";
import RevenueChart from "../Resources/Charts/RevenueChart";
import BasicBarChart from "../Resources/Charts/BasicBarChart";
import ApexChart from "../Resources/Charts/ApexBarChart";
import ApexColumnChart from "../Resources/Charts/ApexColumnChart";
import ApexAreaChart from "../Resources/Charts/ApexAreaChart";
import SixByFourTable from "../Resources/Tables/Tabel";
import ProgressDonutChart from "../Resources/Charts/ProgressDonutChart";

function Dashboard({ onBack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpentype, setIsOpentype] = useState(false);
  const [isOpenstock, setIsOpenStock] = useState(false);

  const [selectedBranch, setSelectedBranch] = useState("Select Branch");
  const [selectedType, setSelectedType] = useState("Select Body Type");
  const [selectedStock, setSelectedStock] = useState("Select Stock");

  const dropdownRef = useRef(null);
  const typeDropdownRef = useRef(null);
  const stockDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdowntype = () => {
    setIsOpentype(!isOpentype);
  };
  const toggleDropdownstock = () => {
    setIsOpenStock(!isOpenstock);
  };

  const handleSelect = (branch) => {
    setSelectedBranch(branch);
    setIsOpen(false);
  };
  const handleSelecttype = (type) => {
    setSelectedType(type);
    setIsOpentype(false);
  };
  const handleSelectstock = (stock) => {
    setSelectedStock(stock);
    setIsOpenStock(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target)
      ) {
        setIsOpentype(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target)
      ) {
        setIsOpenStock(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const recentHeaders = ["OrderId", "Customer", "Car", "Status"];
  const recentData = [
    ["#12345", "Ali", "Toyota Land Crusier", "Complete"],
    ["#12345", "Ali", "Toyota Land Crusier", "Complete"],
    ["#12345", "Ali", "Toyota Land Crusier", "Complete"],
    ["#12345", "Ali", "Toyota Land Crusier", "Complete"],
    ["#12345", "Ali", "Toyota Land Crusier", "Complete"],
  ];
  const topHeaders = ["Stock Code", "Car Name", "Units Sold", "Total Revenue"];
  const topData = [
    ["#12345", "Toyota Land Crusier", 100, 10000],
    ["#12345", "Toyota Land Crusier", 100, 10000],
    ["#12345", "Toyota Land Crusier", 100, 10000],
    ["#12345", "Toyota Land Crusier", 100, 10000],
    ["#12345", "Toyota Land Crusier", 100, 10000],
    ["#12345", "Toyota Land Crusier", 100, 10000],
  ];
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        {/* Stock Cards Section */}
        <div className={styles.stockCardsSection}>
          <StockCard
            logo={logo}
            country="KE"
            stats={[
              { title: "Active Stock", value: "1100" },
              { title: "One The Way", value: "1100" },
              { title: "New Arrival", value: "1100" },
              { title: "Orders in Queue", value: "1100" },
              { title: "Pending Payment", value: "1100" },
            ]}
            showFlag={khushiKenya}
          />

          <div className={styles.stockCardsSection}>
            <StockCard
              logo={logo}
              country="UG"
              stats={[
                { title: "Active Stock", value: "1100" },
                { title: "One The Way", value: "1100" },
                { title: "New Arrival", value: "1100" },
                { title: "Orders in Queue", value: "1100" },
                { title: "Pending Payment", value: "1100" },
              ]}
              showFlag={khushiUganda}
            />
          </div>

          <div className={styles.stockCardsSection}>
            <StockCard
              logo={logo}
              country="TZ"
              showFlag={true}
              stats={[
                { title: "Active Stock", value: "1100" },
                { title: "One The Way", value: "1100" },
                { title: "New Arrival", value: "1100" },
                { title: "Orders in Queue", value: "1100" },
                { title: "Pending Payment", value: "1100" },
              ]}
              showFlag={khushiTanzania}
            />

            <StockCard
              logo={ocean}
              country="OT"
              stats={[
                { title: "Active Stock", value: "1100" },
                { title: "One The Way", value: "1100" },
                { title: "New Arrival", value: "1100" },
                { title: "Orders in Queue", value: "1100" },
                { title: "Pending Payment", value: "1100" },
              ]}
              showFlag={ot}
            />

            <div className={styles.analyticsLink}>
              View Comulative Analytics
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className={styles.filtersSection}>
          <div className={styles.filtersContainer}>
            <div className={styles.filterColumn}>
              <div className={styles.filterBox}>
                <div className={styles.filterLabel}>Select By Branch</div>

                <select className={styles.filterSelect}>
                  <option className={styles.filterPlaceholder}>All</option>
                  <option className={styles.filterPlaceholder}>KMK</option>
                  <option className={styles.filterPlaceholder}>KME</option>
                  <option className={styles.filterPlaceholder}>KMU</option>
                  <option className={styles.filterPlaceholder}>KMT</option>
                </select>

              </div>
            </div>

            <div className={styles.filterColumn} ref={typeDropdownRef}>
              <div className={styles.filterBox}>
                <div className={styles.filterLabel}>Select By Cars</div>

                <select className={styles.filterSelect}>
                  <option className={styles.filterPlaceholder}>SUV</option>
                  <option className={styles.filterPlaceholder}>Sedan</option>
                  <option className={styles.filterPlaceholder}>Coup</option>
                  <option className={styles.filterPlaceholder}>MPV</option>
                  <option className={styles.filterPlaceholder}>Luxury</option>
                </select>
                </div>
            </div>

            <div className={styles.chartColumn}>
             
                <DoughnutChart />
            </div>
          </div>
        </div>

        <div className={styles.analyticsSection}>
          <div className={styles.analyticsRow}>
            {/* Sale Overview Chart*/}
            <div className={styles.analyticsCard}>
            <div className={styles.analyticsTitle}>Sale Overview</div>
              <ApexColumnChart name="" />
            </div>

            {/* Revenue Overview Chart*/}
            <div className={styles.analyticsCard}>
            <div className={styles.analyticsTitle}>Revenue Overview</div>
              <ApexAreaChart />
            </div>

            <div className={styles.analyticsCard}>
              <div className={styles.stockOverview}>
                <div className={styles.analyticsTitle}>Stock Overview</div>

                <div className={styles.stockStats}>
                  <div className={styles.stockLabels}>
                    <div className={styles.stockLabel}>Total Stock</div>
                    <div className={styles.stockLabel}>Available Stock</div>
                    <div className={styles.stockLabel}>Sold Stock</div>
                  </div>
                  <div className={styles.stockValues}>
                    <div className={styles.stockValue}>2,345</div>
                    <div className={styles.stockValue}>1,567</div>
                    <div className={styles.stockValue}>778</div>
                  </div>
                </div>
                <div className={styles.progressBarContainer}>
                  <div
                    className={styles.progressBar}
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className={styles.tablesSection}>
          <div className={styles.tablesRow}>
            <div className={styles.ordersTables}>
              <div className={styles.tableTitle}>Recent Orders</div>
              <SixByFourTable
                row="4"
                column="6"
                headers={recentHeaders}
                data={recentData}
              />
            </div>

            <div className={styles.ordersTable}>
              <div className={styles.horizental}>
                <div className={styles.tableTitles}>Top Selling Cars</div>
                <select className={styles.dropdown}>
                  <option className={styles.dropDownOptions} value="model">
                    Model
                  </option>
                  <option className={styles.dropDownOptions} value="inquires">
                    Inquiries
                  </option>
                  <option className={styles.dropDownOptions} value="online">
                    Online
                  </option>
                  <option className={styles.dropDownOptions} value="broker">
                    Broker
                  </option>
                  <option className={styles.dropDownOptions} value="profit">
                    Profit
                  </option>
                </select>
              </div>
              <SixByFourTable
                row="4"
                column="6"
                headers={topHeaders}
                data={topData}
             
              />
            </div>
          </div>
        </div>

        {/* Financial Cards Section */}
        <div className={styles.financialSection}>
          <div className={styles.financialRow}>
            <div className={styles.financialCard}>
              <div className={styles.financialContent}>
                <ProgressDonutChart percentage="70" color="#00BFFF" />

                <div className={styles.financialInfo}>
                  <div className={styles.financialBadge}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/494c29d3c93b1e33a516b6d208d638fbd43cc416?placeholderIfAbsent=true"
                      alt="Icon"
                      className={styles.badgeIcon}
                    />
                  </div>
                  <div className={styles.financialData}>
                    <div className={styles.financialPercentage}>+20,09 %</div>
                    <div className={styles.financialAmount}>$ 17,090.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.financialFooter}>
                <div className={styles.financialLabel}>TOTAL EXPENSES</div>
              </div>
            </div>

            <div className={styles.financialCard}>
              <div className={styles.financialContent}>
                <ProgressDonutChart percentage="50" color="#1AD598" />
                <div className={styles.financialInfo}>
                  <div className={styles.financialBadge}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/494c29d3c93b1e33a516b6d208d638fbd43cc416?placeholderIfAbsent=true"
                      alt="Icon"
                      className={styles.badgeIcon}
                    />
                  </div>
                  <div className={styles.financialData}>
                    <div className={styles.financialPercentage}>+20,09 %</div>
                    <div className={styles.financialAmount}>$36,897.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.financialFooter}>
                <div className={styles.financialLabel}>MONTHLY EXPENSES</div>
              </div>
            </div>
          </div>

          <div className={styles.financialRow}>
            <div className={styles.financialCard}>
              <div className={styles.financialContent}>
                <ProgressDonutChart percentage="90" color="#4318D1" />

                <div className={styles.financialInfo}>
                  <div className={styles.financialBadge}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d4935a452dbc47dddd9e2199e540257921352a?placeholderIfAbsent=true"
                      alt="Icon"
                      className={styles.badgeIcon}
                    />
                  </div>
                  <div className={styles.financialData}>
                    <div className={styles.financialPercentage}>+20,09 %</div>
                    <div className={styles.financialAmount}>$36,897.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.financialFooter}>
                <div className={styles.financialLabel}>Total Balance</div>
              </div>
            </div>

            <div className={styles.financialCard}>
              <div className={styles.financialContent}>
                <div className={styles.financialChartContainer}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aca9495bf5dd7863b18352736624652793e7b9d4?placeholderIfAbsent=true"
                    alt="Chart"
                    className={styles.financialChart}
                  />
                </div>
                <div className={styles.financialInfo}>
                  <div className={styles.financialBadge}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/494c29d3c93b1e33a516b6d208d638fbd43cc416?placeholderIfAbsent=true"
                      alt="Icon"
                      className={styles.badgeIcon}
                    />
                  </div>
                  <div className={styles.financialData}>
                    <div className={styles.financialPercentage}>+20,09 %</div>
                    <div className={styles.financialAmount}>$36,897.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.financialFooter}>
                <div className={styles.financialLabel}>Current Balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Overview Section */}
        <div className={styles.customerSection}>
          <div style={{ width: "100%", height: "100%" }}>
          <h1 className="text-xl font-bold text-center mt-4">Quick Customer Overview</h1>
            <RevenueChart />
          </div>
        </div>
        <div className={styles.UnitSoldSection}>
          <div className={styles.unitSoldHeader}>
          <h1 className="text-xl font-bold text-center mt-4">Units Solds</h1>
          <select className={styles.dropdownUnit}>
                  <option className={styles.dropDownOptions} value="model">
                    Model
                  </option>
                  <option className={styles.dropDownOptions} value="inquires">
                    Inquiries
                  </option>
                  <option className={styles.dropDownOptions} value="online">
                    Online
                  </option>
                  <option className={styles.dropDownOptions} value="broker">
                    Broker
                  </option>
                  <option className={styles.dropDownOptions} value="profit">
                    Profit
                  </option>
                </select>
              </div>
          <ApexChart />
        </div>

        <button className={styles.backButton} onClick={onBack}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
