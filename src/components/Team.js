import React from "react"
import s from "styled-components"
import { BoxSectionHeading, BoxColumn } from "../components/shared/BoxColumn"
import { GREEN } from "../utils/constants"
import Tile from "./shared/Tile";
import Carousel from "./shared/Carousel";


const classTeamData = [
  {
    position: "Lead",
    name: "Mark Wasuwanich",
  },
  {
    position: "Logistics",
    name: "Preet Shah",
  },
  {
    position: "Fundraising",
    name: "Mayank Raghuwanshi",
  },
]
const fellowshipsTeamData = [
  {
    position: "Lead",
    name: "Aliris Tang",
  },
  {
    position: "Consulting Project Lead",
    name: "Kevin Zhou",
  },
  {
    position: "Consulting Project Lead",
    name: "Arnav Aggarwal",
  },
  {
    position: "Consulting Project Lead",
    name: "Rachel Lee",
  },
]
const prizeTeamData = [
  {
    position: "Outreach",
    name: "Omar Ben Kaddour",
  },
  {
    position: "Marketing",
    name: "Christiana Guan",
  },
  {
    position: "Events",
    name: "Anjie Wang",
  },
  {
    position: "Events",
    name: "Aditya Rao",
  },
  {
    position: "Fundraising",
    name: "Alice Feng",
  },
  {
    position: "Web Dev + Design",
    name: "Nicole Chau",
  },
  {
    position: "Web Dev",
    name: "Ryoma Harris",
  },
]
const communityTeamData = [
  {
    position: "PR Lead",
    name: "Angela Sun",
  },
  {
    position: "Content Manager",
    name: "Preet Shah",
  },
  {
    position: "Writer",
    name: "Salman Abbas",
  },
  {
    position: "Writer",
    name: "Aditya Rao",
  },
]
const developmentTeamData = [
  {
    position: "Vision",
    name: "Andrew Yu",
  },
  {
    position: "Operations",
    name: "Yi-An Hsieh",
  },
  {
    position: "Culture",
    name: "Aliris Tang",
  },
  {
    position: "HR + Scaling",
    name: "Aliris Tang",
  },
  {
    position: "Secretary",
    name: "Rachel Lee",
  },
  {
    position: "Treasurer",
    name: "Bruce Shen",
  },
]
const advisingTeamData = [
  {
    position: "",
    name: "Helen Wiley @ the Wharton Risk Center",
  },
  {
    position: "",
    name: "Guatam",
  },
  {
    position: "",
    name: "Kerry",
  },
  {
    position: "",
    name: "Christine",
  },
  {
    position: "",
    name: "Sid",
  },
]

const TeamGrid = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
  margin: 15px auto;
`

const TeamName = s.p`
    color: ${GREEN};
    margin: 10px auto;
    font-weight: bold;
`

const Member = ({ position, name }) => (
  <div css={`margin: 10px auto;`}>
    <p><b>{( position )}</b></p>
    <p>{( name )}</p>
  </div>
)

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
        { classTeamData.map( item => (
          <Member position={item.position} name={item.name} />
        )) }
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Fellowships</TeamName>
        { fellowshipsTeamData.map( item => (
          <Member position={item.position} name={item.name} />
        )) }
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Prize</TeamName>
        { prizeTeamData.map( item => (
          <Member position={item.position} name={item.name} />
        )) }
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Community</TeamName>
        { communityTeamData.map( item => (
          <Member position={item.position} name={item.name} />
        )) }
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Development</TeamName>
        { developmentTeamData.map( item => (
          <Member position={item.position} name={item.name} />
        )) }
      </BoxColumn>
      <BoxColumn round="true">
        <TeamName>Advising</TeamName>
        { advisingTeamData.map( item => (
          <Member position={item.position} name={item.name} />
        )) }
      </BoxColumn>
    </TeamGrid>
  </div>
)

export const Team = s(TeamLayout)`
`
