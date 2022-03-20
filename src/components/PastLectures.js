import React from "react"
import s from "styled-components"
import Carousel from "../ui/Carousel"
import Tile from "../ui/Tile"
import {useContainerDimensions} from "../ui/useContainerDimensions";
import {Subtitle} from "../ui/Typography";


const cardItems = [
  {
    top: "PCV",
    mid: "State-of-the-Field: Waste and Circularity",
    bot: "March 2021"
  },
  {
    top: "PCV",
    mid: "State-of-the-Field: Energy and Transportation",
    bot: "April 2021"
  },
  {
    top: "PCV",
    mid: "State-of-the-Field: Food and Agriculture",
    bot: "April 2021"
  },
  {
    top: "PCV",
    mid: "Venture: Investing, Due Diligence, and Strategic Partnerships",
    bot: "April 2021"
  },
];


const PastLecturesLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <Subtitle>Past Lectures</Subtitle>
      <Carousel show={Math.floor(width / 200)}>
        { cardItems.map( card => (
          <Tile topText={card.top} midText={card.mid} botText={card.bot} />
        )) }
      </Carousel>
    </div>
  )
}

export const PastLectures = s(PastLecturesLayout)`
`
