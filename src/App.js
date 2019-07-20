import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState({ projects: [],jobs:[],about:{} });

  // Used "as" componentDidMount.
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:8000/data')
      .then(response => {
      // console.log(response);
      setData(response.data);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
      
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>

      <h2>About</h2>
      <h3>{data.about.name}</h3>
      <h4>{data.about.title}</h4>
      <p>{data.about.bio}</p>
      <a href="../{data.about.bio}">Download my CV</a>

      <h2>Examples</h2>
      <ul>
        {data.jobs.map(item => (
          <li key={item.id}>
            <h3>{item.project}</h3>
            <h4>{item.company}</h4>
            <p>{item.description}</p>
            <ul>
              {item.technologies.map((item,index) => (
                <li key={index}>
                  <h5>{item}</h5>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2>Side Projects</h2>
      <ul>
        {data.projects.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

    </React.Fragment>
  );
}

export default App;
