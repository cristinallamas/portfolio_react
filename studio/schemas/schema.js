// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Document types
import category from './documents/category'
import sideProject from './documents/sideProject'
import project from './documents/project'
import siteSettings from './documents/siteSettings'
import blogPost from './documents/blogPost'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    projectPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    category,
    figure,
    project,
    sideProject,
    siteSettings,
    blogPost
  ])
})
