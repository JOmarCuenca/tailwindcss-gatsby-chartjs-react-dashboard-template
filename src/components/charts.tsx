import React, { FC } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Legend,
  Tooltip
);

interface Props {
    data : any,
    title: string
}

const BarChart : FC<Props> = (p) => {

    const options = {
        responsive: true,
        maintainAspectRatio : false,
        scales: {
          x: {
            ticks: {
              // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
              // callback: function(val, index) {
              //   // Hide the label of every 2nd dataset
              //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
              // },
              color: 'white',
            }
          },
          y: {
            ticks: {
              color: 'white',
            }
          }
        },
        plugins: {
          legend: {
            position: 'top' as const,
            labels: {
              color: "#FFFFFF",
            }
          },
          title: {
            display: true,
            text: p.title,
            color: "#FFFFFF",
            font : {
              size : 24
            }
          },
        },
      };

    return <Bar data={p.data} options={options}  />;

}

const LineChart : FC<Props> = (p) => {

  const options = {
      responsive: true,
      maintainAspectRatio : false,
      scales: {
        x: {
          ticks: {
            // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            // callback: function(val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
            // },
            color: 'white',
          }
        },
        y: {
          ticks: {
            color: 'white',
          }
        }
      },
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            color: "#FFFFFF",
          }
        },
        title: {
          display: true,
          text: p.title,
          color: "#FFFFFF",
          font : {
            size : 24
          }
        },
      },
    };

  return <Line data={p.data} options={options}  />;

}

interface PieChartProps {
  data : any,
  title: string
}

const PieChart : FC<PieChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio : false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: "#FFFFFF",
        }
      },
      title: {
        display: true,
        text: p.title,
        color: "#FFFFFF",
        font : {
          size : 24
        }
      },
    },
  };

  return <Pie options={options} data={p.data} />;

}



export {
  BarChart,
  LineChart,
  PieChart
};