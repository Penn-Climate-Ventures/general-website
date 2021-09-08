import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Footer, SectionHeader, UrlLink,
} from "../components"

import { LIGHT_BLUE } from "../utils/constants"
import {Banner} from "../components/shared/Banner";


const CenterButtonContainer = s.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`

const ApplyButton = s.a`
  color: black;
  text-align: center;
  width: 150px;
  font-size: 1rem;
  font-weight: bold;
  border: 1.5px solid ${LIGHT_BLUE};
  border-radius: 25px;
  padding: 10px 15px;
  margin: auto;
  display: block;

  &:hover {
    color: ${LIGHT_BLUE};
  }
`

const MembershipPage = () => {
  return (
    <>
    <Helmet title="Penn Climate Ventures" defer={false} />
    <Navbar />
    <Layout>
      <PageTitle>Membership</PageTitle>

      <Banner>
        <TextP bold>
          Board Applications: <UrlLink href="https://tinyurl.com/PCVF21BoardApplication"
                                       target="_blank" rel="noreferrer noopener">
          https://tinyurl.com/PCVF21BoardApplication</UrlLink>
        </TextP>
      </Banner>

      <SectionHeader>Board Membership</SectionHeader>
      <TextP>
        If you are a Penn student and interested in getting involved in the behind-the-scenes of
        PCV, active recruitment of Class, Fellowships, Prize, and PR Teams is OPEN. Applications are
        DUE September 15th at 11:59pm ET.
      </TextP>
      <TextP bold>
        Board Applications: <UrlLink href="https://tinyurl.com/PCVF21BoardApplication"
                                     target="_blank" rel="noreferrer noopener">
        https://tinyurl.com/PCVF21BoardApplication</UrlLink>
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

export default MembershipPage
