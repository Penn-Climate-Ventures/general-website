import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Footer, SectionHeader,
} from "../components"

import { STEEL_BLUE, MIDNIGHT_BLUE } from "../utils/constants"


const CenterButtonContainer = s.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`

const ApplyButton = s.a`
  color: ${MIDNIGHT_BLUE};
  text-align: center;
  width: 150px;
  font-size: 1rem;
  font-weight: bold;
  border: 1.5px solid ${STEEL_BLUE};
  border-radius: 25px;
  padding: 10px 15px;
  margin: auto;
  display: block;

  &:hover {
    color: ${STEEL_BLUE};
  }
`


const MembershipPage = () => {
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Membership</PageTitle>
      <TextP bold="true">
        All students or professionals with Penn affiliation interested or
        involved in climate and entrepreneurship are eligible for general
        membership.
      </TextP>
      <TextP>
        General membership consists of:
        <ul>
          <li>
            access to our Discord server, featuring discussion, news, and events surrounding
            climate policy, finance, energy, waste, agriculture, and the venture landscape
          </li>
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

      <SectionHeader>
        <a href={"https://airtable.com/shrCCh7SJrYNsjeWT"}
           css={`color: ${STEEL_BLUE}`}
           target="_blank"
           rel="noreferrer noopener">
          Apply Here!
        </a>
      </SectionHeader>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrCCh7SJrYNsjeWT?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="550"
        css="background: transparent; border: 1px solid #ccc; margin: 10px auto 30px auto"
      />
      <TextP>
        If you are a Penn student and interested in getting involved in the behind-the-scenes of
        PCV, active recruitment of Class, Fellowships, Prize, and PR Teams is open at the Penn SAC
        Fairs - please find us on Penn Clubs! We also hold rolling recruitment year-round although
        space is much more limited - please email us if strongly interested.
      </TextP>
      <Footer />
    </Layout>
  )
}

export default MembershipPage
