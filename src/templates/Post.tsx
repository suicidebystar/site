import React from "react"
import { Layout } from "../components"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Post({data}) {
  console.log({data})

  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        title
      }
    }
  }
`