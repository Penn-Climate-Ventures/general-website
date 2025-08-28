import React from "react"

import {Subtitle, Text, UrlLink} from "../ui/Typography"
import {Container, PageLayout} from "../ui/layout"

import "../styles/base.scss"


const GetInvolvedPage = () => {
  return (
    <PageLayout title="Get Involved">
      <Container>
        <Subtitle>
          Committee Membership
        </Subtitle>
        <Text>
          Our applications are open for fall recruitment and due on September 18th! <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4NF4zgFHbJnbXLSaQyg18bALXd1xdde3i4Azv53_P2kgI5Q/viewform?usp=header">Apply here!</a>
        </Text>

        <Subtitle>General Membership</Subtitle>

        <Text bold>
          All students or professionals with Penn affiliation interested or
          involved in climate and entrepreneurship are eligible for general
          membership.
        </Text>
        <Text>
          General membership consists of:
          <ul>
            <li>access to PCV's alumni network</li>
            <li>opportunity to contribute to our newsletter or blog</li>
          </ul>
        </Text>
        <Text>
          We'll also add you to (with opportunity to opt-out):
          <ul>
            <li>our general listserv</li>
            <li>our Ideathon & Prize listservs</li>
          </ul>
        </Text>

        <Text bold>
          <UrlLink
            href={"https://docs.google.com/forms/d/e/1FAIpQLSdQpTXR40xkhbL05SoCG6p9_FmXjWuLLQ3z7hBFykpw9S5cUw/viewform"}
            target="_blank"
            rel="noreferrer noopener" 
          >
            Use this to join our listserv!
          </UrlLink>
        </Text>

        <Subtitle>Internships</Subtitle>
        <Text>
          Click <a href="/internships">here</a> to see a list of available
          internships!
        </Text>
      </Container>
    </PageLayout>
  )
}

export default GetInvolvedPage
