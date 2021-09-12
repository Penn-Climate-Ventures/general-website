import { graphql, Link } from "gatsby"
import React from "react"
import {Footer, Layout, Navbar, PageTitle, TextP} from "../components"
import Helmet from "react-helmet";
import s from "styled-components"
import {TEXT_MUTED} from "../utils/constants";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

import "./markdown.scss"

const ArticleTitle = s(PageTitle)`
  color: black;
  text-align: left;
  font-family: 'Lora', serif;
  font-size: 2.25rem;
  margin-bottom: 0rem;
`

const PublishingInfo = s.div`
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 30px;
  
  & > p, & > div > p {
    margin: 0;
    font-size: inherit;
  }
`

const CoverImage = s.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 5px;
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

      <article style={{fontFamily: `Georgia, serif`, fontSize: 1.15 + `rem`}}>
        <ArticleTitle>{fm.title}</ArticleTitle>

        <PublishingInfo>
          <div>
            <TextP>{fm.date}</TextP>
            <TextP>{fm.readtime} min read; {fm.wordcount} words</TextP>
          </div>
          <TextP bold>Author: {fm.author}</TextP>
        </PublishingInfo>

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
        date(formatString: "MMMM D, YYYY")
        readtime
        wordcount
        author
      }
    }
  }
`
