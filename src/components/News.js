import React from "react"
import s from "styled-components"
import { GREEN, STEEL_BLUE } from "../utils/constants"
import { BoxSectionHeading } from "../components/shared/BoxColumn"


const ArticleGrid = s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

const ArticleBox = s.div`
  font-size: 0.85rem;
  line-height: 0.85rem;
  padding: 15px 10px;
  border: 2px solid ${STEEL_BLUE};
  border-radius: 10px;
  text-align: center;
`

const ArticleCateogry = s.p`
  color: ${STEEL_BLUE};
  font-weight: bold;
`

const ArticleTitle = s.a`
  color: #05052C;
  font-weight: bold;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`

const ArticlePublisher = s.p`
  color: ${GREEN};
  font-weight: bold;
`

const NewsLayout = () => (
  <div>
    <BoxSectionHeading>In the News</BoxSectionHeading>
    <div className="carousel">
      <ArticleGrid>
        <ArticleBox>
          <ArticleCateogry>PCV</ArticleCateogry>
          <ArticleTitle>
            Penn Climate Ventures holds inaugural environmental
            tech startup competition
          </ArticleTitle>
          <ArticlePublisher>Daily Pennsylvanian</ArticlePublisher>
        </ArticleBox>
        <ArticleBox>
          <ArticleCateogry>PCV</ArticleCateogry>
          <ArticleTitle>
            New student group looks to design Penn course on business solutions
            to climate crisis
          </ArticleTitle>
          <ArticlePublisher>Daily Pennsylvanian</ArticlePublisher>
        </ArticleBox>
        <ArticleBox>
          <ArticleCateogry>Speaker</ArticleCateogry>
          <ArticleTitle>
            How We Can Better Predict Weather Catastrophes
          </ArticleTitle>
          <ArticlePublisher>New York Times</ArticlePublisher>
        </ArticleBox>
      </ArticleGrid>
    </div>
  </div>
)

export const News = s(NewsLayout)`
`
