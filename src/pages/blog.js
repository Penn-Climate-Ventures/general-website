import React, { useState } from "react"
import s from "styled-components"
import {graphql, Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

import {GridContainer, PageLayout} from "../ui/layout"
import {SubText, Subtitle} from "../ui/Typography"

import "../styles/base.scss"


const CardLayout = s.div`
  border-top: 1px solid #e6e6e6;
  width: 100%;
  max-width: 450px;
  padding-top: 30px;
  padding-bottom: 30px;
  flex: 0 0 auto;
  
  @media (min-width: 1100px) {
    flex: 0 0 500px;
  }
`

const CoverImage = s.div`
  width: 100%;
  margin-bottom: 25px;
  border-radius: 5px;
  overflow: hidden;
  opacity: 1;
`

const CardTitle = s.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  
  & > * {
    color: #333333;
    font-weight: 900;
  }
  
  &:hover > * {
    text-decoration: underline;
  }
`

const PublishingInfo = s.div`
  margin-top: 10px;
  margin-bottom: 10px;
    
  & > p {
    font-size: .85rem;
    color: var(--c-text-primary-muted);
  }
`

const TagSelectorWrapper = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 12px;
  position: relative;
  width: 365px;
  height: 66px;
  background: #F1F1F1;
  border-radius: 58px;
`

const CRTagOption = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 23px;
  gap: 10px;
  width: 213px;
  height: 48px;
  background: #217CFF;
  border-radius: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const BTagOption = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 36px;
  gap: 10px;
  width: 120px;
  height: 48px;
  background: #000000;
  border-radius: 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const CRTagText = s.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #F1F1F1;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const BTagText = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #217CFF;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const TagSelectorOuterWrapper = s.div`
  display: flex;
  width = 100%;
  align-items: center;
  justify-content: center;
`

const Description = s.p``

const TagSelector = ({ tag, setTag }) => {
  return (
    <TagSelectorOuterWrapper>
      <TagSelectorWrapper>
        <CRTagOption onClick={() => tag == "Climate Reports" ? setTag("") : setTag("Climate Reports")}>
          <CRTagText>
          Climate Reports
          </CRTagText>
        </CRTagOption>
        <BTagOption onClick={() => tag == "Blog" ? setTag("") : setTag("Blog")}>
          <BTagText>
            Blog
          </BTagText>
        </BTagOption>
      </TagSelectorWrapper>
    </TagSelectorOuterWrapper>
  )
}

const BlogCard = ({ card }) => {
  const fm = card.frontmatter
  const coverImageData = getImage(fm.image)

  return (
    <CardLayout>
      {coverImageData &&
        <CoverImage>
          <GatsbyImage alt={fm.title} image={coverImageData} imgStyle={{ opacity: 1 }}/>
        </CoverImage>
      }

      <CardTitle>
        <Link to={card.fields.slug}>{fm.title}</Link>
      </CardTitle>

      {fm.desc &&
        <Description>{fm.desc}</Description>
      }

      {fm.author &&
        <PublishingInfo>
          <SubText>By {fm.author}</SubText>
          <SubText>{fm.date}</SubText>
          <SubText>Tags: {fm.tags}</SubText>
        </PublishingInfo>
      }
      {!fm.author &&
        <PublishingInfo>
          <SubText>{fm.date}</SubText>
          <SubText>Tags: {fm.tags}</SubText>
        </PublishingInfo>
      }

      {/*
      <div>
        {fm.tags && fm.tags.map( (tag) => (
          <span className="tag" css={`margin-right: 5px;`}>{tag}</span>
        ))}
      </div>
      */}
    </CardLayout>
  )
}


const BlogPage = ({ data }) => {
  const [tag, setTag] = useState("")
  return (
    <PageLayout title="Blog">
      <TagSelector tag={tag} setTag={setTag} />
      <GridContainer childWidth="450">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          (!tag || node.frontmatter.tags.includes(tag)) && <BlogCard card={node} />
        ))}
      </GridContainer>
    </PageLayout>
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
