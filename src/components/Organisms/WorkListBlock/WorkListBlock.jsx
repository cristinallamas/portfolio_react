import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import dataSource from '../../../data/dataSource.json';
import Card from '../../Molecules/Card/Card';

const WorkListBlock = () => {
  const [featured, setFeatured] = useState({});
  const [nonFeatured, setnonFeatured] = useState([]);

  function loadData() {
    const featuredData = dataSource.data.work.filter(
      item => item.featured,
    );
    const nonFeaturedData = dataSource.data.work.filter(
      item => !item.hasOwnProperty('featured'),
    );
    return {
      featured: featuredData[0],
      nonFeatured: nonFeaturedData,
    };
  }
  useEffect(() => {
    const data = loadData();
    setFeatured(data.featured);
    setnonFeatured(data.nonFeatured);
  }, []);

  return (
    <div>
      <div className="featured">
        {featured && (
          <Card
            tag={featured.category}
            title={featured.project}
            link={`/work/${featured.id}`}
            picture={featured.picture}
            variation="right"
            description={featured.description}
            featured="featured"
          />
        )}
      </div>
      <div className="regular">
        {nonFeatured && (
          <ul>
            {nonFeatured.map((item, index) => (
              <li key={index}>
                <Card
                  tag={item.category}
                  title={item.project}
                  link={`/work/${item.id}`}
                  picture={item.picture}
                  variation="right"
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// WorkListBlock.propTypes = {};

export default WorkListBlock;
