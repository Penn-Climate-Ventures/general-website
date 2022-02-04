import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/base.scss"
import s from "styled-components"

import {
  WideLayout,
  Navbar,
  PageTitle,
  Footer,
} from "../components"

import BlogCard from "../components/shared/BlogCard";

const BlogCardLayout = s.div`
  margin: 30px auto auto auto;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly
`

const BlogPage = ({ data }) => {
  return (
    <>
    <Helmet title="Penn Climate Ventures" defer={false} />
    <Navbar />
    <WideLayout>
      <PageTitle>Blog</PageTitle>
      <BlogCardLayout>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard node={node} />
        ))}
      </BlogCardLayout>
      <Footer />
    </WideLayout>
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/.+md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                )
              }
            }
            title
            author
            date(formatString: "MMMM D, YYYY")
            desc
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
