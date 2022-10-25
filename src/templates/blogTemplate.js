import { graphql } from "gatsby"
import React from "react"
import {Container} from "../ui/layout"
import s from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

import "../styles/markdown.scss"
import {Text, Title} from "../ui/Typography"
import SEO from "../components/seo"
import {Navbar} from "../components/Navbar"
import {Footer} from "../components/Footer"

const ArticleTitle = s(Title)`
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
  margin-top: 90px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  opacity: 1;
`

export default function BlogTemplate ({ data }) {
  const article = data.markdownRemark
  const fm = article.frontmatter
  const coverImageData = getImage(fm.image)

  return (
    <>
      <SEO title={fm.title} defer={false} />
      <Navbar />

      <Container>
        {coverImageData &&
          <CoverImage>
            <GatsbyImage alt={fm.title} image={coverImageData} imgStyle={{ opacity: 1 }}/>
          </CoverImage>
        }

        <article style={{fontFamily: `Georgia, serif`, fontSize: 1.15 + `rem`}}>
          <ArticleTitle>{fm.title}</ArticleTitle>

          <PublishingInfo>
            <div>
              <Text>{fm.date}</Text>
              <Text>{fm.readtime} min read; {fm.wordcount} words</Text>
            </div>
            <Text bold>Author: {fm.author}</Text>
          </PublishingInfo>

          <div dangerouslySetInnerHTML={{ __html: article.html }} />
        </article>
      </Container>

      <Footer/>
    </>
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
