import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "./shared/Typography"
import Chevron from "../images/svg/chevron.svg"

import { mediaMaxWidth } from "../utils/constants"

const HeroTitle = s(Title)`
  margin-top: -2rem;

  ${mediaMaxWidth("768px")}{
    margin: 2rem;
  }
`

const SpacedSubtitle = s(Subtitle)`
  margin-left: 4rem;
`

const InlineBlock = s.div`
  text-align: left;
  display: inline-block;
`

const HeroLayout = ({ className, scrollTo }) => (
  <div className={`container has-text-centered ${className}`}>
    <InlineBlock>
      <SpacedSubtitle css={` 
        ${mediaMaxWidth("768px")}{
          float: right;
          margin-right: 2rem;
        }
      `}>
        APRIL 3rd - 17th
      </SpacedSubtitle>
      <HeroTitle>Penn Climate Ventures Prize</HeroTitle>
      <SpacedSubtitle css={`
        ${mediaMaxWidth("768px")}{
          display: none;
        }
      `}>
        catalyzing climate action
      </SpacedSubtitle>
    </InlineBlock>
    <br />
    <a>
      <Chevron onClick={scrollTo} css={`
        width: 4rem;
        margin-top: 10vw;
      `} />
    </a>
  </div>
)

export const Hero = s(HeroLayout)`
  margin-top: 10vw;
`
