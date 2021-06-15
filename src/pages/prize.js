import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Navbar,
  PageTitle,
  SectionText,
  Footer,
} from "../components"

import { STEEL_BLUE, MIDNIGHT_BLUE } from "../utils/constants"


const PrizeButtonContainer = s.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto 5px auto;
  height: 200px;
  text-align: center;
`

const Rule = s.span`
  height: 100%;
  width: 2px;
  background-color: ${STEEL_BLUE};
`

const PrizeButton = s.a`
  color: ${MIDNIGHT_BLUE};
  text-align: center;
  width: 250px;
  font-size: 1rem;
  font-weight: bold;
  border: 1.5px solid ${STEEL_BLUE};
  border-radius: 25px;
  padding: 10px 15px;
  margin: auto;
  display: span;

  &:hover {
    color: ${STEEL_BLUE};
  }
`

const PrizePage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <div css={`margin: auto 3rem;`}>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Prize</PageTitle>
      <SectionText bold="true">
        Catalyzing climate innovation at Penn.
      </SectionText>
      <SectionText>
        The prize team oragnizes (1) a Penn-only competition focused on climate
        tech ideation in the Fall and (2) a global pitch competition in the
        spring.
      </SectionText>
      <PrizeButtonContainer>
        <PrizeButton to="">PCV Ideathon</PrizeButton>
        <Rule />
        <PrizeButton to="">PCV Prize Competition</PrizeButton>
      </PrizeButtonContainer>
      <Footer />
    </div>
  )
}
export default PrizePage
