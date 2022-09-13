import React, { MouseEvent, useRef } from 'react';
import type { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'grey',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -10, max: 10 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'blue',
      data: labels.map(() => faker.datatype.number({ min: -10, max: 10 })),
      borderColor: 'pinc',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'black',
      data: labels.map(() => faker.datatype.number({ min: -10, max: 10 })),
    },
  ],
};

const Graphic1 = () => {
  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return null;
  };

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return null;
  };

  const printElementsAtEvent = (elements: InteractionItem[]) => {
    if (!elements.length) return null;
  };

  const chartRef = useRef<ChartJS>(null);

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  return <Chart ref={chartRef} type={'bar'} onClick={onClick} options={options} data={data} />;
};

export default Graphic1;
