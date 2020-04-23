import {format} from 'date-fns'

// {
//   "uid": 1,
//   "project": "Attraction Tickets Direct",
//   "company": "ATD Travel Services",
//   "pic": {
//     "url": "../images/work/attraction-tickets-direct.jpg"
//   },
//   "url": "http://www.attraction-tickets-direct.co.uk",
//   "description": "Drupal 6 module development for the ticket selling multi domain platform, grouping more than 15 websites in a variety of languages. Drupal theming for the various themes used withing the platform for brands like Sea World, Theme Park Beds, Do Something Different, Attraction Tickets Direct.",
//   "technologies": ["Drupal 6", "Drupal 7", "SCSS", "Javascript"],
//   "category": "Drupal 6"
// },

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
