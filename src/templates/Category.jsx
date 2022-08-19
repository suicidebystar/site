import React from "react";

import { Link, graphql } from "gatsby";
import { Layout, Page, PostList } from "../components";
import { getPluralizedProgramType, transformEdgeToPost } from "../utils";

const Category = ({ pageContext, data }) => {
  const posts = data.allMdx.edges.map(transformEdgeToPost);
  const { currentPage, numPages, category } = pageContext;
  const baseURI = `/category/${category}`;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? baseURI
      : `${baseURI}/${(currentPage - 1).toString()}`;
  const nextPage = `${baseURI}/${(currentPage + 1).toString()}`;
  const title = `${getPluralizedProgramType(
    category
  )} (página ${currentPage} de ${numPages})`;

  return (
    <Layout>
      <Page title={title}>
        <PostList posts={posts} />

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
      </Page>
    </Layout>
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
            path
            category
            ivoox
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, height: 300)
              }
            }
            programNumber
          }
        }
      }
    }
  }
`;
