import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

function About({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  console.log(recipes);
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby 90's locavore gorpcore bodega boys brunch.</h2>
            <p>
              Unicorn ascot direct trade coloring book whatever pinterest hella
              brunch jawn cornhole pug.
            </p>
            <p>
              Brooklyn marxism leggings pabst ethical franzen put a bird on it
              pitchfork meh lyft big mood jianbing wolf.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl."
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  );
}
export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default About;
