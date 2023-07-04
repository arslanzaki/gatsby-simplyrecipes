import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;
const Gallery = () => {
  const data = useStaticQuery(query);
  //console.log(data);
  const nodes = data.allFile.nodes;
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image;
        return (
          <article key={index} className="item">
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name} className="gallery-img" />
            <p>{name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;

export default Gallery;
