const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createWorkPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityProject || {}).edges || []

  projectEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/work/${slug}/`

      reporter.info(`Creating work project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: {id}
      })
    })
}
async function createSideProjectPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySideProject(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanitySideProject || {}).edges || []

  projectEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/experiment/${slug}/`

      reporter.info(`Creating side project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/side-project.js'),
        context: {id}
      })
    })
}

async function createBlogPostPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityBlogPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const {id, slug = {}, publishedAt} = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/blog/${dateSegment}/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: {id}
    })
  })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createWorkPages(graphql, actions, reporter)
  await createSideProjectPages(graphql, actions, reporter)
  await createBlogPostPages(graphql, actions, reporter)
}
