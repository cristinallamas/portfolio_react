const path = require(`path`);

// Create pages.
const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = require.resolve(
    `../../components/Templates/BlogPostTemplate.jsx`,
  );
  const workPageTemplate = path.resolve(
    `../../components/Templates/WorkPage.jsx`,
  );

  const result = await graphql(
    `
      {
        work: allWorkJson {
          edges {
            node {
              uid
              category
              company
              description
              featured
              project
              technologies
              url
              pic {
                url {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
        blog: allMarkdownRemark(
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
  // ).then(result => {
  //   if (result.errors) {
  //     result.errors.forEach(e => console.error(e.toString()));
  //     return Promise.reject(result.errors);
  //   }
  // });

  if (result.errors) {
    throw result.errors;
  }

  result.blog.data.allMarkdownRemark.edges.forEach((post, index) => {
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

  result.work.data.allWorkJson.edges.forEach((workPage, index) => {
    createPage({
      path: workPage.node.fields.slug,
      component: workPageTemplate,
      context: {
        slug: workPage.node.fields.slug,
        uid: workPage.node.uid,
        node: workPage.node,
      },
    });
  });
};
module.exports = createPages;
