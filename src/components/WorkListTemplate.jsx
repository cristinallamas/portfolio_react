import React, { Fragment } from 'react';

import Card from './Molecules/Card/Card';
import { useStaticQuery, graphql } from 'gatsby';

const WorkListTemplate = ({ items }) => {
  // Reverse array to get latest first. bleh.
  items = items.reverse();
  console.log(items);
  return (
    <Fragment>
      {/* <h2>Work</h2> */}
      {items && (
        <ul>
          {console.log(items)}
          {items.map((item, index) => (
            <li key={item.node.uid}>
              <Card
                tag={item.node.category}
                company={item.node.company}
                title={item.node.project}
                link={`/work/${item.node.uid}`}
                picture={item.node.pic.url.childImageSharp.fixed}
                variation="right"
                // description={item.description}
              />
              {console.log(item.node)}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default WorkListTemplate;
