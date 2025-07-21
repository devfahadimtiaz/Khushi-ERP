// RevenueChart.jsx
import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const RevenueChart = () => {
  const options = {
    animationEnabled: true,
    axisY: {
      title: "Number of Customers",
      
    },
    axisX: {
      title: "Month",
      labelAngle: -45 // rotates labels if they're too long
    },
    data: [{
      type: "splineArea",
      color: "#4318D1",
      markerSize: 5,
      yValueFormatString: "#,##0.##",
      dataPoints: [
        { label: "Oct 24", y: 50 },
        { label: "Nov 24", y: 60 },
        { label: "Dec 24", y: 70 },
        { label: "Jan 25", y: 50 },
        { label: "Feb 25", y: 85 },
        { label: "Mar 25", y: 45 },
        { label: "Apr 25", y: 65 },
        { label: "May 25", y: 15 },
        { label: "Jun 25", y: 35 },
        { label: "July 25", y: 65 },
        { label: "Aug 25", y: 45 },
        { label: "Sep 25", y: 75 },
      ]
    }]
  };

  return <CanvasJSChart options={options} />;
};

export default RevenueChart;
