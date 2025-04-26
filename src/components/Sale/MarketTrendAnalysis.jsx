import React from "react";
import styles from "./MarketTrendAnalysis.module.css";
import HorizontalBarChart from "../../Resources/Charts/ApexHorizentalBarChart"
import ProgressDonutChart from "../../Resources/Charts/ProgressDonutChart";

const MarketTrendAnalysis = () => {

  const salesData = [400, 430, 448, 470];
  const countries = [
    "North", "South", "East", "West"
  ];
  const total = salesData.reduce((sum, val) => sum + val, 0);

  const percentageData = salesData.map(val => parseFloat(((val / total) * 100).toFixed(2)));

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.title}>Market Trend Analysis</div>
          <div className={styles.filterOptions}>
            <select className={styles.makeSelector}>
              <option>All Makes</option>
              <option>Make 1</option>
              <option>Make 2</option>
              <option>Make 3</option>
            </select>
            <button className={styles.periodFilter}>Weekly</button>
            <button className={styles.periodFilterActive}>Monthly</button>
            <button className={styles.periodFilter}>Yearly</button>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentRow}>
            <div className={styles.column}>
              <div className={styles.trendingModelsCard}>
                <div className={styles.cardTitle}>Top Trending Models</div>
                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>Toyota Land Cruiser</div>
                    <div className={styles.modelPrice}>Avg. Price: $98,000</div>
                  </div>
                  <div className={styles.modelStats}>
                    <ProgressDonutChart percentage={"78"} color="#00BFFF"/>
                  </div>
                </div>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Search Volume</div>
                    <div className={styles.statValue}>15,600</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Inquiries</div>
                    <div className={styles.statValue}>1,240</div>
                  </div>
                </div>

                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>Honda Civic</div>
                    <div className={styles.modelPrice}>Avg. Price: $48,500</div>
                  </div>
                  <div className={styles.modelStats}>
                  <ProgressDonutChart percentage={"58"} color="#00BFFF"/>
                  </div>
                </div>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Search Volume</div>
                    <div className={styles.statValue}>12,400</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Inquiries</div>
                    <div className={styles.statValue}>980</div>
                  </div>
                </div>

                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>BMW X5</div>
                    <div className={styles.modelPrice}>
                      Avg. Price: $105,000
                    </div>
                  </div>
                  <div className={styles.modelStats}>
                  <ProgressDonutChart percentage={"38"} color="#00BFFF"/>
                  </div>
                </div>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Search Volume</div>
                    <div className={styles.statValue}>8,900</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Inquiries</div>
                    <div className={styles.statValue}>760</div>
                  </div>
                </div>

                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>Mercedes C-Class</div>
                    <div className={styles.modelPrice}>Avg. Price: $75,000</div>
                  </div>
                  <div className={styles.modelStats}>
                  <ProgressDonutChart percentage={"90"} color="#00BFFF"/>
                  </div>
                </div>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Search Volume</div>
                    <div className={styles.statValue}>7,800</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Inquiries</div>
                    <div className={styles.statValue}>650</div>
                  </div>
                </div>

                <div className={styles.modelCard}>
                  <div className={styles.modelInfo}>
                    <div className={styles.modelName}>Audi Q7</div>
                    <div className={styles.modelPrice}>Avg. Price: $98,000</div>
                  </div>
                  <div className={styles.modelStats}>
                  <ProgressDonutChart percentage={"58"} color="#00BFFF"/>
                  </div>
                </div>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Search Volume</div>
                    <div className={styles.statValue}>6,900</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statLabel}>Inquiries</div>
                    <div className={styles.statValue}>580</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.marketDemandCard}>
                <div className={styles.cardTitle}>Market Demand by Region</div>
                <div className={styles.demandStats}>
                  <div className={styles.progressContainer}>
                    <HorizontalBarChart data={percentageData} categories={countries} />
                   </div> 
                </div>
              </div>
              <div className={styles.priceTrendCard}>
                <div className={styles.cardTitle}>Price Trend Analysis</div>
                <img alt="img" src="https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/0561941da90c6afd8b838a59e03df85561b3d581?placeholderIfAbsent=true" className={styles.chartImage} />
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.bottomColumn}>
              <div className={styles.featuresCard}>
                <div className={styles.featureTitle}>
                  Most Searched Features
                </div>
                <div className={styles.featureTags}>
                  <div className={styles.featureTag}>Automatic</div>
                  <div className={styles.featureTag}>Hybrid</div>
                  <div className={styles.featureTag}>SUV</div>
                  <div className={styles.featureTag}>Leather Seats</div>
                </div>
                <div className={styles.featureTag}>360 Camera</div>
              </div>
            </div>
            <div className={styles.bottomColumn}>
              <div className={styles.priceRangeCard}>
                <div className={styles.priceRangeInfo}>
                  <div className={styles.featureTitle}>Popular Price Range</div>
                  <div className={styles.priceLabel}>Most Popular</div>
                  <div className={styles.priceValue}>$45k - $65k</div>
                </div>
                <div className={styles.averagePriceInfo}>
                  <div className={styles.priceLabel}>Average</div>
                  <div className={styles.priceValue}>$55k</div>
                </div>
              </div>
            </div>
            <div className={styles.bottomColumn}>
              <div className={styles.sentimentCard}>
                <div className={styles.sentimentInfo}>
                  <div className={styles.featureTitle}>Market Sentiment</div>
                  <div className={styles.sentimentBoxes}>
                    <div className={styles.sentimentBox}>
                      <div className={styles.sentimentLabel}>Positive</div>
                      <div className={styles.positiveValue}>76%</div>
                    </div>
                    <div className={styles.sentimentBox}>
                      <div className={styles.sentimentLabel}>Neutral</div>
                      <div className={styles.neutralValue}>18%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.sentimentBox}>
                  <div className={styles.sentimentLabel}>Negative</div>
                  <div className={styles.negativeValue}>6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrendAnalysis;
