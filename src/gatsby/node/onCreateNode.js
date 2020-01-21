const { createFilePath } = require(`gatsby-source-filesystem`);

// Create nodes.
const onCreateNode = ({ node, actions, getNode }) => {
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

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
module.exports = onCreateNode;
