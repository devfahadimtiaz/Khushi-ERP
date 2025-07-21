// components/DoughnutChart.js

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Pending Stock', 'Sold', 'Comitted'],
    datasets: [
      {
        label: '',
        data: [12, 19, 3],
        backgroundColor: ['#FF6384', '#2371E2', '#FFCD56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Doughnut Chart Example',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
