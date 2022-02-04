import React, {Component} from "react"
import Helmet from "react-helmet"
import {Link} from 'react-scroll'
import s from "styled-components"
import {LIGHT_BLUE} from "../utils/constants";

import {
  Layout,
  Navbar,
  PageTitle,
  SectionHeader,
  TextP,
  Email,
  Footer, ProgramDetails, UrlLink,
} from "../components"
import {ProjectsAndPartners} from "../components/ProjectsAndPartners";
import {FellowshipsFAQ} from "../components/FellowshipsFAQ";
import {Banner} from "../components/shared/Banner";

const LearnMore = s.div`
  color: black;
  text-align: center;
  margin: 90px auto 200px auto;
  transition: 0.2s;
  
  &:hover > * {
    color: ${LIGHT_BLUE}
  }
`

export default class ClassPage extends Component {
  render() {
    return (
      <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <Layout>
        <PageTitle>Fellowships</PageTitle>

        <TextP bold>Breaking the Barriers to Climate. Your Launchpad into Climate Tech.</TextP>

        <TextP>
          Penn doesn't have any on-campus recruiting (OCR) for climate innovation, making it
          difficult to break into climate. We aim to change that. Through our fellowships program,
          students apply to work with cutting-edge climate startups/companies, gaining exposure,
          hands-on experience, and connections to the broader climate space while delivering value
          to companies.
        </TextP>

        {/*<Link to={'sectionRef'} offset={-100}>*/}
        {/*    <LearnMore>*/}
        {/*      <TextP center={'center'}>Learn More</TextP>*/}
        {/*      <Chevron css={'height: 0.8rem'}/>*/}
        {/*  </LearnMore>*/}
        {/*</Link>*/}

        <div id="sectionRef">
          <ProgramDetails id={'sectionRef'}/>
        </div>

        <ProjectsAndPartners/>

        <FellowshipsFAQ/>

        <SectionHeader>Are you a company interested in partnering with us?</SectionHeader>
        <TextP>
          If you're a company interested in partnering with us, we'd love to hear from you! Please
          email <Email/> with "Fellowships Company Partnership" in the subject field and we'll get
          back to you shortly.
        </TextP>

        <Footer />
      </Layout>
      </>
    )
  }
}
