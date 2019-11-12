import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module)
  .add('Link', () => (
    <Link
      href="/my-link"
      onClick={() => {}}
      className="primary_link"
      target="_blank"
      linkType="default"
    >
      My link
    </Link>
  ))
  .add('Button Link', () => (
    <Link
      href="/button-link"
      onClick={() => {}}
      className="button_link"
      linkType="button"
      target=""
    >
      My link
    </Link>
  ));
