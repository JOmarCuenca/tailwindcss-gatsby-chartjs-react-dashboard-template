import React, { FC } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";


const GraphsScreen : FC = () => {

    return <Layout>
        <Seo title="Graphs" />
        <h1 className="text-3xl">Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>I made this little repo as a template with pre-installed tailwindcss with typescript support</p>
    </Layout>;

}

export default GraphsScreen;