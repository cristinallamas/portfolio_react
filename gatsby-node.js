const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // const workTemplate = path.resolve(
  //   `./src/components/Organisms/WorkItemPage/WorkItemPage.jsx`,
  // );

  if (node.data) {
    if (node.data.work) {
      const workEntries = node.data.work;

      // console.log(JSON.stringify(workEntries, undefined, 4));
    }
    // createNodeField({
    //   node,
    //   name: `slug`,
    //   value: `work/1`,
    // });
  }

  // if (node.internal.type === `DataJson`) {
  // console.log(node.internal);
  // }
  // console.log(node.internal.type);

  // const workTemplate = path.resolve(
  //   `./src/components/Organisms/WorkItemPage/WorkItemPage.jsx`,
  // );
  // console.log(JSON.stringify(workTemplate, undefined, 4));
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // const workTemplate = path.resolve(
  //   `./src/components/Organisms/WorkItemPage/WorkItemPage.jsx`,
  // );

  const results = await graphql(
    `
      query MyQuery {
        allDataJson {
          edges {
            node {
              data {
                work {
                  category
                  company
                  description
                  featured
                  picture
                  id
                  project
                  technologies
                  url
                }
              }
            }
          }
        }
      }
    `,
  );
  const workEntries =
    results.data.allDataJson.edges[0].node.data.work;

  // console.log(workEntries);

  // console.log(JSON.stringify(results, null, 4));

  workEntries.forEach((workEntry, index) => {
    console.log(workEntry);
    //   createPage({
    //     // This is the slug you created before
    //     // (or `node.frontmatter.slug`)
    //     path: `work/${workEntry.id}`,
    //     // This component will wrap our MDX content
    //     component: path.resolve(
    //       `./src/components/Organisms/WorkItemPage/WorkItemPage.jsx`,
    //     ),
    //     // You can use the values in this context in
    //     // our page layout component
    //     context: { id: workEntry.id },
    //   });
  });
};
