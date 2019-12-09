import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('Card', module)
  .add('Featured Card', () => (
    <Router>
      <Card
        title="Card Title"
        url="/my-card"
        tag="Tag"
        description="lorem ipsum"
        link="/my-card"
      >
        My Card
      </Card>
    </Router>
  ))
  .add('Normal Card', () => (
    <Router>
      <Card
        title="Card Title"
        url="/my-card"
        tag="Tag"
        description="lorem ipsum"
        link="/my-card"
      >
        My Card
      </Card>
    </Router>
  ));
