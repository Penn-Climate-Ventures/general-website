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
  background: #F1F1F1;
  border-radius: 58px;
`

const TagOption = s.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 25px;
  gap: 10px;
  background: white;
  border-radius: 30px;
  flex: none;
  flex-grow: 0;
  border: 1px solid white;

  &:hover {
	cursor: pointer;
	border: 1px solid #217CFF;
	transition: all ease-in-out 0.2s;
  }
`

const TagText = s.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const TagSelectorOuterWrapper = s.div`
  display: flex;
  width = 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

const Description = s.p``

const optionClick = (tagType, tag, tagSetter, colorSetter, textColorSetter, index) => {
  let tempColorArray = ['white', 'white']
  let tempTextColorArray = ['#217CFF', '#217CFF']
  if (tag == tagType) {
    tagSetter("")
    colorSetter(tempColorArray)
    textColorSetter(tempTextColorArray)
  } else {
    tagSetter(tagType)
    tempColorArray[index] = '#217CFF'
    colorSetter(tempColorArray)
    tempTextColorArray[index] = 'white'
    textColorSetter(tempTextColorArray)
  }
}

const TagSelector = ({ tag, setTag }) => {
  const [colors, setColors] = useState(['white', 'white'])
  const [textColors, setTextColors] = useState(['#217CFF', '#217CFF'])
  return (
    <TagSelectorOuterWrapper>
      <TagSelectorWrapper>
        <TagOption onClick={() => optionClick("Energy Policy", tag, setTag, setColors, setTextColors, 0)} style={{background: colors[0]}}>
          <TagText style={{color: textColors[0]}}>
            Energy Policy
          </TagText>
        </TagOption>
        <TagOption onClick={() => optionClick("General", tag, setTag, setColors, setTextColors, 1)} style={{background: colors[1]}}>
        <TagText style={{color: textColors[1]}}>
            General
          </TagText>
        </TagOption>
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
