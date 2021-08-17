import { graphql, Link } from "gatsby"
import React from "react"
import {Footer, Layout, Navbar, PageTitle} from "../components"
import Helmet from "react-helmet";
import s from "styled-components"
import {TEXT_MUTED} from "../utils/constants";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

import "./markdown.scss"

const ArticleTitle = s(PageTitle)`
  margin-bottom: 0rem;
`

const PublishingInfo = s.p`
  color: ${TEXT_MUTED};
  font-size: 0.9rem;
  text-align: center;
`

const CoverImage = s.div`
  height: 300px;
  padding: 0;
  margin: 0px auto 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default function BlogTemplate ({ data }) {
  const article = data.markdownRemark
  const fm = article.frontmatter
  const coverImageData = getImage(fm.image)

  return (
    <Layout>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      {coverImageData &&
        <CoverImage>
          <GatsbyImage alt={fm.title} image={coverImageData} />
        </CoverImage>
      }

        <ArticleTitle>{fm.title}</ArticleTitle>
        {fm.author &&
          <PublishingInfo>By {fm.author}</PublishingInfo>
        }
        <PublishingInfo>{fm.date}</PublishingInfo>

      <article>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>

      <Footer/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
            )
          }
        }
        title
        date(formatString: "D MMMM YYYY")
        author
      }
    }
  }
`
