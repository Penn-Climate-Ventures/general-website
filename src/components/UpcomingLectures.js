import React from "react"
import s from "styled-components"
import Carousel from "../ui/Carousel"
import Tile from "../ui/Tile"
import {useContainerDimensions} from "../ui/useContainerDimensions";
import {Subtitle} from "../ui/Typography";


const cardItems = [
  {
    top: "PCV",
    mid: "Penn Climate holds inaugural environmental tech startup competition",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "How We Can Better Predict Weather Catastrophes",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "The Description of the Event Would Go Right Here.",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "New student group looks to design Penn course on business solutions to climate crisis",
    bot: "DATE + TIME"
  },
  {
    top: "PCV",
    mid: "New student group looks to design Penn course on business solutions to climate crisis",
    bot: "DATE + TIME"
  },
];

const UpcomingLecturesLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <Subtitle>Upcoming Lectures</Subtitle>
      <Carousel show={Math.floor(width / 200)}>
        {cardItems.map(card => (
          <Tile topText={card.top} midText={card.mid} botText={card.bot}/>
        ))}
      </Carousel>
    </div>
  );
}

export const UpcomingLectures = s(UpcomingLecturesLayout)`
`
