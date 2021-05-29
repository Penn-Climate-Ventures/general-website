import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "./shared/Typography"
import { mediaMaxWidth } from "../utils/constants"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${mediaMaxWidth("768px")} {
    flex-direction: row;
  }
`

const Level = s.div`
  margin-top: 2vw;

  ${mediaMaxWidth("768px")} {
    width: 100%;
    padding: 10%;
  }
`

const responsiveText = `
  ${mediaMaxWidth("768px")} {
    font-size: calc(2rem + 1vw);
  }
`

const PrizeSubtitle = s(Subtitle)`
  ${responsiveText}
  ${mediaMaxWidth("768px")} {
    margin-right: auto;
  }
`

const PrizeTitle = s(Title)`
  ${responsiveText}
`

const PrizesLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref} className={`container has-text-centered ${className}`}>
    <Subtitle fontSize="1.5rem" css="padding: 2vw;">Dive into the most pressing environmental issues of today.</Subtitle>
    <Level className="level">
      <LevelItem>
        <PrizeSubtitle roboto>Grand Prize</PrizeSubtitle>
        <PrizeTitle>$5000</PrizeTitle>
      </LevelItem>
      <LevelItem>
        <PrizeSubtitle roboto>Second</PrizeSubtitle>
        <PrizeTitle>$2500</PrizeTitle>
      </LevelItem>
      <LevelItem>
        <PrizeSubtitle roboto>Third</PrizeSubtitle>
        <PrizeTitle>$1250</PrizeTitle>
      </LevelItem>
    </Level>
  </div>
))

export const Prizes = s(PrizesLayout)`
  margin-top: 10vw;
`