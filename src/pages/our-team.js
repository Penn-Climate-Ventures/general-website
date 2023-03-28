import React from "react"
import s from "styled-components"

import { teamData, teamNames } from "../data/team"
import { PageLayout, Container, GridContainer } from "../ui/layout"
import { Title, Subtitle, CenteredSubtitle, Text, SubText, UrlLink } from "../ui/Typography"

const Headshot = s.img`
  height: ${({ size }) => ( size ? size : "200px")};
  width: ${({ size }) => ( size ? size : "200px")};
  border-radius: 20%;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  background-color: #398EFC;
`

// TODO: Edit MemberContainer to match Figma design
const MemberContainer = s.div`
`

const MemberCard = ({ memberData }) => {
    const { name, headshotImage, year, student, roles } = memberData
    // TODO: Edit the MemberCard component based on the Figma design
    // Text components have been used as placeholders for the relevant details.
    // You'll need to add styled components above and replace the Text components to
    // properly style the individual components according to the Figma design.
    // Feel free to make additional modifications as needed.
    return (
        <MemberContainer>
            <Headshot src={headshotImage ?? "/team/GenericHeadshot.png"} alt={name}/>
            <Text>{name}</Text>
            <Text>{roles.join(", ")}</Text>
            <Text>{year}</Text>
            <Text>{student}</Text>
        </MemberContainer>
    )
}

const OurTeamPage = () => {
    return (
        <PageLayout title="Our Team">
            {teamNames.map(tName => (
                <Container>
                    <CenteredSubtitle>{tName}</CenteredSubtitle>
                    <GridContainer childWidth="250">
                        {teamData.map(member => {
                            if (member.teams.includes(tName))
                                return <MemberCard memberData={member} />
                        })}
                    </GridContainer>
                </Container>
            ))}
        </PageLayout>
    )
}

export default OurTeamPage