import React from "react"
import s from "styled-components"
import { BoxHeading, BoxColumn } from "./shared/BoxColumn"
import { SectionHeader } from "./shared/Layout"
import Button from "../components/shared/Button"
import { MIDNIGHT_BLUE } from "../utils/constants"


const CommunityGrid = s.div`
  display: flex;
  flex-wrap: wrap
  align-items: center;
  justify-content: center;
  
  & > * {
    width: 33%;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const CommunityText = s.p`
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 10px;
  margin-bottom: 20px;
`

const CommunityButton = s(Button)`
  font-size: 0.9rem;
  padding: 10px 15px;
  border: 2px solid ${MIDNIGHT_BLUE};
  border-radius: 30px;
  width: 100%;
  z-index: 1;
`


const CommunityLayout = () => (
  <div>
    <SectionHeader left={"left"}>Stay Up to Date On All Things PCV</SectionHeader>
    <CommunityGrid>
      <BoxColumn center="true">
        <div>
          <BoxHeading>Subscribe to Our Newsletter</BoxHeading>
          <CommunityText>
            Sporadically Sent Out When We Have Interesting News and
            Opportunities to Share
           </CommunityText>
          <CommunityButton
            href="https://forms.zohopublic.com/pennclimateventures/form/EmailSubscription/formperma/suTHSE8lKXPjRple25l_HDNqV5aRkGcZo4K3NjWTQzE"
            rel="noreferrer noopener "
            target="_blank">
            Sign Up
          </CommunityButton>
        </div>
      </BoxColumn>
      <BoxColumn center="true">
        <div>
          <BoxHeading>Join Our Discord Community</BoxHeading>
          <CommunityText>
            Featuring discussions about climate policy, finance energy, waste,
            agriculture, and the venture landscape.
          </CommunityText>
          <CommunityButton href="/">Invite Link</CommunityButton>
         </div>
      </BoxColumn>
      {/*<BoxColumn center="true">*/}
      {/*  <div>*/}
      {/*    <BoxHeading>Subscribe to Prize Updates</BoxHeading>*/}
      {/*    <CommunityText>*/}
      {/*      Up to date news about the latest that's happening with our Prize*/}
      {/*      Competition.*/}
      {/*     </CommunityText>*/}
      {/*    <CommunityButton href="/">email</CommunityButton>*/}
      {/*  </div>*/}
      {/*</BoxColumn>*/}
    </CommunityGrid>
  </div>
)

export const Community = s(CommunityLayout)`
`
