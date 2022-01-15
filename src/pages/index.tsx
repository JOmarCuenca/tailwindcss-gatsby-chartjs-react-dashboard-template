import React, { useState } from "react";
import faker from 'faker';


import Layout from "../components/layout";
import Seo from "../components/seo";
import {BarChart} from "../components/charts";

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

const IndexPage = () => {

  const BASE_DATA = {
    labels,
    datasets: [
      {
        label: 'Example',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
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
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      }]
    });
  }

  return <Layout>
    <Seo title="Home" />
    <button onClick={randomize} >Randomize</button>
    {/* <Chart options={options} type="bar" data={data} /> */}
    <div className="bg-gray-800 p-5 rounded-2xl w-full max-w-5xl max-h-[50vh]">
      <BarChart title="ExampleChart" data={data} />
    </div>
  </Layout>;

}
export default IndexPage
