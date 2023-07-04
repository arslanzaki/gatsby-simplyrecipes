import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Gallery from "../examples/Gallery";

const Testing = () => {
  // console.log(data)
  // const author = data.site.info.author;
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  );
};

export default Testing;
