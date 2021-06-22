import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"

import {
  Layout,
  Navbar,
  PageTitle,
  SectionText,
  Footer,
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
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <PageTitle>Membership</PageTitle>
      <SectionText bold="true">
        All students or professionals with Penn affiliation interested or
        involved in climate and entrepreneurship are eligible for general
        membership.
      </SectionText>
      <SectionText>
        General membership consists of:
        <ul>
          <li>
            - access to our events calendar
          </li>
          <li>
            - access to PCV's alumni network
          </li>
          <li>
            - opportunity to contribute to our newsletter
          </li>
        </ul>
      </SectionText>
      <SectionText>
        We'll also add you to (with opportunity to opt out):
        <ul>
          <li>
            - our general listserv and our Prize listserv
          </li>
          <li>
            - our Discord server, featuring discussions, news, and events
              surrounding climate policy, finance, energy waste, agriculture, and
              the venture landscape
          </li>
        </ul>
      </SectionText>
      <CenterButtonContainer>
        <ApplyButton href="/">Apply Here</ApplyButton>
      </CenterButtonContainer>
      <SectionText>
        If you are a Penn student and interested in getting involved in the
        behind-the-scenes of PCV, active recruitment of Class, Fellowships,
        Prize, and Community Teams is open at the Penn SAC Fairs - please find
        us on Penn Clubs! We also hold rolling recruitment year-round although
        space is much more limited - please email us if strongly interested.
      </SectionText>
      <Footer />
    </Layout>
  )
}
export default MembershipPage
