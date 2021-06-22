import React from "react"
import s from "styled-components"
import { GREEN, STEEL_BLUE } from "../utils/constants"
import { BoxSectionHeading } from "../components/shared/BoxColumn"
import Carousel from "../components/shared/Carousel"
import { useContainerDimensions } from "./shared/useContainerDimensions"
import Tile from "./shared/Tile";


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
  {
    top: "Speaker",
    mid: "How We Can Better Predict Weather Catastrophes",
    bot: "New York Times"
  },
  {
    top: "Speaker",
    mid: "How We Can Better Predict Weather Catastrophes",
    bot: "New York Times"
  },
  {
    top: "Speaker",
    mid: "How We Can Better Predict Weather Catastrophes",
    bot: "New York Times"
  },
  {
    top: "Speaker",
    mid: "How We Can Better Predict Weather Catastrophes",
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
            <Tile topText={article.top} midText={article.mid} botText={article.bot} />
          )) }
      </Carousel>
    </div>
  )
}


export const News = s(NewsLayout)`
`
