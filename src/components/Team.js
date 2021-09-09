import React from "react"
import s from "styled-components"
import {TextP, Email, SectionHeader} from "./shared/Layout"
import {ActionButton} from "./shared/Button";

const JoinButton = s(ActionButton)`
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
`

const TeamLayout = () => {
  return (
    <div>
      <SectionHeader left={"left"}>Join a Team</SectionHeader>
      <TextP>Recruitment for Class, Fellowships, Prize, and Community Teams is open
        at the Penn SAC Fairs for all current Penn students.</TextP>
      <TextP>If you are interested in Advising, Partnerships, Sponsorships, or Press,
        please shoot us an email at <Email/>.</TextP>
      <div style={{textAlign: `center`, margin: `30px 0`}}>
        <JoinButton href="/membership">Join here!</JoinButton>
      </div>
    </div>
  )
}

export const Team = s(TeamLayout)`
`
