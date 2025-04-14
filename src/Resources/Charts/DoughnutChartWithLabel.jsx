// components/DoughnutChartWithLabel.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const DoughnutChartWithLabel = () => {
  const data = {
    labels: ['Used', 'Remaining'],
    datasets: [
      {
        data: [70],
        backgroundColor: ['#36A2EB', '#E5E5E5'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        formatter: function () {
          return '70%';
        },
        color: '#000',
        font: {
          weight: 'bold',
          size: 20,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartWithLabel;
