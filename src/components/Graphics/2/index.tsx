import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  RadialLinearScale,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

const radarData = {
  labels: ['Finger Strength', 'Power', 'Endurance', 'Stability', 'Flexability'],
  datasets: [
    {
      label: 'March',
      backgroundColor: 'rgba(34, 202, 236, .2)',
      borderColor: 'rgba(34, 202, 236, 1)',
      pointBackgroundColor: 'rgba(34, 202, 236, 1)',
      poingBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
      data: [13, 10, 12, 6, 5],
    },
  ],
};

const Graphic2 = () => {
  return <Radar data={radarData} />;
};
export default Graphic2;
