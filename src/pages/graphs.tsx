import faker from "faker";
import React, { FC, useState } from "react";
import { BarChart, DoughnutChart, LineChart, PieChart } from "../components/charts";
import Layout from "../components/layout";
import Seo from "../components/seo";

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
const programming_languages = [
  'Python',
  'Java',
  'Javascript/Typescript',
  'Rust',
  'Dart',
  'Clojure'
];

const GraphsScreen: FC = () => {

  const BASE_DATA = {
    labels,
    datasets: [
      {
        label : "Amount",
        backgroundColor: 'rgb(253, 162, 235, 0.2)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        stack : "0",
        borderWidth : 5,
        borderColor : 'rgb(253, 162, 235)',
      },
      {
        label : "Rate",
        backgroundColor: 'rgb(15, 182, 25)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        stack : "0"
      },
    ],
  };

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
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const [data, setData] = useState(BASE_DATA);
  const [pie_data, setPie_Data] = useState(BASE_PIE_DATA);

  function randomColor() { return faker.commerce.color(); };

  function randomize(e: any) {
    e.preventDefault();
    setData({
      ...data,
      datasets: [{
        label : "Amount",
        backgroundColor: randomColor(),
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        stack : ""
      }]
    });
    setPie_Data({
      ...pie_data,
      datasets: [{
        data: programming_languages.map(() => faker.datatype.number(15)),
        backgroundColor: programming_languages.map(randomColor),
        borderWidth: 1,
      }]
    });
  }


  return <Layout>
    <Seo title="Graphs" />
    <button className="fixed bottom-3 right-3 " onClick={randomize} >Randomize</button>
    <div className="my-3 bg-gray-800 p-5 rounded-2xl min-h-[50vh]">
      <BarChart title="ExampleChart" data={data} />
    </div>
    <div className="my-3 bg-gray-800 p-5 rounded-2xl min-h-[50vh]">
      <LineChart title="ExampleChart" data={data} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="my-3 bg-gray-800 p-5 rounded-2xl min-h-[50vh]">
        <PieChart title={"Example Pie Chart"} data={pie_data} />
      </div>
      <div className="my-3 bg-gray-800 p-5 rounded-2xl min-h-[50vh]">
        <DoughnutChart title={"Example Doughnut Chart"} data={pie_data} />
      </div>
    </div>

  </Layout>;

}

export default GraphsScreen;