import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexAreaChart = () => {
  const seriesData = {
    monthDataSeries1: {
      prices: [
        8100, 8120, 8150, 8140, 8170, 8200, 8220,
        8250, 8230, 8260, 8280, 8300
      ],
      dates: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ],
    },
  };

  const [state] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Revenue Overview",
        align: "left",
      },
      labels: seriesData.monthDataSeries1.dates,
      xaxis: {
        type: "",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "center",
      },
    },
  });

  return (
    <div className="p-4">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default ApexAreaChart;
