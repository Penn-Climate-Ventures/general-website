import React, { useRef } from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import "./styles.scss"

import {
  Navbar,
  PageTitle,
  SectionText,
  Footer,
} from "../components"


const OrientationAndNewsGrid = s.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const MembershipPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <div css={`margin: auto 3rem;`}>
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
      <SectionText>
        If you are a Penn student and interested in getting involved in the
        behind-the-scenes of PCV, active recruitment of Class, Fellowships,
        Prize, and Community Teams is open at the Penn SAC Fairs - please find
        us on Penn Clubs! We also hold rolling recruitment year-round although
        space is much more limited - please email us if strongly interested.
      </SectionText>
      <Footer />
    </div>
  )
}
export default MembershipPage
