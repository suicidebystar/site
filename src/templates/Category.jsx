import React from "react";

import { Link, graphql } from "gatsby";

const Category = ({ pageContext, data }) => {
  const { edges } = data.allMdx;
  const { currentPage, numPages, category } = pageContext;
  const baseURI = `/category/${category}`;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? baseURI
      : `${baseURI}/${(currentPage - 1).toString()}`;
  const nextPage = `${baseURI}/${(currentPage + 1).toString()}`;

  return (
    <div>
      <h1>{category}</h1>
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
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </div>
  );
};

export default Category;

export const pageQuery = graphql`
  query ($category: String, $skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
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
