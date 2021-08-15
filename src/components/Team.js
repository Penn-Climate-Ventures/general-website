import React from "react"
import s from "styled-components"
import { BoxColumn } from "./shared/BoxColumn"
import {TextP, Email, SectionHeader} from "./shared/Layout"
import { LIGHT_BLUE } from "../utils/constants"
import Carousel from "./shared/Carousel";
import {useContainerDimensions} from "./shared/useContainerDimensions";

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

const TeamColumn = s(BoxColumn)`
    width: 200px;
`

const TeamName = s.p`
    color: ${LIGHT_BLUE};
    font-size: 1.2rem;
    // text-decoration: underline;
    margin: 10px auto;
    font-weight: bold;
`

const Member = ({ position, name }) => (
  <div css={`margin: 10px auto;`}>
    <p css={`margin-bottom: 0 !important;`}><b>{( position )}</b></p>
    <p>{( name )}</p>
  </div>
)

const TeamLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <SectionHeader left={"left"}>Join a Team</SectionHeader>
      <TextP>Recruitment for Class, Fellowships, Prize, and Community Teams is open
        at the Penn SAC Fairs for all current Penn students.</TextP>
      <TextP>If you are interested in Advising, Partnerships, Sponsorships, or Press,
        please shoot us an email at <Email/>.</TextP>
      <Carousel show={width / 240}>
        <TeamColumn round="true">
          <TeamName>Class</TeamName>
          { classTeamData.map( item => (
            <Member position={item.position} name={item.name} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Fellowships</TeamName>
          { fellowshipsTeamData.map( item => (
            <Member position={item.position} name={item.name} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Prize</TeamName>
          { prizeTeamData.map( item => (
            <Member position={item.position} name={item.name} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Community</TeamName>
          { communityTeamData.map( item => (
            <Member position={item.position} name={item.name} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Development</TeamName>
          { developmentTeamData.map( item => (
            <Member position={item.position} name={item.name} />
          )) }
        </TeamColumn>
      </Carousel>
    </div>
  )
}

export const Team = s(TeamLayout)`
`
