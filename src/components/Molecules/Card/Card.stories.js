import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Card', () => (
  <Card title="Card Title" url="/my-card">
    My Card
  </Card>
));
