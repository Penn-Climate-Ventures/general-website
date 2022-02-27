import React from "react"
import s from "styled-components"
import Carousel from "../components/shared/Carousel"
import Tile from "../components/shared/Tile"
import {useContainerDimensions} from "./shared/useContainerDimensions";
import {Subtitle} from "./shared/Typography";


const cardItems = [
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  }
];

const PastWorkshopsLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
  <div ref={componentRef}>
    <Subtitle>Past Workshops</Subtitle>
    <Carousel show={Math.floor(width / 200)}>
      { cardItems.map( card => (
        <Tile topText={card.top} midText={card.mid} botText={card.bot} />
      )) }
    </Carousel>
  </div>
)
}

export const PastWorkshops = s(PastWorkshopsLayout)`
`
