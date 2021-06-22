import React from "react"
import s from "styled-components"
import { SectionHeading } from "../components/shared/Layout"
import Carousel from "../components/shared/Carousel"
import Tile from "../components/shared/Tile"


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
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    console.log(width)
    window.addEventListener("resize", handleWindowResize)
  })

  return (
    <div>
      <SectionHeading>Past Lectures</SectionHeading>
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
