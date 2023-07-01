import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      info:siteMetadata {
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
const ComponentName = () => {
  const data = useStaticQuery(getData);
  console.log(data);
  return (
    <div>
      <h2>{data.site.info.person.name}</h2>
      <div>
        {data.site.info.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}:{item.age}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentName;
