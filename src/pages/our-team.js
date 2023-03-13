import React from "react"

import { teamData, teamNames } from "../data/team"
import { GridContainer } from "../ui/layout"
const MemberCard = ({ memberData }) => {
    // TODO: Create the member card component based on the Figma design 
    return memberData.headshot
}


const OurTeamPage = () => {
    return (
        <PageLayout title="Our Team">
            {teamNames.map(tName => (
                <Container>
                    <Subtitle>{tName}</Subtitle>
                    <GridContainer childWidth="300">
                        {teamData.map(member => {
                            if (member.roles.includes(tName)) {
                                return (
                                    <MemberCard memberData={member} />
                                )
                            }
                        })}
                    </GridContainer>
                </Container>
            ))}
            {/* Note GridContainer after teamData is done */}
        </PageLayout>
    )
}

// TODO: Add the graphql stuff