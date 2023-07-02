import { graphql } from "gatsby";
import React from "react";

const Testing = ({data}) => {
    // console.log(data)
    const author = data.site.info.author;
  return (
    <div>
      <h2>Author: {author}</h2>
    </div>
  );
};

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        complexData {
          age
          name
        }
        simpleData
      }
    }
  }
`;

export default Testing;
