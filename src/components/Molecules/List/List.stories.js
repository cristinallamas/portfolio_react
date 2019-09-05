import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import Project from '../../Organisms/Project/Project';
import WorkItem from '../../Organisms/WorkItem/WorkItem';

const projects = [
  {
    id: 1,
    title: 'Portfolio (React, Gastby, GraphQL) WIP',
    url: 'https://github.com/cristinallamas/portfolio_react',
  },
  {
    id: 2,
    title: 'Little RiotJS music search (RiotJS, LastFM API)',
    url: 'https://github.com/cristinallamas/riot-examples',
  },
  {
    id: 3,
    title:
      'Work in progress: Meal planner with shopping list (React)',
    url: 'https://github.com/cristinallamas/meal-planner',
  },
];
const workItem = [
  {
    id: 1,
    project: 'Attraction Tickets Direct',
    company: 'ATD Travel Services',
    url: 'http://www.attraction-tickets-direct.co.uk',
    description:
      'Drupal 6 module development for the ticket selling multi domain platform, grouping more than 15 websites in a variety of languages. Drupal theming for the various themes used withing the platform for brands like Sea World, Theme Park Beds, Do Something Different, Attraction Tickets Direct.',
    technologies: ['Drupal 6', 'Drupal 7', 'SCSS', 'Javascript'],
  },
  {
    id: 2,
    project: 'BBC GoodFood / Rimmel London UK / Sally Hansen',
    company: 'Catch Digital',
    url: 'https://www.catchdigital.com/',
    description:
      'Part of the BBC Goodfood Project Team, developing new features and maintaining their Drupal 7 installation. Campaign landing pages in Drupal for Rimmel London, Facebook integrated contests to gather user data for Sally Hansen',
    technologies: ['Drupal 7', 'SCSS', 'Javascript'],
  },
  {
    id: 3,
    project: 'BuyACar',
    company: 'Dennis',
    url: 'https://www.buyacar.co.uk/',
    description:
      'Custom new features for the car searcher first in RiotJS and then in ReactJS. Integration with the Drupal 7 site.',
    technologies: [
      'Drupal 7',
      'ReactJS',
      'RiotJS',
      'SCSS',
      'Webpack',
      'Grunt',
    ],
  },
  {
    id: 4,
    project: 'DrivingElectric',
    company: 'Dennis',
    url: 'https://www.drivingelectric.com/',
    description:
      "Leading the development of a new brand site (drivingelectric.com) for Dennis following the atomic design methodology with Twig and Pattern-lab in just 8 weeks, therefor being the fastest site released to date, the site received Silver Award for 'Launch of the Year' (https://www.britishmediaawards.com/finalists/driving-electric/).",
    technologies: [
      'Drupal 8',
      'PatternLab',
      'Twig',
      'Javascript',
      'SCSS',
      'Webpack',
      'Gulp',
    ],
  },
  {
    id: 5,
    project: 'Ocado Corporate Site (To be launched)',
    company: 'Investis Digital',
    url: 'https://www.ocadogroup.com/',
    description:
      'Corporate Site using Investis distribution, based on Brick components. It was required the creation of new components to use side by side with the base ones used by default. Twig, SCSS and Javascript/jQuery was used to implement the required functionality specified in the designs. As a big part of the project it was required the creation of a microsite called The Grid, mimicking Ocado Grid Robots. This was solved by the use of Highcharts library and custom Javascript and Drupal Views with custom twig templates and preprocessing.',
    technologies: [
      'Drupal 8',
      'Twig',
      'SCSS',
      'Javascript',
      'HighCharts',
    ],
  },
];

storiesOf('List', module)
  .add('Project List', () => (
    <List content={projects} component={Project} />
  ))
  .add('Work List', () => (
    <List content={workItem} component={WorkItem} />
  ));
