import React from "react"

import {Container, PageLayout} from "../ui/layout"
import {Email, Text, UrlLink} from "../ui/Typography"
import {News} from "../components/News"

import "../styles/base.scss"


const CollaboratePage = () => {
  return (
    <PageLayout title="Collaborate">
      <Container>
        <Text bold>
          Club Co-Sponsor, Speak/Mentor/Judge/Advise Interest, Corporate Sponsor Interest, Donate
        </Text>
        <Text>
          If you or your group would like to support us, please contact us at <Email/> with a
          statement of your area of interest and your involvement capacities.
        </Text>
        <Text>If you have press inquiries, please contact us at <Email/>.</Text>
        <Text>
          If you would like to submit a piece to the blog, please email{' '}
          <UrlLink href={'mailto:preeths@sas.upenn.edu'}>preeths@sas.upenn.edu</UrlLink>.
        </Text>
        <News />
      </Container>
    </PageLayout>
  )
}
export default CollaboratePage
