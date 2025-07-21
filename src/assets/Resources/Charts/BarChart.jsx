// components/BarChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = () => {
  const data = [
    {
      x: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      y: [400000,300000,650000,6554444,323333,533333,555555],
      name: 'This Week',
      type: 'bar',
      marker: { color: '#4318d1' },
    },
    {
        x: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        y: [30000,200000,450000,7554444,523333,633333,455555],
      name: 'Last Week',
      type: 'bar',
      marker: { color: '#1ad598' },
    },
  ];

  const layout = {
    title: {
      text: 'US Export of Plastic Scrap',
    },
    xaxis: {
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)',
      },
    },
    yaxis: {
      title: {
        text: 'USD (millions)',
        font: {
          size: 16,
          color: 'rgb(107, 107, 107)',
        },
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)',
      },
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)',
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
  };

  return <Plot data={data} layout={layout} style={{ width: "100%" }} />;
};

export default BarChart;
