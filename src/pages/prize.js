import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Footer,
} from "../components"

import { STEEL_BLUE, MIDNIGHT_BLUE } from "../utils/constants"


const PrizeButtonContainer = s.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto 5px auto;
  height: 200px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: auto 0px;
  }
`

const Rule = s.span`
  height: 100%;
  width: 2px;
  background-color: ${STEEL_BLUE};
  
  @media screen and (max-width: 768px) {
    opacity: 0;
  }
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
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Prize</PageTitle>
      <TextP bold="true">
        Catalyzing climate innovation at Penn.
      </TextP>
      <TextP>
        The prize team organizes (1) a Penn-only competition focused on climate
        tech ideation in the Fall and (2) a global pitch competition in the
        spring.
      </TextP>
      <PrizeButtonContainer>
        <PrizeButton href={"/soon"}>PCV Ideathon</PrizeButton>
        <Rule />
        <PrizeButton href={"/soon"}>PCV Prize Competition</PrizeButton>
      </PrizeButtonContainer>
      <Footer />
    </Layout>
  )
}
export default PrizePage
