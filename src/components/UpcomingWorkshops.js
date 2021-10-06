import React from "react"
import s from "styled-components"
import { SectionHeader } from "./shared/Layout"
import Tile from "../components/shared/Tile"
import {useContainerDimensions} from "./shared/useContainerDimensions";
import {ActionButton} from "./shared/Button";


const cardItems = [
  {
    top: "Life Cycle Assessment",
    mid: "Sept. 17",
    bot: "5-6:30 PM EST"
  },
  {
    top: "Consulting Case Workshop",
    mid: "Oct. 1",
    bot: "6-8 PM EST"
  },
  {
    top: "Blockchain Workshop",
    mid: "Oct. 29",
    bot: "5-6 PM EST"
  },
  {
    top: "ESG Workshop",
    mid: "Nov. 12",
    bot: "TBD"
  },
  {
    top: "Sustainable Regulations Workshop",
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
      <div css={`display: flex; justify-content: center; margin-top: 60px;`}>
        <ActionButton rel="noreferrer noopener"
                      target="_blank"
                      href="https://tinyurl.com/m5e7h4uj">RSVP Here!</ActionButton>
      </div>
    </div>
  )
}

export const UpcomingWorkshops = s(UpcomingWorkshopsLayout)`
`
