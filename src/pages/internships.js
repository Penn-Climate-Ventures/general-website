import React from "react"

import {Container, PageLayout} from "../ui/layout"
import {Email, Text} from "../ui/Typography"

import "../styles/base.scss"


const InternshipsPage = () => {
  return (
    <PageLayout title="Internships">
      <Container>
        <Text bold>Breaking the Barriers to Climate. Your Launchpad into Climate Tech.</Text>
        <Text>
          Penn doesn't have any on-campus recruiting (OCR) for climate innovation, making it
          difficult to break into climate. We aim to change that. Through our fellowships program,
          students apply to work with cutting-edge climate startups/companies, gaining exposure,
          hands-on experience, and connections to the broader climate space while delivering value
          to companies.
        </Text>
        <Text>
          Explore hand-picked internships in the climate and sustainability space, ranging from
          non-profits to established companies. Contact <Email/> if you wish to add your company or
          organization's opportunities.
        </Text>
      </Container>
      <Container wide>
      <iframe
  className="airtable-embed"
  src="https://airtable.com/embed/appqg6tL6sb9JR8zD/shrR8E3ycg6Ytf19K?layout=card&viewControls=on"
  frameBorder="0"
  onMouseWheel=""
  width="100%"
  height="533"
  style={{ background: "transparent", border: "1px solid #ccc" }}
></iframe>
      </Container>
    </PageLayout>
  )
}

export default InternshipsPage
