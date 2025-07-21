import React, { useState, useEffect } from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import SalesMetrics from "./Componenet/SalesMetrics";
import SalesChart from "./Componenet/SalesChart";
import TopSellingModels from "./Componenet/TopSellingModels";
import MonthlyChart from "./Componenet/MonthlyChart";
import UnitsChart from "./Componenet/UnitsChart";
import styles from "./SaleDashboard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const [showroom, setShowroom] = useState([]);
  const [selectedShowroom, setSelectedShowroom] = useState("1");
  const [saleAmount, setSaleAmount] = useState([]);
  const [carSold, setCarSold] = useState([]);
  const [monthWiseSale, setMonthWiseSale] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [topSellingCars, setTopSellingCars] = useState([]);
  const [monthlyUnitSale, setMonthlyUnitSale] = useState([]);
 
  
  const formatMonth = (yearMonth) => {
    const date = new Date(yearMonth + "-01"); // "2025-01" → "2025-01-01"
    return date.toLocaleString("default", { month: "short" }); // → "Jan"
  };
  const fetchGarage = async () => {
    try {
      const data = await fetch(`${API_URL}/garage`);
      const garage = await data.json();
      setShowroom(garage);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGarage();
  }, []);
  const handleShowroomChange = (id) => {
    setSelectedShowroom(id);
  };
  const handleTotalSales = async (selectedShowroom, selectedPeriod) => {
    console.log(selectedPeriod)
    if (selectedShowroom === "0") return;
    try {
      const data = await fetch(
        `${API_URL}/totalSales/${selectedShowroom}?period=${selectedPeriod}`
      );

      const totalSales = await data.json();
      setSaleAmount(totalSales.sales[0]);
      setCurrency(totalSales.currency);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUnitSold = async (selectedShowroom,selectedPeriod) => {
    if (selectedShowroom === "0") return;
    try {
      const data = await fetch(`${API_URL}/getCarSold/${selectedShowroom}?period=${selectedPeriod}`);
      const unitSold = await data.json();
      setCarSold(unitSold.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const FetchMonthlyWiseSale = async (selectedShowroom) => {
    if (selectedShowroom === "0") return;
    const res = await fetch(`${API_URL}/getMonthWiseSale/${selectedShowroom}`);
    const data = await res.json();
    const formatted = data.map((item) => ({
      ...item,
      month: formatMonth(item.yearMonth),
      sales: Number(item.totalSales),
    }));
    setMonthWiseSale(formatted);
  };

  const fetchTopSellingCar = async (selectedShowroom) => {
    if (selectedShowroom === "0") return;
    try {
      const res = await fetch(`${API_URL}/topSellingCars/${selectedShowroom}`);
      const data = await res.json();
      setTopSellingCars(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMonthWiseUnitSale = async (selectedShowroom) => {
    if (selectedShowroom === "0") return;
    try {
      const res = await fetch(
        `${API_URL}/getMonthlyUnitSale/${selectedShowroom}`
      );
      const data = await res.json();
      const formatted = data.map((item) => ({
        ...item,
        month: formatMonth(item.yearMonth),
      }));
      setMonthlyUnitSale(formatted);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleTotalSales(selectedShowroom, selectedPeriod);
    handleUnitSold(selectedShowroom,selectedPeriod);
    FetchMonthlyWiseSale(selectedShowroom);
    fetchTopSellingCar(selectedShowroom);
    fetchMonthWiseUnitSale(selectedShowroom);
  }, [selectedShowroom, selectedPeriod]);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Sales Dashboard</h1>
          <div className={styles.displayShowroom}>
            <h3 className={styles.cardTitle}>Select Showroom</h3>
            <select
              value={selectedShowroom}
              onChange={(e) => handleShowroomChange(e.target.value)}
              className={styles.select}
            >
              {showroom.map((row) => (
                <option key={row.id} value={row.id}>
                  {row.name}
                </option>
              ))}
            </select>

            <div className={styles.buttonGroup}>
              {["Weekly", "Monthly", "Yearly"].map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  onClick={() => setSelectedPeriod(period)}
                  className={
                    selectedPeriod === period
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : ""
                  }
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Metrics */}
        <SalesMetrics
          period={selectedPeriod}
          totalSale={saleAmount}
          unitSold={carSold}
          currency={currency}
        />

        {/* Charts Section */}
        <div className={`${styles.grid} ${styles.gridTwoCols}`}>
          {/* Sales Trend */}
          <Card className={styles.card}>
            <h3 className={styles.cardTitle}>Sales Trend</h3>
            <SalesChart data={monthWiseSale} currency={currency} />
          </Card>

          {/* Top Selling Models */}
          <Card className={styles.card}>
            <h3 className={styles.cardTitle}>Top Selling Models</h3>
            <TopSellingModels models={topSellingCars} />
          </Card>
        </div>

        {/* New Charts Section */}
        <div className={`${styles.grid} ${styles.gridTwoCols}`}>
          {/* Monthly Sales Chart */}
          <Card className={styles.card}>
            <h3 className={styles.cardTitle}>Monthly Sales</h3>
            <MonthlyChart data={monthWiseSale} currency={currency} />
          </Card>

          {/* Units Sold Chart */}
          <Card className={styles.card}>
            <h3 className={styles.cardTitle}>Units Sold</h3>
            <UnitsChart data={monthlyUnitSale} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
