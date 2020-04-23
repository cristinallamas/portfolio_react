import {format} from 'date-fns'

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
