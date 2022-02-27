import React from "react"
import s from "styled-components"
import Carousel from "../components/shared/Carousel"
import Tile from "../components/shared/Tile"
import {useContainerDimensions} from "./shared/useContainerDimensions";
import {Email, Subtitle, Text} from "./shared/Typography";


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


const ConsultingProductDemosLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <Subtitle>Consulting Product Demos</Subtitle>
      <Text center>
        If your startup is interested in our services, please contact us at <Email/>.
      </Text>
      <Carousel show={Math.floor(width / 200)}>
        { cardItems.map( card => (
          <Tile topText={card.top} midText={card.mid} botText={card.bot} />
        )) }
      </Carousel>
    </div>
  )
}

export const ConsultingProductDemos = s(ConsultingProductDemosLayout)`
`
