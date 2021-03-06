import React, { FC, useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import faker from "@faker-js/faker";

import {BarChart, HorizontalBarChart} from "../components/charts";


const labels = ['February', 'March', 'April', "May"];

const SettingsScreen: FC = () => {

    const BASE_DATA = {
        labels,
        datasets: [
            {
                label: 'Example',
                backgroundColor: 'rgb(53, 162, 235)',
                data: labels.map(() => faker.datatype.number({ min: -400, max: 400 })),
            },
        ],
    };

    const [data, setData] = useState(BASE_DATA);

    function randomize(e: any) {
        e.preventDefault();
        setData({
            ...data,
            datasets: [{
                label: 'Example',
                backgroundColor: 'rgb(53, 162, 235)',
                data: labels.map(() => faker.datatype.number({ min: -400, max: 400 })),
            }]
        });
    }

    return <Layout>
        <Seo title="Settings" />
        <button onClick={randomize} >Randomize</button>
        {/* <Chart options={options} type="bar" data={data} /> */}
        <div className="grid grid-cols-1 gap-3">
            <div className="bg-gray-800 p-5 rounded-2xl w-full max-w-5xl min-h-[50vh]">
                <BarChart title="ExampleChart" data={data} />
            </div>
            <div className="bg-gray-800 p-5 rounded-2xl w-full max-w-5xl min-h-[50vh]">
                <HorizontalBarChart title="ExampleChart" data={data} />
            </div>
        </div>
    </Layout>;

}

export default SettingsScreen;