import React, { useState, useEffect } from "react";
import styles from "./Inventory.module.css";

import {
  Car,
  Package,
  TrendingUp,
  DollarSign,
  Bell,
  Search,
  Plus,
} from "lucide-react";
import LogoSlider from "./LogoSlider";
import StockOverview from "./StockOverview";
import FilterSystem from "./FilterSystem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StatsCard from "./Component/StatsCard";
import VehicleTable from "./Component/VehicleTable";
import RecentActivity from "./Component/RecentActivity";
const API_URL = process.env.REACT_APP_API_URL;
const Inventory = ({ onBack, onNavigateToAddStock }) => {
  const [showroomdata, setShowroomData] = useState([]);
  const navigate = useNavigate();
  const [selectedShowroom, setSelectedShowroom] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const [totalCars, setTotalCars] = useState();
  const [stock, setStock] = useState();
  const [showroomName, setShowroomName] = useState();
  const [soldStock, setSoldStock] = useState();
  const [totalValues, setTotalValues] = useState({});
  const [make, setMake] = useState([]);
  const [selectedMake, setSelectedMake] = useState("All Makers");
  const [makeData, setMakeData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [userInfo, setUserInfo] = useState([]);

    //fetch User Session
 const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
        console.log(data)
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(()=>{
    if(userInfo){
      setSelectedShowroom(userInfo.showroom)
    }
  },[userInfo])

  //Formate Amount into SHort formate
  function formatAmount(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
    return num;
  }

  const fetchShowroom = async () => {
    try {
      const response = await fetch(`${API_URL}/showroomLogo`);
      const data = await response.json();
      setShowroomData(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    if (selectedShowroom) {
      handleRecentActivities();
      handleVehicles();
    }
  }, [selectedShowroom]);

  //Fetch InStock
  const handleInStock = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/inStock/${selectedShowroom}`
      );
      const data = response.data;
      setStock(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    if (selectedShowroom) {
      handleInStock();
    }
  }, [selectedShowroom]);
  const handleView = (row)=>{
    navigate(`/VehicleDetails/${row.id}`)
  }

  //fetch Instock
  const handleSold = async () => {
    try {
      const response = await axios.get(`${API_URL}/sold/${selectedShowroom}`);
      const data = response.data;
      setSoldStock(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    if (selectedShowroom) {
      handleSold();
    }
  }, [selectedShowroom]);

  //Fetech Recent ACtivities
  const handleRecentActivities = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/recentActivity/${selectedShowroom}`
      );
      setRecentActivities(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  //Fetch Showrrom name
  const handleShowroomName = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/showroomName/${selectedShowroom}`
      );
      setShowroomName(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    if (selectedShowroom) {
      handleShowroomName();
      handleTotalValue();
    }
  }, [selectedShowroom]);

  //fetch Total Value
  const handleTotalValue = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/totalvalue/${selectedShowroom}`
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setTotalValues(response.data[0]); // 👈 Set the first item of the array
      } else {
        setTotalValues({ totalValue: 0, currency: "" }); // fallback
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    if (selectedShowroom) {
      handleTotalValue();
    }
  }, [selectedShowroom]);

  //handleSelect Showrroom
  const handleSelectedShowroom = (showroomId) => {
    setSelectedShowroom(showroomId);
  };

  useEffect(() => {
    fetchShowroom();
  }, []);

  const handleAddSTock = () => {
    navigate("/AddStock");
  };
  const handleTotalCars = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/totalvehicles/${selectedShowroom}`
      );
      const data = response.data;
      setTotalCars(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (selectedShowroom) {
      handleTotalCars();
    }
  }, [selectedShowroom]);

  //fetch Make
  const handleMake = async () => {
    try {
      const response = await axios.get(`${API_URL}/distinctMake`);
      const data = response.data;
      setMake(data);
    } catch {
      console.log("Error fetching data");
    }
  };
  useEffect(() => {
    handleMake();
  }, []);

  //Get Vehcicles
  const handleVehicles = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/ShowroomWiseVehicle/${selectedShowroom}`
      );
      setMakeData(response.data);
    } catch {
      console.log("Error fetching data");
    }
  };

  const makerHeaders = [
    "Sr",
    "make",
    "Model",
    "Year",
    "Stock",
    "Price",
    "Status",
  ];




  const filteredMakeData =
    selectedMake === "All Makers"
      ? makeData
      : makeData.filter((item) => item.make === selectedMake);
  const tableData = filteredMakeData.map((item, index) => ({
    sr: index + 1,
    id:item.id,
    make: item.make,
    model: item.model,
    year: item.year,
    stock: item.stock_no,
    price: item.total_price_after_expense,
    status: item.status,
  }));
  const filterStatusData =
    selectedStatus === "All Status"
      ? makeData
      : makeData.filter((item) => item.status === selectedStatus);
  const StatusTable = filterStatusData.map((item, index) => [
    index + 1,
    item.make,
    item.model,
    item.year,
    item.updated_at,
    item.status,
  ]);
  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.topActions}>
        <button className={styles.addButton} onClick={() => handleAddSTock()}>
          Add Vehicle
        </button>
       
      </div>
      <div className={styles.viewSection}>
        <div className={styles.viewControls}>
          <div className={styles.viewAllImage}>
            <LogoSlider
              data={showroomdata}
              handleShowroomId={handleSelectedShowroom}
              selectedShowroom={selectedShowroom}
            />
          </div>
        </div>
        <div className={styles.statsCards}>
          <StatsCard
            title="Total Vehicles"
            value={totalCars}
            icon={Car}
            trend={{ value: 8.2, isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="In Stock"
            value={stock}
            icon={Package}
            trend={{ value: 2.4, isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Sold"
            value={soldStock}
            icon={TrendingUp}
            trend={{ value: 12.5, isPositive: true }}
            color="purple"
          />
          <StatsCard
            title="Total Value"
            value={formatAmount(totalValues?.totalValue || 0)}
            currency={totalValues?.currency || ""}
            icon={DollarSign}
            trend={{ value: 4.1, isPositive: true }}
            color="orange"
          />
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statsColumn}>
            <StockOverview showroomId={selectedShowroom} />
          </div>

          <div className={styles.recentActivityCard}>
            <RecentActivity activities={recentActivities} />
          </div>
        </div>

        <div className={styles.inventoryTable}>
          <VehicleTable
            data={tableData}
            currency={totalValues.currency}
            headings={makerHeaders}
            onView={(row) => handleView(row)}
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
