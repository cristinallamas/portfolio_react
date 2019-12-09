import React from 'react';
import { storiesOf } from '@storybook/react';
import WorkListBlock from './WorkListBlock';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('WorkListBlock', module).add('WorkListBlock', () => (
  <Router>
    <WorkListBlock />
  </Router>
));
