import React from "react"
import s from "styled-components"
import { BoxSectionHeading } from "./shared/BoxColumn"
import Carousel from "../components/shared/Carousel"
import { useContainerDimensions } from "./shared/useContainerDimensions"
import Tile from "./shared/Tile";


const articleItems = [
  {
    top: "PCV",
    mid: "Penn Climate Ventures holds inaugural environmental tech startup competition",
    midLink: "https://www.thedp.com/article/2021/04/penn-climate-ventures-impossible-foods",
    bot: "Daily Pennsylvanian"
  },
  {
    top: "PCV",
    mid: "New student group looks to design Penn course on business solutions to climate crisis",
    midLink: "https://www.thedp.com/article/2021/01/penn-climate-ventures-innovation-environment-sustainable",
    bot: "Daily Pennsylvanian"
  },
  {
    top: "Speaker",
    mid: "How We Can Better Predict Weather Catastrophes",
    midLink: "https://www.nytimes.com/2021/02/25/opinion/weather-forecast-climate-change.html",
    bot: "New York Times"
  },
]

const NewsLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <BoxSectionHeading>In the News</BoxSectionHeading>
      <Carousel show={Math.floor(width / 200)}>
          { articleItems.map( article => (
            <Tile topText={article.top}
                  midText={article.mid}
                  midLink={article.midLink}
                  botText={article.bot} />
          )) }
      </Carousel>
    </div>
  )
}


export const News = s(NewsLayout)`
`
