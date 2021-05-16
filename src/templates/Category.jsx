import React from "react";


import { Link, graphql } from "gatsby";

const Category = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } part of "${category}"`;
  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All categories</Link>
    </div>
  );
};

export default Category;

export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
