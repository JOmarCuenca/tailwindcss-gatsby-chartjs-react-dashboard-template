import React, { FC } from "react";
import { Bar, Bubble, Chart, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Legend,
  Tooltip,
  Filler
} from 'chart.js';
import { BarChartProps, BubbleChartProps, DoughnutChartProps, LineChartProps, MultitypeChartProps, PieChartProps, PolarAreaChartProps, RadarChartProps, ScatterChartProps } from "../data/interfaces/charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Legend,
  Tooltip,
  Filler
);

/*
  More documentation and examples can be found at:
  https://react-chartjs-2.netlify.app/examples 
*/

const BarChart: FC<BarChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: p.xTicks
      },
      y: {
        ticks: p.yTicks
      }
    },
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Bar data={p.data} options={options} />;

}

const HorizontalBarChart: FC<BarChartProps> = (p) => {

  const options = {
    responsive: true,
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: p.xTicks
      },
      y: {
        ticks: p.yTicks
      }
    },
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Bar data={p.data} options={options} />;

}

const LineChart: FC<LineChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: p.xTicks
      },
      y: {
        ticks: p.yTicks
      }
    },
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Line data={p.data} options={options} />;

}

const PieChart: FC<PieChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Pie options={options} data={p.data} />;

}

const DoughnutChart: FC<DoughnutChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Doughnut options={options} data={p.data} />;

}

const PolarAreaChart: FC<PolarAreaChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <PolarArea data={p.data} options={options} />;

}

const RadarChart: FC<RadarChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Radar data={p.data} options={options} />;

}

const ScatterChart: FC<ScatterChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Scatter data={p.data} options={options} />;

}

const BubbleChart: FC<BubbleChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bubble data={p.data} options={options} />;

}

const MultitypeChart: FC<MultitypeChartProps> = (p) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: p.xTicks
      },
      y: {
        ticks: p.yTicks
      }
    },
    plugins: {
      legend: {
        position: p.legendPosition,
        labels: {
          color: p.legendLabelsColor ?? p.titleColor,
        }
      },
      title: {
        position: p.titlePosition,
        display: p.title !== undefined,
        text: p.title,
        color: p.titleColor,
        font: {
          size: p.titleSize ?? 24
        }
      },
    },
  };

  return <Chart type={p.type} data={p.data} options={options} />
}

export {
  BarChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
  DoughnutChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart,
  BubbleChart,
  MultitypeChart
};