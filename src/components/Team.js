import React from "react"
import s from "styled-components"
import { BoxSectionHeading, BoxColumn } from "../components/shared/BoxColumn"
import { GREEN } from "../utils/constants"


const TeamGrid = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
`

const TeamName = s.p`
    color: ${GREEN};
    margin: 10px auto;
    font-weight: bold;
`

const Member = ({ position, firstName, lastName }) => (
  <div css={`margin: 10px auto;`}>
    <p><b>{( position )}</b></p>
    <p>{( firstName )} {( lastName )}</p>
  </div>
)

const Advisor = s.p`
  margin: 10px auto;
`

const TeamLayout = () => (
  <div>
    <BoxSectionHeading>Join a Team</BoxSectionHeading>
    <p>Recruitment for Class, Fellowships, Prize, and Community Teams is open
       at the Penn SAC Fairs for all current Penn students.</p>
    <p>If you are interested in Advising, Partnerships, Sponsorships, or Press,
       please shoot us an email at pennclimateventures@gmail.com</p>
    <TeamGrid>
      <BoxColumn round="true">
        <TeamName>Class</TeamName>
        <Member position="Lead" firstName="Mark" lastName="Wasuwanich"/>
        <Member position="Logistics" firstName="first" lastName="last"/>
        <Member position="Research" firstName="first" lastName="last"/>
        <Member position="Fundarising" firstName="first" lastName="last"/>
        <Member position="Design + Marketing" firstName="first" lastName="last"/>
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Fellowships</TeamName>
        <Member position="Lead" firstName="Shalini" lastName="Majumdar"/>
        <Member position="Sales" firstName="first" lastName="last"/>
        <Member position="Events" firstName="first" lastName="last"/>
        <Member position="Recruitment" firstName="first" lastName="last"/>
        <Member position="Design" firstName="first" lastName="last"/>
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Prize</TeamName>
        <Member position="Lead" firstName="Aditya" lastName="Rao"/>
        <Member position="Outreach" firstName="first" lastName="last"/>
        <Member position="Events" firstName="first" lastName="last"/>
        <Member position="Fundraising" firstName="first" lastName="last"/>
        <Member position="Design" firstName="first" lastName="last"/>
        <Member position="Web Dev" firstName="Nicole" lastName="Chau"/>
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Community</TeamName>
        <Member position="PR" firstName="first" lastName="last"/>
        <Member position="Content" firstName="Angela" lastName="Sun"/>
        <Member position="Web Dev" firstName="first" lastName="last"/>
        <Member position="Discord" firstName="first" lastName="last"/>
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Development</TeamName>
        <Member position="Vision" firstName="Mark" lastName="Wasuwanich"/>
        <Member position="Execution" firstName="Yi-An" lastName="Hsieh"/>
        <Member position="Culture" firstName="Aliris" lastName="Tang"/>
        <Member position="HR + Scaling" firstName="Aliris" lastName="Tang"/>
        <Member position="Secretary" firstName="Rachel" lastName="Lee"/>
        <Member position="Treasurer" firstName="Andrew" lastName="Yu"/>
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Advising</TeamName>
        <Advisor>Helen Wiley @ the Wharton Risk Center</Advisor>
        <Advisor>Ben @ the Wharton Risk Center</Advisor>
        <Advisor>Guatam</Advisor>
        <Advisor>Kerry</Advisor>
        <Advisor>Christine</Advisor>
        <Advisor>Sid</Advisor>
      </BoxColumn>
    </TeamGrid>
  </div>
)

export const Team = s(TeamLayout)`
`
