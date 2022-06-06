import React from "react"
import s from "styled-components"

import {Subtitle, Text, UrlLink} from "../ui/Typography"
import {Container, PageLayout} from "../ui/layout"

import {teamData} from "../data/team"


const TeamGallery = s.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 30px;
`

const MemberWrapper = s.div`
  width: 120px;
  padding: 30px;
  border: 1px solid var(--c-accent-primary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MemberName = s(UrlLink)`
  text-alignment: center;
  margin-top: 15px;
`

const Member = ({ member }) => (
  <MemberWrapper>
    {member.headshot}
    <MemberName href={member.linkedin}>{member.name}</MemberName>

    {member.bio &&
      <Text>{member.bio}</Text>
    }

    {member.roles.map(role => (
      <Text>{role}</Text>
    ))}
  </MemberWrapper>
)

const AboutPage = () => {
  return (
    <PageLayout title="About">
      <Container>
        <Subtitle>Mission & Vision</Subtitle>

        <Subtitle>Our Story</Subtitle>

        <Subtitle>People</Subtitle>
        <TeamGallery>
          {teamData.map(member => (
            <Member member={member}/>
          ))}
        </TeamGallery>
      </Container>
    </PageLayout>
  )
}

export default AboutPage
