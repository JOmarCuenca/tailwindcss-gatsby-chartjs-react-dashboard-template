import faker from '@faker-js/faker'
import React, { FC } from "react";
import { PolarAreaChart, RadarChart } from "../components/charts";
import Layout from "../components/layout";
import Seo from "../components/seo";

const programming_languages = [
    'Python',
    'Java',
    'Javascript/Typescript',
    'Rust',
    'Dart',
    'Clojure'
];



const AccountingPage: FC = () => {

    const BASE_PIE_DATA = {
        labels: programming_languages,
        datasets: [
            {
                data: programming_languages.map(() => faker.datatype.number(15)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const BASE_RADAR_DATA = {
        labels: programming_languages,
        datasets: [
            {
                label : "# of projects",
                data: programming_languages.map(() => faker.datatype.number(15)),
                backgroundColor: 'rgba(0, 99, 132, 0.2)',
                borderWidth: 5,
            },
        ],
    };

    const WIDGET_CLASS = "bg-gray-700 rounded-2xl p-6 min-h-[50vh]";

    return <Layout>
        <Seo title="Accounting" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className={WIDGET_CLASS} >
                <PolarAreaChart data={BASE_PIE_DATA} title="Most Profitable PL" />
            </div>
            <div className={WIDGET_CLASS} >
                <RadarChart data={BASE_RADAR_DATA} title="Most Profitable PL" />
            </div>
        </div>
    </Layout>;

}

export default AccountingPage;