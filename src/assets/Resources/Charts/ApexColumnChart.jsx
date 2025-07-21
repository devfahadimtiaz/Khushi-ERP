import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexColumnChart = ({name}) => {
  const [state] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      
    ],
    options: {
      colors: [
        "#4318D1"
      ],
      chart: {
        type: "bar",
        height: 250,
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      legend: {
        position: "top",
      },
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center" style={{fontFamily: 'SF Pro Display', fontWeight: '400'}}>{name}</h2>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={230}
      />
    </div>
  );
};

export default ApexColumnChart;
