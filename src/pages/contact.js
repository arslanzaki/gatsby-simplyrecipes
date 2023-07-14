import React from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

function Contact({ data }) {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact" description="This Is Contact Page" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              YOLO green juice chicharrones copper mug pinterest. Affogato 90's
              forage skateboard hella.
            </p>
            <p>Farm-to-table iceland 90's air plant squid fashion axe.</p>
            <p>
              Marxism echo park edison bulb health goth. Meggings butcher
              bespoke air plant, four loko fingerstache austin humblebrag.
            </p>
          </article>

          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mdorozrn"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
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
export default Contact;
