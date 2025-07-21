import React, { use, useEffect, useState } from "react";
import { Card } from "../ui/Card";
import {
  TrendingUp,
  Car,
  DollarSign,
  CreditCard,
  Banknote,
} from "lucide-react";

import styles from "./SalesMetrics.module.css";

const SalesMetrics = ({ period, totalSale, unitSold, currency }) => {
  const [averagePrice, setAveraePrice] = useState();
  useEffect(()=>{
    const totalsales = totalSale.totalSales||0;
    const unitsold = unitSold.unitsSale||0;
    const averagePrice = (totalsales/unitsold).toFixed(2)||0;
    setAveraePrice(averagePrice)
  },[totalSale, unitSold])

  return (
    <div className={styles.gridContainer}>
      <Card className={styles.card}>
        <div className={styles.cardContent}>
          <div>
            <p className={styles.label}>Total Sales</p>
            <p className={styles.value}>{currency||""} {totalSale?.totalSales||""}</p>
          </div>
          <div className={`${styles.iconWrapper} ${styles.blueIcon}`}>
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.cardContent}>
          <div>
            <p className={styles.label}>Cars Sold</p>
            <p className={styles.value}> {unitSold?.unitsSale||""}</p>
          </div>
          <div className={`${styles.iconWrapper} ${styles.emeraldIcon}`}>
            <Car className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.cardContent}>
          <div>
            <p className={styles.label}>Average Price</p>
            <p className={styles.value}>{currency||""}  {averagePrice||""}</p>
          </div>
          <div className={`${styles.iconWrapper} ${styles.purpleIcon}`}>
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.cardContent}>
          <div>
            <p className={styles.label}>Cash Sales</p>
            <p className={styles.value}> {totalSale?.currency||""} {totalSale?.totalCash || ""}</p>
          </div>
          <div className={`${styles.iconWrapper} ${styles.greenIcon}`}>
            <Banknote className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.cardContent}>
          <div>
            <p className={styles.label}>Credit Sales</p>
            <p className={styles.value}> {currency||""}   {totalSale?.totalCredit ||""}</p>
          </div>
          <div className={`${styles.iconWrapper} ${styles.orangeIcon}`}>
            <CreditCard className="h-6 w-6" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SalesMetrics;
