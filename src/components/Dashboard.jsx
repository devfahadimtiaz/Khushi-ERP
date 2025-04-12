import React, { useState, useRef, useEffect } from "react";
import styles from "./Dashboard.module.css";
import StockCard from "./StockCard";
import logo from "../uploads/KM-LOGO.png";
import khushiKenya from '../uploads/ke.png'
import khushiUganda from '../uploads/ug.png'
import khushiTanzania from '../uploads/tz.png'
import ocean from '../uploads/ocean.png'
import ot from '../uploads/ot.png'
import DoughnutChart from './Charts/DoughnutChart';
import BarChart from './Charts/BarChart';
import DoughnutChartWithLabel from './Charts/DoughnutChartWithLabel';
import { CanvasJSChart } from 'canvasjs-react-charts';
import RevenueChart from './Charts/RevenueChart';
import BasicBarChart from "./Charts/BasicBarChart";
import ApexChart from "./Charts/ApexBarChart";
import ApexColumnChart from "./Charts/ApexColumnChart";
import ApexAreaChart from "./Charts/ApexAreaChart";
import SixByFourTable from "./Tables/Tabel";
import ProgressDonutChart from "./Charts/ProgressDonutChart"

function Dashboard({ onBack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpentype, setIsOpentype] = useState(false);
  const [isOpenstock, setIsOpenStock] = useState(false);
  
  const [selectedBranch, setSelectedBranch] = useState('Select Branch');
  const [selectedType, setSelectedType] = useState('Select Body Type');
  const [selectedStock, setSelectedStock] = useState('Select Stock');

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
        setIsOpentype(false);
      }
    };
  

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
        setIsOpenStock(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const recentHeaders=["OrderId","Customer", "Car", "Status"]
  const recentData=[["#12345","Ali","Toyota Land Crusier","Complete"],
  ["#12345","Ali","Toyota Land Crusier","Complete"],["#12345","Ali","Toyota Land Crusier","Complete"],["#12345","Ali","Toyota Land Crusier","Complete"],["#12345","Ali","Toyota Land Crusier","Complete"]]
  const topHeaders=["Stock Code","Car Name","Units Sold","Total Revenue"]
  const topData=[["#12345","Toyota Land Crusier",100,10000], ["#12345","Toyota Land Crusier",100,10000], ["#12345","Toyota Land Crusier",100,10000], ["#12345","Toyota Land Crusier",100,10000], ["#12345","Toyota Land Crusier",100,10000], ["#12345","Toyota Land Crusier",100,10000],]
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

        <div className={styles.filterSelect} onClick={toggleDropdown}>
          <div className={styles.filterPlaceholder}>{selectedBranch}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3770dd2f924e94d1065c7e7a0dacb0a845d92e7?placeholderIfAbsent=true"
            alt="Dropdown arrow"
            className={styles.dropdownArrow}
          />
        </div>

        {isOpen && (
          <div className={styles.dropdownList}>
            {['KMK', 'KME', 'KMU', 'KMT'].map((branch) => (
              <div
                key={branch}
                className={styles.dropdownItem}
                onClick={() => handleSelect(branch)}
              >
                {branch}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    <div className={styles.filterColumn} ref={typeDropdownRef}>
      <div className={styles.filterBox}>
        <div className={styles.filterLabel}>Select By Cars</div>

        <div className={styles.filterSelect} onClick={toggleDropdowntype}>
          <div className={styles.filterPlaceholder}>{selectedType}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0165eaf2f16f741fcbfac567f1becbafffafdb34?placeholderIfAbsent=true"
            alt="Dropdown arrow"
            className={styles.dropdownArrow}
          />
        </div>

        {isOpentype && (
          <div className={styles.dropdownList}>
            {['SUV', 'Sedan', 'Coup', 'MPV'].map((type) => (
              <div
                key={type}
                className={styles.dropdownItem}
                onClick={() => handleSelecttype(type)}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

            <div className={styles.chartColumn}>
              <div className="App">
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>

        
        <div className={styles.analyticsSection}>
          <div className={styles.analyticsRow}>
            
            {/* Sale Overview Chart*/}
            <div className={styles.analyticsCard}>
              <ApexColumnChart />
            </div>

            {/* Revenue Overview Chart*/}
            <div className={styles.analyticsCard}>
              <ApexAreaChart/>
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
                    <div className={styles.periodSelector} onClick={toggleDropdownstock}>
                      <div className={styles.periodText}>{selectedStock}</div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f8dccfdecc122af481de197ec5bec0d29f7f7b5?placeholderIfAbsent=true"
                        alt="Dropdown"
                        className={styles.periodDropdown}
                      />
                      
                    </div>
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
            <div className={styles.ordersTable}>
              <div className={styles.tableTitle}>Recent Orders</div>
                <SixByFourTable row= '4' column= '6'  headers={recentHeaders} data= {recentData}/>
              </div>
            
              <div className={styles.ordersTable}>
                <div className={styles.tableTitle}>Top Selling Cars</div>
                  <SixByFourTable row= '4' column= '6' headers={topHeaders} data= {topData}/>
              </div>
          </div>
        </div>

        {/* Financial Cards Section */}
        <div className={styles.financialSection}>
          <div className={styles.financialRow}>
            <div className={styles.financialCard}>
              <div className={styles.financialContent}>
                <ProgressDonutChart percentage="70" color="#00BFFF"/>
                
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
              <ProgressDonutChart percentage="50" color="#1AD598"/>
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
                
                <ProgressDonutChart percentage="90" color="#1AD598"/>
                
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
            <div style={{ width: '100%', height: '100%' }}>
              <RevenueChart />
            </div>

            <h1 className="text-2xl font-bold text-center mt-4">Units Solds</h1>
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
