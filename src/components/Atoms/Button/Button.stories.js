import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary button', () => (
    <Button
      type="submit"
      label="Primary button"
      disabled={false}
      onClick={() => {}}
      variant="-primary"
      srLabel="Button"
      className="primary_button"
    />
  ))
  .add('Secondary Button', () => (
    <Button
      type="submit"
      label="Secondary button"
      disabled={false}
      onClick={() => {}}
      srLabel="Button"
      className="secondary_button"
    />
  ))
  .add('Disabled Button', () => (
    <Button
      type="submit"
      label="Disabled primary button"
      disabled={true}
      onClick={() => {}}
      srLabel="Button"
      className="primary_button"
    />
  ));
