import React from "react"
import s from "styled-components"
import { GREEN, STEEL_BLUE } from "../utils/constants"
import { BoxSectionHeading } from "../components/shared/BoxColumn"
import Carousel from "../components/shared/Carousel"


const articleItems = [
  {
    top: "PCV",
    mid: "Penn Climate Ventures holds inaugural environmental tech startup competition",
    bot: "Daily Pennsylvanian"
  },
  {
    top: "PCV",
    mid: "New student group looks to design Penn course on business solutions to climate crisis",
    bot: "Daily Pennsylvanian"
  },
  {
    top: "Speaker",
    mid: "How We Can Better Predict Weather Catastrophes",
    bot: "New York Times"
  },
]

const ArticleGrid = s.div`
  display: grid;
  grid-template-columns: repeat(${({ rowCount }) => rowCount }, 1fr);
  grid-gap: 1rem;
`

const ArticleBox = s.div`
  font-size: 0.85rem;
  line-height: 0.85rem;
  width: 200px;
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

const NewsLayout = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    console.log(width)
    window.addEventListener("resize", handleWindowResize)
  })

  return (
    <div>
      <BoxSectionHeading>In the News</BoxSectionHeading>
      <Carousel show={Math.floor(width / 200)}>
        <ArticleGrid rowCount={2}>
          { articleItems.map( article => (
          <ArticleBox>
            <ArticleCateogry>{article.top}</ArticleCateogry>
            <ArticleTitle>{article.mid}</ArticleTitle>
            <ArticlePublisher>{article.bot}</ArticlePublisher>
          </ArticleBox>
          )) }
        </ArticleGrid>
      </Carousel>
    </div>
  )
}

export const News = s(NewsLayout)`
`
