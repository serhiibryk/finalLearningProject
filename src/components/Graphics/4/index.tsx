import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

export const data = {
  labels: ['Pickup', 'Delivery', 'Ship to Home'],
  datasets: [
    {
      data: [2, 3, 5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['red', '#36A2EB', '#FFCE56'],
      borderWidth: 1,
    },
  ],
  text: '25%',
};

const options1 = {
  responsive: true,
  cutoutPercentage: 85,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'bottom',
    usePointStyle: 'true',
    labels: {
      fontSize: 12,
      padding: 25,
      fontColor: 'pink',
      fontFamily: 'kanit light',
    },
  },
};

const Graphic4 = () => {
  return (
    <>
      <Doughnut
        data={data}
        options={options1}
        height={250}
        // width={800}
      />
    </>
  );
};

export default Graphic4;
