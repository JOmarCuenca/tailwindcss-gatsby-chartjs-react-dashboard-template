import React, { FC } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface Props {

}

const AddPage: FC<Props> = (p) => {

    return <Layout>
        <Seo title="Add Screen" />
        <h1 className="text-3xl">Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>I made this little repo as a template with pre-installed tailwindcss with typescript support</p>
    </Layout>;

}

export default AddPage;