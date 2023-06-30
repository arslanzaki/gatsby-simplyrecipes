import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function About() {
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
      </main>
    </Layout>
  );
}

export default About;
