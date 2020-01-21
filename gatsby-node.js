const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// create nodes.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
  if (node.internal.type === `WorkJson`) {
    const value = createFilePath({ node, getNode }) + node.uid;
    console.log(node);

    createNodeField({
      name: `slug`,
      node,
      value,
    });
    console.log(value);
  }
};

// create pages

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = require.resolve(
    `./src/components/Templates/BlogPostTemplate.jsx`,
  );
  const workPageQueryResult = await graphql(
    `
      query WorkPages {
        allWorkJson {
          edges {
            node {
              uid
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  const workPage = path.resolve(
    `./src/components/Templates/WorkPage.jsx`,
  );

  if (workPageQueryResult.errors) {
    throw workPageQueryResult.errors;
  }

  // Create work post pages.
  const workPages = workPageQueryResult.data.allWorkJson.edges;

  workPages.forEach((workItem, index) => {
    // const previous =
    //   index === posts.length - 1 ? null : posts[index + 1].node;
    // const next = index === 0 ? null : posts[index - 1].node;
    console.log(workItem.node);

    createPage({
      path: workItem.node.fields.slug,
      component: workPage,
      context: {
        slug: workItem.node.fields.slug,
        node: workItem.node,
        UID: workItem.node.uid, // passing it to the query
        // previous,
        // next,
      },
    });
  });
};
