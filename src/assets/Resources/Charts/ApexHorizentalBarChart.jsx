import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data, categories }) => {
  const options = {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: categories
    }
  };

  const series = [
    {
      data: data
    }
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
