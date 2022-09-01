import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      //
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: 'blue',
      backgroundColor: 'grey',
    },
  ],
};

const Graphic3 = () => {
  return <Line options={options} data={data} />;
};
export default Graphic3;
