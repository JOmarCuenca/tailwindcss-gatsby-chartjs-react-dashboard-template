import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import faker from '@faker-js/faker';
import { MultitypeChart } from "../components/charts";
import LegendPosition from "../data/enums/LegendPosition";

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const IndexPage = () => {

  const DATA = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      },
      {
        type: 'bar' as const,
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'white',
        stack: "h",
        borderWidth: 2,
      },
      {
        type: 'bar' as const,
        label: 'Dataset 3',
        stack: "h",
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      },
    ],
  };

  return <Layout>
    <Seo title="Home" />
    <h1 className="text-3xl">Hi people!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>I made this little repo as a template with pre-installed tailwindcss with typescript support.</p>
    <p>Also with direct support and some guide and decorators for the chartjs React library.</p>
    <p>Such as this one down there.</p>

    <div className="bg-gray-800 rounded-2xl mt-4 p-7 h-[60vh] ">
      <MultitypeChart
        type="bar"
        data={DATA}
        legendLabelsColor="white"
        titleColor="#FFFF0F"
        title="Example of Multitype chart" 
        titlePosition={LegendPosition.left} 
        xTicks={{
          color : "white"
        }}
        yTicks={{
          color : "orange"
        }}
        legendPosition={LegendPosition.bottom} />
    </div>
  </Layout>;

}
export default IndexPage
