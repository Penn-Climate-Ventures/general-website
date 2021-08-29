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
    linkedin: "https://www.linkedin.com/in/mark-wasuwanich-960422195/",
  },
  {
    position: "Logistics",
    name: "Preet Shah",
    linkedin: "https://www.linkedin.com/in/preet-shah-/",
  },
  {
    position: "Fundraising",
    name: "Mayank Raghuwanshi",
    linkedin: "https://www.linkedin.com/in/mayank-raghuwanshi-4714b720b/",
  },
]
const fellowshipsTeamData = [
  {
    position: "Lead",
    name: "Aliris Tang",
    linkedin: "https://www.linkedin.com/in/aliris-tang/",
  },
  {
    position: "Consulting Project Lead",
    name: "Kevin Zhou",
    linkedin: "https://www.linkedin.com/in/kzzhou/",
  },
  {
    position: "Consulting Project Lead",
    name: "Arnav Aggarwal",
    linkedin: "https://www.linkedin.com/in/arnavagg/",
  },
  {
    position: "Consulting Project Lead",
    name: "Rachel Lee",
    linkedin: "https://www.linkedin.com/in/rachel-lee-b29404180/",
  },
]
const prizeTeamData = [
  {
    position: "Marketing",
    name: "Christiana Guan",
    linkedin: "",
  },
  {
    position: "Events",
    name: "Anjie Wang",
    linkedin: "https://www.linkedin.com/in/anjiewangnz/",
  },
  {
    position: "Events",
    name: "Aditya Rao",
    linkedin: "",
  },
  {
    position: "Fundraising",
    name: "Alice Feng",
    linkedin: "https://www.linkedin.com/in/yfeng3/",
  },
  {
    position: "Web Dev + Design",
    name: "Nicole Chau",
    linkedin: "https://www.linkedin.com/in/nicole-chau/",
  },
  {
    position: "Web Dev",
    name: "Ryoma Harris",
    linkedin: "https://www.linkedin.com/in/ryomah/",
  },
]
const communityTeamData = [
  {
    position: "PR Lead",
    name: "Angela Sun",
    linkedin: "https://www.linkedin.com/in/angela-sun-47a3601b4/",
  },
  {
    position: "Content Manager",
    name: "Preet Shah",
    linkedin: "https://www.linkedin.com/in/preet-shah-/",
  },
  {
    position: "Writer",
    name: "Salman Abbas",
    linkedin: "https://www.linkedin.com/in/salman-abbas-436565178/",
  },
  {
    position: "Writer",
    name: "Aditya Rao",
    linkedin: "",
  },
]
const developmentTeamData = [
  {
    position: "Vision",
    name: "Andrew Yu",
    linkedin: "https://www.linkedin.com/in/andrewdyu/",
  },
  {
    position: "Operations",
    name: "Yi-An Hsieh",
    linkedin: "https://www.linkedin.com/in/yianhsieh/",
  },
  {
    position: "Culture",
    name: "Aliris Tang",
    linkedin: "https://www.linkedin.com/in/aliris-tang/",
  },
  {
    position: "HR + Scaling",
    name: "Aliris Tang",
    linkedin: "https://www.linkedin.com/in/aliris-tang/",
  },
  {
    position: "Secretary",
    name: "Rachel Lee",
    linkedin: "https://www.linkedin.com/in/rachel-lee-b29404180/",
  },
  {
    position: "Treasurer",
    name: "Bruce Shen",
    linkedin: "https://www.linkedin.com/in/xiuqi-bruce-shen-40890b1a6/",
  },
]
const advisingTeamData = [
  {
    position: "",
    name: "Helen Wiley @ the Wharton Risk Center",
    linkedin: "",
  },
  {
    position: "",
    name: "Guatam",
    linkedin: "",
  },
  {
    position: "",
    name: "Kerry",
    linkedin: "",
  },
  {
    position: "",
    name: "Christine",
    linkedin: "",
  },
  {
    position: "",
    name: "Sid",
    linkedin: "",
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

const Member = ({ position, name, linkedin }) => (
  <div css={`margin: 10px auto;`}>
    <p css={`margin-bottom: 0 !important;`}><b>{( position )}</b></p>
    {linkedin &&
      <p><a href={linkedin} target="_blank" rel="noreferrer noopener"
            style={{fontSize: `inherit`, color: `inherit`, "&:hover": {color: `${LIGHT_BLUE} !important`}}}>
        {( name )}
      </a></p>
    }
    {!linkedin &&
      <p>{( name )}</p>
    }
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
            <Member position={item.position} name={item.name} linkedin={item.linkedin} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Fellowships</TeamName>
          { fellowshipsTeamData.map( item => (
            <Member position={item.position} name={item.name} linkedin={item.linkedin} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Prize</TeamName>
          { prizeTeamData.map( item => (
            <Member position={item.position} name={item.name} linkedin={item.linkedin} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Community</TeamName>
          { communityTeamData.map( item => (
            <Member position={item.position} name={item.name} linkedin={item.linkedin} />
          )) }
        </TeamColumn>
        <TeamColumn round="true">
          <TeamName>Development</TeamName>
          { developmentTeamData.map( item => (
            <Member position={item.position} name={item.name} linkedin={item.linkedin} />
          )) }
        </TeamColumn>
      </Carousel>
    </div>
  )
}

export const Team = s(TeamLayout)`
`
