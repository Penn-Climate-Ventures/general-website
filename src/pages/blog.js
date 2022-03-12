import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/base.scss"
import s from "styled-components"

import {
  WideLayout,
  Navbar,
  Footer,
} from "../components"

import BlogCard from "../ui/BlogCard";
import {Title} from "../ui/Typography";
import {Layout} from "../ui/Layout";

const BlogCardLayout = s.div`
  margin: auto;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly;
`

const BlogPage = ({ data }) => {
  return (
    <>
    <Helmet title="Penn Climate Ventures | Blog" defer={false} />
    <Navbar />
    <Layout>
      <Title>Blog</Title>
    </Layout>
    <WideLayout>
      <BlogCardLayout>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard node={node} />
        ))}
      </BlogCardLayout>
    </WideLayout>
    <Footer />
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
