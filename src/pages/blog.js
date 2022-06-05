import React from "react"
import s from "styled-components"

import {graphql, Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

import {
  Navbar,
  Footer
} from "../components"

import {SubText, Title} from "../ui/Typography";
import {Container, GridContainer} from "../ui/layout";
import SEO from "../components/seo";

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

const Description = s.p``

const BlogCard = ({ card }) => {
  const fm = card.frontmatter
  const coverImageData = getImage(fm.image)

  return (
    <CardLayout>
      {coverImageData &&
        <CoverImage>
          <GatsbyImage alt={fm.title} image={coverImageData} />
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
        </PublishingInfo>
      }
      {!fm.author &&
        <PublishingInfo>
          <SubText>{fm.date}</SubText>
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
  return (
    <>
    <SEO title="Blog" defer={false} />
    <Navbar />
    <Container>
      <Title>Blog</Title>
    </Container>
    <GridContainer childWidth="450">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogCard card={node} />
      ))}
    </GridContainer>
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
