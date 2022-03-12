import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import s from "styled-components"
import {SubText} from "./Typography";

const CardLayout = s.div`
  border-top: 1px solid #e6e6e6;
  width: 100%;
  max-width: 600px;
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
`

const Title = s.h2`
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

const Description = s.p`
`

const BlogCard = ({ node }) => {
  const fm = node.frontmatter
  const coverImageData = getImage(fm.image)

  return (
    <CardLayout>
      {coverImageData &&
        <CoverImage>
          <GatsbyImage alt={fm.title} image={coverImageData} />
        </CoverImage>
      }

      <Title>
        <Link to={node.fields.slug}>{fm.title}</Link>
      </Title>

      {fm.desc &&
        <Description>{fm.desc}</Description>
      }

      {fm.author &&
        <PublishingInfo>
          <SubText>By {fm.author}</SubText>
          <SubText>{fm.date}</SubText>
        </PublishingInfo>
      }
      {!fm.author &&
        <PublishingInfo>
          <SubText>{fm.date}</SubText>
        </PublishingInfo>
      }

      {/*<div>*/}
      {/*  {fm.tags && fm.tags.map( (tag) => (*/}
      {/*    <span className="tag" css={`margin-right: 5px;`}>{tag}</span>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </CardLayout>
  )
}

export default BlogCard
