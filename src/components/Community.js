import React from "react"
import s from "styled-components"
import { BoxSectionHeading, BoxHeading, BoxColumn } from "../components/shared/BoxColumn"
import Button from "../components/shared/Button"
import { MIDNIGHT_BLUE } from "../utils/constants"


const CommunityGrid = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  grid-gap: 1rem;
`

const CommunityText = s.p`
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 10px;
  margin-bottom: 20px;
`

const CommunityButton = s(Button)`
  font-size: 0.9rem;
  text-align: left;
  padding: 10px 15px;
  border: 2px solid ${MIDNIGHT_BLUE};
  border-radius: 15px;
  width: 100%;
  z-index: 1;
`


const CommunityLayout = () => (
  <div>
    <BoxSectionHeading>Stay Up to Date On All Things PCV</BoxSectionHeading>
    <CommunityGrid>
      <BoxColumn center="true">
        <div>
          <BoxHeading>Subscribe to Our Newsletter</BoxHeading>
          <CommunityText>
            Sporadically Sent Out When We Have Interesting News and
            Opportunities to Share
           </CommunityText>
          <CommunityButton href="/">email</CommunityButton>
        </div>
      </BoxColumn>
      <BoxColumn center="true">
        <div>
            <BoxHeading>Join Our Discord Community</BoxHeading>
            <CommunityText>
              Featuring discussions about climate policy, finance energy, waste,
              agriculture, and the venture landscape.
            </CommunityText>
            <CommunityButton href="/">request access</CommunityButton>
         </div>
      </BoxColumn>
      <BoxColumn center="true">
        <div>
          <BoxHeading>Subscribe to Prize Updates</BoxHeading>
          <CommunityText>
            Up to date news about the latest that's happening with our Prize
            Competition.
           </CommunityText>
          <CommunityButton href="/">email</CommunityButton>
        </div>
      </BoxColumn>
    </CommunityGrid>
  </div>
)

export const Community = s(CommunityLayout)`
`
