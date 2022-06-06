import React from "react"
import s from "styled-components"

import {Container, PageLayout} from "../ui/layout"
import {Text} from "../ui/Typography"
import { Button } from "../ui/Button"

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
    <PageLayout title="Prize">
      <Container>
        <Text bold>
          Catalyzing climate innovation at Penn.
        </Text>
        <Text>
          The prize team organizes (1) a Penn-only competition focused on climate
          tech ideation in the Fall and (2) a global pitch competition in the
          spring.
        </Text>
        <PrizeButtonContainer>
          <Button rel="noreferrer noopener"
                        target="_blank"
                        href="https://ideathon.pennclimateventures.org/">PCV Ideathon</Button>
          <Rule />
          <Button rel="noreferrer noopener"
                        target="_blank"
                        href="https://prize.pennclimateventures.org/">
            PCV Prize Competition
          </Button>
        </PrizeButtonContainer>
      </Container>
    </PageLayout>
  )
}
export default PrizePage
