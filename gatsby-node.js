// eslint-disable-next-line no-undef
const path = require(`path`);

// eslint-disable-next-line no-undef
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      posts: allMdx {
        edges {
          node {
            slug
            frontmatter {
              category
              path
            }
          }
        }
      }
      categories: allMdx(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  result.data.posts.edges.forEach(({ node }) => {
    const slug = node.frontmatter.path;
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/Post.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
        category: node.frontmatter.category,
      },
    });
  });

  result.data.categories.group.forEach((category) => {
    // TODO: path should be sanitized in some way
    createPage({
      path: `category/${category.fieldValue}`,
      component: path.resolve(`./src/templates/Category.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        category: category.fieldValue,
      },
    });
  });
};
