// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: "SuicideByStar",
    // TODO: Review this
    siteUrl: "https://suicidebystar.com",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-11364685-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        // TODO: Review this
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
          breakpoints: [576, 768, 992, 1200],
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                });
              });
            },
            query: `{
              allMdx(limit: 1000, sort: {frontmatter: {date: DESC}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            }`,
            output: "/feed",
            title: "SuicideBystar RSS Feed",
            site_url: "https://suicidebystar.com/",
          },
        ],
      },
    },
  ],
};
