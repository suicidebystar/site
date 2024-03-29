// eslint-disable-next-line no-undef
const path = require(`path`);

// eslint-disable-next-line no-undef
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    {
      posts: allMdx {
        edges {
          node {
            frontmatter {
              category
              path
            }
            internal {
              contentFilePath
            }
          }
        }
      }
      categories: allMdx(limit: 2000) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  const postTemplate = path.resolve(`./src/templates/Post.jsx`);

  result.data.posts.edges.forEach(({ node }) => {
    const slug = node.frontmatter.path;
    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
        category: node.frontmatter.category,
      },
    });
  });

  // TODO: https://www.gatsbyjs.com/docs/adding-pagination/
  //       https://nickymeuleman.netlify.app/blog/gatsby-pagination
  result.data.categories.group.forEach(async (category) => {
    const categoryPostsResult = await graphql(`
      query {
        allMdx(filter: { frontmatter: { category: { eq: "${category.fieldValue}" } } }) {
          edges {
            node {
              frontmatter {
                category
                path
              }
            }
          }
        }
      }
    `);

    const postsPerPage = 8;
    const categoryPosts = categoryPostsResult.data.allMdx.edges;
    const numPages = Math.ceil(categoryPosts.length / postsPerPage);

    // TODO: path should be sanitized in some way
    const baseURI = `category/${category.fieldValue}`;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? baseURI : `${baseURI}/${i + 1}`,
        component: path.resolve("./src/templates/Category.jsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          category: category.fieldValue,
        },
      });
    });
  });
};
