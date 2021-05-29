import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "../pages/styles.scss"
import "./template.scss"

import { Navbar } from "../components/Navbar"

const Template = ({ data: {
    markdownRemark: {
        frontmatter,
        html
    }
} }) => (
    <>  
        <Helmet title={frontmatter.title} defer={false} />
        <Navbar />
        <div className="container">
            <div
                id="markdown"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </>
 )

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`