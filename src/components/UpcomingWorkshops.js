import React from "react"
import s from "styled-components"
import { SectionHeader } from "../components/shared/Layout"
import Tile from "../components/shared/Tile"
import {useContainerDimensions} from "./shared/useContainerDimensions";


const cardItems = [
  {
    top: "PCV",
    mid: "TBD",
    bot: "TBD"
  },
  {
    top: "PCV",
    mid: "TBD",
    bot: "TBD"
  },
  {
    top: "PCV",
    mid: "TBD",
    bot: "TBD"
  },
  {
    top: "PCV",
    mid: "TBD",
    bot: "TBD"
  },
  {
    top: "PCV",
    mid: "TBD",
    bot: "TBD"
  },
  {
    top: "PCV",
    mid: "TBD",
    bot: "TBD"
  },
];

const FlexContainer = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  & > * {
    flex-basis: 14%;
    margin: 5px;
    max-width: 200px;
  }
  
  @media screen and (max-width: 576px) {
    & > * {
      flex-basis: 100%;
    }
  }
  
  @media screen and (max-width: 768px) {
    & > * {
      flex-basis: 30%;
    }
  }
  
  @media screen and (max-width: 992px) {
    & > * {
      flex-basis: 30%;
    }
  }
  
  @media screen and (max-width: 1200px) {
    & > * {
      flex-basis: 45%;
    }
  }
`

const UpcomingWorkshopsLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
  <div ref={componentRef}>
    <SectionHeader>Upcoming Workshops</SectionHeader>
    <FlexContainer>
      { cardItems.map( card => (
        <Tile topText={card.top} midText={card.mid} botText={card.bot} />
      )) }
    </FlexContainer>
  </div>
)
}

export const UpcomingWorkshops = s(UpcomingWorkshopsLayout)`
`
