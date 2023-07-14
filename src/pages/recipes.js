import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

function Recipes() {
  return (
    <Layout>
      <SEO title="Recipes" description="This Is Recipes Page"/>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}

export default Recipes;
