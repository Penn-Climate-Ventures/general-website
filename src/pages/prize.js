import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "../styles/base.scss"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Footer,
} from "../components"
import { ActionButton } from "../components/shared/Button"

import { LIGHT_BLUE } from "../utils/constants"


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
  background-color: ${LIGHT_BLUE};
  
  @media screen and (max-width: 768px) {
    opacity: 0;
  }
`

const PrizePage = () => {
  return (
    <>
    <Helmet title="Penn Climate Ventures" defer={false} />
    <Navbar />
    <Layout>
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
        <ActionButton rel="noreferrer noopener"
                      target="_blank"
                      href="https://ideathon.pennclimateventures.org/">PCV Ideathon</ActionButton>
        <Rule />
        <ActionButton rel="noreferrer noopener"
                      target="_blank"
                      href="https://prize.pennclimateventures.org/">
          PCV Prize Competition
        </ActionButton>
      </PrizeButtonContainer>
      <Footer />
    </Layout>
    </>
  )
}
export default PrizePage
