import faker from "faker";
import React, { FC } from "react";
import { BubbleChart, ScatterChart } from "../components/charts";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AddPage: FC = () => {

    const chartWidget = (p: JSX.Element) => <div className="bg-gray-800 rounded-2xl p-5 min-h-[50vh]">
        {p}
    </div>;

    const SCATTER_DATA = {
        datasets: [
            {
                label: 'Discounts per day',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.datatype.number({ max: 31 }),
                    y: faker.datatype.number({ max: 100 }),
                })),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Purchase Per day',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.datatype.number({ max: 31 }),
                    y: faker.datatype.number({ max: 100 }),
                })),
                backgroundColor: 'rgba(0, 99, 132, 1)',
            },
        ],
    };

    const BUBBLE_DATA = {
        datasets: [
          {
            label: 'Red dataset',
            data: Array.from({ length: 50 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Blue dataset',
            data: Array.from({ length: 50 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return <Layout>
        <Seo title="Add Screen" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chartWidget(<ScatterChart data={SCATTER_DATA} title="Scatter Chart Example" />)}
            {chartWidget(<BubbleChart data={BUBBLE_DATA} title="Bubble Chart Example" />)}
        </div>
    </Layout>

}

export default AddPage;