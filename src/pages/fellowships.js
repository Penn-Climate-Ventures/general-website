import React, {Component} from "react"
import Helmet from "react-helmet"
import {Link} from 'react-scroll'
import s from "styled-components"
import Chevron from "../images/svg/chevron.svg"
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
          to companies. Our inaugural Fellowships program launches Fall 2021 - continue reading to
          learn more and apply.
        </TextP>
        <TextP>
          Applications for Fall 2021 are OPEN and close September 18th at 11:59pm ET.
        </TextP>

        <Banner>
          <TextP bold>
            Consulting Applications: <UrlLink href="https://tinyurl.com/PCVF21Consulting"
                                              target="_blank" rel="noreferrer noopener">
            https://tinyurl.com/PCVF21Consulting</UrlLink>
          </TextP>
          <TextP bold>
            Intern Applications: <UrlLink href="https://tinyurl.com/PCVF21Internships"
                                          target="_blank" rel="noreferrer noopener">
            https://tinyurl.com/PCVF21Internships</UrlLink>
          </TextP>
        </Banner>

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

        <SectionHeader>Application</SectionHeader>
        <TextP>
          Applications are now open and consulting applications close September 15 at 11:59pm ET
          while internship applications are reviewed on a rolling basis. Make sure to get yours in
          soon and we look forward to getting to know you!
        </TextP>
        <TextP bold>
          Consulting Applications: <UrlLink href="https://tinyurl.com/PCVF21Consulting"
                                            target="_blank" rel="noreferrer noopener">
          https://tinyurl.com/PCVF21Consulting</UrlLink>
        </TextP>
        <TextP bold>
          Intern Applications: <UrlLink href="https://tinyurl.com/PCVF21Internships"
                                        target="_blank" rel="noreferrer noopener">
          https://tinyurl.com/PCVF21Internships</UrlLink>
        </TextP>

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
