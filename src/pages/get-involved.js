import React from "react"

import {Subtitle, Text, UrlLink} from "../ui/Typography"
import {Container, PageLayout} from "../ui/layout"

import "../styles/base.scss"


const GetInvolvedPage = () => {
  return (
    <PageLayout title="Get Involved">
      <Container>
        <Subtitle>Board Membership</Subtitle>
        <Text>
          Our applications for board membership are now open for spring
          recruitment! If you are a Penn student and interested in getting
          involved in the behind-the-scenes of PCV, click
          <a
            href="https://join.pennclimateventures.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            here
          </a>
          .
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
            href={"https://airtable.com/shrCCh7SJrYNsjeWT"}
            target="_blank"
            rel="noreferrer noopener"
          >
            Use the form below to join our listserve!
          </UrlLink>
        </Text>
        <iframe
          title="Listserve"
          className="airtable-embed"
          src="https://airtable.com/embed/shrCCh7SJrYNsjeWT?backgroundColor=red"
          frameBorder="0"
          width="100%"
          height="550"
          css="background: transparent; border: 1px solid #ccc; margin: 10px auto 30px auto"
        />

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
