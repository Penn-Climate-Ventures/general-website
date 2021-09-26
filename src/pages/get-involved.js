import React from "react"
import Helmet from "react-helmet"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Footer, SectionHeader, UrlLink,
} from "../components"

import {Banner} from "../components"


const GetInvolvedPage = () => {
  return (
    <>
    <Helmet title="Penn Climate Ventures" defer={false} />
    <Navbar />
    <Layout>
      <PageTitle>Get Involved</PageTitle>

      <SectionHeader>Board Membership</SectionHeader>
      <TextP>
        Our applications for board membership are now closed for fall recruitment. If you are a Penn
        student and interested in getting involved in the behind-the-scenes of PCV, stay tuned for
        future announcements by joining the listserve below.
      </TextP>

      <SectionHeader>General Membership</SectionHeader>

      <TextP bold>
        All students or professionals with Penn affiliation interested or
        involved in climate and entrepreneurship are eligible for general
        membership.
      </TextP>
      <TextP>
        General membership consists of:
        <ul>
          <li>access to PCV's alumni network</li>
          <li>opportunity to contribute to our newsletter or blog</li>
        </ul>
      </TextP>
      <TextP>
        We'll also add you to (with opportunity to opt-out):
        <ul>
          <li>our general listserv</li>
          <li>our Ideathon & Prize listservs</li>
        </ul>
      </TextP>

      <TextP bold>
        <a href={"https://airtable.com/shrCCh7SJrYNsjeWT"}
           css={`color: inherit`}
           target="_blank"
           rel="noreferrer noopener">
          Use the form below to join our listserve!
        </a>
      </TextP>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrCCh7SJrYNsjeWT?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="550"
        css="background: transparent; border: 1px solid #ccc; margin: 10px auto 30px auto"
      />
      <Footer />
    </Layout>
    </>
  )
}

export default GetInvolvedPage
