import React from "react"
import s from "styled-components"
import {ActionButton} from "./shared/Button";
import {Email, Subtitle, Text} from "./shared/Typography";

const JoinButton = s(ActionButton)`
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
`

const TeamLayout = () => {
  return (
    <div>
      <Subtitle>Join a Team</Subtitle>
      <Text>Recruitment for Class, Fellowships, Prize, and Community Teams is open
        at the Penn SAC Fairs for all current Penn students.</Text>
      <Text>If you are interested in Advising, Partnerships, Sponsorships, or Press,
        please shoot us an email at <Email/>.</Text>
      <div style={{textAlign: `center`, margin: `30px 0`}}>
        <JoinButton href="/membership">Join here!</JoinButton>
      </div>
    </div>
  )
}

export const Team = s(TeamLayout)`
`
