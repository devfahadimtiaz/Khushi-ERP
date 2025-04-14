import React from "react";
import ReactApexChart from "react-apexcharts";

const ProgressDonutChart = ({ percentage, color }) => {
  const chartData = {
    series: [percentage],
    options: {
      chart: {
        type: "radialBar",
        offsetY: -10,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -100,
          endAngle: 270,
          hollow: {
            margin: 10,
            size: "60%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: true,
              fontSize: "22px",
              color: "#111",
              formatter: (val) => `${val}%`
            }
          }
        }
      },
      fill: {
        type: "color",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [{color}],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    }
  };

  return (
    
     
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={150}
      />
    
  );
};

export default ProgressDonutChart;
