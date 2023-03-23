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
width: min-content;
  height: min-content;
  padding: 42px 38px;
  border-radius: 42px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 0px 25px 4px #00000008;
`
const Profile2  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const Image  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const firstlast  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const Bio  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`


const headofwebdev  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const b2  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const frame22  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const seas242  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const frame32  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
`
const cis2  = s.div`
width: min-content;
height: min-content;
align-self: flex-start;
flex-direction: column;
align-items: center;
gap: 14px;
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
            <Profile2>
                <Image src={headshotImage= "/team/GenericHeadshot.png"} alt={name}/>
                <Bio>
                    <firstlast>{name}</firstlast>
                    <headofwebdev>{roles.join(", ")}</headofwebdev>
                    <b2>
                    <frame22>
                        <seas242>{year}</seas242>
                    </frame22>
                    <frame32>
                        <cis2>{student}</cis2>
                    </frame32>
                    </b2>
                </Bio>
            </Profile2>
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
